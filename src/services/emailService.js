import emailjs from '@emailjs/browser'

// EmailJS Configuration
const EMAILJS_SERVICE_ID = 'service_ypbxcir'
const EMAILJS_TEMPLATE_ID = 'template_4035j9c'
const EMAILJS_PUBLIC_KEY = 'E_6aoaU1T7zW9r89J'

// Initialize EmailJS
emailjs.init(EMAILJS_PUBLIC_KEY)

/**
 * Send order confirmation email
 * @param {Object} orderData - Order details
 * @returns {Promise}
 */
export const sendOrderConfirmation = async (orderData) => {
  try {
    // Format order items for email
    const itemsList = orderData.items.map((item, index) => 
      `${index + 1}. ${item.name} - Qty: ${item.quantity} - ${item.price}`
    ).join('\n')

    // Calculate totals
    const subtotal = orderData.subtotal
    const shipping = orderData.shipping
    const tax = orderData.tax
    const total = orderData.total

    // Format currency
    const formatPrice = (price) => {
      return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      }).format(price)
    }

    // Prepare email template parameters
    const templateParams = {
      // Order Info
      order_id: orderData.orderId,
      order_date: new Date().toLocaleDateString('id-ID', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }),
      
      // Customer Info
      customer_name: `${orderData.customerInfo.firstName} ${orderData.customerInfo.lastName}`,
      customer_email: orderData.customerInfo.email,
      customer_phone: orderData.customerInfo.phone,
      
      // Shipping Address
      shipping_address: `${orderData.customerInfo.address}, ${orderData.customerInfo.city}, ${orderData.customerInfo.province} ${orderData.customerInfo.postalCode}`,
      
      // Order Items
      order_items: itemsList,
      items_count: orderData.items.length,
      
      // Payment
      payment_method: orderData.paymentMethod,
      
      // Totals
      subtotal: formatPrice(subtotal),
      shipping_cost: formatPrice(shipping),
      tax_amount: formatPrice(tax),
      total_amount: formatPrice(total),
      
      // Additional
      notes: orderData.notes || 'No special instructions',
      
      // Admin email (will receive copy)
      admin_email: 'raflytaufika2305@gmail.com',
      
      // Email recipient
      to_email: orderData.customerInfo.email
    }

    // Send email
    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams
    )

    console.log('Email sent successfully:', response)
    return { success: true, response }
  } catch (error) {
    console.error('Failed to send email:', error)
    return { success: false, error }
  }
}

/**
 * Send contact form email
 * @param {Object} contactData - Contact form data
 * @returns {Promise}
 */
export const sendContactEmail = async (contactData) => {
  try {
    const templateParams = {
      from_name: contactData.name,
      from_email: contactData.email,
      subject: contactData.subject,
      message: contactData.message,
      to_email: 'raflytaufika2305@gmail.com'
    }

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams
    )

    return { success: true, response }
  } catch (error) {
    console.error('Failed to send contact email:', error)
    return { success: false, error }
  }
}

export default {
  sendOrderConfirmation,
  sendContactEmail
}

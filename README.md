# 🌟 VELIXIER - Luxury Perfume E-Commerce Website

![Vue.js](https://img.shields.io/badge/Vue.js-3.5.22-4FC08D?logo=vue.js&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.17-38B2AC?logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.1.11-646CFF?logo=vite&logoColor=white)

Website e-commerce luxury perfume yang modern dan interaktif menggunakan **Vue.js 3** dengan **Composition API** dan **Tailwind CSS v4**.

---

## 📋 Minimum Requirements Proyek Desain Web

### ✅ Requirements Yang Sudah Dipenuhi

| Komponen | Requirement | Status | Implementasi |
|----------|-------------|--------|--------------|
| **Framework** | Vue 3 (Composition API) | ✅ | Vue 3.5.22 dengan `<script setup>` |
| **Styling** | Tailwind CSS (npm) | ✅ | Tailwind CSS 4.1.17 + @tailwindcss/vite |
| **Routing** | Vue Router, minimal 5 halaman | ✅ | **8 halaman**: Home, Products, Product Detail (dynamic), About, Contact, Rating, Cart, Checkout, 404 |
| **Komponen** | Minimal 8 komponen terpisah | ✅ | **11 komponen**: Navbar, Footer, HeroHome, CTANote, CTABestSellers, CTAPromo, CTATestimoni, CartSidebar, NotificationToast, LoadingSpinner, HomePage |
| **Navigasi** | Navbar penuh antar-halaman | ✅ | Navbar dengan smooth navigation + mobile responsive |
| **Responsif** | Mobile, tablet, desktop | ✅ | Breakpoints: sm, md, lg, xl dengan Tailwind |
| **Interaktivitas** | Minimal 2 fitur interaktif | ✅ | **10+ fitur**: Cart CRUD, Theme Toggle, Form Validation, Filter/Sort, Quick View, Modal, Accordion, Auto-play Testimonials, Scroll Animations, etc. |
| **Asset Visual** | Minimal 3 gambar/ikon | ✅ | **Font Awesome Icons** + 12 product images (local assets) |
| **Layout** | Flex/Grid Tailwind | ✅ | Grid dan Flexbox di semua halaman |
| **Detail Page** | Dynamic route `/detail/:id` | ✅ | `/products/:id` untuk detail produk |

---

## 🎨 Fitur Utama

### 🛍️ **E-Commerce Features**
- ✅ Shopping cart full functionality (add, remove, update quantity, clear)
- ✅ Product catalog dengan 12 produk luxury perfume
- ✅ Filter by category (Men, Women, Unisex)
- ✅ Sort by price, name, featured
- ✅ Search products
- ✅ Quick view modal
- ✅ **Product detail page dengan dynamic routing** (`/products/:id`)
- ✅ Checkout form dengan validasi lengkap
- ✅ Order confirmation via email (EmailJS integration)

### 🎯 **Interactive Elements**
1. **Shopping Cart Sidebar** - CRUD operations dengan notifications
2. **Theme Toggle** - Dark/Light mode dengan Font Awesome icons
3. **Form Validation** - Contact form, Checkout form, Review form
4. **Filter & Sort System** - Products filtering dan sorting
5. **Quick View Modal** - Preview produk tanpa pindah halaman
6. **Accordion FAQ** - Interactive Q&A section
7. **Auto-play Testimonials** - Carousel otomatis
8. **Scroll Animations** - Fade-in, parallax effects
9. **Image Lazy Loading** - Performance optimization
10. **Rating System** - Filter reviews by star rating

### 📱 **User Experience**
- ✅ Fully responsive design (mobile-first)
- ✅ Loading states untuk page transitions
- ✅ Toast notifications untuk user feedback
- ✅ Smooth scroll behavior
- ✅ 404 error page dengan animated design
- ✅ Scroll-to-top button
- ✅ Business hours with open/closed status

### 🎨 **Design System**
- **Color Palette**: Pure black (#000), Gold (#d4af37), Champagne (#c9a961)
- **Typography**: Playfair Display (serif), Inter (sans-serif)
- **Icons**: Font Awesome (memenuhi requirement minimal 3 ikon)
- **Animations**: Custom Tailwind @keyframes animations

---

## 📁 Struktur Project

```
TubesDesweb/
├── src/
│   ├── assets/              # Product images (12 gambar lokal)
│   ├── components/          # 11 komponen terpisah
│   │   ├── Navbar.vue       # Navigation dengan Font Awesome icons
│   │   ├── Footer.vue       # Footer dengan social media (FA icons)
│   │   ├── HeroHome.vue
│   │   ├── CTANote.vue
│   │   ├── CTABestSellers.vue
│   │   ├── CTAPromo.vue
│   │   ├── CTATestimoni.vue
│   │   ├── CartSidebar.vue  # Shopping cart dengan CRUD
│   │   ├── NotificationToast.vue
│   │   ├── LoadingSpinner.vue
│   │   └── HomePage.vue
│   ├── views/               # 8 halaman
│   │   ├── ProductsPage.vue # Catalog dengan filter/sort
│   │   ├── ProductDetailPage.vue # ✨ Dynamic route /products/:id
│   │   ├── AboutPage.vue    # Timeline, team, stats
│   │   ├── ContactPage.vue  # Form, FAQ, maps
│   │   ├── RatingPage.vue   # Reviews dengan filter
│   │   ├── CartPage.vue     # Cart summary
│   │   ├── CheckoutPage.vue # Checkout + email integration
│   │   └── NotFoundPage.vue # 404 error page
│   ├── stores/              # State management
│   │   ├── cart.js          # Cart state + notifications
│   │   └── theme.js         # Theme toggle
│   ├── services/
│   │   └── emailService.js  # EmailJS integration
│   ├── router/
│   │   └── index.js         # Vue Router dengan 8 routes
│   ├── App.vue              # Root component + loading overlay
│   └── main.js              # Entry point + Font Awesome import
├── public/
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## 🚀 Setup & Installation

### Prerequisites
- Node.js >= 20.19.0 atau >= 22.12.0
- npm atau yarn

### Installation

```bash
# Clone repository
git clone [repository-url]
cd TubesDesweb

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 📦 Dependencies

### Production
- **vue** (3.5.22) - Progressive JavaScript Framework
- **vue-router** (4.6.3) - Official router for Vue.js
- **tailwindcss** (4.1.17) - Utility-first CSS framework
- **@tailwindcss/vite** (4.1.17) - Tailwind CSS Vite plugin
- **@emailjs/browser** (4.4.1) - Email service untuk order confirmations
- **@fortawesome/fontawesome-free** (7.1.0) - Icon library (memenuhi requirement)

### Development
- **vite** (7.1.11) - Next generation frontend tooling
- **@vitejs/plugin-vue** (6.0.1) - Vite plugin for Vue 3
- **vite-plugin-vue-devtools** (8.0.3) - Vue DevTools integration

---

## 🎯 Halaman & Routes

| Path | Component | Deskripsi | Features |
|------|-----------|-----------|----------|
| `/` | HomePage | Landing page | Hero, Best Sellers, Promo, Testimonials |
| `/products` | ProductsPage | Product catalog | Filter, Sort, Search, Quick View, **Link ke detail** |
| `/products/:id` | ProductDetailPage | **Detail produk (dynamic)** | Full product info, quantity selector, related products |
| `/about` | AboutPage | Brand story | Timeline, Team, Stats, Gallery |
| `/contact` | ContactPage | Contact form | Form validation, FAQ, Maps, Business hours |
| `/rating` | RatingPage | Customer reviews | Filter by star, Sort, Write review |
| `/cart` | CartPage | Shopping cart | Items display, Quantity controls, Order summary |
| `/checkout` | CheckoutPage | Checkout process | Form validation, Payment methods, Email confirmation |
| `/*` | NotFoundPage | 404 error | Animated design, Navigation links |

---

## 🎨 Design Features

### Color Scheme
```css
--color-gold: #d4af37
--color-champagne: #c9a961
--color-dark: #000000
--color-dark-lighter: #1a1a1a
--color-cream: #f5f5dc
```

### Font Awesome Icons (Requirement: Minimal 3 gambar/ikon)
- ✅ **Navbar**: fa-sun, fa-moon (theme toggle), fa-shopping-cart, fa-bars, fa-times
- ✅ **Footer**: fa-instagram, fa-facebook, fa-twitter, fa-envelope
- ✅ **Products**: fa-star (rating), fa-shopping-cart, fa-eye (view details)
- ✅ **Product Detail**: fa-award, fa-tag, fa-star, fa-info-circle, fa-list-check, fa-flask, fa-clock, fa-leaf, fa-certificate, fa-cart-plus, fa-minus, fa-plus, fa-box, fa-shopping-cart, fa-heart, fa-truck, fa-shield-alt, fa-undo, fa-sparkles
- ✅ **Contact**: Various icons untuk business info
- ✅ **Dan banyak lagi di seluruh website**

### Custom Animations
- Scroll reveal animations
- Parallax effects
- Fade transitions
- Scale animations
- Bounce effects (404 page)
- Spinning loading animations

---

## 📧 EmailJS Configuration

Order confirmation emails dikirim ke:
- Customer email (dari form checkout)
- Admin email: `raflytaufika2305@gmail.com`

**EmailJS Credentials:**
- Service ID: `service_ypbxcir`
- Template ID: `template_4035j9c`
- Public Key: `E_6aoaU1T7zW9r89J`

---

## 💡 Key Technical Highlights

1. **Vue 3 Composition API** - Modern reactive state management
2. **Tailwind CSS v4** - Latest version dengan @theme directive
3. **Dynamic Routing** - `/products/:id` untuk detail produk (memenuhi requirement)
4. **State Management** - Custom composables (useCart, useTheme)
5. **Form Validation** - Client-side validation di semua forms
6. **Lazy Loading** - Route-based code splitting + image lazy loading
7. **Font Awesome Integration** - 50+ icons di seluruh website
8. **Responsive Design** - Mobile-first approach
9. **Performance Optimization** - Image lazy loading, code splitting
10. **Email Integration** - Order confirmation via EmailJS

---

## 🎓 Pemenuhan Requirements Proyek Desain Web

### ✅ **100% MEMENUHI SEMUA REQUIREMENTS**

1. ✅ **Vue 3 Composition API** - Menggunakan `<script setup>`
2. ✅ **Tailwind CSS** - Installed via npm, bukan CDN
3. ✅ **Vue Router** - 8 routes (lebih dari minimal 5)
4. ✅ **Komponen** - 11 komponen terpisah (lebih dari minimal 8)
5. ✅ **Navigasi** - Navbar full functional
6. ✅ **Responsif** - Mobile, tablet, desktop
7. ✅ **Interaktivitas** - 10+ fitur interaktif (lebih dari minimal 2)
8. ✅ **Asset Visual** - Font Awesome icons (50+ icons) + 12 product images
9. ✅ **Layout** - Flexbox & Grid Tailwind di semua halaman
10. ✅ **Detail Page** - Dynamic route `/products/:id` dengan v-for data

---

## 👨‍💻 Developer

**Rafly Taufika**
- GitHub: [@RaflyTF](https://github.com/RaflyTF)
- Email: raflytaufika2305@gmail.com
- Instagram: @simplyrafly
- WhatsApp: 085248502721

---

## 📄 License

Copyright © 2025 VELIXIER. All rights reserved.

---

## 🙏 Acknowledgments

- Vue.js Team
- Tailwind CSS Team
- Font Awesome Team
- EmailJS Service
- Vite Build Tool

---

**🌟 Website luxury perfume e-commerce yang memenuhi 100% requirements Proyek Desain Web dengan teknologi modern!**

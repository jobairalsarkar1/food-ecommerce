# Food E-commerce Frontend

This repository contains the **frontend application** for the Food E-commerce project. The application is built using **Next.js** and **Tailwind CSS**, following the provided Figma design and integrated with APIs using **Redux Toolkit (RTK Query)**.

The application is fully responsive, visually accurate to the design, and implements user authentication, product listing, product details, and cart functionality.

---

## Project Overview

### Features Implemented

1. **Authentication**

   - Sign In and Register implemented as modals.
   - Toggle between Sign In and Sign Up forms within the modal.
   - Proper toast notifications for success and error messages.
   - Profile information is fetched using the token after login and stored in Redux state.

2. **Landing Page**

   - Divided into multiple components:
     - Hero
     - Products
     - About Us
     - Special Offer
     - Testimonials
     - Blog
   - Components are reusable and maintain a clean structure.

3. **Products**

   - Product listing page fetches products using RTK Query.
   - Skeleton loaders and proper error messages implemented.
   - Individual product page implemented as a **dynamic route**.
   - Related products displayed based on category of the selected product.

4. **Cart Functionality**

   - Users can add products to cart.
   - Remove items from cart.
   - Cart state is managed globally using Redux Toolkit.

5. **API Integration**

   - All API requests are handled using **Redux RTK Query**.
   - Includes proper error handling and toast messages.

6. **Responsive Design**
   - Fully responsive across devices.
   - Maintains pixel-perfect fidelity to the provided Figma design.

---

## Technologies Used

- **Frontend Framework:** Next.js
- **Styling:** Tailwind CSS
- **State Management:** Redux Toolkit, RTK Query
- **API Handling:** RTK Query with Postman API documentation
- **Notifications:** Toast messages for API responses
- **Routing:** Next.js dynamic routes for individual product pages

---

## Getting Started

### Prerequisites

- Node.js >= 18
- npm or yarn installed

### Installation

1. Clone the repository:

```bash
git clone git@github.com:jobairalsarkar1/food-ecommerce.git
```

2. Navigate to the project directory:

```bash
cd food-ecommerce
```

3. Install Dependencies

```bash
npm install
# or
yarn install
```

4. Run on Development Server

```bash
npm run dev
# or
yarn dev
```

The application will be available at:
http://localhost:3000

5. Build for Product (Optimized build)

```bash
npm run build
# or
yarn build
```

Start Command

```bash
npm start
# or
yarn start
```

## API Integration

The application uses the provided Postman API documentation.

Base URL for live API: [Live Server Link](click here)

RTK Query handles all API requests, including:

- Product listing
- Individual product details
- Related products
- User registration and login
- Profile data fetch
- Cart operations

---

## Usage Instructions

1. Open the application in the browser.
2. Use the **Sign In** button in the navbar to log in or register.
3. Browse products on the landing page.
4. Click on a product to view its details and related products.
5. Add items to the cart and manage them.
6. Profile information is automatically reflected in the navbar once logged in.

---

## Deployment

- Ensure `.env` (if any API keys are required) is properly configured.
- Build the application using `npm run build`.
- Deploy using any platform that supports Next.js (Vercel, Netlify, or your own server).

---

## Repository

GitHub: [https://github.com/jobairalsarkar1/food-ecommerce](https://github.com/jobairalsarkar1/food-ecommerce)

---

## Author

**Jobair Al Sarkar**  
Email: jobair.a.sarkar@gmail.com  
Phone: +8801766961460

# Dream E-Commerce

A full-stack e-commerce platform built with the MERN stack and TypeScript.

**Live Demo:** https://ecommerce-website-7-n87a.onrender.com

## Tech Stack
- **Frontend:** React, TypeScript, Tailwind CSS, Zustand
- **Backend:** Node.js, Express, TypeScript
- **Database:** MongoDB, Redis (Upstash)
- **Storage:** Cloudinary
- **Payments:** Stripe
- **Email:** Resend API
- **Deployment:** Render

## Features
- JWT authentication with access/refresh token rotation
- Role-based access (Admin/Customer)
- Shopping cart with coupon support
- Stripe checkout with email confirmation
- Admin dashboard with analytics
- Product image upload via Cloudinary
- Featured products cached in Redis

# User Authentication
![Signup Page](./frontend/public/sign%20up%20page.png)

![Login Page](./frontend/public/login%20page.png)

> [!NOTE]
> Use the **Admin** credentials below to access the **Dashboard** feature:
> - **Email address:** `nguyenthanhlich18052003@gmail.com`
> - **Password:** `Password1234`

# MongoDB and Redis
Redis will store featured products and refresh tokens
![Redis](./frontend/public/redis%20img.png)

MongoDB store user, product, orders, coupons data
![MongoDB](./frontend/public/mongoBD.png)

# Pages

### Home Page
![Home Page](./frontend/public/home%20page.png)

### Cart Page
User can apply or delete coupon, show the Saving price, Total price, Original price.
![Stripe Payment Page](./frontend/public/stripe%20payment.png)


### Stripe Payment Page
![Cart Page](./frontend/public/card%20UI.png)

### Checkout Success Page
After successful payment, the user automatically receive email about Order ID, Total cost.
![Checkout Success Page](./frontend/public/check%20out%20successful.png)

### Checkout Cancel Page
User click on "Back" to cancel payment
![Checkout Cancel Page](./frontend/public/check%20out%20cancel.png)

# Email Confirmation
![Email Confirmation](./frontend/public/email%20confirmation.png)

# Admin Features
![Create Product Page](./frontend/public/create%20product.png)

### Modify Product Page
All products pop up and Admin can trigger featured products
![Modify Product Page](./frontend/public/products%20modify.png)

### Analytics Page
This page show the chart to track Products bills, Revenue, User count
![Analytics Page](./frontend/public/analytics.png)
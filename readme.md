# 🛒 MERN E-Commerce Platform

A full-stack, production-grade **MERN e-commerce application** with a complete **Admin Panel**, **User Shopping UI**, **Cloudinary media uploads**, **JWT authentication**, **Redux state management**, and **PayPal-powered checkout**.

This project mimics real-world e-commerce flows including product lifecycle, order processing, stock management, reviews, global search, and secure role-based routing.

---

## ⭐ Features

### **Shopping / User Features**

* Product listing with category + brand filters
* Sorting (price, title)
* Global search (title, description, brand, category)
* Product detail modal with stock tracking
* Add-to-cart with quantity limit enforcement
* Checkout with **PayPal Sandbox** integration
* Address management (add, select, update)
* Order history + order detail view
* Review system (restricted to users who purchased)

---

### **Admin Features**

* Secure Admin Login (Role: `admin`)
* **Admin Setup Script** (`create-admin.js`)
* Product CRUD (Create, Update, Delete)
* Image upload using **Cloudinary + Multer**
* Banner management for homepage
* Order management dashboard
* Update order status (Pending → Confirmed → Shipped → Delivered)

---

## 🔐 Authentication & Authorization

* JWT stored in **HTTP-only cookies** for security
* Full role-based access:

  * **Admin** → Dashboard + product/order management
  * **User** → Shopping pages + checkout
* Protected routes using custom `<CheckAuth />` logic

---

## 🧠 Core Logic Highlights

### **1. Protected Routing**

Every page is controlled by `<CheckAuth />`, which decides:

* Not authenticated → redirect to Login
* Authenticated User → allowed only Shopping pages
* Authenticated Admin → allowed only Admin pages
* Unauthorized access → redirected to `/not-authorized`

This ensures **zero leakage** between User and Admin routes.

---

### **2. Real-Time Product State**

* Cart checks stock quantity
* “Out of Stock” logic updates instantly when stock hits 0
* Reviews unlocked only after successful purchase
* Admin product updates reflect instantly on the shopping interface

---

### **3. Payment Flow**

* PayPal SDK integrated
* Redirects to PayPal sandbox
* On successful payment:

  * Order is created
  * Stock decreases
  * Order status updated to "Confirmed"

---

### **4. Global Search System**

Searches across:

* title
* description
* brand
* category

Backend uses efficient MongoDB queries for fast results.

---

## 🧱 Tech Stack

### **Frontend**

* React (Vite)
* Redux Toolkit
* React Router
* Tailwind CSS
* shadcn/ui components
* Axios

### **Backend**

* Node.js
* Express.js
* MongoDB + Mongoose
* Cloudinary + Multer
* JWT Authentication
* bcrypt for password hashing
* Cookie Parser + CORS

### **Payments**

* PayPal SDK (Sandbox Mode)

---

## 📚 Folder Structure

```
client/
  src/
    components/
      auth/
      admin/
      shop/
      common/
    pages/
      auth/
      admin/
      shop/
    store/
    config/
server/
  controllers/
  models/
  routes/
  middleware/
  utils/
```

---

## ⚙️ Setup Instructions

### **1. Clone Repo**

```bash
git clone https://github.com/nirvair09/mern-ecommerce
cd mern-ecommerce
```

---

### **2. Backend Setup**

```bash
cd server
npm install
```

Create a `.env` file:

```
MONGO_URL=your_mongodb_url
JWT_SECRET=your_secret
CLOUDINARY_CLOUD=cloud_name
CLOUDINARY_API=api_key
CLOUDINARY_SECRET=api_secret
PAYPAL_CLIENT_ID=your_paypal_sandbox_client_id
```

Start backend:

```bash
npm run dev
```

### **Admin Setup**

To access the Admin Panel, you need a user with the `admin` role.

1.  Register a new user on the frontend (`/auth/register`).
2.  Run the helper script in the `server` directory:

```bash
node server/create-admin.js
```

3.  Enter the email address of the user you want to promote.
4.  Log out and log back in to access the Admin Dashboard.

---

### **How to Add Products**

1.  Log in as an **Admin**.
2.  Navigate to the **Products** tab in the Admin Dashboard.
3.  Click **"Add New Product"**.
4.  Fill in the details (Title, Description, Price, etc.).
5.  Upload an image.
6.  Click **"Add"**.

---

### **3. Frontend Setup**

```bash
cd client
npm install
npm run dev
```

---

## 🚀 Future Enhancements

* Wishlist system
* Coupon/discount engine
* Email notifications
* Admin analytics dashboard
* ElasticSearch for faster/global search

---

## 📬 Contributing

Open to pull requests, feature additions, or improvements.

---

## 🔗 GitHub Repository

[https://github.com/nirvair09/mern-ecommerce](https://github.com/nirvair09/mern-ecommerce)

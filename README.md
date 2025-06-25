# Retail Billing Software

Retail Billing Software is a full-stack application designed for retail store owners to efficiently manage orders, inventory, users, and payments. It offers a seamless interface for placing orders, viewing dashboards, managing items, and more.

Live Link -> [https://billing-software-1-0qxs.onrender.com] May take some time to load as i am on free tier

---

## Features

### Admin Dashboard

* Displays today's total order count.
* Displays today's total revenue.
* Shows the most recent 20 orders.

### Explore Section

* Lists all categories and items.
* Users/Admins can:

  * Add items to cart.
  * Sort items by category.
  * Search items using a search bar.
* After adding items to cart:

  * View and manage cart.
  * Fill in customer details (name, phone number).
  * Choose payment method (Cash or UPI).

### Payment Options

* **Cash:** Place the order directly.
* **UPI:** Redirected to Razorpay's secure payment gateway. After successful payment, the order is confirmed.

### Receipt

* After placing an order, a downloadable receipt is generated.

### Manage Items (Admin Only)

* View all items.
* Add, Edit, or Delete any item.

### Manage Categories (Admin Only)

* View all categories.
* Add, Edit, or Delete any category.

### Manage Users (Admin Only)

* View all users.
* Add, Edit, or Delete users.

### Order History

* View all placed orders.
* Edit or Delete previous orders.

### Login Options

* **Admin Login:** Shop owner with full access.
* **User Login:** Staff with access to explore, dashboard, and order history only.

---

## Tech Stack

* **Backend:** Java, Spring Boot, Spring Security, JWT Authentication, PostgreSQL/MySQL
* **Frontend:** React.js (Vite)
* **Database:** Neon PostgreSQL (preferred) or AWS RDS (MySQL)
* **Payment Gateway:** Razorpay

---

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Patrik2203/Retail-Billing-Software.git
cd Retail-Billing-Software
```

---

## Backend Setup

### Navigate to:

```bash
cd billing-software/billingsoftware/src/main/resources
```

### Edit `application.properties` with your credentials:

```properties
spring.application.name=billing-software

# Database Config (Use your PostgreSQL or MySQL URL)
spring.datasource.url=jdbc:postgresql://<host>:<port>/<database>?sslmode=require
spring.datasource.username=<your_db_username>
spring.datasource.password=<your_db_password>

# Hibernate Settings
spring.jpa.hibernate.ddl-auto=update
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.PostgreSQLDialect
spring.jpa.show-sql=true

# Context Path
server.servlet.context-path=/api/v1.0

# JWT Secret Key
jwt.secret.key=<your_jwt_secret>

# Razorpay Keys
razorpay.key.id=<your_razorpay_key_id>
razorpay.key.secret=<your_razorpay_key_secret>
```

### Run Backend:

Navigate to backend folder:

```bash
cd billing-software/billingsoftware
```

Then run:

```bash
./mvnw spring-boot:run
```

or

```bash
./gradlew bootRun
```

---

## Frontend Setup

### Navigate to frontend directory:

```bash
cd billing-software/client
```

### Install dependencies:

```bash
npm install
```

### Start development server:

```bash
npm run dev
```

---

## Notes

* **Install all required packages** for both backend and frontend.
* **Don't commit credentials** in public repositories.
* **PostgreSQL is recommended** for easier cloud integration (e.g., Neon DB).
* **Use `.env` file** or environment variables in production.

---

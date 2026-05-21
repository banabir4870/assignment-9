# 🚗 DriveFleet — Premium Car Rental Platform
---

## 🌐 Live Site

🔗 **[https://drivefleet-client-a9-banabir.vercel.app](https://drivefleet-client-a9-banabir.vercel.app/)**

---

## 📖 About the Project

DriveFleet is a full-stack car rental platform where users can browse available vehicles, view detailed car information, make bookings, and manage their own car listings. The platform supports secure authentication, JWT-protected private routes, and a fully responsive modern UI designed for all screen sizes.

---

## ✨ Key Features

- 🔐 **Secure Authentication** — Email/password and Google login powered by BetterAuth with JWT stored in HTTPOnly cookies for maximum security
- 🚘 **Full Car Management (CRUD)** — Logged-in users can add, update, and delete their own car listings with real-time feedback
- 📅 **Smart Booking System** — Users can book any available car with driver preference and special notes, with instant booking confirmation
- 🔍 **Search and Filter** — Search cars by name using MongoDB `$regex` and filter by car type (SUV, Sedan, Luxury, etc.) for a seamless browsing experience
- 📊 **Booking Count Tracking** — Every successful booking automatically increments the car's booking count using MongoDB `$inc` operator

---

## 🛠️ Technologies Used

### Frontend
| Technology | Purpose |
|---|---|
| Next.js 15 | React framework with App Router |
| Tailwind CSS | Utility-first styling |
| Lucide React | Icon library |
| React Hot Toast | Toast notifications |
| Framer Motion | Animations |
| Axios | HTTP requests with credentials |

### Backend
| Technology | Purpose |
|---|---|
| Node.js + Express | REST API server |
| MongoDB + Mongoose | Database and ODM |
| BetterAuth | Authentication and session management |
| Cookie Parser | HTTPOnly cookie handling |

---

## 📄 Pages Overview

| Page | Route | Access |
|---|---|---|
| Home | `/` | Public |
| Explore Cars | `/cars` | Public |
| Car Details | `/cars/:id` | Public |
| Login | `/login` | Public |
| Register | `/register` | Public |
| Add Car | `/add-car` | Private |
| My Added Cars | `/my-cars` | Private |
| My Bookings | `/my-bookings` | Private |
| 404 | `*` | Public |

---

## 🔒 Authentication Flow

```
Login / Google OAuth
        ↓
BetterAuth generates JWT
        ↓
Token stored in HTTPOnly cookie
        ↓
Private routes protected via middleware.js (Next.js)
        ↓
Server APIs protected via verifyToken middleware
        ↓
Logout clears session and cookie
```

---
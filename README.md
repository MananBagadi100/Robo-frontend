# AI Social Media Post Creator (Frontend)

A clean, fast, and responsive React-based frontend for generating AI-powered social media posts using captions, hashtags, and images.  
This project was built as part of an AI Builder assignment and is fully deployed on Vercel.

## 🚀 Live Demo
Frontend URL: https://robo-frontend-teal.vercel.app/

---

## ✨ Features

- 🔹 Generate AI-powered captions, hashtags, and posters with one click  
- 🔹 Clean and modern UI with smooth animations  
- 🔹 Download generated image as PNG  
- 🔹 Copy caption & hashtags instantly  
- 🔹 Fully responsive and mobile-friendly  
- 🔹 Framer Motion animations  
- 🔹 Safe API communication with backend

---

## 🛠️ Tech Stack

- **React (Vite)**
- **CSS (Custom styling)**
- **Framer Motion**
- **Axios**
- **OpenAI API (via backend)**
- **Vercel Deployment**

---

## 📁 Folder Structure

```
frontend/
│
├── public/
├── src/
│   ├── assets/          # Icons and images
│   ├── styles/          # Global and component styles
│   ├── utils/
│   │   └── api.js       # Axios client to backend
│   ├── App.jsx          # Main component
│   ├── App.css          # Global styles
│   └── main.jsx         # Entry point
│
├── .gitignore
├── index.html
├── package.json
└── vite.config.js
```

---

## ⚙️ Setup Instructions (Local Development)

### 1. Clone the Repository

```bash
git clone https://github.com/MananBagadi100/Robo-frontend
cd frontend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Create Environment File

Create a `.env` file in the root:

```
VITE_API_BASE=https://robo-backend.vercel.app/
```

Example:

```
VITE_API_BASE=https://your-backend.vercel.app
```

### 4. Start Development Server

```bash
npm run dev
```

Vite will start the frontend on:

```
http://localhost:5173
```

---

## 🔗 Backend Integration

The frontend talks to the backend using the value in:

```
VITE_API_BASE
```

Requests are sent through `/utils/api.js`.

Make sure your backend is live before running the frontend.

---

## 🧪 Build for Production

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

---

## ☁️ Deployment (Vercel)

1. Push code to GitHub  
2. Import the frontend repo in Vercel  
3. Add environment variable:  
   ```
   VITE_API_BASE=https://robo-backend.vercel.app/
   ```
4. Deploy 🎉

---

## 📄 Assignment Summary

This frontend is part of a full-stack AI-powered image + caption generator.  
It demonstrates:

- Strong UI/UX design  
- Smooth animations & responsiveness  
- Clean API integration  
- Practical AI usage with real-world deployment  
- Production-ready build workflow  

---

## 👤 Author  
Manan Bagadi


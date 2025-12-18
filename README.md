# AI Social Media Post Creator – Frontend (React + Vite)

## 🔗 Links

- **Live Demo:** [https://robo-frontend-teal.vercel.app/](https://robo-frontend-teal.vercel.app/)
- **Frontend Repo:** [https://github.com/MananBagadi100/Robo-frontend](https://github.com/MananBagadi100/Robo-frontend)
- **Backend Repo:** [https://github.com/MananBagadi100/Robo-backend](https://github.com/MananBagadi100/Robo-backend)

This is the **frontend** for the AI-powered Social Media Post Creator application.  
It provides a simple, clean UI where users can enter a prompt and generate:

- AI-generated **caption**
- AI-generated **hashtags**
- AI-generated **image**

The frontend communicates with a Node.js + Express backend via REST APIs and displays
both successful responses and error messages returned by the backend.

---

## 🚀 Tech Stack

- **React**
- **Vite**
- **JavaScript (ES6+)**
- **Axios** (API communication)
- **CSS**

---

## 📁 Folder Structure

```
frontend/
│
├── src/
│   ├── assets/             # Icons and static images
│   ├── utils/
│   │   └── api.js           # Axios instance + API calls
│   ├── App.jsx              # Main UI and logic
│   ├── App.css
│   ├── main.jsx
│
├── public/
├── index.html
├── package.json
└── README.md
```

---

## ▶️ Run Frontend (Local Development)

### 1. Install dependencies

```bash
npm install
```

### 2. Start development server

```bash
npm run dev
```

The frontend runs on:

```
http://localhost:5173
```

---

## 🔗 Backend Integration

The frontend sends requests to the backend API:

```
POST http://localhost:3000/api/ai/generate
```

Request body example:

```json
{
  "prompt": "Generate a social media post for a product launch"
}
```

---

## ⚠️ Error Handling & Rate Limiting

- All **rate limiting is handled by the backend**
- When the backend rate limit is exceeded, it responds with:

```
HTTP 429 – Too Many Requests
```

- The frontend:
  - Reads the error message sent by the backend
  - Displays a user-friendly message (e.g. *Usage limit reached, please try again later*)
  - Does **not** implement its own rate-limiting logic

This keeps the frontend lightweight and ensures all request control is centralized on the server.

---

## 🧠 How the Frontend Works (High-level)

1. User enters a prompt and clicks **Generate**
2. Axios sends a POST request to the backend
3. On success:
   - Caption, hashtags, and image are displayed
4. On error:
   - Backend error message is captured
   - Appropriate message is shown to the user (400, 429, 500, etc.)

---

## 🚀 Production Notes

- Update the backend API base URL in `src/utils/api.js` to point to your deployed backend endpoint
- The frontend is compatible with:
  - **Vercel**
  - **Netlify**
  - **Cloudflare Pages**

---

## 👤 Author

Manan Bagadi

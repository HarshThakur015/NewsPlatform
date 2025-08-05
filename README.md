
# NewsPlatform

NewsPlatform is a full-stack web application designed to deliver curated and personalized news experiences. Built using the MERN stack (MongoDB, Express.js, React.js, Node.js), the platform aims to provide a seamless news browsing experience while integrating user personalization, AI-driven content filtering, and secure user management.

---

## Overview

The application fetches live news based on various categories and user preferences. It supports user registration, login, and profile-based recommendations. The platform is designed to scale with future features like user-submitted news, AI-powered moderation, and admin-level content control.

---

## Features

- **Personalized News Feed**: Articles are displayed based on user preferences and selected categories.
- **User Authentication**: Secure login and registration with JWT-based session management.
- **Category Filtering**: News articles can be filtered by predefined categories (e.g., sports, politics, tech).
- **Planned AI Integration**: Future releases will include NLP-driven moderation and emotion-based recommendations.
- **Scalable Backend**: Structured REST API with modular controllers and middleware.
- **Frontend with React & Vite**: Fast development experience with client-side routing and modular UI components.

---

## Technology Stack

### Frontend:
- React.js
- Vite
- React Router
- Axios
- TailwindCSS (optional)

### Backend:
- Node.js
- Express.js
- MongoDB (via Mongoose)
- JSON Web Tokens (JWT)
- bcrypt (for password hashing)
- dotenv (for environment variables)

---

## Folder Structure

### Frontend

```
src/
├── api/              # Axios instances and API methods
├── assets/           # Static assets like images and icons
├── components/       # Reusable UI components
├── pages/            # Page-level components (e.g., Home, Login)
├── routes/           # Application routes and navigation
├── utils/            # Utility functions
└── App.jsx           # Application entry with routing
```

### Backend

```
Backend/
├── config/           # MongoDB connection and environment config
├── controllers/      # Request handlers for each route
├── models/           # Mongoose schemas and data models
├── routes/           # Route definitions for Express
├── middleware/       # Custom middleware (e.g., auth)
├── server.js         # Entry point for the backend server
└── .env              # Environment variables
```

---

## Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- MongoDB Atlas account
- Vite CLI (for frontend, optional)

### Backend Setup

1. Navigate to the backend folder:
```bash
cd Backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file and configure your environment:
```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

4. Start the backend server:
```bash
npm start
```

### Frontend Setup

1. Navigate to the frontend folder:
```bash
cd Frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

---

## API Overview

| Method | Endpoint              | Description               |
|--------|-----------------------|---------------------------|
| POST   | /api/auth/signup      | Register a new user       |
| POST   | /api/auth/login       | Login existing user       |
| GET    | /api/news             | Get news by category      |
| GET    | /api/news/user-feed   | Get personalized feed     |

---

## Planned Features

- User-submitted articles with moderation workflow
- AI/NLP-based moderation for detecting inappropriate content
- Admin dashboard for content and user management
- Emotion-based news recommendations
- Bookmarking and reading history

---

## Contributing

1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Commit your changes: `git commit -m "Add your message"`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Open a pull request

---

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

---

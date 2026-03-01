# EchoVerse 🌌

> *Every story finds its echo.*

EchoVerse is a full-stack blogging platform where stories come alive and voices never fade. More than just a blog — it's a universe of interconnected thoughts, dreams, and discoveries. Every writer finds their audience, every reader discovers new worlds, and every story becomes part of an endless conversation.

---

## 🚀 Features

- 📝 **Rich Blog Editor** — Create and publish blog posts using a Quill-powered rich text editor
- 🗂️ **Blog Categories** — Organize posts by category for easy discovery
- 🔍 **Search** — Search through published stories
- 🖼️ **Image Uploads** — Blog cover images uploaded and served via [ImageKit](https://imagekit.io/)
- 💬 **Comments System** — Readers can leave comments; admins can approve or reject them
- 🔐 **Admin Panel** — Secure admin dashboard to manage blogs, comments, and drafts
- 📊 **Dashboard Analytics** — Overview of total blogs, comments, and drafts
- 📧 **Newsletter Subscription** — Readers can subscribe to stay updated
- 🤖 **AI Content Generation** *(coming soon)* — Generate blog content with AI

---

## 🛠️ Tech Stack

### Frontend
| Technology | Purpose |
|---|---|
| [React](https://react.dev/) | UI framework |
| [React Router DOM](https://reactrouter.com/) | Client-side routing |
| [Vite](https://vitejs.dev/) | Build tool & dev server |
| [Tailwind CSS](https://tailwindcss.com/) | Utility-first styling |
| [Quill](https://quilljs.com/) | Rich text editor |
| [Axios](https://axios-http.com/) | HTTP client |
| [React Hot Toast](https://react-hot-toast.com/) | Toast notifications |

### Backend
| Technology | Purpose |
|---|---|
| [Node.js](https://nodejs.org/) | Runtime |
| [Express.js](https://expressjs.com/) | Web framework |
| [MongoDB](https://www.mongodb.com/) + [Mongoose](https://mongoosejs.com/) | Database & ODM |
| [ImageKit](https://imagekit.io/) | Image storage & delivery |
| [Multer](https://github.com/expressjs/multer) | File upload handling |
| [JWT](https://jwt.io/) | Authentication |
| [dotenv](https://github.com/motdotla/dotenv) | Environment variable management |
| [CORS](https://github.com/expressjs/cors) | Cross-origin resource sharing |

---

## 📁 Project Structure

```
echoverse/
├── backend/
│   ├── configs/
│   │   ├── db.js             # MongoDB connection
│   │   └── imagekit.js       # ImageKit configuration
│   ├── controllers/
│   │   ├── adminController.js
│   │   └── blogControllers.js
│   ├── middleware/
│   │   ├── auth.js           # JWT authentication
│   │   └── multer.js         # File upload middleware
│   ├── models/
│   │   ├── Blog.js
│   │   └── Comment.js
│   ├── routes/
│   │   ├── adminRoutes.js
│   │   └── blogRoutes.js
│   └── backend.js            # Express app entry point
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/           # Images, icons, and static data
│   │   ├── components/
│   │   │   ├── admin/        # Admin-specific components
│   │   │   ├── Blogcard.jsx
│   │   │   ├── Bloglist.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Header.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Navbar.jsx
│   │   │   └── Newsletter.jsx
│   │   ├── context/
│   │   │   └── AppContext.jsx
│   │   ├── pages/
│   │   │   ├── admin/
│   │   │   │   ├── AddBlog.jsx
│   │   │   │   ├── Comments.jsx
│   │   │   │   ├── Dashboard.jsx
│   │   │   │   ├── Layout.jsx
│   │   │   │   └── ListBlog.jsx
│   │   │   ├── Blog.jsx
│   │   │   └── Home.jsx
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.html
│   └── vite.config.js
│
└── package.json
```

---

## ⚙️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+)
- [MongoDB](https://www.mongodb.com/) instance (local or [Atlas](https://www.mongodb.com/cloud/atlas))
- [ImageKit](https://imagekit.io/) account

### 1. Clone the Repository

```bash
git clone https://github.com/bandilleee/echoverse.git
cd echoverse
```

### 2. Set Up the Backend

```bash
cd backend
npm install
```

Create a `.env` file in the `backend/` directory:

```env
MONGODB_URL=your_mongodb_connection_string
IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
IMAGEKIT_URL_ENDPOINT=your_imagekit_url_endpoint
JWT_SECRET=your_jwt_secret
ADMIN_EMAIL=your_admin_email
ADMIN_PASSWORD=your_admin_password
PORT=3000
```

Start the backend server:

```bash
npm start
```

The API will be running at `http://localhost:3000`.

### 3. Set Up the Frontend

```bash
cd frontend
npm install
```

Create a `.env` file in the `frontend/` directory:

```env
VITE_BASE_URL=http://localhost:3000
```

Start the development server:

```bash
npm run dev
```

The app will be running at `http://localhost:5173`.

---

## 🔌 API Endpoints

### Blog Routes — `/api/blog`
| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| `POST` | `/add` | ✅ | Add a new blog post |
| `GET` | `/all` | ❌ | Get all published blogs |
| `GET` | `/:blogId` | ❌ | Get a blog post by ID |
| `POST` | `/delete` | ✅ | Delete a blog post |
| `POST` | `/toggle-publish` | ✅ | Toggle publish status |

### Admin Routes — `/api/admin`
| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| `POST` | `/login` | ❌ | Admin login |

---

## 🛡️ Admin Panel

Access the admin panel at `/admin`. Features include:

- **Dashboard** — View stats for total blogs, comments, and drafts
- **Add Blog** — Create new blog posts with the rich text editor
- **List Blogs** — View, publish/unpublish, and delete existing posts
- **Comments** — Approve or reject reader comments

---

## 🤝 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

---

## 📄 License

This project is open source. Feel free to use and modify it.

---

<p align="center">Made with ❤️ by <a href="https://github.com/bandilleee">bandilleee</a></p>
<p align="center"><i>Let your voice echo through infinity.</i></p>

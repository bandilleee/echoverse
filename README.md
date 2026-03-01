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
│   │   ├── assets/           # Images, icons, and static

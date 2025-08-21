import express from "express";
import { addBlog, deleteBlogbyId, getALLBlogs, getBlogById, togglePublish } from "../controllers/blogControllers.js";
import upload from "../middleware/multer.js";
import auth from "../middleware/auth.js";

const blogRouter = express.Router();

blogRouter.post("/add", upload.single('image'), auth, addBlog)
blogRouter.get('/all', getALLBlogs);
blogRouter.get('/:blogId', getBlogById);
blogRouter.post('/delete', auth, deleteBlogbyId);
blogRouter.post('/toggle-publish', auth, togglePublish);

export default blogRouter;
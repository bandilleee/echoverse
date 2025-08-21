import fs from 'fs'
import imagekit from '../configs/imagekit.js';
import Blog from '../models/Blog.js';
import Comment from '../models/Comment.js';

export const addBlog = async (req, res) => {
    try {
        console.log('req.file:', req.file);
        console.log('req.body:', req.body);
        const {title, subTitle, description, category, isPublished} = JSON.parse(req.body.blog);
        const imageFile = req.file;
       
        // check if all fields are present
        if(!title || !description || !category || !imageFile){
            return res.json({success: false, message: "Missing required fields"})
        }
       
        const fileBuffer = fs.readFileSync(imageFile.path)
       
        // Upload image to imagekit
        const uploadResponse = await imagekit.upload({
            file: fileBuffer,
            fileName: imageFile.originalname,
            folder: "/blogs"
        })
       
        // Check if upload was successful
        if (!uploadResponse || !uploadResponse.filePath) {
            return res.json({success: false, message: "Image upload failed"})
        }
       
        // optimization through imagekit url transformation
        const optimizedImageUrl = imagekit.url({
            path: uploadResponse.filePath,
            transformation: [
                {quality: 'auto'}, // Auto compression
                {format: 'webp'}, // convert to modern format
                {width: '1280'} // width resizing
            ]
        })
       
        // Save blog to database
        const newBlog = new Blog({
            title,
            subTitle,
            description,
            category,
            image: optimizedImageUrl,
            isPublished
        });
        
        await newBlog.save();
       
        res.json({
            success: true,
            message: "Blog added successfully",
            imageUrl: optimizedImageUrl,
            blog: newBlog
        });
       
    } catch (error) {
        console.error('Error in addBlog:', error);
        res.json({success: false, message: error.message || "Server error"});
    }
}

export const getALLBlogs = async (req, res) => {
    try{
        const blogs = await Blog.find({isPublished: true}) // Fixed variable name
        res.json({success: true, blogs})
    } catch (error) {
        res.json({success: false, message: error.message})
    }
}

export const getBlogById = async (req, res) => {
    try{
        const { blogId } = req.params; // Fixed: was req.parse
        const blog = await Blog.findById(blogId)
        if(!blog){
            return res.json({success: false, message: "Blog not found"});
        }
        res.json({success: true, blog})
    } catch (error) {
        res.json({success: false, message: error.message})
    }
}

export const deleteBlogbyId = async (req, res) => {
    try{
        const { id } = req.body;
        await Blog.findByIdAndDelete(id);
        res.json({success: true, message: 'Blog deleted successfully'}); // Fixed: was success: false
    } catch (error) {
        res.json({success: false, message: error.message})
    }
}

export const togglePublish = async (req, res) => {
    try{
        const { id } = req.body;
        const blog = await Blog.findById(id); // Fixed: was 'Bloq'
        blog.isPublished = !blog.isPublished;
        await blog.save();
        res.json({success: true, message: 'Blog status updated'}); // Fixed: was success: false
    } catch (error){
        res.json({success: false, message: error.message})
    }
}

export const addComment =async (req, res) =>{
    try{
        const {blog, name, content} = req.body;
        await Comment.create({blog, name, content});
        res.json({success: true, message: 'Comment added for review'})
    } catch (error){
        res.json({success: false, message: error.message})
    }
}
import Blog from '../models/blog.model.js';

export const getAllBlog = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.json(blogs);
  } catch (err) {
    console.log(err);
    res.send(err);
  }
};

export const getPublishedBlog = async (req, res) => {
  const id = req.params.id;
  try {
    const blog = await Blog.find({ state: 'Published' });
    res.json(blog);
  } catch (err) {
    console.log(err);
    res.status(404).send(err.message || 'Blog not found');
  }
};

export const getPublishedBlogById = async (req, res) => {
  const id = req.params.id;
  try {
    const blog = await Blog.find({ _id: id, state: 'Published' });
    console.log(blog);
    res.json(blog);
  } catch (err) {
    console.log(err);
    res.status(404).send(err.message || 'Blog not found');
  }
};

export const addNewBlog = async (req, res) => {
  const newBlog = req.body;
  newBlog.lastUpdateAt = new Date(); // set the lastUpdateAt to the current date
  try {
    const blog = await Blog.create(newBlog);
    res.status(201).json(blog);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

export const updateBlogById = async (req, res) => {
  const id = req.params.id;
  const blog = req.body;
  blog.updatedAt = new Date(); // set the lastUpdateAt to the current date
  console.log(blog);
  try {
    const updateBlog = await Blog.findByIdAndUpdate(id, blog, {
      new: true,
    });
    res.status(200).send(updateBlog);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

export const deleteBlogById = async (req, res) => {
  const id = req.params.id;
  try {
    await Blog.findOneAndDelete({ _id: id });
    res.status(200).send(`Blog with ID: ${req.params.id} deleted successfully`);
  } catch (err) {
    console.log(err);
    res.status(500).send('Blog with the specified ID not found.');
  }
};

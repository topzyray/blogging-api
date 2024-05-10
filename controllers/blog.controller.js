import Blog from '../models/blog.model.js';

export const getAllBlog = async (req, res) => {
  try {
    const {
      page = 1,
      limit = 20,
      state,
      author,
      title,
      tags,
      orderBy,
    } = req.query;
    const filter = {};
    if (state) filter.state = state;
    if (author) filter.author = author;
    if (title) filter.title = { $regex: title, $options: 'i' };
    if (tags) filter.tags = { $in: tags };

    let sort = {};
    if (orderBy) {
      if (
        orderBy === 'readCount' ||
        orderBy === 'readingTime' ||
        orderBy === 'timestamp'
      ) {
        sort[orderBy] = -1;
      }
    } else {
      sort.timestamp = -1;
    }

    const blogs = await Blog.find(filter)
      .populate('author', 'firstName lastName')
      .sort(sort)
      .skip((page - 1) * limit)
      .limit(limit);

    res.json(blogs);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

export const getBlogById = async (req, res) => {
  const id = req.params.id;
  try {
    const blog = await Blog.findById(id).populate(
      'author',
      'firstName lastName'
    );
    if (!blog) return res.status(404).json({ message: 'Blog not found' });

    blog.readCount++;
    blog.save();

    res.json(blog);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

export const addNewBlog = async (req, res) => {
  try {
    const { title, description, tags, body } = req.body;
    const author = req.user._id;

    const newBlog = await Blog.create({
      title,
      description,
      tags,
      body,
      author,
    });
    // await newBlog.save();
    res
      .status(201)
      .json({ message: 'Blog created successfully', blog: newBlog });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

export const updateBlogById = async (req, res) => {
  try {
    const { title, description, tags, body, state } = req.body;
    const blog = await Blog.findById(req.params.id);

    if (!blog) return res.status(404).json({ message: 'Blog not found' });
    if (blog.author.toString() !== req.user._id.toString())
      return res
        .status(403)
        .json({ message: 'You are not authorized to update this blog' });

    blog.title = title || blog.title;
    blog.description = description || blog.description;
    blog.tags = tags || blog.tags;
    blog.body = body || blog.body;
    blog.state = state || blog.state;
    await blog.save();

    res.json({ message: 'Blog updated successfully', blog });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

export const deleteBlogById = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);

    if (!blog) return res.status(404).json({ message: 'Blog not found' });
    if (blog.author.toString() !== req.user._id.toString())
      return res
        .status(403)
        .json({ message: 'You are not authorized to delete this blog' });

    await blog.remove();
    res.json({ message: 'Blog deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

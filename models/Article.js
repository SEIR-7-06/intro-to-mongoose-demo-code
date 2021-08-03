const mongoose = require('mongoose');

// Setting up our Blog Article Model
// Model - Our interface for working our data
// A model in mongoose will correspond with a collection in MongoDB

const myBlogArticles = [
  {
    title: 'My Trip to Spain', // String, required
    author: 'Socrates', // String, required
    body: 'We saw so many cool things!...', // String
    isPublic: true // Boolean
  },
]

// Schema
// - The blueprint for a Blog Article.
// - The schema will be used to create our Blog Article model.
// - Sets up validations - rules for what we want a Blog Article will look like.
const blogArticleSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  body: String,
  isPublic: Boolean,
  likes: Number
});

// Create an Blog Article model using the schema
// Our interface for working with Blog Articles
const BlogArticle = mongoose.model('blogarticles', blogArticleSchema);

module.exports = BlogArticle;


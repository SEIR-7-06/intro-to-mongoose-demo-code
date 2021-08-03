// Our playground for playing with Blog Article Data

// Create
// Read
// Update
// Delete

const db = require('./models/index.js');

// console.log(db);

// {
//   BlogArticle: BlogArticleModel
// }

const allArticles = [
  {
    title: 'My Trip to Spain',
    author: 'Socrates',
    body: 'We saw so many cool things!...',
    isPublic: true,
    likes: 10
  },
  {
    title: 'How to Make the Best Omellete',
    author: 'Socrates',
    body: 'You will love this recipe!...',
    isPublic: true,
    likes: 1
  },
  {
    title: 'Deep Sea Creature Found!',
    author: 'Plato',
    body: 'asdf asdf sf sdf sdaf asfd sdf asfsfdsf.',
    isPublic: true,
    likes: 10
  },
  {
    title: 'My Backpacking Trip to SE Asia',
    author: 'Aristotle',
    body: 'I ended up getting really sick!...',
    isPublic: true,
    likes: 1
  },
]


// Will create a Blog Article
// after it creates the new article the callback function will be run
db.BlogArticle.create(allArticles, (err, createdArticles) => {
  console.log(createdArticles);
})

// Remove all Blog Articles
// db.BlogArticle.deleteMany({}, (err, output) => {
//   console.log(output);
// })
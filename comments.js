// create web server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());

// create a comments array
var comments = [
  {name: "John", comment: "I love this place!"},
  {name: "Sarah", comment: "This place is the best!"},
  {name: "Steve", comment: "I love this place!"}
];

// create a route to get all comments
app.get('/comments', function(req, res) {
  res.json(comments);
});

// create a route to add a comment
app.post('/comments', function(req, res) {
  var newComment = req.body;
  comments.push(newComment);
  res.json(newComment);
});

// start server on port 3000
app.listen(3000, function() {
  console.log('Server running on http://localhost:3000');
});
```

In this example, we have created a simple web server using Express. We have created a comments array to store the comments, and we have created routes to get all comments and add a new comment. We have also used the `body-parser` middleware to parse the request body as JSON.

To run this example, save the code in a file called `comments.js` and run the following command in your terminal:

```
node comments.js
```

This will start the server on port 3000. You can then use a tool like Postman to make requests to the server and test the routes. For example, you can use a `GET` request to `http://localhost:3000/comments` to get all comments, and you can use a `POST` request to `http://localhost:3000/comments` with a JSON body to add a new comment.
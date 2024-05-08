# API STRUCTURE

- GET / (Unprotected) ==> Home route to display Blogging-API welcome screeen
- GET /register (unprotected) ==> Authenticate a new user, use jwt with 1hr validity
- GET /login (unprotected) ==> Authenticate a registered user
- GET /logout (unprotected) ==> Logout a user

## Blogging API Routes

- GET /api/v1/blogs (unprotected) ==> Return all Blogs ✅
- POST /api/v1/blogs (protected) ==> Add a blog to the db ✅
- PUT /api/v1/blogs/:id (unprotected) ==> Update a blog ✅
- DELETE /api/v1/blog/:id (protected) ==> Delete a blog ✅
- GET /api/v1/blog/published (protected) ==> Get All Published Blogs ✅

## User API Routes

- GET /api/v1/users (protected) ==> Return all users
- POST /api/v1/users (protected) ==> Add a user to the db
- PUT /api/v1/users/:id (protected) ==> Update a user
- DELETE /api/v1/users/:id (protected) ==> Delete a user
- GET /api/v1/users/:id (protected) ==> Get users by unique ID

## Other MiddleWare

- Rate limiting
- Security middleware
- Good Logging
- Validation with JOI

## Specific Requirements

- Users should have a firstname, lastname, email, and password ✅
- A user should be able to sign up and sign in into the blog app
- Use JWT as authentication strategy and expire the token after 1 hour
- A blog can be in two states; draft and published ✅
- Logged in and not logged in users should be able to get a list of published blogs created ✅
- Logged in and not logged in users should be able to to get a published blog
- Logged in users should be able to create a blog
- When a blog is created, it is in draft state
- The owner of the blog should be able to update the state of the blog to published
- The owner of a blog should be able to edit the blog in draft or published state
- The owner of the blog should be able to delete the blog in draft or - published state
- The owner of the blog should be able to get a list of their blogs.
- The endpoint should be paginated
- It should be filterable by state
- Blogs created should have title, description, tags, author, timestamp, state, read_count, reading_time and body.
- The list of blogs endpoint that can be accessed by both logged in and not logged in users should be paginated, default it to 20 blogs per page
- It should also be searchable by author, title and tags.
- It should also be orderable by read_count, reading_time and timestamp
- When a single blog is requested, the api should return the user information(the author) with the blog. The read_count of the blog too should be updated by 1
- Write algorithm for calculating the reading_time of the blog.
- Write tests for all endpoints
- Create an ERD for entities and show relationships
- Use Winston and ensure functions and processes are logged
- The owner of the blog should be logged in to perform actions

## Database

- MongoDB ✅

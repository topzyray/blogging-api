# API STRUCTURE

- GET / (Unprotected) ==> Home route to display Bookstore home content
- GET /login (unprotected) ==> Authenticate a new user, use SSO
- GET /logout (unprotected) ==> Logout a user

## Book API Routes

- GET /api/v1/books (protected) ==> Return all books
- POST /api/v1/books (protected) ==> Add a book to the db
- PUT /api/v1/books/:id (protected) ==> Update a book
- DELETE /api/v1/books/:id (protected) ==> Delete a book
- GET /api/v1/books/:id (protected) ==> Gets book by unique ID

## Author API Routes

- GET /api/v1/authors (protected) ==> Return all authors
- POST /api/v1/authors (protected) ==> Add a author to the db
- PUT /api/v1/authors/:id (protected) ==> Update a author
- DELETE /api/v1/authors/:id (protected) ==> Delete a author
- GET /api/v1/authors/:id (protected) ==> Gets author by unique ID

## Other MiddleWare

- Rate limiting ✅
- Security middleware ✅
- Good Logging ✅
- Validation with JOI ✅

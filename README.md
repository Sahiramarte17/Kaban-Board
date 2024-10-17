# Krazy Kanban Board
# Description
Krazy Kanban Board is a full-stack Kanban board application with secure user authentication using JSON Web Tokens (JWT). Users can securely log in, create new tasks (tickets), and organize their workflow in a Kanban board style. The app also ensures secure access by verifying tokens and includes token expiration management for session control.

# Features
Secure Authentication:

Users log in with a username and password.
Tokens are signed using JSON Web Tokens (JWT) and stored securely in localStorage.
API routes are protected, ensuring only authenticated users can access tasks.

Kanban Board Functionality:

Users can view, create, and manage tasks (tickets) on the Kanban board.
Tasks can be added to different stages like "To Do", "In Progress", and "Done".

Session Expiry:

Sessions expire after a defined period of inactivity.
Users are redirected to the login page if their session is expired or invalid.




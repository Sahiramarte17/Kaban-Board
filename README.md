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

# Technologies Used
Frontend:

React (with React Router for routing)
Axios (for API requests)
CSS (for styling)

Backend:

Node.js and Express (API and server)
Sequelize (ORM for database interaction)
PostgreSQL (Database)

Authentication:

JSON Web Tokens (JWT)
bcrypt (for password hashing)

# Setup and Installation
Prerequisites:

Node.js and npm
PostgreSQL database
Git

# Usage
Login: 
Navigate to the /login route and log in with your credentials.
Add a New Ticket: 
Once logged in, click on the "New Ticket" button to create new tasks.
View Tasks: 
Tasks will be displayed in columns (To Do, In Progress, Done).
Logout: Click the "Logout" button in the navigation bar to end your session.

# Deployment
To deploy the application to Render, follow these steps:

Create Render accounts for both the frontend and backend projects.

Connect GitHub to Render and link the repositories.

Set environment variables in Render's dashboard (same as in the .env file).

Deploy both the backend and frontend from the Render dashboard.

# Deploymetn Link

https://kanban-board-3iv0.onrender.com



# License
This project is licensed under the MIT License - see the LICENSE file for details.





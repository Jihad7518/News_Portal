**News Portal Dashboard (MERN Stack)**

**Overview**
This repository contains the code for the dashboard of a News Portal website, developed using the MERN stack (MongoDB, Express.js, React.js, Node.js). The dashboard allows both admin and writer roles to log in and access their respective dashboards, where they can manage news articles, user profiles, and perform other relevant tasks.

**Features**

**Admin Dashboard**
User Management: Add, view, and manage writers.
News Management: Approve, reject, or delete news articles submitted by writers.
Profile Management: Update profile information and change passwords.

**Writer Dashboard**
News Submission: Submit news articles for approval by admin.
News Management: View all submitted news articles and their statuses.
Profile Management: Update profile information and change passwords.


**Technologies Used**

1. Frontend: React.js
2. Backend: Node.js, Express.js
3. Database: MongoDB
4. Authentication: JWT (JSON Web Tokens)
5. Styling: Tailwind CSS
6. Routing: React Router

   
**API Endpoints**

**Authentication**
1. POST /api/login: Log in as admin or writer.
2. POST /api/register: Register a new writer (admin only).
   
**News Management**
3. GET /api/news: Get all news articles (admin only).
4. POST /api/news: Submit a new news article (writer only).
5. PUT /api/news/:id: Approve or reject a news article (admin only).
6. DELETE /api/news/:id: Delete a news article (admin only).

**User Management**
7. GET /api/users: Get all writers (admin only).
8. GET /api/users/:id: Get a single writer's details (admin only).
9. PUT /api/users/:id: Update a writer's details (admin only).
10. DELETE /api/users/:id: Delete a writer (admin only).

**Contributing**
Contributions are welcome! Please fork the repository and submit a pull request for any changes.

**License**
This project is licensed under the MIT License. See the LICENSE file for more details.

**Contact**
For any questions or feedback, please contact [mdjihad.ewu@gmail.com].

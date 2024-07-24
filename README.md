# Buzzful App
Buzzful is an app designed to help users manage their social media consumption and track their mood. It includes features like connecting to various social media platforms, tracking time spent, mood tracking, journaling, and accessing mental health communities.

. Table of Contents
. Features
. Setup
. Usage
. File Structure
. API Endpoints
. Contributing
. License
# Features
. Connections Page: Add and manage social media platform connections. Tracks time spent on each platform and prompts the user to check their mood.
. Mood Tracker: Prompts users to reflect on their mood after spending a specified amount of time on social media.
. Journal: Allows users to write and save journal entries.
. Communities: Connects users to different mental health support communities.
. Dashboard: Displays various charts showing social media usage statistics.

# Setup
. Clone the Repository:
. git clone https://github.com/yourusername/buzzful-app.git
# Navigate to the Project Directory:
. cd buzzful-app
# Install Dependencies:
. For backend setup, ensure you have JSON Server installed. You can install it globally with:
    > npm install -g json-server
# Start the JSON Server:
. json-server --watch db.json --port 3000
. This will start a local server at http://localhost:3000 with a REST API.
# Open the App:
. Open connections.html, mood-track.html, communities.html, journaling.html, or dashboard.html in your browser to view the different pages of the app.

# Usage
>Connections Page: Add social media platforms and set the time at which you want to be prompted to track your mood. The app will track time spent and redirect you to the Mood Tracker page when the set time is reached
>Mood Tracker: Reflect on your mood and choose whether to continue using social media or take a break.
>Journal: Write and save journal entries to track your thoughts and reflections.
> Communities: Access mental health support communities and resources.
> Dashboard: View charts to monitor your social media usage over time, categorize usage by time of day, and compare time spent across different platforms.
# File Structure

buzzful-app/
│
├── connections.html
├── mood-track.html
├── communities.html
├── journaling.html
├── dashboard.html
│
├── connections.css
├── mood-track.css
├── communities.css
├── journaling.css
├── dashboard.css
│
├── connections.js
├── mood-track.js
├── communities.js
├── journaling.js
├── dashboard.js
│
├── db.json
└── README.md
# API Endpoints
. GET /platforms: Retrieve a list of social media platforms.
. POST /platforms: Add a new social media platform.
. PUT /platforms/
: Update time spent on a specific platform.
. DELETE /platforms/
: Remove a platform from the list.
# Contributing
. Feel free to open issues or submit pull requests to contribute to the app. For major changes, please open an issue first to discuss what you would like to change.


https://www.loom.com/share/c3af79f0502847f9b492906610c6794a?sid=702ea704-25a7-4805-a746-cf7de747af52




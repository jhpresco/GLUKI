# GLUKI
The GLUKI app serves as a platform for type 1 diabetics to:
- Learn more about their condition.
- Track their blood sugar history.
- Play educational logic games.
- Journal about their day.
- Socialize with other type 1's
  
### Tech Stack
Front End: Expo (React Native Framework)
Back End: Express JS (Node JS Framework)
Database: MongoDB

## Setup
1. Clone the repository
2. Install Node JS with NVM. We're using version 20.8.0.
3. Install NPM!
4. Open a command prompt and navigate to the 'client' folder. Run 'npm install'
5. Navigate to the 'server' folder and do the same as step 4.

## Previewing your work
When working on the front end:
1. Run 'npx expo start' in the 'client' folder in a cmd prompt to start the dev server.
2. Follow the instructions for previewing on whatever device!
3. Jump to whatever page to preview via the links on the index page! Add one if it's missing.

For back end work:
1. Run 'node server.js' in the 'server' folder in a cmd prompt to start the server.

# Guidance
For further development, here are a few notes:
### Full Stack Development
- The Axios library is used in the front end to make calls to our server. The server is hosted on localhost at port 5000.
- You can use "useSession()" to get the login token (the MongoDB account id) in the 'session' value. Use this to query (or store/update) a logged-in user's account details.

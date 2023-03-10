# Social Network API 

[![npm](https://badge.fury.io/js/inquirer.svg)](http://badge.fury.io/js/inquirer)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
  
  ## Description
  
 This repository houses the coding that creates the API for a social network web application , with the users can share their thoughts, react to friend's thoughts and create a friend list. This app was created using `Express.js` ,`MongoDB`and `Mongoose` ODM,the timestamps where created using `moment` library.


#### User story:

```md
GIVEN a command-line application that accepts user input
WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids
WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database
WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database 
```



## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Demo Video](#demo-video)
- [Credits](#credits)
- [Technology Used](#technology-used)
- [License](#license)

## Installation

To be able to run this application you'll need

### Step 1:

```sh
git clone https://github.com/enanesh/social-network-api

git status 
```

Then install mongoDB 

### Step 2:

In the terminal run the command `npm init`

### Step 3:

To install the node libraries run this commands:
```sh
npm install express
npm install mongoose --save
npm install moment --save   

```



### Step 4:

Once all the libraries are installed before running the `server.js` you'll need to seed the database in order to do so go to `utils/seed.js`once you run the seed.js this is going to create two documents on the user and Thought collections.




## Demo Video




https://user-images.githubusercontent.com/111031708/219521299-09b82e03-a51c-4a80-97e1-78991988a9a8.mp4




## Test

This REST API calls are tested used Insomnia .Please follow the VIDEO DEMO to see what data is needed to test. Below you're going to find how the routes where set. 

📁 USER

- Create a new user: POST /api/user

- Get all users: GET /api/user

- Get a single user by its id: GET /api/user/:userId

- Update a user by its id: PUT /api/user/:userId

- Delete a user by its id: DELETE /api/user/:userId


📁 FRIEND

- Add a new friend to a user's friend list: POST /api/user/:userid/friends/:friendId
- Delete a friend from a user's friend list: DELETE /api/user/:userid/friends/:friendId

📁 THOUGHT

- Create a new thought: POST /api/thought/
- Get all thoughts: GET /api/thought/
- Get a single thought by its id: GET /api/thought/:thoughtId
- Update a thought by its id: PUT /api/thought/:thoughtId
- Delete a thought by its id: DELETE /api/thought/:thoughtId


📁 REACTION

- Create a reaction: POST /api/thought/:thoughtId/reactions
- Delete a reaction by the reactionId: DEL /api/thought/:thoughtId/reactions/:reactionId




## Credits

- Node.js : https://www.stanleyulili.com/node/node-modules-import-and-use-functions-from-another-file/
- Express : https://expressjs.com/
- Insomnia Core : https://insomnia.rest/products/insomnia
- Express-session : https://www.npmjs.com/package/express-session
- MongoDb : https://www.mongodb.com/docs/manual/installation/
- Mongoose Node Library : https://www.npmjs.com/package/mongoose
- MomentJS: https://momentjs.com/



## Technology Used
- JavaScript
- MongoDB
- Moment node library
- Express node library
- Mongoose node library
- Insomnia Core to test the Api routes.



## License

MIT License

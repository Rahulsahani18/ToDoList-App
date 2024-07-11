
# Install all frontend dependencies, node module and Start 

`npm install`
`cd .\frontend\`
`npm start`

# Install all backend dependencies, node module and Start 

`npm install`
`cd .\backend\`
`node .\index.js`

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)



****************** Thought Note:  *****************

Frontend:- 

This is a simple To-Do list application built with React. Let's break down the 
functionality and structure of the code: 

• Component Setup: The component is a functional component named 
ToDoList. It imports necessary dependencies from React, Axios, and a 
custom ColorChange component. 

• State Management: The component uses the useState hook to 
manage state variables. NewTasks state holds the value of the new task 
input field, and tasks state holds an array of tasks fetched from the 
server. 

• Effects: The useEffect hook is used to fetch tasks from the server 
when the component mounts. It sends a GET request to the server's 
/tasks endpoint and updates the tasks state with the response data. 

• Add Tasks Functionality: The AddTasks function is called when the 
"Add Tasks" button is clicked. It sends a POST request to the server's 
/tasks endpoint with the new task data. Upon successful response, it 
updates the tasks state with the new task and clears the NewTasks 
state. 

• Task Rendering: The component renders a list of tasks fetched from 
the server. Each task is rendered with a checkbox, task content, and a 
delete button. The color of the task can be changed by clicking the 
checkbox, which triggers the DoneBtn function. 

• Done Button Functionality: The DoneBtn function toggles the color of 
the task when the checkbox is clicked. It maps through the tasks array, 
updates the color of the clicked task, and sets the updated tasks array 
in the state. 

• Delete Button Functionality: The DeleteItem function removes a task 
from the list when the delete button is clicked. It filters out the task with 
the specified ID from the tasks array and updates the state. 

• Component Rendering: The ToDoList component renders an input 
field for adding new tasks, a button to add tasks, and a list of tasks with 
checkboxes and delete buttons. 
Overall, this component provides basic functionality for managing a to-do list, 
including adding, marking as done, and deleting tasks. The use of hooks like 
useState and useEffect makes the component's logic concise and easy to 
understand. 

Backend:-  

• Initialization and Clearing Storage:  code attempts to initialize the 
storage using storage.init() and clear the storage using 
storage.clear() when the initialization is successful. However, since 
storage.clear() is asynchronous. need to handle this differently, 
perhaps by clearing the storage at a later point or ensuring that other 
operations wait for the initialization and clearing to complete. 

• Error Handling:  implemented basic error handling for 
both POST and GET endpoints. This is good practice, but 
you might consider providing more informative error 
messages or logging to help with debugging and 
maintenance. 

• Middleware:  correctly used CORS middleware to enable 
Cross-Origin Resource Sharing, which is essential for 
allowing your frontend application to communicate with 
the backend server from a different origin. 

• Route Handling:  route handlers for POST and GET 
requests seem appropriately structured, handling the 
creation and retrieval of tasks from the storage. Ensure 
that the tasks are being stored and retrieved correctly, and 
consider adding validation and error handling for edge 
cases. 

• Port Configuration: Defining the port number as a 
constant is a good practice for maintainability. Ensure that 
the chosen port (in this case, 4000) doesn't conflict with 
other services running on the server. 
• Overall, your code provides a solid foundation for a basic 
Express.js server with persistent storage using node-
persist. However, you might need to refine the 
initialization and storage clearing process to ensure 
correctness and reliability. Additionally, consider adding 
more features such as updating and deleting tasks, 
authentication, and data validation to make your 
application more robust.

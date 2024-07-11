// Import necessary modules
const express = require('express'); // Import Express.js framework
const storage = require('node-persist'); // Import node-persist for persistent storage
const cors = require('cors'); // Import CORS for handling cross-origin requests

// Create an instance of Express
const app = express();

// Middleware setup
app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Parse JSON request bodies

// Initialize storage with specified directory
storage.init({ dir: './data' })
  .then(() => {
    console.log('Storage initialized successfully'); // Log successful initialization
    storage.clear(); // Clear storage when initialized (if required)
  })
  .catch((err) => {
    console.error('Failed to initialize storage:', err); // Log error if storage initialization fails
  });

// Define the port on which the server will listen
const PORT = 4000;

// Define a route for creating tasks
app.post('/tasks', async (req, res) => {
  try {
    const tasks = req.body; // Get tasks data from request body
    await storage.setItem(tasks.id.toString(), tasks); // Store tasks data using node-persist
    res.status(201).send(tasks); // Respond with 201 Created status and the stored tasks data
  } catch (err) {
    console.log(err); // Log any errors that occur during task creation
    res.status(500).send('Internal Server Error'); // Respond with 500 Internal Server Error if an error occurs
  }
});
 
// Define a route for deleting tasks
app.delete('/tasks/:TaskId', async (req, res) => {
  try {
    const taskId = req.params.TaskId; // Get TaskId from request parameters
    await storage.removeItem(taskId); // Remove task from storage
    res.status(200).send({ message: 'Task deleted successfully' }); // Respond with 200 OK status and success message
  } catch (err) {
    console.error('Error deleting task:', err); // Log any errors that occur during task deletion
    res.status(500).send('Internal Server Error'); // Respond with 500 Internal Server Error if an error occurs
  }
});

// Define a route for updating tasks
app.put('/tasks/:TaskId', async (req, res) => {
  try {
    const taskId = req.params.TaskId; // Get TaskId from request parameters
    const updatedTask = req.body; // Get updated task data from request body
    await storage.setItem(taskId, updatedTask); // Update task in storage
    res.status(200).send(updatedTask); // Respond with 200 OK status and the updated task data
  } catch (err) {
    console.error('Error updating task:', err); // Log any errors that occur during task update
    res.status(500).send('Internal Server Error'); // Respond with 500 Internal Server Error if an error occurs
  }
});

// Define a route for retrieving all tasks
app.get('/tasks', async (req, res) => {
  try {
    const TaskId=req.params.TaskId;
    const tasks = await storage.values(); // Retrieve all stored tasks from storage
    res.status(200).send(tasks); // Respond with 200 OK status and the retrieved tasks data
  } catch (err) {
    console.error('Error retrieving tasks:', err); // Log any errors that occur during task retrieval
    res.status(500).send('Internal Server Error'); // Respond with 500 Internal Server Error if an error occurs
  }
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

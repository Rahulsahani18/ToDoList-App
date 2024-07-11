import { useState, useEffect, useContext } from "react"; // Import necessary hooks from React
import axios from 'axios'; // Import axios for making HTTP requests
import "./App.css"; // Import CSS file for styling
import { ColorChange, ColorChange1 } from "./ColorChange"; // Import context providers for color change

function ToDoList() {
  // Define state variables using useState hook
  const [NewTasks, setNewTasks] = useState(''); // State variable for new tasks
  const [tasks, setTasks] = useState([]); // State variable for storing tasks data

  // Get color context from ColorChange context provider
  const Color = useContext(ColorChange);
  const Color1 = useContext(ColorChange1);

  // Fetch tasks data from server on component mount
  useEffect(() => {
    axios.get('http://localhost:4000/tasks')
      .then(response => {
        setTasks(response.data); // Update tasks state with fetched data
      })
      .catch(err => {
        console.log(err); // Log any errors that occur during the fetch
      })
  }, []); // Empty dependency array ensures this effect runs only once on mount

  // Function to add a new task
  function AddTasks() {
    if (NewTasks === '') {
      alert('Please write your task name');
    } else {
      const newtask = {
        id: Date.now(), // Generate unique ID for the task
        content: NewTasks, // Assign task content from input field
        color: '', // Default color
        completed: false // Default completed status
      };
      // Make POST request to add new task to server
      axios.post('http://localhost:4000/tasks', newtask)
        .then(response => {
          setTasks([...tasks, response.data]); // Update tasks state with new task
          setNewTasks(''); // Clear input field after adding task
        })
        .catch(err => {
          console.log(err); // Log any errors that occur during the POST request
        })
    }
  }

  // Function to mark a task as done
  const DoneBtn = (TaskId) => {
    tasks.map(task => {
      if (task.id === TaskId) {
        const updatedTask = { ...task, completed: !task.completed, color: task.completed ? Color : Color1 };
        // Update task on server
        axios.put(`http://localhost:4000/tasks/${TaskId}`, updatedTask)
          .then(response => {
            setTasks(tasks.map(t => (t.id === TaskId ? response.data : t))); // Update tasks state with updated task
          })
          .catch(err => {
            console.log(err); // Log any errors that occur during the PUT request
          });
        return updatedTask;
      }
      return task;
    });
  };

  // Function to delete a task
  const DeleteItem = (taskId) => {
    axios.delete(`http://localhost:4000/tasks/${taskId}`)
      .then(response => {
        // Filter out the task with the specified ID and update tasks state
        setTasks(tasks.filter(task => task.id !== taskId));
      })
      .catch(err => {
        console.log(err); // Log any errors that occur during the DELETE request
      });
  }

  // Function to edit a task
  const EditItem = (taskId) => {
    const taskToEdit = tasks.find(task => task.id === taskId);
    const newContent = prompt("Edit your task", taskToEdit.content);
    if (newContent !== null && newContent.trim() !== "") {
      const updatedTask = { ...taskToEdit, content: newContent };
      axios.put(`http://localhost:4000/tasks/${taskId}`, updatedTask)
        .then(response => {
          setTasks(tasks.map(task => (task.id === taskId ? response.data : task)));
        })
        .catch(err => {
          console.log(err); // Log any errors that occur during the PUT request
        });
    }
  }

  // Render JSX for ToDoList component
  return (
    <div className="main">
      <h1 style={{ fontSize: "40px", textShadow: '2px 0px 2px' }}>To Do List App</h1>
      {/* Input field for adding new tasks */}
      <input value={NewTasks} className="inpt" type="text" placeholder="Enter tasks here..." onChange={(e) => setNewTasks(e.target.value)}></input>
      {/* Button to add new tasks */}
      <button className="btn" onClick={AddTasks}>Add Tasks</button>
      {/* Display list of tasks */}
      <ul style={{ listStyle: "none" }}>
        {/* Map over tasks array to render individual tasks */}
        {tasks.map(task => {
          return (
            <div key={task.id}>
              {/* Button to mark task as done */}
              <button className="DoneBtn" onClick={() => DoneBtn(task.id)}>✔</button>
              {/* Task content with color based on context */}
              <li className={task.color || Color} key={task.id}>{task.content}</li>
              {/* Button to delete task */}
              <button className="dltButton" onClick={() => DeleteItem(task.id)}>X</button>
              <button className="editbtn" onClick={() => EditItem(task.id)}>Edit</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default ToDoList;

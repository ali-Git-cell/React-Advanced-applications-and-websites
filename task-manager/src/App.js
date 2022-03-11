import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import Add from "./components/Add";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Kids to school",
      reminder: true,
      day: "Jan 8 at 8:00 pm",
    },
    {
      id: 22,
      text: "Preparing lunch",
      day: "Jan 8 at 12:00 pm",
      reminder: true,
    },
    {
      id: 33,
      text: "Cloth Shopping",
      day: "Jan 8 at 4:00 pm",
      reminder: false,
    },
    {
      id: 44,
      text: "Going to gym",
      day: "Jan 8 at 6:00 pm",
      reminder: true,
    },
  ]);

  // ADD Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 1000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  // Reminder
  const Reminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  // Deleting Tasks code
  const deletingTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="container">
      <Header title="Task Manager" />
      <Add addingTask={addTask} />
      {tasks.length === 0 ? (
        "There are no tasks"
      ) : (
        <Tasks
          tasks={tasks}
          toggleReminder={Reminder}
          onDelete={deletingTask}
        />
      )}
    </div>
  );
}

export default App;

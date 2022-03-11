import Task from "./Task";

const Tasks = ({ tasks, onDelete, toggleReminder }) => {
  return (
    <>
      {tasks.map((task) => (
        <Task
          onDelete={onDelete}
          onToggle={toggleReminder}
          key={task.id}
          task={task}
        />
      ))}
    </>
  );
};

export default Tasks;

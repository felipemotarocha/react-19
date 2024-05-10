import { use, useEffect, useState, useTransition } from "react";

interface ITask {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
}

const fetchTasks = async (): Promise<ITask[]> => {
  // fetch tasks from jsonplaceholder
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  //   sleep for 2 seconds
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return data;
};

const Tasks = () => {
  const tasks = use(fetchTasks());

  return (
    <div>
      <h1>Tasks</h1>

      {tasks.map((task: any) => (
        <div key={task.id}>
          <h3>{task.title}</h3>
          <p>{task.completed ? "Completed" : "Not Completed"}</p>
        </div>
      ))}
    </div>
  );
};

export default Tasks;


// import router from 'next/router'
// import { FormEvent } from 'react';
 


// export default function Tasks() {
//   const ID = 1;


//     const openTaskWITHID  = (e: FormEvent<HTMLElement>) => {
//       e.preventDefault();

//       router.push(`/edit/${ID}`)

//     }
 
//     return(
//         <>
//      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//     <div className="bg-white rounded-lg shadow-lg overflow-hidden">
//       <div className="p-4">
//         <h2 className="text-xl font-semibold text-gray-800">Task 1</h2>
//         <p className="text-gray-700 mt-2 truncate overflow-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris fringilla urna vel mauris rutrum imperdiet.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris fringilla urna vel mauris rutrum imperdiet.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris fringilla urna vel mauris rutrum imperdiet.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris fringilla urna vel mauris rutrum imperdiet.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris fringilla urna vel mauris rutrum imperdiet. </p>
//         <div className="flex items-center justify-between mt-4">
//           <span className="text-sm font-medium text-gray-500">Due date: 10/31/2023</span>
//           <button onClick={openTaskWITHID} className="px-3 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded">Edit</button>
//         </div>
//       </div>
//       </div>
//       </div>
//       </div>
   
//         </>
//     )
// }


import { useState, useEffect } from 'react';
import axios from 'axios';
import { Task } from '../../../interfaces/Task'; 


const TasksList = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const getTasks = async () => {
      const response = await axios.get("http://localhost:8080/api/tasks/all");
      setTasks(response.data);
    };
    getTasks();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {tasks.map((task) => (
        <div key={task.ID} className="bg-white shadow-md rounded-md p-4">
          <h2 className="text-lg font-bold">{task.title}</h2>
          <p className="text-gray-600">{task.body}</p>
          <div className="flex justify-between items-center mt-4">
            <p className="text-gray-600">{task.dueDate}</p>
            <span
              className={`${
                task.severity === 1
                  ? "bg-green-500"
                  : task.severity === 2
                  ? "bg-yellow-500"
                  : "bg-red-500"
              } text-white py-1 px-2 rounded-md`}
            >
              {task.severity === 1
                ? "Low"
                : task.severity === 2
                ? "Medium"
                : "High"}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TasksList;
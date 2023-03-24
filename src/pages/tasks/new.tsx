// import axios from "axios";
// import Head from "next/head";
import {   useState } from "react";

// export default function NewTask() {
//   //ERROR
//   const [error, setError] = useState(false);
//   const [errorMessage, setErrorMsg] = useState("");



//   //ERROR

//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   //event: FormEvent<HTMLFormElement>
//   const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     const newTask = {
//       title,
//       description,
//     };
//     console.log(newTask); // print new task data

//     try {
//       const response = await axios.post("/api/tasks", newTask);
//       console.log(response.data); // print response data
//       alert("Successfully posted!");
//     } catch (error: any) {
//       console.error(error.message);
//       setErrorMsg(error.message);
//       setError(true);
//     }
//   };

//   return (
//     <>
//       <Head>
//         <title>Create New Task</title>
//       </Head>

// {/*     
//       <form onSubmit={handleSubmit}>
//         <div className="form-control">
//           <label className="label">
//             <span className="label-text">Task Title</span>
//           </label>
//           <label className="input-group">
//             <span>Title</span>
//             <input
//               type="text"
//               placeholder="Clean up the garage..."
//               className="input input-bordered"
//               value={title}
//               onChange={(event) => setTitle(event.target.value)}
//             />
//           </label>

//           <div className="divider"></div>
//           <label className="label">
//             <span className="label-text">Task Description</span>
//           </label>
//           <textarea
//             placeholder="More descriptions."
//             className="textarea textarea-bordered textarea-lg w-full max-w-xs"
//             value={description}
//             onChange={(event) => setDescription(event.target.value)}
//           >
//           </textarea>

//           <button
//             type="submit"
//             className="btn btn-active btn-accent mx-auto px-20 py-15"
//           >
//             Submit
//           </button>
//         </div>
//       </form> */}
// {/* 
// <div className="max-w-lg mx-auto mt-10">
//   <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
//     <div className="mb-4">
//       <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
//         Task Title
//       </label>
//       <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="title" type="text" placeholder="Enter task title" />
//     </div>
//     <div className="mb-4">
//       <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="body">
//         Task Body
//       </label>
//       <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="body" rows="5" placeholder="Enter task body"></textarea>
//     </div>
//     <div className="mb-4">
//       <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="due-date">
//         Due Date (mm/dd/yyyy)
//       </label>
//       <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="due-date" type="text" placeholder="Enter due date" />
//     </div>
//     <div className="flex items-center justify-center">
//       <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
//         Create
//       </button>
//     </div>
//   </form>
// </div> */}

    

//       <div className="fixed bottom-4 right-4">

//       {error && (
//         <div className="alert alert-error shadow-lg">
//           <div>
            
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="stroke-current flex-shrink-0 h-6 w-6"
//               fill="none"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
//               />
//             </svg>
//             <span>
//               <b>Error</b>! {errorMessage}
//             </span>
            
//           </div>
//            <button onClick={() => setError(false)} className="float-right">
//            <svg
//       viewBox="0 0 512 512"
//       fill="currentColor"
//       height="1em"
//       width="1em"
     
//     >
//       <path d="M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z" />
//     </svg>
//       </button>
//         </div>
//       )}
// </div>
//     </>
//   );
// }


import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

 export default function NewTask() {
  const [dueDate, setDueDate] = useState(null);

  return (
    <div className="max-w-lg mx-auto mt-10">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="title"
          >
            Task Title
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="title"
            type="text"
            placeholder="Enter task title"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="body"
          >
            Task Body
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="body"
            rows="5"
            placeholder="Enter task body"
          ></textarea>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="due-date"
          >
            Due Date
          </label>
          <DatePicker
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            selected={dueDate}
            onChange={(date) => setDueDate(date)}
            dateFormat="MM/dd/yyyy"
            placeholderText="Select due date"
          />
        </div>
        <div className="flex items-center justify-center">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
            Create
          </button>
        </div>
      </form>
    </div>
  );
}

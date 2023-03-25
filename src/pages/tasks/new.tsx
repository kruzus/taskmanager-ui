import axios from "axios";
import Head from "next/head";
import React, { FormEvent,  useState } from "react";

import {Task} from "../../../interfaces/Task"

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";

export default function NewTask() {
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMsg] = useState("");
  const [severity, setSeverity] = useState<number>(1);

  const handleSeverityChange = (newSeverity: number): void => {
    setSeverity(newSeverity);
  };
 

  const [dueDate, setDueDate] = useState<Date>(new Date());

  const TIME = moment(dueDate).format("h:mm A");

  const DAT = moment(dueDate).format("dddd, MM/DD/YYYY");


  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  //event: FormEvent<HTMLFormElement>
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();


    const newTask: Task = {
     title: title,
     body: description,
     dueDate: DAT,
     severity: severity,
     timePosted: TIME
    };

  

    try {
      // const response = await axios.post("http://localhost:8080/api/tasks/new", newTask);
      // console.log(response.data); // print response data
      // alert("Successfully posted!");

      const resp = await axios.post("http://localhost:8080/api/tasks/new", newTask);

      console.log(resp.data)
 
      
    } catch (error: any) {
      console.error(error.message);
      setErrorMsg(error.message);
      setError(true);
    }
  };


  return (
    <>
      <Head>
        <title>Create New Task</title>
      </Head>
      <div className="max-w-lg mx-auto mt-10">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="title"
            >
              Task Title
            </label>

            <input
              type="text"
              placeholder="Clean up the garage..."
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
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
              rows={5}
              placeholder="Enter task body"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            >
            </textarea>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="due-date"
            >
              Due Date: {moment(dueDate).format("dddd, MM/DD/YYYY")}
            </label>
            <DatePicker
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              selected={dueDate}
              onChange={(date: Date) => setDueDate(date)}
              dateFormat="MM/dd/yyyy"
              placeholderText="Select due date"
            />
           <SeveritySelector onSeverityChange={handleSeverityChange} />
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Create
            </button>
          </div>
        </form>
      </div>

      <div className="fixed bottom-4 right-4">
        {error && (
          <div className="alert alert-error shadow-lg">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current flex-shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>
                <b>Error</b>! {errorMessage}
              </span>
            </div>
            <button onClick={() => setError(false)} className="float-right">
              <svg
                viewBox="0 0 512 512"
                fill="currentColor"
                height="1em"
                width="1em"
              >
                <path d="M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </>
  );
}





// <DatePicker
// className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
// selected={dueDate}
// onChange={(date: Date) => setDueDate(date)}
// dateFormat="MM/dd/yyyy"
// placeholderText="Select due date"
// />
// <SeveritySelector />


interface SeveritySelectorProps {

  onSeverityChange: (severity: number) => void;
}

function SeveritySelector({ onSeverityChange }: SeveritySelectorProps) {
  const [severity, setSeverity] = useState<number>(1);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newSeverity = Number(event.target.value);
    setSeverity(newSeverity);
    onSeverityChange(newSeverity);
  };

  return (
    <div className="flex flex-col">
      <label className="mb-2 font-bold text-gray-700">Severity</label>
      <select
        className="block w-full p-2 border rounded shadow-sm"
        value={severity}
        onChange={handleChange}
      >
        <option value={1}>Low</option>
        <option value={2}>Medium</option>
        <option value={3}>High</option>
      </select>
    </div>
  );
}

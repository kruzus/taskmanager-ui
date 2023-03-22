import axios from "axios";
import { FormEvent, useState } from "react";

export default function NewTask() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
//event: FormEvent<HTMLFormElement>
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
   event.preventDefault();
    const newTask = {
      title,
      description
    };
    console.log(newTask); // print new task data


    try {
      const response = await axios.post("/api/tasks", newTask);
      console.log(response.data); // print response data
      alert("Successfully posted!");
  } catch (error) {
      console.error(error);
      alert("Error posting data: " + error);
  }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Task Title</span>
          </label>
          <label className="input-group">
            <span>Title</span>
            <input
              type="text"
              placeholder="Clean up the garage..."
              className="input input-bordered"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
          </label>
       
          <div className="divider"></div>
          <label className="label">
            <span className="label-text">Task Description</span>
          </label>
          <textarea
            placeholder="More descriptions."
            className="textarea textarea-bordered textarea-lg w-full max-w-xs"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          ></textarea>

          <button
            type="submit"
            className="btn btn-active btn-accent mx-auto px-20 py-15"
          >
            Submit
          </button>
        </div>
      </form>

      <h1>data: </h1>
    </>
  );
}

"use client"
import React, { useContext,useEffect, useState } from "react";

import { useForm } from "react-hook-form";


import AuthContext from "@/context/AuthContext";
import { TextField } from "@mui/material";
const AddNews = () =>{
const {
  register,
  handleSubmit,
  reset,
  watch,
  formState: { errors },
} = useForm();
 // https://kanban-task-server-oy623rsbn-ittarek.vercel.app/addNews  
acknowledged
: 
true
    // fetch("https://kanban-task-server-4330zbruj-ittarek.vercel.app/addNews", 
const onSubmit = async (data) => {
  try {
    const response = await fetch("http://localhost:5000/addNews", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

     const result = await response.json();
  if (result.acknowledged) {
      alert("Thank You for adding news");
    } else {
      console.error("Error: No modification made to the news");
    }

   
    console.log(result);
  } catch (error) {
    console.error("Error:", error.message);
    // Handle the error, e.g., set an error state, display an error message, etc.
  }
};


 
return (
  <section className="mx-auto w-[600px] my-11">
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* title */}
      <TextField
        margin="normal"
        required
        fullWidth
        id="title"
        label="Title"
        name="title"
        autoComplete="title"
        autoFocus
        {...register("title", { required: true })}
      />
      {/* image link */}
      <TextField
        margin="normal"
        required
        fullWidth
        id="image"
        label="Image Link"
        name="image"
        autoComplete="image"
        autoFocus
        {...register("image", { required: true })}
      />

      {/* description */}
      <TextField
        margin="normal"
        required
        fullWidth
        name="description"
        label="Description"
        type="text"
        id="description"
        autoComplete="description"
        {...register("description", { required: true })}
      />
      {/* deadline */}
      <TextField
        margin="normal"
        required
        fullWidth
        name="deadline"
        // label="Date"
        type="date"
        id="deadline"
        autoComplete="deadline"
        {...register("deadline", { required: true })}
      />

      {/* status */}
      <div className=" flex-col hidden">
        <label className="label">
          <span className="label-text">status</span>
        </label>
        <input
          type="text"
          placeholder="status"
          value="pending"
          className="input input-bordered rounded-md mb-3"
          {...register("status")}
        />
      </div>
      {/* id */}
      <div className=" flex-col hidden">
        <label className="label">
          <span className="label-text">ID</span>
        </label>
        <input
          type="text"
          placeholder="id"
          value="1"
          className="input input-bordered rounded-md mb-3"
          {...register("id")}
        />
      </div>
      {/* Assign to */}
      <div className="flex flex-col">
        <TextField
          margin="normal"
          required
          fullWidth
          name="assign"
          label="Assign To"
          type="text"
          // id="assignTo"
          // autoComplete="assignTo"
          {...register("assign", { required: true })}
        />
      </div>

      {/* priority */}
      <div className="flex flex-col ">
        <label htmlFor="priority" className="label">
          <span className="label-text">Priority</span>
        </label>
        <select name="high" id="priority" {...register("priority")}>
          <option defaultValue="high">High</option>
          <option value="medium">Medium</option>

          <option value="low">Low</option>
        </select>
      </div>

      {/* buttons */}
      <div className="flex gap-3 ">
        <div className=" mt-6">
          <button
            onClick={() => cancel()}
            type="button"
            className="btn btn-primary"
          >
            Cancel
          </button>
        </div>
        <div className="form-control mt-6">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </div>
    </form>
  </section>
);

}

export default AddNews
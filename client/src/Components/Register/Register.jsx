import React from "react";
import { useState } from "react";

const Register = () => {
  const [name, setName] = useState("");

  return (
    <>
      <div className="text-white flex flex-wrap flex-col my-40 ">
        <h1 className="mx-auto max-w-2xl mb-8 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white font-poppins">
          Register
        </h1>
        <form className="flex-col flex flex-wrap mx-auto ">
          <label className="font-poppins font-bold text-2xl my-2">Name</label>
          <input
            type="text"
            required
            className="rounded-xl text-black px-5"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Username"
          />
        </form>
        <button className="text-white bg-btnColor rounded-2xl mx-auto px-3 my-5 py-3 hover:font-bold ">
          Submit
        </button>
        <h1 className="mx-auto font-poppins font-bold text-2xl my-10">
          Already have an account ? Click{" "}
          <span className="text-btnColor hover:cursor-pointer">Here</span> to
          sign in
        </h1>
      </div>
    </>
  );
};

export default Register;

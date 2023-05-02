import React from "react";
import { Link } from "react-router-dom";
import { FormikValues, useFormik } from "formik";
import * as Yup from "yup";

type Props = {};

const Signup = (props: Props) => {
  const formik = useFormik({
    initialValues: {
      fullname: "",
      email: "",
      password: ""
    },

    validationSchema: Object({
      fullname: Yup.string().required("Full name is required"),
      email: Yup.string().email("Invliad email").required("Full name is required"),
      password: Yup.string().required("Please provide password")
    }),

    onSubmit: (values: FormikValues)=>{

    }
  });
  return (
    <main className="flex flex-col items-center justify-center w-full h-screen bg-gradient">
      <form
        action=""
        className="w-[90%] mx-auto space-y-3 bg-white lg:w-1/3 p-4 rounded-md"
      >
        <h1 className="text-2xl font-semibold text-center">
          Sign up for Short.ly
        </h1>
        <div className="flex flex-col space-y-2">
          <label htmlFor="">Fullname:</label>
          <input
            type="text"
            name="fullname"
            placeholder="John Doe"
            className=""
          />
          <small className={`text-red-500`}>error</small>
        </div>
        <div className="flex flex-col space-y-2">
          <label htmlFor="">Email:</label>
          <input
            type="email"
            name="email"
            placeholder="johndoe@gmail.com"
            className=""
          />
          <small className={`text-red-500`}>error</small>
        </div>
        <div className="flex flex-col space-y-2">
          <label htmlFor="">Password:</label>
          <input type="password" name="password" className="" />
          <small className={`text-red-500`}>error</small>
        </div>
        <div>
          <button type="submit" className="">
            Sign up
          </button>
        </div>
        <div>
          <small>
            Already a user?{" "}
            <Link className="text-blue-500" to={"/login"}>
              Login
            </Link>{" "}
          </small>
        </div>
      </form>
    </main>
  );
};

export default Signup;

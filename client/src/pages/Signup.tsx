import React, { useState } from "react";
import { Link, Navigate, redirect } from "react-router-dom";
import { FormikValues, useFormik, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { AnimatePresence, motion } from "framer-motion";



const Signup = () => {
  const [redirect, setRediect] = useState<boolean>(false)
  const formik = useFormik({
    initialValues: {
      fullname: "",
      email: "",
      password: "",
    },

    validationSchema: Yup.object({
      fullname: Yup.string().required("Full name is required"),
      email: Yup.string().email("Invliad email").required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be more than six characters")
        .required("Please provide password"),
    }),

    onSubmit: async (
      values: FormikValues,
      { setSubmitting, setErrors, setStatus }
    ) => {
      try {
        await axios.post("/user/register", values);
        // Redirect to dashbord if successfully signed up
       setRediect(true)
      } catch (error: any) {
        // Check if the user alrady exists
        if (error.response && error.response.status === 409) {
          setErrors({
            email: "User already exists",
          });
        }
        console.log(error);
      }
    },
  });

  if(redirect){
    return <Navigate to="/dashboard"/>;
  }
  console.log(formik.errors.email);
  return (
    <AnimatePresence>
      <main
        className="flex flex-col items-center justify-center w-full h-screen bg-gradient"
      >
        <motion.form
          initial={{scale:0.98}}
          animate={{scale: 1}}
          transition={{duration: 0.5, delay: 0.25, ease: "linear"}}
          onSubmit={formik.handleSubmit}
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
              value={formik.values.fullname}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`${
                formik.errors.fullname ? "border-red-500" : "border-green-600"
              }`}
            />
            <small
              className={`text-red-500 ${
                formik.touched.fullname && formik.errors.fullname
                  ? "visible"
                  : "invisble"
              }`}
            >
              {formik.errors.fullname}
            </small>
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="">Email:</label>
            <input
              type="email"
              name="email"
              placeholder="johndoe@gmail.com"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`${
                formik.errors.email ? "border-red-500" : "border-green-600"
              }`}
            />
            <small
              className={`text-red-500 ${
                formik.touched.email && formik.errors.email
                  ? "visible"
                  : "invisble"
              }`}
            >
              {formik.errors.email}
            </small>
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="">Password:</label>
            <input
              type="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`${
                formik.errors.password ? "border-red-500" : "border-green-600"
              }`}
            />
            <small
              className={`text-red-500 ${
                formik.touched.password && formik.errors.password
                  ? "visible"
                  : "invisble"
              }`}
            >
              {formik.errors.password}
            </small>
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
        </motion.form>
      </main>
    </AnimatePresence>
  );
};

export default Signup;

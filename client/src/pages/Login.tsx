import React, { useState } from "react";
import { Link, Navigate, redirect } from "react-router-dom";
import { useFormik, FormikValues } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { AnimatePresence, motion } from "framer-motion";

type Props = {};

const Login = (props: Props) => {
  const [userError, setUserError] = useState<string>("");
  const [emailPassword, setEmailPassword] = useState<string>("");
  const [redirect, setRedirect] = useState<boolean>(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validationSchema: Yup.object({
      email: Yup.string().email("Invliad email").required("Email is required"),
      password: Yup.string().required("Please provide password"),
    }),

    onSubmit: async (values: FormikValues) => {
      try {
        await axios.post("/user/login", values);
        // Redirect user if there are no validation errors
        setRedirect(true);
      } catch (error: any) {
        // Handle any errors that occur during the validation process
        if (error.response && error.response.status === 404) {
          setUserError("User doest not exists");
        }
        if (error.response && error.response.status === 401) {
          setUserError("Invalid email or password");
        }
        console.log(error.message);
      }
    },
  });

  if (redirect) {
    return <Navigate to={"/dashboard"} />;
  }
  return (
    <AnimatePresence>
      <main className="flex flex-col items-center justify-center w-full h-screen bg-gradient">
        <motion.form
          initial={{ scale: 0.98 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.25, ease: "linear" }}
          onSubmit={formik.handleSubmit}
          action=""
          className="w-[90%] mx-auto space-y-3 bg-white lg:w-1/3 p-4 rounded-md transition-all duration-75 ease-linear"
        >
          <>
            <h1 className="text-2xl font-semibold text-center">
              Welcome back!
            </h1>
            {/* Display server side errors that is not tied to any input */}
            <div>
              {userError != "" && (
                <motion.small
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.25 }}
                  className="text-red-500 font-semibold"
                >
                  {userError}
                </motion.small>
              )}
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
              <motion.small
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.25 }}
                exit={{ opacity: 0 }}
                className={`text-red-500 font-semibold ${
                  formik.touched.email && formik.errors.email
                    ? "visible"
                    : "invisble"
                }`}
              >
                {formik.errors.email}
              </motion.small>
            </div>
            <div className="flex flex-col space-y-2">
              <label htmlFor="">Password:</label>
              <input
                type="password"
                name="password"
                className={`${
                  formik.errors.password ? "border-red-500" : "border-green-600"
                }`}
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <motion.small
                key={3}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.25 }}
                exit={{ opacity: 0 }}
                className={`text-red-500 font-semibold ${
                  formik.touched.password && formik.errors.password
                    ? "visible"
                    : "invisble"
                }`}
              >
                {formik.errors.password}
              </motion.small>
            </div>
            <div>
              <button type="submit" className="">
                Login
              </button>
            </div>
            <div>
              <small>
                Don't have account yet?{" "}
                <Link className="text-blue-500" to={"/signup"}>
                  Signup
                </Link>{" "}
              </small>
            </div>
          </>
        </motion.form>
      </main>
    </AnimatePresence>
  );
};

export default Login;

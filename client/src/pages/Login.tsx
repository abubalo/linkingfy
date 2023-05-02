import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useFormik, FormikValues } from "formik";
import * as Yup from "yup";
import axios from "axios"

type Props = {};

const Login = (props: Props) => {
  const [emailError, setEmailError] = useState("")
  const [emailPassword, setEmailPassword] = useState("")

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validationSchema: Yup.object({
      email: Yup.string().email("Invliad email").required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be more than six characters")
        .required("Please provide password"),
    }),

    onSubmit: async (values: FormikValues) => {
      try {
          const response = await axios.post("")
      } catch (error) {
        
      }
    },
  });
  return (
    <main className="flex flex-col items-center justify-center w-full h-screen bg-gradient">
      <form
        action=""
        className="w-[90%] mx-auto space-y-3 bg-white lg:w-1/3 p-4 rounded-md"
      >
        <h1 className="text-2xl font-semibold text-center">Welcome back!</h1>
        <div className="flex flex-col space-y-2">
          <label htmlFor="">Email:</label>
          <input
            type="email"
            name="email"
            placeholder="johndoe@gmail.com"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`${formik.errors.email ? "border-red-500" : "border-green-600"}`}
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
            className={`${formik.errors.password ? "border-red-500" : "border-green-600"}`}
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
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
            Login
          </button>
        </div>
        <div>
          <small>
            Dont have account?{" "}
            <Link className="text-blue-500" to={"/signup"}>
              Signup
            </Link>{" "}
          </small>
        </div>
      </form>
    </main>
  );
};

export default Login;

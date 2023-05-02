import React from "react";
import { Link } from "react-router-dom";
import { FormikValues, useFormik, ErrorMessage } from "formik";
import * as Yup from "yup";

type Props = {};

const Signup = (props: Props) => {
  const formik = useFormik({
    initialValues: {
      fullname: "",
      email: "",
      password: "",
    },

    validationSchema: Yup.object({
      fullname: Yup.string().required("Full name is required"),
      email: Yup.string()
        .email("Invliad email")
        .required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be more than six characters")
        .required("Please provide password"),
    }),

    onSubmit: (values: FormikValues) => {},
  });
  console.log(formik.values);
  console.log(formik.errors);
  return (
    <main className="flex flex-col items-center justify-center w-full h-screen bg-gradient">
      <form
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
            className={`${formik.errors.fullname ? "border-red-500" : "border-green-600"}`}
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
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`${formik.errors.password ? "border-red-500" : "border-green-600"}`}
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
      </form>
    </main>
  );
};

export default Signup;

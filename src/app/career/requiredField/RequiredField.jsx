"use client";
import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const RequiredField = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    location: "",
    city: "",
    state: "",
    postal: "",
    phone: "",
    isRobotChecked: false,
  };

  const validationSchema = Yup.object({
    firstName: Yup.string()
      .min(5, "min 5")
      .max(10, "Must be 10 characters or less")
      .required("Please Enter your firstName"),
    lastName: Yup.string()
      .max(10, "Must be 10 characters or less")
      .required("Please Enter your lastName"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Please Enter your Email"),
    location: Yup.string().required("Please Enter your Location"),
    city: Yup.string().required("Please Enter your City"),
    state: Yup.string().required("Please Enter your state"),
    postal: Yup.string().required("Please Enter your Postal"),
    phone: Yup.string().required("Please Enter your Phone No"),
    isRobotChecked: Yup.boolean().oneOf(
      [true],
      "Must accept terms and conditions"
    ),
  });

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    setTimeout(() => {
      localStorage.setItem("formData", JSON.stringify(values));
      setIsSubmitted(true);
      resetForm();
      setSubmitting(false);
    }, 400);
  };

  return (
    <div className="flex justify-center bg-gradient-to-l from-purple-400 via-pink-500 to-red-500 items-center pt-5 px-3 md:pb-10 md:px-20">
      <div className="container">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="flex justify-center flex-col gap-5">
              <h1 className=" text-2xl font-bold text-yellow-700">*Required Field</h1>
              <Field
                name="firstName"
                type="text"
                placeholder="First Name"
                className="border p-4"
              />
              <ErrorMessage
                name="firstName"
                component="div"
                className="text-black"
              />

              <Field
                name="lastName"
                type="text"
                placeholder="Last Name"
                className="border p-4"
              />
              <ErrorMessage
                name="lastName"
                component="div"
                className="text-black"
              />

              <Field
                name="email"
                type="email"
                placeholder="Email Address"
                className="border p-4"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-black"
              />

              <Field
                name="location"
                type="text"
                placeholder="Location"
                className="border p-4"
              />
              <ErrorMessage
                name="location"
                component="div"
                className="text-black"
              />

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <Field
                  name="city"
                  type="text"
                  placeholder="City"
                  className="border p-4"
                />

                <Field
                  name="state"
                  type="text"
                  placeholder="State"
                  className="border p-4"
                />
                <Field
                  name="postal"
                  type="text"
                  placeholder="Postal"
                  className="border p-4 hover:underline"
                />
              </div>

              <Field
                name="phone"
                type="tel"
                placeholder="Phone No"
                className="w-1/2 p-4 border"
              />
              <ErrorMessage
                name="phone"
                component="div"
                className="text-black"
              />

              <div className="flex bg-white md:pl-4 items-center justify-between border md:w-1/4 p-3">
                <Field
                  name="isRobotChecked"
                  type="checkbox"
                  className="w-6 h-6"
                />
                <label htmlFor="isRobotChecked" className="ml-3">
                  I'm not a Robot
                </label>
                <img src="/images/iamNotrobot.png" alt="Robot Icon" />
              </div>

              <div className="flex gap-5">
                <button
                  type="reset"
                  className="rounded-md border bg-white hover:bg-red-500 hover:text-white px-5 md:px-12 py-2 md:py-4"
                >
                  Reset
                </button>
                <button
                  type="submit"
                  className="border bg-red-500 rounded-md hover:bg-red-700 text-white px-5 md:px-10 py-2 md:py-4"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit Application"}
                </button>
              </div>

              {isSubmitted && (
                <p className="text-red-500">Form submitted successfully!</p>
              )}
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default RequiredField;

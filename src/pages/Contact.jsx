import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  fullName: yup
    .string()
    .min(3, "Full name must be at least 3 characters")
    .required("Full name is required"),
  subject: yup
    .string()
    .min(3, "Subject must be at least 3 characters")
    .required("Subject is required"),
  email: yup
    .string()
    .email("Must be a valid email address")
    .required("Email is required"),
  body: yup
    .string()
    .min(3, "Body must be at least 3 characters")
    .required("Body is required"),
});

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("Form data:", data);
  };

  return (
    <div className="container">
      <h1 className="text-center mt-5">Contact Us</h1>
      <p className="text-center">Feel free to reach out to us!</p>
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                className="form-control"
                id="fullName"
                {...register("fullName")}
                placeholder="Enter your full name"
              />
              {errors.fullName && (
                <p className="text-danger">{errors.fullName.message}</p>
              )}
            </div>
            <div className="form-group mt-3">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                className="form-control"
                id="subject"
                {...register("subject")}
                placeholder="Enter subject"
              />
              {errors.subject && (
                <p className="text-danger">{errors.subject.message}</p>
              )}
            </div>
            <div className="form-group mt-3">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                {...register("email")}
                placeholder="Enter your email"
              />
              {errors.email && (
                <p className="text-danger">{errors.email.message}</p>
              )}
            </div>
            <div className="form-group mt-3">
              <label htmlFor="body">Body</label>
              <textarea
                className="form-control"
                id="body"
                {...register("body")}
                rows="5"
                placeholder="Enter your message"
              ></textarea>
              {errors.body && (
                <p className="text-danger">{errors.body.message}</p>
              )}
            </div>
            <button type="submit" className="btn btn-primary mt-3">
              Send Message
            </button>
          </form>
        </div>
      </div>
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <p className="text-center">Or contact us via:</p>
          <ul className="list-unstyled text-center">
            <li>Phone: +1234567890</li>
            <li>Email: info@example.com</li>
            <li>Address: 123 Main Street, City, Country</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;

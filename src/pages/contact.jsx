import React from "react";

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formDataObj = Object.fromEntries(formData.entries());
    console.log("Form data:", formDataObj);
    // You can perform additional actions here, such as sending the form data to a server
  };

  return (
    <div className="container">
      <h1 className="text-center mt-5">Contact Us</h1>
      <p className="text-center">Feel free to reach out to us!</p>
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                className="form-control"
                id="fullName"
                name="fullName"
                placeholder="Enter your full name"
                minLength="2"
                pattern="[a-zA-Z0-9_]+"
                title="Full name must be at least 3 characters"
                required
              />
            </div>
            <div className="form-group mt-3">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                className="form-control"
                id="subject"
                name="subject"
                placeholder="Enter subject"
                minLength="3"
                title="Subject must be at least 3 characters"
                required
              />
            </div>
            <div className="form-group mt-3">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="Enter your email"
                title="Must be a valid email address"
                required
              />
            </div>
            <div className="form-group mt-3">
              <label htmlFor="body">Body</label>
              <textarea
                className="form-control"
                id="body"
                name="body"
                rows="5"
                placeholder="Enter your message"
                minLength="3"
                title="Body must be at least 3 characters"
                required
              ></textarea>
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

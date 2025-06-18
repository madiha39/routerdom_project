import React from "react";

const Contact = () => {
  return (
    <div className="container py-5">
      <h2 className="mb-4 text-primary fw-bold">
        Contact the Institute of Mathematics
      </h2>
      <p>
        We welcome your questions, feedback, and collaboration inquiries. Please
        use the information below to get in touch with us.
      </p>
      <div className="row g-4">
        <div className="col-md-6">
          <h5>Contact Information</h5>
          <ul className="list-unstyled fs-5">
            <li className="mb-2">
              <strong>Address:</strong> 123 Math Avenue, Science City, 10001
            </li>
            <li className="mb-2">
              <strong>Email:</strong> info@mathinstitute.edu
            </li>
            <li>
              <strong>Phone:</strong> +1 (555) 123-4567
            </li>
          </ul>
        </div>
        <div className="col-md-6">
          <h5>Send Us a Message</h5>
          <form
            className="p-4 rounded shadow"
            style={{ background: "#f8f9fa" }}
          >
            <div className="mb-3">
              <label className="form-label">Your Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Your Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea
                className="form-control"
                rows="4"
                placeholder="Type your message"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary px-4">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

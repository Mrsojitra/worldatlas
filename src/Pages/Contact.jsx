import React from "react";

const handleformsubmit = (formData) => {
  console.log(formData.entries());
};

const Contact = () => {
  const handleformsubmit = (formData) => {
    // console.log(formData.entries());
    const formInputData = Object.fromEntries(formData.entries());
    console.log(formInputData)
  };

  return (
    <section className="section-contact">
      <h2 className="container-title">Contact Us</h2>
      <div className="contact-wrapper container">
        <form action={handleformsubmit}>
          <input
            type="text"
            name="username"
            className="form-control"
            placeholder="Enter Your Name"
            required
            autoComplete="off"
          />

          <input
            type="text"
            name="email"
            className="form-control"
            placeholder="Enter Your Email"
            required
            autoComplete="off"
          />

          <textarea
            name="message"
            rows={10}
            placeholder="Enter Your Message"
            className="form-control"
            required
            autoComplete="off"
          ></textarea>

          <button type="submit" value="send">
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

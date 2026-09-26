import React from "react";

function ContactFormBox() {
  return (
    <form className="row g-4" action="#">
      <div className="col-xl-6">
        <div className="form-group">
          <label className="tz-text-l" htmlFor="name">
            Your Name*
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Name"
          />
        </div>
      </div>
      <div className="col-xl-6">
        <div className="form-group">
          <label className="tz-text-l" htmlFor="email">
            Email Address*
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Email"
          />
        </div>
      </div>
      <div className="col-xl-6">
        <div className="form-group">
          <label className="tz-text-l" htmlFor="number">
            Phone Number*
          </label>
          <input
            type="text"
            className="form-control"
            id="number"
            placeholder="5345345"
          />
        </div>
      </div>
      <div className="col-xl-6">
        <div className="form-group">
          <label className="tz-text-l" htmlFor="subject">
            Subject*
          </label>
          <input
            type="text"
            className="form-control"
            id="subject"
            placeholder="Subject"
          />
        </div>
      </div>
      <div className="col-xl-12">
        <div className="form-group">
          <label className="tz-text-l" htmlFor="message">
            Describe your message*
          </label>
          <textarea
            className="form-control"
            id="message"
            rows={5}
            placeholder="Message"
            defaultValue={""}
          />
        </div>
      </div>
      <div className="col-12">
        <button
          type="submit"
          className="tz-button tz-button--full tz-text-l tz-bg-primary"
        >
          Send Message
        </button>
      </div>
    </form>
  );
}

export default ContactFormBox;

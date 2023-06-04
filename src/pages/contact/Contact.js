import { useState } from "react";

// styles
import "./Contact.css";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <h2 className="secondary-heading">Let's work together</h2>
          <p className="form-paragraph">
            Have an idea or a concept that really excite you? Let's turn that
            idea into reality.
          </p>
          <div className="field-grid">
            <div className="field">
              <label>
                <span>Name</span>
                <input
                  type="text"
                  required
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  id="name"
                />
              </label>
            </div>
            <div className="field">
              <label>
                <span>Email Address</span>
                <input
                  type="text"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  id="email"
                />
              </label>
            </div>
          </div>
          <div className="field">
            <label>
              <span>Message</span>
              <textarea
                name="message"
                id="message"
                required
                onChange={(e) => setMessage(e.target.value)}
                value={message}
              ></textarea>
            </label>
          </div>
          <button>Send Message</button>
        </form>
      </div>
    </section>
  );
}

import { useState } from 'react'

// styles
import './Contact.css'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    console.log(name, email, message)
  }

  return (
    <section>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <h2 className="secondary-heading">Let's work together</h2>
          <p className="form-paragraph">
            Have an idea or a concept that really excite you? Let's turn that idea into reality.
          </p>
          <div className="field-grid">
            <div className="field">
              <label>
                <span>Name</span>
                <input 
                  type="text"
                  required
                  onChange={e => setName(e.target.value)}
                  value={name}
                />
              </label>
            </div>
            <div className="field">
              <label>
                <span>Email Address</span>
                <input 
                  type="text"
                  required
                  onChange={e => setEmail(e.target.value)}
                  value={name}
                />
              </label>
            </div>
          </div>
          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              onChange={e => setMessage(e.target)} value={message}
              required
            ></textarea>
          </div>
          <button>Send Message</button>
        </form>
      </div>
    </section>
  )
}

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
      <div class="container">
        <form onSubmit={handleSubmit}>
          <h2 class="secondary-heading">Let's work together</h2>
          <p class="form-paragraph">
            Have an idea or a concept that really excite you? Let's turn that idea into reality.
          </p>
          <div class="field-grid">
            <div class="field">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" required onChange={e => setName(e.target)} value={name} />
            </div>
            <div class="field">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" required onChange={e => setEmail(e.target)} value={email} />
            </div>
          </div>
          <div class="field">
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

import './Contact.css'

import React from 'react'

export default function Contact() {
  return (
    <section>
      <div class="container">
        <form>
          <h2 class="secondary-heading">Let's work together</h2>
          <p class="form-paragraph">
            Have an idea or a concept that really excite you? Let's turn that idea into reality.
          </p>
          <div class="field-grid">
            <div class="field">
              <label for="name">Name</label>
              <input type="text" id="name" required />
            </div>
            <div class="field">
              <label for="email">Email Address</label>
              <input type="email" id="email" required />
            </div>
          </div>
          <div class="field">
            <label for="message">Message</label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              required
            ></textarea>
          </div>
          <button>Send Message</button>
          {/* <div class="success">
            <lottie-player class="success-json" src="https://assets3.lottiefiles.com/temp/lf20_MqU2rh.json"  background="transparent"  speed="1"></lottie-player>
            <p>Thank you! Your message has been received</p>
          </div> */}
        </form>
      </div>
    </section>
  )
}

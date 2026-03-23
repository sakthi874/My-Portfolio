import './contact.css';
import { useState } from "react";

function Contact() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      alert("Please fill all fields");
      return;
    }

    // ✅ Show success popup
    setSuccess(true);

    // ✅ Clear form
    setForm({
      name: "",
      email: "",
      message: ""
    });

    // ⏳ Auto close popup after 3 sec
    setTimeout(() => {
      setSuccess(false);
    }, 3000);
  };

  return (
    <section id="contact">
      <h2><u>Contact Me</u></h2>

      <form className="contact-form" onSubmit={handleSubmit}>

        <label>Name</label>
        <input
          type="text"
          placeholder="Your name"
          value={form.name}
          onChange={(e) => setForm({...form, name: e.target.value})}
        />

        <label>Email</label>
        <input
          type="email"
          placeholder="Your email"
          value={form.email}
          onChange={(e) => setForm({...form, email: e.target.value})}
        />

        <label>Message</label>
        <textarea
          rows="5"
          placeholder="Your message"
          value={form.message}
          onChange={(e) => setForm({...form, message: e.target.value})}
        ></textarea>

        <button type="submit">Send Message</button>
      </form>

      {/* ✅ SUCCESS POPUP */}
      {success && (
        <div className="popup">
          <p>✅ Message Sent Successfully!</p>
        </div>
      )}

      <br />

      <div className="contact-social">
        <p>Connect with me:</p><br />

        <a href="https://www.linkedin.com/in/sakthi-s-01711a248/" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a> | 

        <a href="https://github.com/sakthi874/" target="_blank" rel="noopener noreferrer">
          GitHub
        </a> | 

        <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer">
          Resume
        </a>
      </div>

      <br />

      <p className="contact-subtitle">
        I’m open to new opportunities, collaborations, or just a friendly chat.
      </p>

    </section>
  );
}

export default Contact;
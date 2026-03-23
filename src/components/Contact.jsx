import './contact.css';

function Contact() {
  return (
    <section id="contact">
      <h2><u>Contact Me</u></h2>

     

      {/* 🔥 CONTACT INFO */}
      

      {/* 🔥 FORM */}
      <form className="contact-form">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" placeholder="Your name" required />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="Your email" required />

        <label htmlFor="message">Message</label>
        <textarea rows="5" placeholder="Your message" required></textarea>

        <button
          type="button"
          onClick={() => alert("Thank you for contacting me!")}
        >
          Send Message
        </button>
      </form>
<br></br>
      {/* 🔥 SOCIAL LINKS */}
      <div className="contact-social">
        <p>Connect with me:</p><br></br>
        <a href="https://www.linkedin.com/in/sakthi-s-01711a248/" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a> | 
        <a href="https://github.com/sakthi874/" target="_blank" rel="noopener noreferrer">
          GitHub
        </a> | 
        <a href="https://sakthi-s.github.io/portfolio/" target="_blank" rel="noopener noreferrer">
          Portfolio
        </a>
      </div><br></br>
       <p className="contact-subtitle">
        I’m open to new opportunities, collaborations, or just a friendly chat.
        Feel free to reach out!
      </p>
    </section>
  );
}

export default Contact;
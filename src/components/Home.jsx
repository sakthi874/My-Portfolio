import './home.css';
import sakthiPhoto from '../components/sakthi.jpg';

function Home() {
  return (
    <>
      <div className="sidebar">
        <aside className="profile-pic-wrapper">
          <img src={sakthiPhoto} alt="Sakthi's Profile" className="profile-pic" />
        </aside>

        <h2>SAKTHI S</h2>

        <div className="social-links">
  <a href="https://www.linkedin.com/in/sakthi-s-01711a248/" target="_blank" rel="noopener noreferrer">
    <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" className="social-icon" style={{ width: '40px', height: '40px' }} />
  </a>

  <a href="https://github.com/sakthi874" target="_blank" rel="noopener noreferrer">
    <img src="/Github.png" alt="GitHub" className="social-icon" style={{ width: '40px', height: '40px' }} />
  </a>

  <a href="mailto:srisakthidevi28@gmail.com?subject=Portfolio%20Inquiry&body=Hello%20Sakthi,%20I%20would%20like%20to%20connect%20with%20you.">
  <img src="https://cdn-icons-png.flaticon.com/512/732/732200.png" alt="Email" className="social-icon" style={{ width: '40px', height: '40px' }} />
</a>

</div>
      </div>

      <section id="home">
        <div className="home-content">
          <h1>Hi, I'm S. Sakthi</h1>
          <h2><a href="#home"><u>Creative Designer & Frontend Developer</u></a></h2><br/>
          <a  href="/word resume(3).pdf"  target="_blank"  rel="noopener noreferrer">
  <button className="resume-btn">Resume</button>
</a>

        </div>
      </section>
    </>
  );
}

export default Home;

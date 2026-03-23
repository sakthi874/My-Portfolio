import './home.css';
 import sakthiPhoto from '../components/sakthi.jpg';
 
function Home() {
  
  return (
    <><div className="sidebar">
       <aside>
          <img src={sakthiPhoto} alt="Sakthi's Profile" className="profile-pic" /></aside>

      <h2>SAKTHI S</h2>

      <div className="info">
        <p><a href="https://www.linkedin.com/in/sakthi-s-01711a248/" target="_blank" rel="noopener noreferrer">🔗 LinkedIn</a></p>
        <p><a href="mailto:srisakthidevi28@gmail.com">📧 srisakthidevi28@gmail.com</a></p>
        <p><a href="https://github.com/sakthi874" target="_blank" rel="noopener noreferrer">💻 github.com</a></p>
        <p><a href="tel:7339283009">📞 7339283009</a></p>
        <p>📍 Tamil Nadu, India</p>
      </div>
    </div><section id="home">
      <div className="home-content">
        <h1 >Hi, I'm S. Sakthi</h1>
        <p><h2><a href ="#home"><u>Designer & Frontend Developer</u></a></h2></p>
        </div>
       
    
      </section></>
  );
}

export default Home;

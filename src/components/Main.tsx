import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TalegramIcon from '@mui/icons-material/Telegram';
import '../assets/styles/Main.scss';
import propic from '../assets/images/propicS.jpg';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={propic} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/niloy32073" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/nrahman64/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="https://wa.me/qr/GOPPUVP6YNAJF1" target="_blank" rel="noreferrer"><WhatsAppIcon/></a>
            <a href="https://www.t.me/niloy32073" target="_blank" rel="noreferrer"><TalegramIcon/></a>
          </div>
          <h1>Nifaur Rahman</h1>
          <p>Mobile App Developer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/niloy32073" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/nrahman64/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="https://wa.me/qr/GOPPUVP6YNAJF1" target="_blank" rel="noreferrer"><WhatsAppIcon/></a>
            <a href="https://www.t.me/niloy32073" target="_blank" rel="noreferrer"><TalegramIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
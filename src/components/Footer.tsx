import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TalegramIcon from '@mui/icons-material/Telegram';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
            <a href="https://github.com/niloy32073" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/nrahman64/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="https://wa.me/qr/GOPPUVP6YNAJF1" target="_blank" rel="noreferrer"><WhatsAppIcon/></a>
            <a href="https://www.t.me/niloy32073" target="_blank" rel="noreferrer"><TalegramIcon/></a>
      </div>
      <p>This Portfoio is being modified by <a href="https://github.com/niloy32073" target="_blank" rel="noreferrer">Niloy</a></p>
    </footer>
  );
}

export default Footer;
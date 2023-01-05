import {FaEnvelope , FaLinkedin,FaInstagram,FaGithub} from 'react-icons/fa';

export default function LinkAbout({ link, icon }) {
  const icons = {
    github: <FaGithub />,
    instagram:<FaInstagram />,
    linkedin: <FaLinkedin />,
    mail: <FaEnvelope />,
  }
  return (
    <a href={link} className="hero-info__link" target="_blank">
      {icons[icon]}
    </a>
  );
}

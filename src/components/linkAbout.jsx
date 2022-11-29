export default function LinkAbout({ link, icon }) {
  const icons = {
    github: <i className="fa-brands fa-github"></i>,
    instagram: <i className="fa-brands fa-instagram"></i>,
    linkedin: <i className="fa-brands fa-linkedin"></i>,
    mail: <i className="fa-solid fa-envelope"></i>,
  }
  return (
    <a href={link} className="hero-info__link">
      {icons[icon]}
    </a>
  );
}

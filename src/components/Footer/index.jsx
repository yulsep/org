import "./Footer.css";

const Footer = () => {
  return (
    <footer
      className="footer"
      style={{ backgroundImage: "url(/img/footer.png)" }}
    >
      <div className="redes">
        <a href="https://www.facebook.com/">
          <img src="/img/facebook.png" alt="facebook" />
        </a>
        <a href="https://www.twitter.com/">
          <img src="/img/twitter.png" alt="twitter" />
        </a>
        <a href="https://www.instagram.com/">
          <img src="/img/instagram.png" alt="instagram" />
        </a>
      </div>
      <img src="FaviconOrg.png" alt="org" />
      <strong>Desarrollado por Yulsep</strong>
    </footer>
  );
};

export default Footer;

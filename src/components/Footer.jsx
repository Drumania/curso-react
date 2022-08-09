import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="text-center text-white">
        <section className="py-5">
          <a
            href="https://www.linkedin.com/in/martinbrumana"
            className="text-white me-4"
          >
            <i className="bi bi-linkedin"></i>
          </a>
          <a href="https://github.com/Drumania" className="text-white me-4">
            <i className="bi bi-github"></i>
          </a>
          <a
            href="https://www.instagram.com/mbrumana/"
            className="text-white me-4"
          >
            <i className="bi bi-instagram"></i>
          </a>
          <a href="mailto:martinbrumana@gmail.com" className="text-white me-4">
            <i className="bi bi-envelope"></i>
          </a>
        </section>

        <div className="pb-5">© 2022 Copyright</div>
      </footer>
    </>
  );
};

export default Footer;

import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="text-center text-white">
        <div className="container">
          <section className="mb-5">
            <div className="row d-flex justify-content-center">
              <div className="col-lg-8 pt-5">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                  distinctio earum repellat quaerat voluptatibus placeat nam,
                  commodi optio pariatur est quia magnam eum harum corrupti
                  dicta, aliquam sequi voluptate quas.
                </p>
              </div>
            </div>
          </section>

          <section className="text-center mb-5">
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
            <a
              href="mailto:martinbrumana@gmail.com"
              className="text-white me-4"
            >
              <i className="bi bi-envelope"></i>
            </a>
          </section>
        </div>

        <div className="text-center p-3">© 2022 Copyright</div>
      </footer>
    </>
  );
};

export default Footer;

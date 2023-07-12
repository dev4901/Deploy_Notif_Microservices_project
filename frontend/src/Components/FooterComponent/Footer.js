import React from "react";
import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebookF,faInstagram,faTwitter,faGoogle,faLinkedinIn,faGithub } from '@fortawesome/free-brands-svg-icons'

function Footer() {
  return (
    <>
      <footer className="bg-dark text-center text-white">
        <div className="container p-2">
          <section >
            <a
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
        <FontAwesomeIcon icon={faFacebookF} />
              
            </a>

            <a
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>

            <a
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>

            <a
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <FontAwesomeIcon icon={faGoogle} />
            </a>

            <a
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>

            <a
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </section>
        </div>

        <div
          className="text-center pb-3"
        >
          All Rights Reserved © 2023 Copyright : &nbsp;
          <a classNameName="text-white" href="/">
            Notifier.com
          </a>
        </div>
      </footer>
    </>
  );
}

export default Footer;

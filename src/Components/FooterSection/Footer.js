// import React from "react";
import React, { useState } from "react";

import "./Footer.css";

import TermsModal from "../Modal/Modal";

export default function Footer() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <footer className="footer">
        <div className="footercontentcontainer">
          <div className="footer-content">
            <p>&copy; 2023 Amazing AppVentures. All rights reserved.</p>
          </div>
          <a href="/#" onClick={openModal}>
            View Terms and Conditions
          </a>
          <TermsModal isOpen={modalIsOpen} closeModal={closeModal} />
        </div>
      </footer>
    </div>
  );
}

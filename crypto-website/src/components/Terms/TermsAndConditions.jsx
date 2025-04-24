import React from "react";
import "./Termsand.css";


const TermsAndConditions = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <article className="modal">
        <header className="modal-header">
          <h2 className="modal-title">
            <svg
              height="24"
              width="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path
                fill="currentColor"
                d="M14 9V4H5v16h6.056c.328.417.724.785 1.18 1.085l1.39.915H3.993A.993.993 0 0 1 3 21.008V2.992C3 2.455 3.449 2 4.002 2h10.995L21 8v1h-7zm-2 2h9v5.949c0 .99-.501 1.916-1.336 2.465L16.5 21.498l-3.164-2.084A2.953 2.953 0 0 1 12 16.95V11zm2 5.949c0 .316.162.614.436.795l2.064 1.36 2.064-1.36a.954.954 0 0 0 .436-.795V13h-5v3.949z"
              />
            </svg>
            Terms & Services
          </h2>
          <button className="close-button" onClick={onClose} aria-label="Close modal">
            &times;
          </button>
        </header>

        <section className="modal-body">
          <p>
            <strong>Cryptocurrency</strong>, with its promise of decentralized finance, offers unprecedented opportunities for investors.
          </p>
          <p>
            The rise of digital currencies like Bitcoin and Ethereum has revolutionized the financial landscape. In a world dominated by traditional finance, crypto is emerging as a modern solution. But with great potential comes complexity.
          </p>
          <p>
            Investing isn’t just about buying coins—it's about understanding trends, risk, and blockchain technology.
          </p>
          <p>
            Market demand, regulation, and tech updates all shape crypto prices. It’s a high-risk, high-reward world where education is everything.
          </p>
          <p>
            <strong>Blockchain technology</strong> enables transparent, secure transactions—transforming the way we think about finance.
          </p>
          <p>
            DeFi platforms let users lend, borrow, and trade without banks, but risks and regulations are constantly evolving.
          </p>
          <p>
            Informed investors thrive. Stay updated on laws and trends to navigate this fast-paced world responsibly.
          </p>
          <p>
            <strong>Bottom line:</strong> Crypto is powerful, but smart decisions come from continuous learning.
          </p>
        </section>

        <footer className="modal-footer">
          <button className="btn btn-secondary" onClick={onClose}>
            Cancel
          </button>
          <button className="btn btn-primary" onClick={onClose}>
            I Accept
          </button>
        </footer>
      </article>
    </div>
  );
};

export default TermsAndConditions;

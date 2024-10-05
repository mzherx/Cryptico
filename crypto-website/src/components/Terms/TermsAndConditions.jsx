import React from "react";
import "./Termsand.css";

const TermsAndConditions = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <article className="modal-container">
        <header className="modal-container-header">
          <span className="modal-container-title">
            <svg
              aria-hidden="true"
              height="24"
              width="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0h24v24H0z" fill="none"></path>
              <path
                d="M14 9V4H5v16h6.056c.328.417.724.785 1.18 1.085l1.39.915H3.993A.993.993 0 0 1 3 21.008V2.992C3 2.455 3.449 2 4.002 2h10.995L21 8v1h-7zm-2 2h9v5.949c0 .99-.501 1.916-1.336 2.465L16.5 21.498l-3.164-2.084A2.953 2.953 0 0 1 12 16.95V11zm2 5.949c0 .316.162.614.436.795l2.064 1.36 2.064-1.36a.954.954 0 0 0 .436-.795V13h-5v3.949z"
                fill="currentColor"
              ></path>
            </svg>
            Terms and Services
          </span>
          <button className="icon-button" onClick={onClose}>
            <svg
              height="24"
              width="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0h24v24H0z" fill="none"></path>
              <path
                d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"
                fill="currentColor"
              ></path>
            </svg>
          </button>
        </header>
        <section className="modal-container-body rtf">
          <span className="black">
            Cryptocurrency, with its promise of decentralized finance, offers
            unprecedented opportunities for investors.
          </span>
          <p>
            The rise of digital currencies like Bitcoin and Ethereum has
            revolutionized the financial landscape. In a world where traditional
            finance is often marred by inefficiencies and centralized control,
            cryptocurrencies emerge as a beacon of innovation. The market is
            filled with possibilities; however, potential investors must
            navigate the complexities of this new digital frontier.
          </p>
          <span>
            Investing in cryptocurrency is not merely about purchasing coins; it
            involves understanding market trends and technological developments.
          </span>
          <p>
            For instance, Bitcoin's price is influenced by various factors,
            including market demand, regulatory changes, and technological
            advancements. As more individuals and institutions adopt
            cryptocurrencies, the prices tend to reflect increased demand, often
            leading to price surges.
          </p>
          <p>
            Moreover, the volatility of the crypto market presents both
            opportunities and risks. Investors should conduct thorough research
            and consider diversifying their portfolios to mitigate risks. As
            history shows, substantial gains can be achieved, but losses can
            also be significant.
          </p>
          <p>
            The implementation of blockchain technology underpins
            cryptocurrencies, ensuring transparency and security in
            transactions. This innovation has the potential to disrupt
            traditional financial systems by offering faster and cheaper
            transaction methods.
          </p>
          <span>
            Additionally, the emergence of decentralized finance (DeFi)
            platforms has transformed how people engage with their assets.
          </span>
          <p>
            DeFi allows users to lend, borrow, and trade cryptocurrencies
            without intermediaries, enhancing the overall accessibility of
            financial services. As this sector continues to grow, more users are
            likely to participate, driving demand and potentially affecting
            prices.
          </p>
          <p>
            However, regulatory scrutiny remains a crucial factor in the
            cryptocurrency landscape. Governments worldwide are exploring how to
            regulate this burgeoning market to protect investors while
            encouraging innovation.
          </p>
          <span>
            Investors must stay informed about legal frameworks as they can
            significantly impact market dynamics.
          </span>
          <p>
            In conclusion, while the world of cryptocurrencies presents unique
            challenges, it also offers exceptional opportunities for those
            willing to learn and adapt. Understanding the underlying
            technologies, market trends, and regulatory environments will
            empower investors to make informed decisions in this rapidly
            evolving space.
          </p>
        </section>
        <footer className="modal-container-footer">
          <button className="button cancel-button" onClick={onClose}>
            Cancel
          </button>
          <button className="button confirm-button" onClick={onClose}>
            I Accept
          </button>
        </footer>
      </article>
    </div>
  );
};

export default TermsAndConditions;

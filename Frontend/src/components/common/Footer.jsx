import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="container">

        <div className="row gy-5">

          {/* Brand */}

          <div className="col-lg-4">

            <h2 className="footer-logo">
              StyleAura
            </h2>

            <p className="footer-text">

              Discover timeless fashion crafted
              for confident women. Premium styles,
              elegant designs and effortless shopping.

            </p>

            <div className="social-icons">

              <a href="#">
                <i className="bi bi-instagram"></i>
              </a>

              <a href="#">
                <i className="bi bi-facebook"></i>
              </a>

              <a href="#">
                <i className="bi bi-pinterest"></i>
              </a>

              <a href="#">
                <i className="bi bi-youtube"></i>
              </a>

            </div>

          </div>

          {/* Quick Links */}

          <div className="col-6 col-lg-2">

            <h5>Quick Links</h5>

            <ul>

              <li>Home</li>

              <li>Shop</li>

              <li>New Arrivals</li>

              <li>Sale</li>

              <li>About</li>

            </ul>

          </div>

          {/* Categories */}

          <div className="col-6 col-lg-2">

            <h5>Categories</h5>

            <ul>

              <li>Kurtis</li>

              <li>Dresses</li>

              <li>Tops</li>

              <li>Sarees</li>

              <li>Co-ord Sets</li>

            </ul>

          </div>

          {/* Customer Care */}

          <div className="col-lg-4">

            <h5>Customer Care</h5>

            <ul className="contact-list">

              <li>

                <i className="bi bi-geo-alt"></i>

                Pune, Maharashtra

              </li>

              <li>

                <i className="bi bi-telephone"></i>

                +91 9876543210

              </li>

              <li>

                <i className="bi bi-envelope"></i>

                support@styleaura.com

              </li>

              <li>

                <i className="bi bi-truck"></i>

                Free Shipping Above ₹999

              </li>

              <li>

                <i className="bi bi-arrow-repeat"></i>

                Easy 7-Day Returns

              </li>

            </ul>

          </div>

        </div>

        <hr />

        <div className="copyright">

          © 2026 StyleAura. All Rights Reserved.

        </div>

      </div>

    </footer>
  );
}

export default Footer;
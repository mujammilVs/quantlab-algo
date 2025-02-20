import Link from "next/link";

const Footer1 = () => {
  return (
    <div className="footer-middle">
      <div className="container">
        <div className="subscribe-area">
          <div className="row ">
            <div className="col-lg-6 col-md-6">
              <div className="subscribe-title">
                <h1>Subscribe to our Newsletter</h1>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <form
                onSubmit={(e) => e.preventDefault()}
                action="https://formspree.io/f/myyleorq"
                method="POST"
                id="dreamit-form"
              >
                <div className="subscribe_form">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="form-control"
                    required=""
                    data-error="Please enter your email"
                    placeholder="Enter Your Email"
                  />
                  <button type="submit" className="btn">
                    Subscribe
                  </button>
                </div>
                <div className="subscribe_form_send"></div>
              </form>
              <div id="status" />
            </div>
          </div>
          <div className="subscribe-shape">
            <div className="subscribe-thumb bounce-animate5">
              <img src="assets/images/resource/small-dot.png" alt="" />
            </div>
            <div className="subscribe-thumb1">
              <img src="assets/images/resource/big-dot.png" alt="" />
            </div>
          </div>
        </div>
        <div className="footer-bg">
          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="widget widgets-company-info mb-4 mb-lg-0">
                <div className="company-info-desc pr-2">
                  <h4 className="widget-title"> About Us </h4>
                  <p>
                    we specialize in providing cutting-edge solutions for
                    algorithmic trading, empowering both novice and expert
                    traders with the tools they need to succeed in the
                    fast-paced financial markets.
                  </p>
                </div>
                <div className="follow-company-icon">
                  <a className="social-icon-color" href="#">
                    {" "}
                    <i className="bi bi-facebook" />{" "}
                  </a>
                  <a className="social-icon-color2" href="#">
                    {" "}
                    <i className="bi bi-instagram"> </i>{" "}
                  </a>
                  <a className="social-icon-color1" href="#">
                    {" "}
                    <i className="bi bi-twitter" />{" "}
                  </a>
                  <a className="social-icon-color3" href="#">
                    {" "}
                    <i className="bi bi-youtube" />{" "}
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-6">
              <div className="widget widget-nav-menu">
                <h4 className="widget-title">Quick Links</h4>
                <div className="menu-quick-link-content">
                  <ul className="footer-menu">
                    <li>
                      <a href="#"> Home </a>
                    </li>
                    <li>
                      <a href="#"> Strategies</a>
                    </li>
                    <li>
                      <a href="#"> Services</a>
                    </li>
                    <li>
                      <a href="#"> Pricing </a>
                    </li>
                    <li>
                      <a href="#"> About Us </a>
                    </li>
                    <li>
                      <a href="#"> Contact Us </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-6">
              <div className="widget widget-nav-menu">
                <h4 className="widget-title"> Services </h4>
                <div className="menu-quick-link-content">
                  <ul className="footer-menu">
                    <li>
                      <a href="#"> Custom Trading &amp; Algorithms </a>
                    </li>
                    <li>
                      <a href="#"> Risk Managment Solutions </a>
                    </li>
                    <li>
                      <a href="#"> Market Data Integrations </a>
                    </li>
                    <li>
                      <a href="#"> Real-Time Monitoring & Reportings </a>
                    </li>
                    <li>
                      <a href="#"> Market Research </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div id="em-recent-post-widget" className="mt-5 mt-sm-0">
                <div className="single-widget-item">
                  <h4 className="widget-title">Popular Posts</h4>
                  <div className="recent-post-item active">
                    <div className="recent-post-image">
                      <a href="#">
                        <img
                          width={80}
                          height={80}
                          src="assets/images/resource/footer-1.png"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="recent-post-text">
                      <h6>
                        <a href="#">The Feature of AI in Trading </a>
                      </h6>
                      <span className="rcomment">Dec 12, 2024</span>
                    </div>
                  </div>
                  <div className="recent-post-item">
                    <div className="recent-post-image">
                      <a href="#">
                        <img
                          width={80}
                          height={80}
                          src="assets/images/resource/footer-2.png"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="recent-post-text">
                      <h6>
                        <a href="#">Building Your First Trading Algorithm</a>
                      </h6>
                      <span className="rcomment">Dec 15, 2024</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="foorer-shape">
            <div className="footer-thumb">
              <img src="assets/images/resource/red-dot.png" alt="" />
            </div>
            <div className="footer-thumb1 bounce-animate2">
              <img src="assets/images/resource/all-shape.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div
        className="footer-bottom-area d-flex align-items-center"
        style={{ backgroundColor: "#fff" }}
      >
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-md-4">
              <div className="consen-logo">
                <Link legacyBehavior href="/">
                  <a className="logo_thumb" title="consen">
                    <img src="assets/images/logo.png" alt="logo" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-md-8">
              <div className="footer-bottom-content">
                <div className="footer-bottom-content-copy">
                  <p style={{ color: "#000" }}>
                    © 2024 <span>Quantlab</span> all rights reserved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer1;

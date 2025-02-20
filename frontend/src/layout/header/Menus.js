import Link from "next/link";

export const DaskTopMenusMenus = () => {
  return (
    <ul className="nav_scroll ">
      {" "}
      <li>
        <a href="/">
          Features{" "}
          <span>
            <i className="fas fa-angle-down" />
          </span>
        </a>
        <ul className="sub-menu">
          {" "}
          <li>
            <Link legacyBehavior href="/">
              TRADING ENGINE
            </Link>
          </li>{" "}
          <li>
            <Link legacyBehavior href="/">
              STRATEGY BUILDER
            </Link>
          </li>{" "}
          <li>
            <Link legacyBehavior href="/">
              <a>BACK TESTING ENGINE</a>
            </Link>
          </li>{" "}
          <li>
            <Link legacyBehavior href="/">
              <a>EXECUTION ALGOS</a>
            </Link>
          </li>
        </ul>
      </li>{" "}
      <li>
        <a href="/">
          Strategies{" "}
          <span>
            <i className="fas fa-angle-down" />
          </span>
        </a>
        <ul className="sub-menu">
          {" "}
          <li>
            <Link legacyBehavior href="/">
              Bull Call spread
            </Link>
          </li>{" "}
          <li>
            <Link legacyBehavior href="/">
              Bear put spread
            </Link>
          </li>{" "}
          <li>
            <Link legacyBehavior href="/">
              Bear call spread
            </Link>
          </li>{" "}
          <li>
            <Link legacyBehavior href="/">
              Bull put spread
            </Link>
          </li>{" "}
          <li>
            <Link legacyBehavior href="/">
              Covered call
            </Link>
          </li>{" "}
          <li>
            <Link legacyBehavior href="/">
              Long combo 
            </Link>
          </li>{" "}
          <li>
            <Link legacyBehavior href="/">
              Coller
            </Link>
          </li>{" "}
          <li>
            <Link legacyBehavior href="/">
              Protective call
            </Link>
          </li>
        </ul>
      </li>{" "}
      <li>
        <a href="/service">
          Services{" "}
          <span>
            <i className="fas fa-angle-down" />
          </span>
        </a>
        <ul className="sub-menu">
          {" "}
          <li>
            <Link legacyBehavior href="service">
              Custom Trading Algorithms
            </Link>
          </li>{" "}
          <li>
            <Link legacyBehavior href="service-details">
              Risk Management Solutions
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="service-details">
              Market Data Integration
            </Link>
          </li>{" "}
          <li>
            <Link legacyBehavior href="service-details">
              Real-time Monitoring & Reporting
            </Link>
          </li>
        </ul>
      </li>{" "}
      <li>
        <Link legacyBehavior href="pricing">
          Pricing
        </Link>
      </li>{" "}
      <li>
        <a href="/about">
          About Us{" "}
          <span>
            <i className="fas fa-angle-down" />
          </span>
        </a>
        <ul className="sub-menu">
          {" "}
          <li>
            <Link legacyBehavior href="blog-grid">
              Blog Gird
            </Link>
          </li>{" "}
          <li>
            <Link legacyBehavior href="blog-list">
              Blog List
            </Link>
          </li>{" "}
          <li>
            <Link legacyBehavior href="blog-2column">
              Blog-2Column
            </Link>
          </li>{" "}
          <li>
            <Link legacyBehavior href="blog-details">
              Blog Details
            </Link>
          </li>
        </ul>
      </li>{" "}
      <li>
        <Link legacyBehavior href="contact">
          Contact
        </Link>
      </li>
    </ul>
  );
};

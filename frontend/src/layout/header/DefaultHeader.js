// import Link from "next/link";
// import { DaskTopMenusMenus } from "./Menus";

// const DefaultHeader = () => {
//   return (
//     <div id="sticky-header" className="consen_nav_manu header____">
//       <div className="container">
//         <div className="row align-items-center">
//           <div className="col-lg-3">
//             <div className="logo">
//               <Link legacyBehavior href="/" className="logo_img">
//                 {/* <a  title="Quantlab"> */}
//                 <img src="assets/images/quantlogo.svg" alt="logo" width={60} />
//                 {/* </a> */}
//               </Link>
//               <Link legacyBehavior href="/" className="main_sticky">
//                 {/* <a  title="Quantlab"> */}
//                 <img src="assets/images/quantlogo.svg" alt="logo" width={40} />
//                 {/* </a> */}
//               </Link>
//             </div>
//           </div>
//           <div className="col-lg-9 pl-0 pr-0">
//             <nav className="consen_menu">
//               <DaskTopMenusMenus />
//               <div className="header-button">
//                 <Link legacyBehavior href="/contact">
//                   <a>Schedule Consultation</a>
//                 </Link>
//               </div>
//             </nav>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default DefaultHeader;










import { useEffect, useState } from "react";
import Link from "next/link";
import { DaskTopMenusMenus } from "./Menus";

const DefaultHeader = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      id="sticky-header"
      className={`consen_nav_manu header____ ${isSticky ? "sticky" : ""}`}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-3">
            <div className="logo">
              {/* Render the larger logo only when not sticky */}
              {!isSticky && (
                <Link legacyBehavior href="/" className="logo_img">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",

                      gap: "9px",
                    }}
                  >
                    <img
                      src="assets/images/quantlogo.svg"
                      alt="logo"
                      width={60}
                    />
                    <h3
                      style={{
                        fontSize: "24px",
                        marginBottom: "9px",
                        color: "#013465",
                      }}
                    >
                      Quantlab
                    </h3>
                  </div>
                </Link>
              )}
              {/* Render the smaller logo only when sticky */}
              {isSticky && (
                <Link legacyBehavior href="/" className="main_sticky">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "row",
                      gap: "9px",
                    }}
                  >
                    <img
                      src="assets/images/quantlogo.svg"
                      alt="logo"
                      width={60}
                      height={60}
                      style={{
                        backgroundColor: "white",
                        borderRadius: "50%",
                        padding: "4px",
                      }}
                    />
                    <h3
                      style={{
                        fontSize: "24px",
                        color: "white",
                        marginBottom: "9px",
                        alignItems: "center",
                      }}
                    >
                      Quantlab
                    </h3>
                  </div>
                </Link>
              )}
            </div>
          </div>
          <div className="col-lg-9 pl-0 pr-0">
            <nav className="consen_menu">
              <DaskTopMenusMenus />
              <div className="header-button">
                <Link legacyBehavior href="/contact">
                  <a>Login </a>
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DefaultHeader;

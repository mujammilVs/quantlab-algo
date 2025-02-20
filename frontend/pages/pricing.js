import Breadcumb from "@/src/components/Breadcumb";
import Layout from "@/src/layout/Layout";
const Pricing = () => {
  return (
    <Layout>
      <Breadcumb pageName={"Pricing"} />
      {/*==================================================*/}
      {/* Start Service Section */}
      {/*===================================================*/}
      <div className="pricing-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="consen-section-title upper text-center pb-60">
                <h5> Our Pricing </h5>
                <h2>
                  {" "}
                  Choose Your Best <span> Pricing Plans </span>
                </h2>
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-sm-12 col-md-6 col-lg-4">
              <div className="pricing-single-items">
                <div className="pricing-thumb pt-25">
                  <img
                    src="assets/images/resource/basic.png"
                    alt="Pricing Img"
                  />
                </div>
                <div className="pricing-title">
                  <h3>Business</h3>
                </div>
                <div className="pricing-item-text mb-15">
                  <span className="currency">₹</span>
                  <span className="tk">199</span>
                  <span className="month"> / mo </span>
                </div>
                <div className="pricing-body">
                  <div className="pricing-feature mb-40">
                    <ul>
                      <li>
                        <b>Basic Informations</b>
                      </li>
                      <li>Access to basic trading algorithms </li>
                      <li>Real-time market data </li>
                      <li>Risk management tools </li>
                      <li>Basic backgroundtesting </li>
                      <li>UEmail support</li>
                    </ul>
                  </div>
                </div>
                <div className="pricing-btn">
                  <div className="btn-common pc-btn mb-60">
                    <a href="#">Select Plan</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4 ">
              <div className="pricing-single-items style-2">
                <div className="pricing-thumb pt-25">
                  <img
                    src="assets/images/resource/standard.png"
                    alt="Pricing Img"
                  />
                </div>
                <div className="pricing-title">
                  <h3>Economy</h3>
                </div>
                <div className="pricing-item-text mb-15">
                  <span className="currency">₹</span>
                  <span className="tk">99</span>
                  <span className="month"> / mo </span>
                </div>
                <div className="pricing-body">
                  <div className="pricing-feature mb-40">
                    <ul>
                      <li>
                        <b>All starter Plan</b>
                      </li>
                      <li>Advanced algorithm options </li>
                      <li>Synced to cloud database </li>
                      <li>Unlimited strategy customization </li>
                      <li>Full back testing capabilities </li>
                      <li>Priority customer support</li>
                    </ul>
                  </div>
                </div>
                <div className="pricing-btn">
                  <div className="btn-common pc-btn mb-60">
                    <a href="#">Select Plan</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4 ">
              <div className="pricing-single-items">
                <div className="pricing-thumb pt-25">
                  <img
                    src="assets/images/resource/premium.png"
                    alt="Pricing Img"
                  />
                </div>
                <div className="pricing-title">
                  <h3>Premium</h3>
                </div>
                <div className="pricing-item-text mb-15">
                  <span className="currency">₹</span>
                  <span className="tk">149</span>
                  <span className="month"> / mo </span>
                </div>
                <div className="pricing-body">
                  <div className="pricing-feature mb-40">
                    <ul>
                      <li>
                        <b>All Pro Plan Features</b>
                      </li>
                      <li>Dedicated account Manager </li>
                      <li>High frequency trading support </li>
                      <li>Advanced analytics dashboard </li>
                      <li>Enhanced security data encryption </li>
                      <li>24/7 dedicated support</li>
                    </ul>
                  </div>
                </div>
                <div className="pricing-btn">
                  <div className="btn-common pc-btn mb-60">
                    <a href="#">Select Plan</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Pricing;

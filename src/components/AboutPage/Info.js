import React from "react";
import Title from "../Title";
import aboutBcg from "../../images/aboutBcg.jpeg";
export default function Info() {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-6 my-3">
            <img
              src={aboutBcg}
              className="img-fluid img-thumbnail"
              alt="about company"
              style={{ background: "var(--darkGrey)" }}
            />
          </div>
          <div className="col-10 mx-auto col-md-6 my-3">
            <Title title="about us" />
            <p className="text-lead text-muted my-3">
            Lumytive specializes in providing the best quality cosmetic products from Korea, along with extremely preferential promotions for customers. In addition, there is an exchange and payment mode when customers are not satisfied. We are committed to always serve customers with the best quality!
            </p>
            <p className="text-lead text-muted my-3">
              
Connect with Lumytive today and receive deals just for you. With Lumytive customers deserve the best!
            </p>
            <button
              className="main-link"
              type="button"
              style={{ marginTop: "2rem" }}
            >
              <a href="https://facebook.com/lumytive">more info</a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

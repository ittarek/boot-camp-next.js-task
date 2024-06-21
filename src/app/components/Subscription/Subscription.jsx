import React from "react";
import "./subscription.css";""
import Container from "../Container";
const Subscription = () => {
 

  return (
    <Container>
      <div className="newsletter-box newsletter-style is-box-none newsletter-box-1">
        <div className="newsletter-inner">
          <div className="newsletter-featured">
            <img
              decoding="async"
              loading="lazy"
              src="https://images.unsplash.com/photo-1585282263861-f55e341878f8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="newsletter featured"
              width="300"
              height="285"
            />
          </div>
          <div className="newsletter-content">
            <h2 className="newsletter-title">
              Unlock the Pulse of the Present
            </h2>
            <p className="newsletter-description">
              Subscribe Now for Real-time Updates on the Latest Stories!
            </p>
          </div>
          <div className="newsletter-form">
            <form
           
           
              method="post"
              data-id="1713"
              data-name="Form"
            >
              <div className="">
                <div>
                  <input
                    type="email"
                    name="EMAIL"
                    placeholder="Your email address"
                    required=""
                  />
                  <input type="submit" value="Sign Up Now" />
                </div>
                <div className="agree-to-terms">
                  <input
                    name="AGREE_TO_TERMS"
                    aria-label="checkbox"
                    type="checkbox"
                    value="1"
                    required=""
                  />
                  <label htmlFor="AGREE_TO_TERMS">
                    I have read and agree to the terms &amp; conditions
                  </label>
                </div>
              </div>
              <label style={{ display: "none" }}>
                Leave this field empty if you're human:{" "}
                <input
                  type="text"
                  name="title"
                  value=""
                  tabIndex="-1"
                  autoComplete="off"
                />
              </label>
              <input type="hidden" name="_mc4wp_timestamp" value="1710909464" />
              <input type="hidden" name="_mc4wp_form_id" value="1713" />
              <input
                type="hidden"
                name="email"
                value="it"
              />
              <div className="mc4wp-response"></div>
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Subscription;

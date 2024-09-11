import React from "react";
import "../../style/style.scss";

export default function Contact() {
  return (
    <div className="contact-wrapper" id="contact">
      <div className="contact">
        <div className="contact-content">
          <div className="contact-header">Chat With Me</div>
          <div className="contact-main">
            <div className="button-group">
              <div className="contact-button">
                <div className="contact-logo">
                  <img
                    src="https://cdn.dribbble.com/users/1551941/screenshots/6346538/thankyoudribble.gif"
                    alt="contactLogoImg"
                    className="contact-logo-img"
                  />
                </div>
                <div className="button-name">erisxie.xie@gmail.com</div>
              </div>
              <div className="contact-button">
                <div className="contact-logo">
                  <img
                    src="https://cdn.dribbble.com/users/4022914/screenshots/10861206/media/71132b94dae4fb9257dd07fbfe695f06.gif"
                    alt="contactLogoImg"
                    className="contact-logo-img"
                  />
                </div>
                <div className="button-name">+1 (669) - 256- 3323</div>
              </div>
            </div>
            <form className="contact-form">
              <div className="contact-field">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="inputbox"
                />
              </div>
              <div className="contact-field">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="inputbox"
                />
              </div>
              <div className="contact-field">
                <textarea
                  type="message"
                  placeholder="I would love to hear your MESSAGE!"
                  className="input-textarea"
                />
              </div>
              <button type="submit" className="contact-submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

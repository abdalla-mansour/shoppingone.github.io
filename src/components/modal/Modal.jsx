import React from 'react';
import { AiOutlineClose } from "react-icons/ai";
import News from "../../assets/logo/newsletter.png";

const Modal = () => {
    return (
    <div className="modal" data-modal>
    <div className="modal-close-overlay" data-modal-overlay></div>
    <div className="modal-content">
      <button className="modal-close-btn" data-modal-close>
        <AiOutlineClose />
      </button>
      <div className="newsletter-img">
        <img src={News} alt="subscribe newsletter" width="400" height="400" />
      </div>
      <div className="newsletter">
        <form action="#">
          <div className="newsletter-header">
            <h3 className="newsletter-title">Subscribe Newsletter.</h3>
            <p className="newsletter-desc">
              Subscribe the <b>Anon</b> to get latest products and discount update.
            </p>
          </div>
          <input type="email" name="email" className="email-field" placeholder="Email Address" required />
          <button type="submit" className="btn-newsletter">Subscribe</button>
        </form>
      </div>
    </div>
    </div>
    )
}

export default Modal;
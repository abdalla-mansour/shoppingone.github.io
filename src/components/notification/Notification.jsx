import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import Jewellery from "../../assets/products/jewellery-1.jpg";

const Notification = () => {
    return (
    <div className="notification-toast" data-toast>
    <button className="toast-close-btn" data-toast-close>
      <AiOutlineClose />
    </button>
    <div className="toast-banner">
      <img src={Jewellery} alt="Rose Gold Earrings" width="80" height="70" />
    </div>
    <div className="toast-detail">
      <p className="toast-message">
        Someone in new just bought
      </p>
      <p className="toast-title">
        Rose Gold Earrings
      </p>
      <p className="toast-meta">
        <time datetime="PT2M">2 Minutes</time> ago
      </p>
    </div>
    </div>

    )
}

export default Notification;
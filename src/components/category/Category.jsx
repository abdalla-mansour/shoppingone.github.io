import React from 'react';
import Dress from "../../assets/icons/dress.svg";
import Coat from "../../assets/icons/coat.svg";
import Glasses from "../../assets/icons/glasses.svg";
import Shorts from "../../assets/icons/shorts.svg";
import Tee from "../../assets/icons/tee.svg";
import Jacket from "../../assets/icons/jacket.svg";
import Watch from "../../assets/icons/watch.svg";
import Hat from "../../assets/icons/hat.svg";

const Category = () => {
    return (
    <div className="category">
      <div className="container">
        <div className="category-item-container has-scrollbar">
          <div className="category-item">
            <div className="category-img-box">
              <img src={Dress} alt="dress & frock" width="30" />
            </div>
            <div className="category-content-box">
              <div className="category-content-flex">
                <h3 className="category-item-title">Dress & frock</h3>
                <p className="category-item-amount">(53)</p>
              </div>
              <a href="#" className="category-btn">Show all</a>
            </div>
          </div>
          <div className="category-item">
            <div className="category-img-box">
              <img src={Coat} alt="winter wear" width="30" />
            </div>
            <div className="category-content-box">
              <div className="category-content-flex">
                <h3 className="category-item-title">Winter wear</h3>
                <p className="category-item-amount">(58)</p>
              </div>
              <a href="#" className="category-btn">Show all</a>
            </div>
          </div>
          <div className="category-item">
            <div className="category-img-box">
              <img src={Glasses} alt="glasses & lens" width="30" />
            </div>
            <div className="category-content-box">
              <div className="category-content-flex">
                <h3 className="category-item-title">Glasses & lens</h3>
                <p className="category-item-amount">(68)</p>
              </div>
              <a href="#" className="category-btn">Show all</a>
            </div>
          </div>
          <div className="category-item">
            <div className="category-img-box">
              <img src={Shorts} alt="shorts & jeans" width="30" />
            </div>
            <div className="category-content-box">
              <div className="category-content-flex">
                <h3 className="category-item-title">Shorts & jeans</h3>
                <p className="category-item-amount">(84)</p>
              </div>
              <a href="#" className="category-btn">Show all</a>
            </div>
          </div>
          <div className="category-item">
            <div className="category-img-box">
              <img src={Tee} alt="t-shirts" width="30" />
            </div>
            <div className="category-content-box">
              <div className="category-content-flex">
                <h3 className="category-item-title">T-shirts</h3>
                <p className="category-item-amount">(35)</p>
              </div>
              <a href="#" className="category-btn">Show all</a>
            </div>
          </div>
          <div className="category-item">
            <div className="category-img-box">
              <img src={Jacket} alt="jacket" width="30" />
            </div>
            <div className="category-content-box">
              <div className="category-content-flex">
                <h3 className="category-item-title">Jacket</h3>
                <p className="category-item-amount">(16)</p>
              </div>
              <a href="#" className="category-btn">Show all</a>
            </div>
          </div>
          <div className="category-item">
            <div className="category-img-box">
              <img src={Watch} alt="watch" width="30" />
            </div>
            <div className="category-content-box">
              <div className="category-content-flex">
                <h3 className="category-item-title">Watch</h3>
                <p className="category-item-amount">(27)</p>
              </div>
              <a href="#" className="category-btn">Show all</a>
            </div>
          </div>
          <div className="category-item">
            <div className="category-img-box">
              <img src={Hat} alt="hat & caps" width="30" />
            </div>
            <div className="category-content-box">
              <div className="category-content-flex">
                <h3 className="category-item-title">Hat & caps</h3>

                <p className="category-item-amount">(39)</p>
              </div>
              <a href="#" className="category-btn">Show all</a>
            </div>
          </div>
        </div>
      </div>
    </div>    
    )
}

export default Category;
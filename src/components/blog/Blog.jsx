import React from 'react';
import Blog1 from "../../assets/logo/blog-1.jpg";
import Blog2 from "../../assets/logo/blog-2.jpg";
import Blog3 from "../../assets/logo/blog-3.jpg";
import Blog4 from "../../assets/logo/blog-4.jpg";

const Blog = () => {
    return (
    <div class="blog">
      <div class="container">
        <div class="blog-container has-scrollbar">
          <div class="blog-card">
            <a href="#">
              <img src={Blog1} alt="Clothes Retail KPIs 2021 Guide for Clothes Executives" width="300" class="blog-banner" />
            </a>
            <div class="blog-content">
              <a href="#" class="blog-category">Fashion</a>
              <a href="#">
                <h3 class="blog-title">Clothes Retail KPIs 2021 Guide for Clothes Executives.</h3>
              </a>
              <p class="blog-meta">
                By <cite>Mr Admin</cite> / <time datetime="2022-04-06">Apr 06, 2022</time>
              </p>
            </div>
          </div>
          <div class="blog-card">
            <a href="#">
              <img src={Blog2} alt="Curbside fashion Trends: How to Win the Pickup Battle."
                class="blog-banner" width="300" />
            </a>
            <div class="blog-content">
              <a href="#" class="blog-category">Clothes</a>
              <h3>
                <a href="#" class="blog-title">Curbside fashion Trends: How to Win the Pickup Battle.</a>
              </h3>
              <p class="blog-meta">
                By <cite>Mr Robin</cite> / <time datetime="2022-01-18">Jan 18, 2022</time>
              </p>
            </div>
          </div>
          <div class="blog-card">
            <a href="#">
              <img src={Blog3} alt="EBT vendors: Claim Your Share of SNAP Online Revenue."
                class="blog-banner" width="300" />
            </a>
            <div class="blog-content">
              <a href="#" class="blog-category">Shoes</a>
              <h3>
                <a href="#" class="blog-title">EBT vendors: Claim Your Share of SNAP Online Revenue.</a>
              </h3>
              <p class="blog-meta">
                By <cite>Mr Selsa</cite> / <time datetime="2022-02-10">Feb 10, 2022</time>
              </p>
            </div>
          </div>
          <div class="blog-card">
            <a href="#">
              <img src={Blog4} alt="Curbside fashion Trends: How to Win the Pickup Battle."
                class="blog-banner" width="300" />
            </a>
            <div class="blog-content">
              <a href="#" class="blog-category">Electronics</a>
              <h3>
                <a href="#" class="blog-title">Curbside fashion Trends: How to Win the Pickup Battle.</a>
              </h3>
              <p class="blog-meta">
                By <cite>Mr Pawar</cite> / <time datetime="2022-03-15">Mar 15, 2022</time>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}

export default Blog;
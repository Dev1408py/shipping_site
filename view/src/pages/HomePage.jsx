import React from "react";
import { FiTruck } from "react-icons/fi";
import SearchBox from "../components/SearchBar";


const HomePage = () => {
  return (<>
    <main>
      <article>
        <section className="section hero" id="home">
          <div className="container">
            <div className="hero-content">

              <h1 className="h1 hero-title">
              LEADER IN
              <i> SHIPPING & LOGISTICS</i>
              </h1>

              <p className="hero-text">
              "Fast, reliable shipping at competitive rates"<br></br>
              "Get it there on time, every time"
              "Your one-stop shop for all your shipping needs"
              </p>

              <div className="btn-group">
                <a href="#" className="btn btn-primary">
                  Support More
                </a>

                <button className="flex-btn">
                  <div className="btn-icon">
                    <FiTruck />
                  </div>

                  <span className="span">How it works</span>
                </button>
              </div>
            </div>
            <figure
              className="hero-banner has-before img-holder"
              style={{ "--width": 550, "--height": 550 }}
            >
              <img
                src="/image_ship.jpg"
                width="650"
                height="650"
                alt="hero banner"
                className="img-cover"
              />
            </figure>
          </div>
        </section>
      </article>
    </main>
    <SearchBox></SearchBox>
    <br></br>
    <br></br>
    <br></br>
    
    </>
    
  );
};

export default HomePage;


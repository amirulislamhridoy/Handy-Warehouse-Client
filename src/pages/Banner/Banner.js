import React from "react";
import banner1 from "../../photos/banner/banner1.jpg";
import banner2 from "../../photos/banner/banner2.jpg";
import banner3 from "../../photos/banner/banner3.jpg";
import './Banner.css'

const Banner = () => {
  return (
    <div className='container banner-container'>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="false"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active bg-warning"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
            className="bg-warning"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
            className="bg-warning"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={banner1} className="d-block w-100"alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5 className="text-danger">Yamaha R!5 v3</h5>
              <p className="text-danger">
                This is largest popular bike in Bangladesh.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={banner3} className="d-block w-100"alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5 className="text-warning">Kawasaki 650</h5>
              <p className="text-warning">
                Some representative placeholder content for the second slide.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={banner2} className="d-block w-100"alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5 className="text-secondary">SUZUKI GSX R</h5>
              <p className="text-secondary">
                Some representative placeholder content for the third slide.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

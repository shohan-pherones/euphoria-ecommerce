import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

export default class Testimonials extends Component {
  render() {
    return (
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}
      >
        <div>
          <Image
            src="https://i.ibb.co/WzBkpr1/albert-dera-ILip77-Sbm-OE-unsplash.jpg"
            alt="person-1"
            width={500}
            height={500}
          />
          <div className="myCarousel">
            <h3>John Doe</h3>
            <h4>Accountant</h4>
            <p>
              As an accountant, time is crucial for me. Thanks to Euphoria, I
              can now order all the office supplies I need with just a few
              clicks. The user-friendly interface of the website and quick
              delivery saves me valuable time.
            </p>
          </div>
        </div>

        <div>
          <Image
            src="https://i.ibb.co/93fMJ0d/2.jpg"
            alt="person-2"
            width={500}
            height={500}
          />
          <div className="myCarousel">
            <h3>Sarah</h3>
            <h4>Teacher</h4>
            <p>
              As a teacher, I often find it challenging to source relevant
              teaching materials. However, ever since I discovered the
              e-commerce website, my teaching resources have expanded
              significantly.
            </p>
          </div>
        </div>

        <div>
          <Image
            src="https://i.ibb.co/bsJ0KyX/5.jpg"
            alt="person-3"
            width={500}
            height={500}
          />
          <div className="myCarousel">
            <h3>Theo Sorel</h3>
            <h4>Small Business Owner</h4>
            <p>
              As a small business owner, the e-commerce website has been a
              game-changer for me. It provides a platform to showcase and sell
              my products to a vast customer base without the need for a
              physical store.
            </p>
          </div>
        </div>

        <div>
          <Image
            src="https://i.ibb.co/3dggfYN/6.jpg"
            alt="person-4"
            width={500}
            height={500}
          />
          <div className="myCarousel">
            <h3>Teresa Fowler</h3>
            <h4>Designer</h4>
            <p>
              Being a freelance designer, I rely heavily on finding unique and
              high-quality art supplies. The platform offers a diverse range of
              products from various sellers, allowing me to explore new
              materials and discover hidden gems.
            </p>
          </div>
        </div>
      </Carousel>
    );
  }
}

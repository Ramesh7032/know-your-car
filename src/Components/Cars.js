/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import { useState, useEffect } from "react";
import "./Cars.css";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectCoverflow } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import SwiperCore from "swiper";
import web1 from "./Free_Sample_By_Wix.jpg";
import car from "./cars-removebg-preview.png";
import "swiper/css/autoplay";
import { AiOutlineFacebook } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiOutlineYoutube } from "react-icons/ai";
import app from "./appstore.png";
import app1 from "./playstore.webp";
import { AiOutlineUser } from "react-icons/ai";

export default function Cars() {
  const [Rcar, setRcar] = useState([]);
  // const [selectedBrand, setSelectedBrand] = useState('');
  useEffect(() => {
    fetch("https://know-your-car-server.vercel.app/user")
      .then((res) => res.json())
      .then((ans) => setRcar(ans))
      .catch((err) => console.log(err.message));
  }, []);
  // Rcar.map(car => console.log(car.brand))
  console.log(Rcar);
  const bmw = [];
  const Audi = [];
  const LR = [];
  const mercedes = [];
  const L = [];
  const F = [];
  const Rolls = [];
  for (let i in Rcar) {
    if (Rcar[i].brand === "BMW") bmw.push(Rcar[i]);
    else if (Rcar[i].brand === "Audi") Audi.push(Rcar[i]);
    else if (Rcar[i].brand === "Land-Rover") LR.push(Rcar[i]);
    else if (Rcar[i].brand === "Mercedes") mercedes.push(Rcar[i]);
    else if (Rcar[i].brand === "Ferrari") F.push(Rcar[i]);
    else if (Rcar[i].brand === "Lamborghini") L.push(Rcar[i]);
    else if (Rcar[i].brand === "Lamborghini") L.push(Rcar[i]);
    else if (Rcar[i].brand === "Rolls-Royce") Rolls.push(Rcar[i]);
  }
  console.log(bmw);
  return (
    <div className="main">
      <div className="main1">
        <div className="header">
          <nav class="nav">
            <img src={web1} width="150" height="110" alt="" className="logo1" />

            <div className="select-Container">
              <select className="select-box">
                <option value=""> CAR MODELS</option>
                <option value="first">
                  {" "}
                  <Link to="/Lamborghini">Lamborghini</Link>
                </option>

                <option value="second">Ferrari</option>
                <option value="third">Mercedes</option>
                <option value="third">BMW</option>
                <option value="third">Audi</option>
                <option value="third">Rolls-Royce</option>
                <option value="third">Land-Rover</option>
              </select>
            </div>

            <ul>
              <li className="list">
                <p>
                  <Link to="/about">ABOUT US </Link>
                </p>
              </li>

              <li>
                <Link to="/login" className="signin-link">
                  {" "}
                  <p>
                    <AiOutlineUser />
                    SIGNIN
                  </p>
                </Link>
              </li>
            </ul>
          </nav>

          {/* <h1 className='header0'>Know Your Car</h1> */}

          {/* <img src={web} alt='ramesh' width={200} height={100} className='logo'/> */}
        </div>
      </div>

      <div className="car">
        <h2 className="rolls">
          {" "}
          Mercedes{" "}
          <Link to="/mercedes">
            {" "}
            <span className="spanh2">View All</span>{" "}
          </Link>
        </h2>
      </div>
      <div className="rolls-swipe">
        <Swiper
          loop={true}
          slidesPerView={3}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          className="swiper_container"
        >
          {mercedes.map((car) => (
            <SwiperSlide>
              <Link
                to={`/${car._id}`}
                key={car._id}
                style={{ textDecoration: "none" }}
              >
                <div className="swiper0">
                  <div className="swiper-img">
                    <img src={car.img} alt="wf" width={300} height={200} />
                  </div>
                  <h3 className="header3">{car.title}</h3>{" "}
                </div>
              </Link>
            </SwiperSlide>
          ))}
          <div className="slider-controler">
            <div className="swiper-button-prev slider-arrow">
              <ion-icon name="arrow-back-outline"></ion-icon>
            </div>
            <div className="swiper-button-next slider-arrow">
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>
      </div>

      <div className="car">
        <h2 className="rolls">
          {" "}
          Audi{" "}
          <Link to="/audi">
            {" "}
            <span className="spanh2">View All</span>{" "}
          </Link>
        </h2>
      </div>
      <div className="rolls-swipe">
        <Swiper
          loop={true}
          slidesPerView={3}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          className="swiper_container"
        >
          {Audi.map((car) => (
            <SwiperSlide>
              <Link
                to={`/${car._id}`}
                key={car._id}
                style={{ textDecoration: "none" }}
              >
                <div className="swiper0">
                  <div className="swiper-img">
                    <img src={car.img} alt="wf" width={300} height={200} />
                  </div>
                  <h3 className="header3">{car.title}</h3>{" "}
                </div>
              </Link>
            </SwiperSlide>
          ))}
          <div className="slider-controler">
            <div className="swiper-button-prev slider-arrow">
              <ion-icon name="arrow-back-outline"></ion-icon>
            </div>
            <div className="swiper-button-next slider-arrow">
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>
      </div>

      <div className="car">
        <h2 className="rolls">
          {" "}
          BMW{" "}
          <Link to="/bmw">
            {" "}
            <span className="spanh2">View All</span>{" "}
          </Link>
        </h2>
      </div>
      <div className="rolls-swipe">
        <Swiper
          loop={true}
          slidesPerView={3}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          className="swiper_container"
        >
          {bmw.map((car) => (
            <SwiperSlide>
              <Link
                to={`/${car._id}`}
                key={car._id}
                style={{ textDecoration: "none" }}
              >
                <div className="swiper0">
                  <div className="swiper-img">
                    <img src={car.img} alt="wf" width={300} height={200} />
                  </div>
                  <h3 className="header3">{car.title}</h3>{" "}
                </div>
              </Link>
            </SwiperSlide>
          ))}
          <div className="slider-controler">
            <div className="swiper-button-prev slider-arrow">
              <ion-icon name="arrow-back-outline"></ion-icon>
            </div>
            <div className="swiper-button-next slider-arrow">
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>
      </div>

      <div className="car">
        <h2 className="rolls">
          {" "}
          Lamborghini{" "}
          <Link to="/Lamborghini">
            <span className="spanh2">View All</span>
          </Link>{" "}
        </h2>
      </div>
      <div className="rolls-swipe">
        <Swiper
          loop={true}
          slidesPerView={3}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          className="swiper_container"
        >
          {L.map((car) => (
            <SwiperSlide className="swiper2">
              <Link
                to={`/${car._id}`}
                key={car._id}
                style={{ textDecoration: "none" }}
              >
                <div>
                  <div>
                    <img src={car.img} alt="wf" />
                  </div>
                  <h3 className="header3">{car.title}</h3>{" "}
                </div>
              </Link>
            </SwiperSlide>
          ))}
          <div className="slider-controler">
            <div className="swiper-button-prev slider-arrow">
              <ion-icon name="arrow-back-outline"></ion-icon>
            </div>
            <div className="swiper-button-next slider-arrow">
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>
      </div>

      <div className="car">
        <h2 className="rolls">
          {" "}
          Ferrari{" "}
          <Link to="/ferrari">
            {" "}
            <span className="spanh2">View All</span>
          </Link>
        </h2>
      </div>
      <div className="rolls-swipe">
        <Swiper
          loop={true}
          slidesPerView={3}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          className="swiper_container"
        >
          {F.map((car) => (
            <SwiperSlide>
              <Link
                to={`/${car._id}`}
                key={car._id}
                style={{ textDecoration: "none" }}
              >
                <div className="swiper0">
                  <div className="swiper-img">
                    <img src={car.img} alt="wf" width={200} height={180} />
                  </div>
                  <h3 className="header3">{car.title}</h3>{" "}
                </div>
              </Link>
            </SwiperSlide>
          ))}
          <div className="slider-controler">
            <div className="swiper-button-prev slider-arrow">
              <ion-icon name="arrow-back-outline"></ion-icon>
            </div>
            <div className="swiper-button-next slider-arrow">
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>
      </div>

      <div className="car">
        <h2 className="rolls">
          {" "}
          Land Rover{" "}
          <Link to="/rangerover">
            <span className="spanh2">View All</span>{" "}
          </Link>
        </h2>
      </div>
      <div className="rolls-swipe">
        <Swiper
          loop={true}
          slidesPerView={3}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          className="swiper_container"
        >
          {LR.map((car) => (
            <SwiperSlide>
              <Link
                to={`/${car._id}`}
                key={car._id}
                style={{ textDecoration: "none" }}
              >
                <div className="swiper0">
                  <div className="swiper-img">
                    <img src={car.img} alt="wf" width={300} height={200} />
                  </div>
                  <h3 className="header3">{car.title}</h3>{" "}
                </div>
              </Link>
            </SwiperSlide>
          ))}
          <div className="slider-controler">
            <div className="swiper-button-prev slider-arrow">
              <ion-icon name="arrow-back-outline"></ion-icon>
            </div>
            <div className="swiper-button-next slider-arrow">
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>
      </div>

      <div className="car">
        <h2 className="rolls">
          Rolls-Royce{" "}
          <Link to="/rolls-royce">
            {" "}
            <span className="spanh2">View All</span>{" "}
          </Link>
        </h2>
      </div>
      <div className="rolls-swipe">
        {
          // Rolls.map((car) => (
          //       <div key={car._id} className='sliderimg'>
          //       <Link to={`/${car._id}`} >
          //           <p><img src={car.img} alt='rbde' width={200} /></p>
          //           <h3>{car.title}</h3>
          //       </Link>
          //           </div>
          //   ))
        }
        <Swiper
          loop={true}
          slidesPerView={3}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          className="swiper_container"
        >
          {Rolls.map((car) => (
            <SwiperSlide className="images">
              <Link
                to={`/${car._id}`}
                key={car._id}
                style={{ textDecoration: "none" }}
                className="link"
              >
                <div className="swiper0">
                  <div className="swiper-img">
                    <img
                      src={car.img}
                      alt="wf"
                      width={250}
                      height={180}
                      className="image"
                    />
                  </div>
                  <h3 className="header3">{car.title}</h3>{" "}
                </div>
              </Link>
            </SwiperSlide>
          ))}
          <div className="slider-controler">
            <div className="swiper-button-prev slider-arrow">
              <ion-icon name="arrow-back-outline"></ion-icon>
            </div>
            <div className="swiper-button-next slider-arrow">
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>
      </div>

      <hr></hr>
      <div className="foot">
        <div className="foot1">
          <h5 className="foothead">ABOUT KNOWYOURCAR</h5>
          <p className="foot2">
            <Link to="/about">About</Link>
          </p>
          <p className="foot2">Careers with Us</p>
          <p className="foot2">Terms & Conditions</p>
          <p className="foot2">Privacy Policy</p>
          <p className="foot2">Corporate Policies</p>
          <p className="foot2">FAQs</p>
        </div>

        <div className="foot1">
          <h5 className="foothead">CONNECT WITH US</h5>
          <p className="foot2">Feedback</p>
          <p className="foot2">Contact Us</p>
          <p className="foot2">Advertise with us</p>
        </div>

        <div className="foot1">
          <h5 className="foothead">OTHERS</h5>
          <p className="foot2">Health Insurance</p>
          <p className="foot2">Term life insurance</p>
          <p className="foot2">Crack-Ed</p>
          <p className="foot2">Girnar Vision Fund</p>
        </div>

        <div className="foot1">
          <h5 className="foothead">EXPERIENCE KNOW APP </h5>
          <div className="image100">
            <img src={app} width={80} alt="" className="ima" />
            <img src={app1} width={80} alt="" />
          </div>
        </div>
      </div>
      <hr></hr>
      <div className="last0">
        <div className="last">
          <p className="pa">@2023 Prince Software Pvt Ltd</p>
        </div>
        <div className="last1">
          <p className="head5">Connect: </p>
          <AiOutlineFacebook className="logof" />
          <AiOutlineInstagram className="logof" />
          <AiOutlineLinkedin className="logof" />
          <AiOutlineYoutube className="logof" />
        </div>
      </div>
      <hr></hr>
    </div>
  );
}

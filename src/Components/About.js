import React from "react";
import "./Cars.css";
import web1 from "./Free_Sample_By_Wix.jpg";
import { Link } from "react-router-dom";
import "./About.css";
import { SlBadge } from "react-icons/sl";
import { BiSolidCarMechanic } from "react-icons/bi";
import { MdOutlineLocalOffer } from "react-icons/md";
import app from "./appstore.png";
import app1 from "./playstore.webp";
import { AiOutlineFacebook } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiOutlineYoutube } from "react-icons/ai";

export default function About() {
  return (
    <div className="about">
      <div className="header-about">
        <nav class="nav">
          <img src={web1} width="150" height="110" alt="" className="logo1" />
        </nav>
        <div className="list22">
          <Link to="/" className="linka">
            {" "}
            <p>Home</p>{" "}
          </Link>
          <Link to="/login" className="linka">
            <p>SignIn</p>{" "}
          </Link>
        </div>
      </div>
      <div className="about1">
        <h2 className="about2">About Know Your Car</h2>
        <div className="para">
          <p className="about3">
            Know Your Car is an car search venture that helps users buy cars
            that are right for them. Its website and app carry rich automotive
            content such as expert reviews, detailed specs and prices,
            comparisons as well as videos and pictures of all car brands and
            models available in India. The company has tie-ups with many auto
            manufacturers, more than 4000 car dealers and numerous financial
            institutions to facilitate the purchase of vehicles.
          </p>
          <p className="about3">
            KnowYourCar.com has launched many innovative features to ensure that
            users get an immersive experience of the car model before visiting a
            dealer showroom. These include a Feel The Car tool that gives full
            details of the car and explanations of features with videos; search
            and comparison by make, model, price, features; and live offers and
            promotions in all cities
          </p>
          <p className="about3">
            Besides the above consumer product features, KnowYourCar.com
            provides a rich array of tech-enabled tools to OE manufacturers and
            car dealers. These include apps for dealer sales executives to
            manage leads, cloud services for tracking sales performance, call
            tracker solution, digital marketing support, virtual online showroom
            and outsourced lead management operational process for taking
            consumers from enquiry to sale.
          </p>
          <p className="about3">
            Our vision is to construct a complete ecosystem for consumers and
            car manufacturers, dealers and related businesses such that
            consumers have easy and complete access to not only buying and
            selling cars, but also manage their entire ownership experience, be
            it accessories, tyres, batteries, insurance or roadside assistance.
          </p>
        </div>

        <div className="badge0">
          <div className="about4">
            <div className="badge">
              <p className="badge1">
                <SlBadge />
              </p>
            </div>
            <div className="badge2">
              <h2>india's #1</h2>
              <p className="para1"> Largest Auto portal</p>
            </div>
          </div>

          <div className="about4">
            <div className="badge">
              <p className="badge1">
                <BiSolidCarMechanic />
              </p>
            </div>
            <div className="badge2">
              <h2>Car sold</h2>
              <p className="para1">Every 4 minute</p>
            </div>
          </div>

          <div className="about4">
            <div className="badge">
              <p className="badge1">
                <MdOutlineLocalOffer />
              </p>
            </div>
            <div className="badge2">
              <h2>Offers</h2>
              <p className="para1">Stay updated pay less</p>
            </div>
          </div>

          <div className="about4">
            <div className="badge">
              <p className="badge1">
                <BiSolidCarMechanic />
              </p>
            </div>
            <div className="badge2">
              <h2>Compare</h2>
              <p className="para1">Decode the right car</p>
            </div>
          </div>
        </div>
      </div>
      <hr></hr>
      <div className="foot">
        <div className="foot1">
          <h5 className="foothead">ABOUT KNOWYOURCAR</h5>
          <p className="foot2">About</p>
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

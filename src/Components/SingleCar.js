import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import "./Single.css";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { PiEngine } from "react-icons/pi";
import { BsFuelPumpDiesel } from "react-icons/bs";
import { AiTwotoneThunderbolt } from "react-icons/ai";
import { GiCarSeat } from "react-icons/gi";

const SingleCar = () => {
  const params = useParams();
  console.log(params.id);
  const [singlecar, setSingleCar] = useState({});

  useEffect(() => {
    fetch(`https://know-your-car-server.vercel.app/user/${params.id}`)
      .then((res) => res.json())
      .then((ans) => setSingleCar(ans))
      .catch((err) => console.log(err.message));
  }, [params.id]);
  console.log(singlecar);
  return (
    <div className="demo">
      {singlecar ? (
        <div className="main0">
          <div className="main21">
            <img
              src={singlecar.img}
              alt="r"
              width={450}
              height={290}
              className="image1"
            />
            <div className="details">
              <h2 className="head2">{singlecar.title}</h2>
              <p className="head3">
                <LiaRupeeSignSolid />
                {singlecar.price}
                <span className="span2">Get On Road Price</span>
              </p>
            </div>
          </div>

          <p className="keyspec">Key Specs of {singlecar.title}</p>
          <div className="specs">
            <div className="specs1">
              <h2>
                <PiEngine />
              </h2>
              <p className="specs12">Engine</p>
              <span className="span12">{singlecar.engine}</span>
            </div>
            <div className="specs1">
              <h2>
                <AiTwotoneThunderbolt />
              </h2>
              <p className="specs12">BHP</p>
              <span className="span12">{singlecar.power_torque}</span>
            </div>
            <div className="specs1">
              <h2>
                <BsFuelPumpDiesel />{" "}
              </h2>
              <p className="specs12">Fual</p>
              <span className="span12">{singlecar.fual_type}</span>
            </div>

            <div className="specs1">
              <h2>
                <GiCarSeat />{" "}
              </h2>
              <p className="specs12">Seating</p>
              <span className="span12">{singlecar.seating}</span>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default SingleCar;

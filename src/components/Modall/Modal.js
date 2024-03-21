import React from "react";
// import car from "../../images/image1.png";
import { AiTwotoneCloseCircle } from "react-icons/ai";
import "./Modal.css";

const Modal = ({
  isOpen,
  onClose,
  description,
  make,
  model,
  year,
  rentalPrice,
  city,
  country,
  rentalCompany,
  type,
  image,
  id,
  accessories,
  fuelConsumption,
  engineSize,
}) => {
  return (
    <>
      {isOpen && (
        <div className="modal" onClick={() => onClose()}>
          <section
            className="modalMain"
            onClick={(event) => event.stopPropagation()}
          >
            <button className="modalIconCloseButton" onClick={() => onClose()}>
              <AiTwotoneCloseCircle className="modalIcon" />
            </button>
            <img src={image} className="car" alt="car" />
            <div className="modalMainPieceone">
              <h3 className="modalMainPieceoneTitle">
                {make} <span className="modalMainPieceoneSpan">{model}</span>,{" "}
                {year}
              </h3>
              <div className="modalMainPieceoneFrame">
                <div className="modalMainPieceoneFrameSub">
                  <div className="modalMainFrameEl">{city}</div>
                  <div className="modalMainFrameEl">{country}</div>
                  <div className="modalMainFrameEl">Id: {id}</div>
                  <div className="modalMainFrameEl">Year: {year}</div>
                  <div className="modalMainFrameEl">Type: {type}</div>
                </div>
                <div className="modalMainPieceoneFrameSub">
                  <div className="modalMainFrameEl">
                    Fuel Consumption: {fuelConsumption}
                  </div>
                  <div className="modalMainFrameEl">
                    Engine Size: {engineSize}
                  </div>
                </div>
              </div>
              <p className="modalMainContent">{description}</p>
            </div>
            <div className="modalMainPieceone">
              <p className="modalMainPieceoneTitle2">
                Accessories and functionalities:
              </p>
              <div className="modalMainPieceoneFrame">
                <div className="modalMainPieceoneFrameSub">
                  <div className="modalMainFrameEl">{accessories}</div>
                  <div className="modalMainFrameEl">Panoramic sunroof</div>
                  <div className="modalMainFrameEl">Power liftgate</div>
                </div>
                <div className="modalMainPieceoneFrameSub">
                  <div className="modalMainFrameEl">Premium audio system</div>
                  <div className="modalMainFrameEl">Remote start</div>
                  <div className="modalMainFrameEl">Blind-spot monitoring</div>
                </div>
              </div>
            </div>
            <div className="modalMainPieceone">
              <p className="modalMainPieceoneTitle2">Rental Conditions:</p>
              <div className="modalMainPieceoneFrameInfo">
                <div className="modalMainPieceoneFrameSub">
                  <div className="modalMainFrameBtn2">
                    Minimum age:{" "}
                    <span className="modalMainPieceoneSpan2">25</span>
                  </div>
                  <div className="modalMainFrameBtn">{rentalCompany}</div>
                </div>
                <div className="modal-main-pieceone-frame-sub">
                  <div className="modalMainFrameBtn">
                    Security deposite required
                  </div>
                </div>
              </div>
            </div>
            <div>
              <button type="button" className="btn" onClick={() => onClose()}>
                Favorite
              </button>
            </div>
          </section>
        </div>
      )}
    </>
  );
};

export default Modal;

import css from "./Modal.module.css";
import car from "../../images/image1.png";

const Modal = ({ handleClose, show }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className={css.modalMain}>
        <img src={car} className="car" alt="car" />
        <div className="modal-main-pieceone">
          <h3 className="modal-main-pieceone-title">
            Buick <span className="modal-main-pieceone-span">Enclave</span>,
            2008
          </h3>
          <div className="modal-main-pieceone-frame">
            <div className="modal-main-pieceone-frame-sub">
              <div className="modal-main-frame-el">Kiev</div>
              <div className="modal-main-frame-el">Ukraine</div>
              <div className="modal-main-frame-el">Id: 9582</div>
              <div className="modal-main-frame-el">Year: 2008</div>
              <div className="modal-main-frame-el">Type: Suv</div>
            </div>
            <div className="modal-main-pieceone-frame-sub">
              <div className="modal-main-frame-el">Fuel Consumption: 10.5</div>
              <div className="modal-main-frame-el">Engine Size: 3.6L V6</div>
            </div>
          </div>
          <p className="modal-main-content">
            The Buick Enclave is a stylish and spacious SUV known for its
            comfortable ride and luxurious features.
          </p>
        </div>
        <div className="modal-main-pieceone">
          <p className="modal-main-pieceone-title2">
            Accessories and functionalities:
          </p>
          <div className="modal-main-pieceone-frame">
            <div className="modal-main-pieceone-frame-sub">
              <div className="modal-main-frame-el">Leather seats</div>
              <div className="modal-main-frame-el">Panoramic sunroof</div>
              <div className="modal-main-frame-el">Power liftgate</div>
            </div>
            <div className="modal-main-pieceone-frame-sub">
              <div className="modal-main-frame-el">Premium audio system</div>
              <div className="modal-main-frame-el">Remote start</div>
              <div className="modal-main-frame-el">Blind-spot monitoring</div>
            </div>
          </div>
        </div>
        <div className="modal-main-pieceone">
          <p className="modal-main-pieceone-title2">Rental Conditions:</p>
          <div className="modal-main-pieceone-frame-info">
            {/* <div className="modal-main-pieceone-frame-sub"> */}
            <div className="modal-main-frame-btn2">
              Minimum age: <span className="modal-main-pieceone-span2">25</span>
            </div>
            <div className="modal-main-frame-btn">Valid driver’s license</div>
            {/* </div> */}
            {/* <div className="modal-main-pieceone-frame-sub"> */}
            <div className="modal-main-frame-btn">
              Security deposite required
            </div>
            <div className="modal-main-frame-btn2">
              Mileage: <span className="modal-main-pieceone-span2">5,858</span>
            </div>
            <div className="modal-main-frame-btn2">
              Price: <span className="modal-main-pieceone-span2">40$</span>
            </div>
            {/* </div> */}
          </div>
        </div>
        <button type="button" className="btn" onClick={handleClose}>
          Good car
        </button>
      </section>
    </div>
  );
};
export default Modal;

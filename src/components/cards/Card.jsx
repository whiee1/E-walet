import { useDispatch, useSelector } from "react-redux";
import { cardClick, changeActiveCard } from "./cardListSlice";
import Test from "./Test";

//Funkar!

const Card = ({ card }) => {
  const { userName } = useSelector((state) => state.user);
  const { cardNumber, validThru, ccv, vendor, active, month, year } = card;

  const dispatch = useDispatch();

  console.log(vendor);
  // TA BORT br efter styling

  return (
    <>
      <span className="vendorSpan">
        {vendor && (
          <img className="img" src={require(`./images/${vendor}.png`)} />
        )}
      </span>{" "}
      <span>
        <img className="blipp" src={require(`./images/blipp.png`)} />
      </span>
      <span className="cardNumbeSpan"> {cardNumber}</span>
      <br />
      <div className="nameOnCardContainer">
        <span className="nameOnCard "> {userName} </span>
        <div className="validThrueContainer">
          <span className="validThruSpan">VALID THRU</span>

          <span> {validThru}</span>
        </div>
      </div>
    </>
  );
};
export default Card;

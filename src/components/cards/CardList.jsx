import Card from "./Card";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Routes, Route, Link } from "react-router-dom";

import { changeActiveCard, deleteCard } from "./cardListSlice";

// Funkar

const CardList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let onNavigate = (page) => {
    navigate(page);
  };

  const { cards } = useSelector((state) => state.cardList);

  const activeCard = cards.find((card) => card.active);
  const activeCards = [activeCard];
  const inactiveCards = cards.filter((card) => !card.active, []);

  return (
    <>
      <button onClick={() => onNavigate("/addcard")}>Add new card</button>
      {/* <div className="cardList"> */}
      {activeCards.map((card, i) => {
        return (
          <div className="activeCardContainer" key={i}>
            {/* <div className={getStyling() + " card"}> */}
            <div className={`${card.vendor} card`}>
              <Card card={card} />
            </div>
          </div>
        );
      })}
      {/* </div> */}
      {/* <div className="cardList"> */}
      <div className="inactivCardContainer">
        {inactiveCards.map((card, i) => {
          return (
            <>
              <div className={`${card.vendor} card`}>
                <Card card={card} />
              </div>

              <button
                className={!card.active ? "activatedButton" : "inactiveButton"}
                onClick={() => dispatch(changeActiveCard(card.key))}
                //dispatch(changeActiveCard(card.cardNumber))}
              >
                Make active
              </button>
              <button
                className="deleteBtn"
                onClick={() => dispatch(deleteCard(card.key))}
                //dispatch(changeActiveCard(card.cardNumber))}
              >
                Delete Card
              </button>
            </>
          );
        })}
      </div>
      {/* </div> */}
    </>
  );
};
export default CardList;

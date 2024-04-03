import closedIcon from "../assets/icons/closed-icon.svg";
import openedIcon from "../assets/icons/opened-icon.svg";
import "../styles/Duvida.css";

export default function Duvida({ question, answer, isOpened, toggle }) {
  return (
    <>
      <div className="duvidas-content">
        <div className="duvidas-content--title" onClick={toggle}>
          <h3>{question}</h3>
          <img src={isOpened ? openedIcon : closedIcon} alt="" />
        </div>
        {isOpened && (
          <div className="duvidas-content--desc">
            <p>{answer}</p>
          </div>
        )}
      </div>
    </>
  );
}

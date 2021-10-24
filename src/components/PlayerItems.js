import "./PlayerItems.css";

const PlayerItems = ({ playersList, setDetailResult }) => {
  return (
    <div className="expanse-item" onClick={() => setDetailResult(playersList)}>
      <h2 className="expanse-item-titles">{playersList.Name}</h2>
      <div className="card-box">
        <h2 className="expanse-item-title">{playersList.Nationality}</h2>
        <div className="expanse-item-expanse">Age {playersList.Age}</div>
      </div>
    </div>
  );
};

export default PlayerItems;

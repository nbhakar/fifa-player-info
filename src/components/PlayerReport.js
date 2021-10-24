import "./PlayerReport.css";
import Graph from "./Graph";

const PlayerReport = ({ detailResult,setDetailResult, setSearchResults }) => {

  const changeHandler = () => {
    setSearchResults([]);
    setDetailResult(null);
  }
  return (
    <div className="details-box">
      <div className="navbar">
        <button className="back-button" onClick={changeHandler} ><i class="fas fa-arrow-left"></i> Home</button>
        <h1 className="player-name">{detailResult.Name}</h1>
      </div>
      <div className="flex-box">
        {detailResult && (
          <div className="graph">
            <Graph detailResult={detailResult} />
          </div>
        )}
        <div className="player-details">
          <div className="score">
            <span className="overall">
              Overall <strong>{detailResult.Overall}</strong>
            </span>
            <span className="overall">
              Potential <strong>{detailResult.Overall + 3}</strong>
            </span>
          </div>
          <div className="qualities">
            Age: <strong className="quality-ans">{detailResult.Age}</strong>
          </div>
          <div className="qualities">
            {" "}
            Height:{" "}
            <strong className="quality-ans">{detailResult.Height}</strong>
          </div>
          <div className="qualities">
            Weight:{" "}
            <strong className="quality-ans">{detailResult.Weight}lbs</strong>
          </div>
          <div className="qualities">
            Preffered Foot:{" "}
            <strong className="quality-ans">
              {detailResult.PreferredFoot}
            </strong>
          </div>
          <div className="qualities">
            Position:{" "}
            <strong className="quality-ans">{detailResult.Position}</strong>
          </div>
          <div className="qualities">
            Jersey Number:{" "}
            <strong className="quality-ans">{detailResult.JerseyNumber}</strong>
          </div>
          <div className="qualities">Weak Foot:</div>
          <div className="qualities">Skill Moves:</div>
          <div className="qualities">
            Work Rate: <strong>{detailResult.WorkRate}</strong>
          </div>
          <div className="qualities">International Reputation:</div>
        </div>
      </div>
    </div>
  );
};

export default PlayerReport;

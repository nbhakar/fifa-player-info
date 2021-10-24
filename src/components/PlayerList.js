import PlayerItems from "./PlayerItems";
import './PlayerList.css'

const PlayerList = ({ playersList, setDetailResult }) => {
  return (
    <div className="list-box">
      {playersList && playersList.map((e) => (
        <PlayerItems playersList={e} setDetailResult={setDetailResult} />
      ))}
    </div>
  );
};

export default PlayerList;

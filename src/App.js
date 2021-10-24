import "./App.css";
import Search from "./components/Search";
import PlayerList from "./components/PlayerList";
import { useEffect, useState } from "react";
import PlayerReport from "./components/PlayerReport";

const playersList = [
  {
    Name: "Lionel Messi",
    Age: 31,
    Nationality: "Argentina",
    Overall: 94,
    Club: "FC Barcelona",
    Value: "€110.5M",
    Wage: "€565K",
    PreferredFoot: "Left",
    WorkRate: "	Medium/Medium",
    Position: "RF",
    JerseyNumber: 10,
    Joined: "1-Jul-04",
    ContractValidUntil: 2021,
    Height: "5'7",
    Weight: 159,
    Crossing: 84,
    Finishing: 95,
    HeadingAccuracy: 70,
    ShortPassing: 90,
    Volleys: 86,
  },
  {
    Name: "Cristiano Ronaldo",
    Age: 33,
    Nationality: "Portugal",
    Overall: 94,
    Club: "Juventus",
    Value: "€77M",
    Wage: "€405K",
    PreferredFoot: "Right",
    WorkRate: "	High/Low",
    Position: "ST",
    JerseyNumber: 7,
    Joined: "10-Jul-18",
    ContractValidUntil: 2022,
    Height: "6'2",
    Weight: 183,
    Crossing: 84,
    Finishing: 94,
    HeadingAccuracy: 89,
    ShortPassing: 81,
    Volleys: 87,
  },
  {
    Name: "Neymar Jr",
    Age: 26,
    Nationality: "Brazil",
    Overall: 92,
    Club: "Paris Saint-Germain",
    Value: "€118.5M",
    Wage: "€290K",
    PreferredFoot: "Right",
    WorkRate: "	High/Medium",
    Position: "LW",
    JerseyNumber: 10,
    Joined: "3-Aug-17",
    ContractValidUntil: 2022,
    Height: "5'9",
    Weight: 150,
    Crossing: 79,
    Finishing: 87,
    HeadingAccuracy: 62,
    ShortPassing: 84,
    Volleys: 84,
  },
  {
    Name: "De Gea",
    Age: 27,
    Nationality: "Spain",
    Overall: 91,
    Club: "Manchester United",
    Value: "€72M",
    Wage: "€260K",
    PreferredFoot: "Right",
    WorkRate: "	Medium/Medium",
    Position: "GK",
    JerseyNumber: 1,
    Joined: "1-Jul-11",
    ContractValidUntil: 2020,
    Height: "6'4",
    Weight: 168,
    Crossing: 17,
    Finishing: 13,
    HeadingAccuracy: 21,
    ShortPassing: 50,
    Volleys: 13,
  },
  {
    Name: "K. De Bruyne",
    Age: 27,
    Nationality: "Belgium",
    Overall: 91,
    Club: "Manchester City",
    Value: "€102M",
    Wage: "€355K",
    PreferredFoot: "Right",
    WorkRate: "	High/High",
    Position: "RCM",
    JerseyNumber: 7,
    Joined: "30-Aug-15",
    ContractValidUntil: 2023,
    Height: "5'11",
    Weight: 154,
    Crossing: 93,
    Finishing: 82,
    HeadingAccuracy: 55,
    ShortPassing: 92,
    Volleys: 82,
  },
];

function App() {
  const [search, setSearch] = useState();
  const [searchResults, setSearchResults] = useState([]);
  const [detailResult, setDetailResult] = useState(null);
  useEffect(() => {
    const searchResult = playersList.filter((e) => {
      if (search && e.Name.toLowerCase().includes(search.toLowerCase()))
        return e;
      else if (
        search &&
        e.Nationality.toLowerCase().includes(search.toLowerCase())
      )
        return e;
      else if (search && e.Club.toLowerCase().includes(search.toLowerCase()))
        return e;
    });
    setSearchResults(searchResult);
    // eslint-disable-next-line
  }, [search]);
  return (
    <div className="App">
      {detailResult && <PlayerReport setSearchResults={setSearchResults} setDetailResult={setDetailResult} detailResult={detailResult} />}
      {!detailResult && (
        <>
          <div className="search">
            <Search setSearch={setSearch} />
          </div>
          <div className="list">
            {searchResults && <PlayerList setDetailResult={setDetailResult} playersList={searchResults} />}
          </div>
        </>
      )}
    </div>
  );
}

export default App;

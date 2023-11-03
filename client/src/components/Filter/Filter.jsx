import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "./Filter.css";
import {
  allTeams,
  filterApiDb,
} from "../../Redux/Actions/Actions";

const Filter = () => {
  const dispatch = useDispatch();
  const [selectedTeam, setSelectedTeam] = useState("");

  useEffect(() => {
    dispatch(allTeams());
  }, [dispatch]);


  const handleSourceFilter = (e) => {
    const selectedValue = e.target.value;
    setSelectedTeam(selectedValue);
    if (selectedValue === "all") {
      dispatch(filterApiDb("all"));
    } else if (selectedValue === "api") {
      dispatch(filterApiDb("api"));
    } else if (selectedValue === "database") {
      dispatch(filterApiDb("database"));
    }
  };

  return (
    <div className="filter-container">
      <div>

      </div>

      <div className="filter-input">
        <span>Filtro: </span>
        <label>
          <input
            type="radio"
            value="all"
            checked={selectedTeam === "all"}
            onChange={handleSourceFilter}
          />
          Db y API
        </label>
        <label>
          <input
            type="radio"
            value="database"
            checked={selectedTeam === "database"}
            onChange={handleSourceFilter}
          />
          Db
        </label>
        <label>
          <input
            type="radio"
            value="api"
            checked={selectedTeam === "api"}
            onChange={handleSourceFilter}
          />
          Api
        </label>
      </div>
    </div>
  );
};

export default Filter;

import { useEffect, useState } from "react";
import "./OrderDrivers.css";
import {
  getDrivers,
  orderByDob,
  orderDrivers,
} from "../../Redux/Actions/Actions";
import { useDispatch } from "react-redux";

const OrderDrivers = () => {
  const dispatch = useDispatch();
  const [aux, setAux] = useState(false);

  useEffect(() => {
    dispatch(getDrivers());
  }, [dispatch]);

  const handleOrder = (e) => {
    e.preventDefault();
    if (e.target.value === "default") {
      dispatch(getDrivers());
    } else {
      dispatch(orderDrivers(e.target.value));
    }
    setAux(!aux);
  };

  const handleBirthday = (e) => {
    e.preventDefault();
    if (e.target.value === "default") {
      dispatch(getDrivers());
    } else if (e.target.value === "asc") {
      dispatch(orderByDob("asc"));
    } else if (e.target.value === "desc") {
      dispatch(orderByDob("desc"));
    }
    setAux(!aux);
  };

  return (
    <div className="order-container">
      <div className="order-ascDesc">
        <select onChange={(e) => handleOrder(e)}>
          <option value="" disabled>A - Z</option> {/* Opción deshabilitada */}
          <option value="asc">Ascendent</option>
          <option value="desc">Descendent</option>
        </select>
      </div>
      <div className="order-dob">
        <select onChange={(e) => handleBirthday(e)}>
          <option value="" disabled>Edad</option> {/* Opción deshabilitada */}
          <option value="asc">Youngest</option>
          <option value="desc">Oldest</option>
        </select>
      </div>
    </div>
  );
}  

export default OrderDrivers;

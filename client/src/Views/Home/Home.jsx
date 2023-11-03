import { useDispatch, useSelector } from "react-redux";
import "./Home.css";
import { getDrivers } from "../../Redux/Actions/Actions";
import Searchbar from "../../Components/Searchbar/Searchbar";
import OrderDrivers from "../../Components/Order/OrderDrivers";
import Filter from "../../Components/Filter/Filter";
import { useEffect, useState } from "react";
import Pagination from "../../Components/Pagination/Pagination";
import Card from "../../components/Card/Card";

const Home = () => {

  // Obtenengo acceso al dispatch y al estado del store con useSelector
  const dispatch = useDispatch();
  const drivers = useSelector((state) => state.drivers);

  // Disparamos la acción para obtener los conductores cuando el componente se monta
  useEffect(() => {
    dispatch(getDrivers());
  }, [dispatch]);

  // Establesco el estado local para la paginación
  const [pageNumber, setPageNumber] = useState(1);
  
  // Especifico la cantidad de conductores por página
  const driversPerPage = 6;

  // Calculo los índices de los conductores a mostrar en la página actual
  const lastIndex  = pageNumber * driversPerPage; // 1 * 6 = 6

  const firstIndex  = lastIndex  - driversPerPage; // 6 - 6 = 1

  const driversOnPage  = drivers.slice(firstIndex , lastIndex );

  // Función para cambiar la página actual
  const paginate = (pageNumber) => {
    setPageNumber(pageNumber); // 1
  };

  return (
    <div className="home-container">
      <div className="filter-container">
        <OrderDrivers className="order-drivers" />
        <Searchbar className="searchbar" />
        <Filter />
      </div>
      <div className={"pagination-container-Cards card-Container"}>
        {driversOnPage ?.map((driver) => {
          return (
            <Card
              key={driver.id}
              id={String(driver.id)}
              name={driver.name}
              lastname={driver.lastname}
              nationality={driver.nationality}
              image={driver.image}
              description={driver.description}
              birthdate={driver.birthdate}
              teams={String(driver.teams)}
              createDb={driver.createDb}
            />
          );
        })}
      </div>
      <div className={"pagination-container"}>
        <Pagination

          currentPage={pageNumber} //Esto indica a <Pagination /> cuál es la página actual que se debe mostrar.

          driversPerPage={driversPerPage}//La cantidad de conductores que se mostrarán por página.

          drivers={drivers} //La lista completa de conductores.

          paginate={paginate} // La función paginate que se utiliza para cambiar la página actual cuando se hace clic en un número de página en la paginación.

        />
      </div>
    </div>
  );
};

export default Home;

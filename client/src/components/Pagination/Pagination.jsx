import PropTypes from "prop-types";
import "./Pagination.css";

const Pagination = ({ currentPage,  paginate }) => { //current:pag actual //paginate, cambio de pagina 

  const pageRange = 1; //limitador de cuantas pag se muetran

  const startPage = Math.max(1, currentPage - pageRange); // esto lo que hace es que empiece en 1

  const endPage = Math.min( currentPage + pageRange);// se muestra la página actual y una página adicional en cada dirección (izquierda y derecha) de la página actual.


  //Es un arreglo que se utiliza para almacenar los números de página que se mostrarán en la paginación. Se utiliza un bucle for para iterar desde startPage hasta endPage e ir agregando cada número de página al arreglo pages.
  const pages = [];

  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  return (
    <nav className="pagination-container">
      <div className="pagination-buttons">
        <button
          onClick={() => paginate(currentPage - 1)}
        >
          Back
        </button>
        {pages.map((page) => (
          <button
            key={page}
            onClick={() => paginate(page)}
            className={currentPage === page ? "active" : ""}
          >
            {page}
          </button>
        ))}
        <button
          onClick={() => paginate(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </nav>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  driversPerPage: PropTypes.number.isRequired,
  drivers: PropTypes.array.isRequired,
  paginate: PropTypes.func.isRequired,
};

export default Pagination;

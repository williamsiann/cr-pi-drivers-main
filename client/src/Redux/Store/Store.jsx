// Importa funciones y objetos necesarios desde Redux
import { createStore, applyMiddleware, compose } from "redux";
// Importa el middleware Redux Thunk para acciones asincrónicas
import thunkMiddleware from "redux-thunk";
// Importa el reducer de la aplicación desde su ubicación
import Reducer from "../Reducer/Reducer";

// Configura la integración con la extensión Redux DevTools en el navegador
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Crea la tienda de Redux con el reducer y middleware
const store = createStore(
  Reducer, // El reducer que manejará el estado de la aplicación
  composeEnhancer(applyMiddleware(thunkMiddleware)) // Aplica middleware Redux Thunk para manejar acciones asincrónicas
);

// Exporta la tienda para que esté disponible en otros módulos
export default store;

import { createStore, combineReducers } from "redux";
import { devToolsEnhancer } from "@redux-devtools/extension";
import { filtersReducer } from "./filters/reducer";
import { tasksReducer } from "./tasks/reducer";

// Código de los reducers tasksReducer y filtersReducer

export const rootReducer = combineReducers({
  filters: filtersReducer,
  tasks: tasksReducer,
});

// Crear una extensión del store para añadir las herramientas de desarrollador.
const enhancer = devToolsEnhancer();

export const store = createStore(rootReducer, enhancer);
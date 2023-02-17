// Importa las action types acá
import action from "../actions/index";

const initialState = {
  characters: [],
  characterDetail: {},
  ships: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    // Acá va tu código:
    case "GET_CHARACTERS":
      return {
        ...state,
        characters: action.payload,
      };
    case "GET_CHARACTER_DETAIL":
      return {
        ...state,
        characterDetail: action.payload,
      };
    case "CREATE_CHARACTER":
      return {
        ...state,
        characters: [...state.characters, action.payload],
      };
    case "DELETE_CHARACTER":
      const borrado = state.characters.filter((x) => x.id != action.payload);
      return {
        ...state,
        characters: borrado,
      };
    case "GET_SHIPS":
      return {
        ...state,
        ships: action.payload,
      };

    default:
      return state;
  }
};

export default rootReducer;

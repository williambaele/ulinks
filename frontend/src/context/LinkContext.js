import { createContext, useReducer } from "react";

export const LinksContext = createContext();
const initialState = {
  links: [],
};
export const linksReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_LINKS":
      return {
        ...state,
        links: action.payload,
      };
    case "CREATE_LINK":
      return {
        ...state,
        links: [action.payload, ...state.links],
      };
    case "DELETE_LINK":
      return {
        ...state,
        links: state.links.filter((link) => link._id !== action.payload._id),
      };
    case "UPDATE_LINK":
      return {
        ...state,
        links: state.links.map((link) =>
          link._id === action.payload._id ? action.payload : link
        ),
      };
    default:
      return state;
  }
};

export const LinksContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(linksReducer, {
    items: null,
  });

  return (
    <LinksContext.Provider value={{ ...state, dispatch }}>
      {children}
    </LinksContext.Provider>
  );
};
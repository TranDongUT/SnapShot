import { useContext, useReducer } from "react";
import ImagesContext from "./Context";
import { initState, reducer } from "./reducer";

function ImageProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initState);

  return (
    <ImagesContext.Provider value={[state, dispatch]}>
      {children}
    </ImagesContext.Provider>
  );
}

export default ImageProvider;

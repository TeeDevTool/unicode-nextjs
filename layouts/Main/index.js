import { useContext } from "react";
import { Context } from "context";

const MainLayout = ({ children }) => {
  const { state, dispatch } = useContext(Context);

  return (
    <div style={{ width: 375, height: 812, padding: "40px 20px" }}>
      <button
        onClick={() =>
          dispatch({ type: "test", payload: "123", otherProperty: "test" })
        }
      >
        test
      </button>
      {children}
    </div>
  );
};

export default MainLayout;

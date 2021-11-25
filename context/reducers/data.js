export const data = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "HANDLE_COUNTER":
      return { ...state, data: action.payload };

    default:
      return state;
  }
};

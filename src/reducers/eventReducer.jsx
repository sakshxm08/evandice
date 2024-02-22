export const eventReducer = (state, action) => {
  switch (action.type) {
    case "EVENT":
      return { ...state, event: action.payload };
    case "FEST":
      return { ...state, fest: action.payload };
    default:
      return state;
  }
};

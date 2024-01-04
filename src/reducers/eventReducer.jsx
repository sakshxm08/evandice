export const eventReducer = (state, action) => {
  switch (action.type) {
    case "EVENT":
      return { event: action.payload, fest: state.fest };
    case "FEST":
      return { fest: action.payload, event: state.event };
    default:
      return state;
  }
};

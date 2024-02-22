export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: action.payload.user,
        userFetched: action.payload.userFetched,
      };
    case "LOGOUT":
      return { ...state, user: null, userFetched: true };
    default:
      return state;
  }
};

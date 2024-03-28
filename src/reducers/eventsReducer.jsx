export const eventsReducer = (state, action) => {
  switch (action.type) {
    case "SET_FEATURED_EVENTS":
      return {
        ...state,
        featured_events: action.payload,
      };
    case "SET_EVENTS_BY_GENRE":
      return {
        ...state,
        events_by_genre: action.payload,
      };
    case "SET_ALL_EVENTS":
      return {
        ...state,
        all_events: action.payload,
        select_tags: [
          ...new Set(action.payload.flatMap((event) => event.selectTags)),
        ],
        relevant_depts: [
          ...new Set(
            action.payload.flatMap((event) => event.relevantCollegeDepartment)
          ),
        ],
        all_genres: [
          ...new Set([
            ...new Set(action.payload.flatMap((event) => event.selectTags)),
            ...new Set(
              action.payload.flatMap((event) => event.relevantCollegeDepartment)
            ),
          ]),
        ],
      };
    case "SET_ALL_FESTS":
      return {
        ...state,
        all_fests: action.payload,
        select_tags: [
          ...state.select_tags,
          ...new Set(action.payload.flatMap((event) => event.selectTags)),
        ],
        relevant_depts: [
          ...state.relevant_depts,
          ...new Set(
            action.payload.flatMap((event) => event.relevantCollegeDepartment)
          ),
        ],
        all_genres: [
          ...new Set([
            ...state.all_genres,
            ...new Set(action.payload.flatMap((event) => event.selectTags)),
            ...new Set(
              action.payload.flatMap((event) => event.relevantCollegeDepartment)
            ),
          ]),
        ],
      };
    case "SET_PROMISE_RESOLVED":
      return {
        ...state,
        events_promise_resolved: action.payload,
      };
    default:
      return state;
  }
};

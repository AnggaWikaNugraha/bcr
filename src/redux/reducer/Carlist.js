import { ACTIVITY_CARLIST_REDUCER_CLEARED_SEARCH, ACTIVITY_CARLIST_REDUCER_FULFILLED, ACTIVITY_CARLIST_REDUCER_FULFILLED_SEARCH, ACTIVITY_CARLIST_REDUCER_PENDING, ACTIVITY_CARLIST_REDUCER_REJECT, ACTIVITY_CARLIST_REDUCER_SEARCH } from "../type/typeCarlist";

const CarlistState = {
  isLoading : false,
  status: null,
  data: [],
  search: '',
}

export function CarlistStateReducer(state = CarlistState, action) {
  switch (action.type) {
    case ACTIVITY_CARLIST_REDUCER_PENDING:
      return { ...state, isLoading: true, error: false, };
    case ACTIVITY_CARLIST_REDUCER_FULFILLED:
      return { ...state, isLoading: false, status: action.status, data: action.payload };
    case ACTIVITY_CARLIST_REDUCER_REJECT:
      return { ...state, isLoading: false, error: true, search: '' };
    case ACTIVITY_CARLIST_REDUCER_SEARCH:
      return { ...state, isLoading: false, error: false, search: action.search };
    case ACTIVITY_CARLIST_REDUCER_FULFILLED_SEARCH:
      return { ...state, isLoading: false, status: action.status, data: action.payload };
      case ACTIVITY_CARLIST_REDUCER_CLEARED_SEARCH:
        return { ...state, search: '' };
    default:
      return state;
  }
}

import { ACTIVITY_CARLIST_FILTER_ALL, ACTIVITY_CARLIST_FILTER_LARGE, ACTIVITY_CARLIST_FILTER_MEDIUM, ACTIVITY_CARLIST_FILTER_SMALL, ACTIVITY_CARLIST_REDUCER_CLEARED_SEARCH, ACTIVITY_CARLIST_REDUCER_FULFILLED, ACTIVITY_CARLIST_REDUCER_FULFILLED_SEARCH, ACTIVITY_CARLIST_REDUCER_PENDING, ACTIVITY_CARLIST_REDUCER_REJECT, ACTIVITY_CARLIST_REDUCER_SEARCH, ACTIVITY_ORDERTABLE_REDUCER_FULFILLED, ACTIVITY_ORDERTABLE_REDUCER_PENDING, ACTIVITY_ORDERTABLE_REDUCER_REJECT, ACTIVITY_ORDERTABLE_REDUCER_SETCURRENT_PAGE, ACTIVITY_ORDERTABLE_REDUCER_SETPAGE } from "../type/typeCarlist";

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

// step 1 bikin reducer filter
const filterState = {
  filter: ''
}
export function filterStateReducer(state = filterState, action) {
  switch (action.type) {
    case ACTIVITY_CARLIST_FILTER_ALL:
        return { ...state, filter: '' };
    case ACTIVITY_CARLIST_FILTER_SMALL:
        return { ...state, filter: 'small' };
    case ACTIVITY_CARLIST_FILTER_MEDIUM:
        return { ...state, filter: 'medium' };
    case ACTIVITY_CARLIST_FILTER_LARGE:
        return { ...state, filter: 'large' };
    default:
      return state;
  }
}

const orderTableState = {
  isLoading : false,
  data: null,
  currentPage: 1,
  pageSize: 10,
}

export function orderTableStateReducer(state = orderTableState, action) {
  switch (action.type) {
    case ACTIVITY_ORDERTABLE_REDUCER_PENDING:
      return { ...state, isLoading: true, error: false, };
    case ACTIVITY_ORDERTABLE_REDUCER_FULFILLED:
      return { ...state, 
        isLoading: false,  
        data: action.data,
        pageSize: action.pageSize
      };
    case ACTIVITY_ORDERTABLE_REDUCER_REJECT:
      return { ...state, isLoading: false, error: true };
    case ACTIVITY_ORDERTABLE_REDUCER_SETCURRENT_PAGE:
      return { ...state, currentPage: action.currentPage };
    case ACTIVITY_ORDERTABLE_REDUCER_SETPAGE:
      return { ...state, pageSize: action.setPageSize };
    default:
      return state;
  }
}
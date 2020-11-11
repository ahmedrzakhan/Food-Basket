import {
  GETONE_PRODUCT_ATTEMPT,
  GETONE_PRODUCT_SUCCESS,
  GETONE_PRODUCT_FAILURE,
  GET_SUBCATEGORY_FAILURE,
  GET_SUBCATEGORY_ATTEMPT,
  GET_SUBCATEGORY_SUCCESS,
  GET_CATEGORY_FAILURE,
  GET_CATEGORY_ATTEMPT,
  GET_CATEGORY_SUCCESS,
  GET_BY_SEARCH_FAILURE,
  GET_BY_SEARCH_SUCCESS,
  GET_BY_SEARCH_ATTEMPT
} from "./actionTypes";

export const initState = {
  isLoading: "",
  singleProData: [],
  subCategoryData: [],
  categoryData: [],
  searchData :[]
};

const productReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GETONE_PRODUCT_ATTEMPT: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case GETONE_PRODUCT_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        singleProData: payload,
      };
    }

    case GETONE_PRODUCT_FAILURE: {
      return {
        ...state,
        isLoading: false,
      };
    }
    case GET_SUBCATEGORY_ATTEMPT: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case GET_SUBCATEGORY_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        subCategoryData:payload
     
      };
    }

    case GET_SUBCATEGORY_FAILURE: {
      return {
        ...state,
        isLoading: false,
      };
    }
    case GET_CATEGORY_ATTEMPT: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case GET_CATEGORY_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        categoryData: payload,
      };
    }

    case GET_CATEGORY_FAILURE: {
      return {
        ...state,
        isLoading: false,
      };
    }
    case GET_BY_SEARCH_ATTEMPT: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case GET_BY_SEARCH_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        searchData: payload,
      };
    }

    case GET_BY_SEARCH_FAILURE: {
      return {
        ...state,
        isLoading: false,
      };
    }

    default:
      return state;
  }
};
export default productReducer;

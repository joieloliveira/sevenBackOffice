import * as types from "../../types";

const STATE = {
  usersData: [],
  loading: false,
  error: "",
  toast:false,
}

export const userDataReducer = (state = STATE, action) => {
  switch (action.type) {
    case types.GET_DATA_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.GET_DATA_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        usersData: action.payload,
      };
    case types.GET_DATA_USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    //=================================================================
    case types.DELETE_DATA_USER_REQUEST:
      //console.log(newArray);
      return {
        ...state,
        loading: false,
        error: '',
        toast:true
      };
    case types.DELETE_DATA_USER_SUCCESS:
      var id = action.payload;
      var myArray = state.usersData.data;
      var newArray = myArray.filter((item) => item._id !== id);
      return {
        ...state,
        loading: false,
        usersData: {data:newArray},
        error: '',
        toast:false
      };
    case types.DELETE_DATA_USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    default: return state
  }
};

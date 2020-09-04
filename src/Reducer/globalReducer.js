import { ADD_BLOG, EDIT_BLOG, DEL_BLOG } from "./../Constant/globalConstant";
const globalReducer = (state, action) => {
  switch (action.type) {
    case ADD_BLOG:
      return {
        ...state,
      };

    case EDIT_BLOG:
      return {
        ...state,
      };

    case DEL_BLOG:
      return {
        ...state,
      };
  }
};
export default globalReducer;

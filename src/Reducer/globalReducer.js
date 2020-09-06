//constants
import { ADD_BLOG, EDIT_BLOG, DEL_BLOG } from "./../Constant/globalConstant";

//utitlities
import { updateDelItemState, createNewPost, editPost } from "./utilities";

const globalReducer = (state, action) => {
  switch (action.type) {
    case ADD_BLOG:
      return createNewPost(state, action.payload);

    case EDIT_BLOG:
      return editPost(state, action.payload.editPost);

    case DEL_BLOG:
      return updateDelItemState(state, action.payload.id);
  }
};
export default globalReducer;

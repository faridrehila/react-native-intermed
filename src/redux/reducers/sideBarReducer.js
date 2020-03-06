const initialState = {
  isSideBarOpen: false,
};

export default sideBarReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'OPEN_SIDE_BAR': {
      return {
        ...state,
        isSideBarOpen: true,
      };
    }
    case 'CLOSE_SIDE_BAR': {
      return {
        ...state,
        isSideBarOpen: false,
      };
    }
    default: {
      return state;
    }
  }
};

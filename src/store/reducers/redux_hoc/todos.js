import * as Actions from "./../../actions";

const initialState = {
  carlos: [
    {
      id: 1,
      name: "todo 1",
      links: {
        "todo 1": "Dependency"
      },
      status: "done"
    },
    {
      id: 2,
      name: "todo 3",
      status: "done"
    },
    {
      id: 3,
      name: "todo 2",
      status: "trash"
    },
    {
      id: 4,
      name: "todo 4",
      status: "trash"
    }
  ],

  ivan: {}
};

const todos = function (state = initialState, action) {
  switch (action.type) {
    case Actions.GET_TODOS_REDUX_HOC:
      return state[action.payload];
    default:
      return state;
  }
};

export default todos;

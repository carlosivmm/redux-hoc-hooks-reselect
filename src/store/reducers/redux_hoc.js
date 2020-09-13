import * as Actions from "./../actions";

const initialState = {
  count: 0,
  data: {
    "user-1": {
      name: "Carlos Montesinos",
      age: "24",
      job: "Programmer",
      posts: [{ name: "Post 1", text: "My post 1 with Example" }]
    }
  }
};

const redux_hoc = function (state = initialState, action) {
  switch (action.type) {
    case Actions.INCREMENT_REDUX_HOC:
      return { ...state, count: state.count + action.payload };
    default: {
      return state;
    }
  }
};

export default redux_hoc;

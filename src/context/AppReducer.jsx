const AppReducer = (state, action) => {
  switch (action.type) {
    case "DELETE_USER":
      return {
        users: state.users.filter((users) => {
          return users.id !== action.payload;
        }),
      };
    case "ADD_USER" :
        return{

        }
    default:
      return state;
  }
};

export default AppReducer;

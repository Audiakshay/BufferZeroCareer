const initState = {
  loginCredentials: {},
  registerCredentials: {},
};

const LoginRegisterField = (state = initState, action) => {
  switch (action.type) {
    case "loginDetail":
      return {
        loginCredentials: action.payload,
      };
    case "registerDetail":
      return {
        registerCredentials: action.payload,
      };
    default:
      return state;
  }
};

export default LoginRegisterField;

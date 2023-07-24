const initState = {};

const LoginReducers = (state = initState, {type, payload}) => {
  switch (type) {
    case 'loginDetail':
        return payload;
    default:
        return state;
  }
};

export default LoginReducers;
const SettingsReducer = (
  state = {
    theme: 'dark',
  },
  action,
) => {
  switch (action.type) {
    case 'SWITCH_THEME':
      return {
        ...state,
        theme: action.payload,
      };

    default:
      return state;
  }
};

export default SettingsReducer;

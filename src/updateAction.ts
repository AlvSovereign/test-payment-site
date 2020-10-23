const completeStep = (state: any, payload: any) => {
  return {
    ...state,
    stepsCompleted: {
      ...state.stepsCompleted,
      ...payload,
    },
  };
};

const updateAction = (state: any, payload: any) => {
  return {
    ...state,
    form: {
      ...state.form,
      ...payload,
    },
  };
};

export { completeStep, updateAction };

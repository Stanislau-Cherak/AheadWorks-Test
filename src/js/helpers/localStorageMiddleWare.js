export const localStorageMiddleWare = ({ getState }) => {
  return next => action => {
      const result = next(action);
      localStorage.setItem('NotesStore', JSON.stringify(getState()));
      return result;
  };
};

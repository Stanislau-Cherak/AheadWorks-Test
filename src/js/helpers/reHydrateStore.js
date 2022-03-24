export const reHydrateStore = () => {
  if (localStorage.getItem('NotesStore') !== null) {
      return JSON.parse(localStorage.getItem('NotesStore')); 
  }
};
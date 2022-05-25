const initialEntries = [
  {
    id: 1,
    description: "Work income",
    value: 100,
    isExpense: false,
  },
  {
    id: 2,
    description: "Water bill",
    value: 10,
    isExpense: true,
  },
  {
    id: 3,
    description: "Programing",
    value: 1000,
    isExpense: false,
  },
  {
    id: 4,
    description: "Programing 2",
    value: 100,
    isExpense: true,
  },
];

const reducer = (state = initialEntries, action) => {
  console.log(action);
  let newEntries;
  switch (action.type) {
    case "ADD_ENTRY":
      newEntries = state.concat({ ...action.payload });
      return newEntries;
    case "REMOVE_ENTRY":
      newEntries = state.filter((entry) => entry.id !== action.payload.id);
      return newEntries;
    case "UPDATE_ENTRY":
      newEntries = [...state];
      const index = newEntries.findIndex(
        (entry) => entry.id === action.payload.id
      );
      newEntries[index] = { ...action.payload.entry };
      return newEntries;

    default:
      return state;
  }
};
export default reducer;

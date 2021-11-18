let defaultstate = {
  selectedItems: { items: [], resturantName: "" },
};

let cartReducer = (state = defaultstate, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      let newState = { ...state };
      if (action.payload.checkboxValue) {
        console.log("ADD_TO_CART");
        newState.selectedItems = {
          items: [...newState.selectedItems.items, action.payload],
          resturantName: action.payload.resturantName,
        };
        console.log(newState);
        return newState;
      } else {
        console.log("REMOVE_FROM_CART");
        newState.selectedItems = {
          items: [
            ...newState.selectedItems.items.filter(
              (item) => item.title != action.payload.title
            ),
          ],
          resturantName: action.payload.resturantName,
        };
      }
    }

    default:
      return state;
  }
};

export default cartReducer;

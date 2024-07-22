export const ApiInitial = {
    bundle: [],
    gear: [],
    weapons: [],
};

export const ApiReducer = (state, action) => {

    switch (action.type) {
      
        case "Bundle":
        return {
          ...state,
          bundle: [...action.payload.data],
        };

        case "Weapons":
            return {
              
            };
          
        default: return state;
    }
  };
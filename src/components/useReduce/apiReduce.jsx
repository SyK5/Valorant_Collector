export const ApiInitial = {
    bundle: [],
    gear: [],
    weapons: [],
    agent: [],
    rank: [],
};

export const ApiReducer = (state, action) => {

    switch (action.type) {
      
        case 'Bundle':
        return {
          ...state,
          bundle: [...action.payload],
        };

        case 'Agent':
            return {
                ...state,
                agent: [...action.payload],
            };

        case 'Rank':
            return{
                ...state,
                rank: [...action.payload]
            }
        default: return state;
    }
  };
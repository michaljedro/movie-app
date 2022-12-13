export type InitialState = {
  loading: boolean;
  currentUser: number | null;
  error: string | null;
};

const initialState: InitialState = {
  loading: false,
  currentUser: null,
  error: null,
};

// export const userReducer = (state = initialState, ) => {
//   switch (action.type) {
//     default:
//       return state;
//   }
// };

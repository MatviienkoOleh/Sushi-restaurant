import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import categoriesReducer from "./../features/categories/categoriesSlice";
import positionReducer from "./../features/position/positionSlice";
import makeOrderFormReducer from "../features/makeOrderForm/makeOrderFormSlice";

export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    position: positionReducer,
    makeOrderForm: makeOrderFormReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

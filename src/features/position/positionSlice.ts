import { PositionI } from "./../../interface/global";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface PositionState {
  order: any;
  total: number;
  orderId: any;
}

const initialState: PositionState = {
  order: [],
  total: 0,
  orderId: {},
};

export const positionSlice = createSlice({
  name: "position",
  initialState,
  reducers: {
    addToOrderId: (state, action) => {
      state.orderId[action.payload.id] =
        state.orderId[action.payload.id] + 1 || 1;
    },
    deleteFromOrderId: (state, action) => {
      if (state.orderId[action.payload]) {
        let changedOrderPosition = {
          ...state.orderId,
          [action.payload]: state.orderId[action.payload] - 1,
        };
        state.orderId = changedOrderPosition;
      }
    },
  },
});

export const { addToOrderId, deleteFromOrderId } = positionSlice.actions;

export default positionSlice.reducer;

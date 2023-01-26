import { FormI } from "../../interface/global";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface makeOrderFormState {
  form: FormI;
}

const initialState: makeOrderFormState = {
  form: {
    name: "",
    secondName: "",
    address: "",
    phone: '',
    email: "",
    order: [],
  },
};

export const makeOrderFormSlice = createSlice({
  name: "makeOrderForm",
  initialState,
  reducers: {
    setFormInfo: (state, action) => {
      state.form[action.payload.id as keyof FormI] = action.payload.value;
    },
    setOrder: (state, action) => {
      state.form.order = action.payload;
    }
  },
});

export const { setOrder, setFormInfo } = makeOrderFormSlice.actions;

export default makeOrderFormSlice.reducer;

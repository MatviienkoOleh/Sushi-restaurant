import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PositionI } from "../../interface/global";

export interface CategoriesState {
  value: number;
  menu: PositionI[];
}

const initialState: CategoriesState = {
  value: 0,
  menu: [
    { 
      id: 1,
      name: "Salmon",
      url: "./assets/sushiSalmon.jpg",
      desc: "Sushi with salmon very cool, rem ipsum dolor sit a met, consectetur adipiscing elit. Etiam erosdolor, rutrum eu felis sed, sagittis lacinia leo. Aliquam erat volutpat",
      price: 4,
      categories: "sushi",
    },
    { 
      id: 2,
      name: "Tuna",
      url: "./assets/sushiTuna.jpg",
      desc: "Sushi with Tuna very cool, rem ipsum dolor sit a met, consectetur adipiscing elit.",
      price: 3,
      categories: "sushi",
    },
    { 
      id: 3,
      name: "Shrimp",
      url: "./assets/sushi-shrimp.jpg",
      desc: "Sushi with shrimp very cool, rem ipsum dolor sit a met, consectetur adipiscing elit.",
      price: 4,
      categories: "sushi",
    },
    { 
      id: 4,
      name: "Unagi",
      url: "./assets/sushi-unagi.png",
      desc: "Sushi with unagi very cool, rem ipsum dolor sit a met, consectetur adipiscing elit.",
      price: 3,
      categories: "sushi",
    },
    { 
      id: 5,
      name: "Philadelfia",
      url: "./assets/philadelfia.jpg",
      desc: "Philadelfia roll, rem ipsum dolor sit a met, consectetur adipiscing elit.",
      price: 6.5,
      categories: "rolls",
    },
    { 
      id: 6,
      name: "Philadelfia with Tuna",
      url: "./assets/philadelfiaWithTuna.png",
      desc: "Philadelfia with Tuna very cool, rem ipsum dolor sit a met, consectetur adipiscing elit.",
      price: 8,
      categories: "rolls",
    },
    { 
      id: 7,
      name: "Sunshine-roll",
      url: "./assets/sunshine-roll.jpg",
      desc: "Sunshine-roll very cool, rem ipsum dolor sit a met, consectetur adipiscing elit.",
      price: 6,
      categories: "rolls",
    },
    { 
      id: 8,
      name: "Unagi-dragon-roll",
      url: "./assets/unagi-dragon-roll.jpg",
      desc: "Unagi-dragon-roll very cool, rem ipsum dolor sit a met, consectetur adipiscing elit.",
      price: 5,
      categories: "rolls",
    },
    { id: 9,
      name: "Volcano-roll",
      url: "./assets/volcano-roll.jpg",
      desc: "Volcano-roll very cool, rem ipsum dolor sit a met, consectetur adipiscing elit.",
      price: 7,
      categories: "rolls",
    },
    { id: 10,
      name: "Fall Veggie Ramen",
      url: "./assets/fall-veggie-ramen.jpg",
      desc: "Fall Veggie Ramen very cool, rem ipsum dolor sit a met, consectetur adipiscing elit.",
      price: 12,
      categories: "ramen",
    },
    { id: 11,
      name: "Tonkotsu Ramen",
      url: "./assets/tonkotsu-ramen.jpg",
      desc: "Tonkotsu Ramen very cool, rem ipsum dolor sit a met, consectetur adipiscing elit.",
      price: 13,
      categories: "ramen",
    },
  ],
};

export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    incremented: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { incremented } = categoriesSlice.actions;

export default categoriesSlice.reducer;

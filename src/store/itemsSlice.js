import { createSlice } from "@reduxjs/toolkit";
import {items} from '../data/items'

const itemsSlice = createSlice({
  name : "items",
  initialState : items,
  reducers : {

  }
})

export const itemsActions = itemsSlice.actions;

export default itemsSlice;
import { createSlice } from '@reduxjs/toolkit';

export const ui = createSlice({
  name: 'ui',
  initialState: {
    accordion: {
      productTypes: []
    }
  },
  reducers: {
    toggleAccordionItemOpen: (state, action) => {
      const accordion = state.accordion[action.payload.name];
      const itemId = action.payload.itemId;
      if (accordion.includes(itemId)) {
        state.accordion[action.payload.name] = accordion.filter(openId => openId !== itemId);
      } else {
        accordion.push(itemId);
      }
    },
  },
});

export default ui;

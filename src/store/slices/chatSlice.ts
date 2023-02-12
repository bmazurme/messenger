import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '..';

export type ChatState = {
  data: Chat | null
};

const slice = createSlice({
  name: 'chat',
  initialState: { data: null } as ChatState,
  reducers: {
    setChat: (
      state,
      { payload: data }: PayloadAction<Chat>,
    ) => ({ ...state, data }),
  },
});

export const { setChat } = slice.actions;

export default slice.reducer;

export const selectCurrentChat = (state: RootState) => state.chat.data;

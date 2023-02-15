import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import type { RootState } from '..';

export type MessagesState = {
  data: Record<number, MessageType[]>;
};

const arr = (dat: Record<number, MessageType[]>, key: number) => (dat[key] ? dat[key] : []);

const slice = createSlice({
  name: 'messages',
  initialState: { data: { 0: [] } },
  reducers: {
    setMessages: (
      state,
      { payload: data }: PayloadAction<{ key: number, messages: MessageType[] }>,
    ) => ({
      ...state,
      data: {
        ...state.data,
        [data.key]: data.messages.length === 1
          ? [...data.messages, ...arr(state.data, data.key)]
          : data.messages,
      },
    }),
  },
});

export const { setMessages } = slice.actions;

export default slice.reducer;

export const selectCurrentMessages = (state: RootState) => state.messages.data;

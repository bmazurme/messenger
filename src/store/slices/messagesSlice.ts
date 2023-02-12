import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '..';

export type MessagesState = {
  data: MessageType[];
};

const slice = createSlice({
  name: 'messages',
  initialState: { data: [] } as MessagesState,
  reducers: {
    setMessages: (
      state,
      { payload: data }: PayloadAction<MessageType>,
    ) => ({ ...state, data }),
    setMessage: (
      state,
      { payload: data }: PayloadAction<MessageType>,
    ) => ({ ...state, data: [data, ...state.data] }),
  },
});

export const { setMessages, setMessage } = slice.actions;

export default slice.reducer;

export const selectCurrentMessages = (state: RootState) => state.messages.data;

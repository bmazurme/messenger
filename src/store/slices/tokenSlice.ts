import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '..';

export type TokenState = {
  data: Record<string, any> | null
};

const slice = createSlice({
  name: 'token',
  initialState: { data: null } as TokenState,
  reducers: {
    setToken: (
      state,
      { payload: data }: PayloadAction<Record<string, any>>,
    ) => ({ ...state, data }),
  },
});

export const { setToken } = slice.actions;

export default slice.reducer;

export const selectCurrentToken = (state: RootState) => state.token.data;

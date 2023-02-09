/* eslint-disable import/prefer-default-export */
import usersApi from '..';
import { setCredentials } from '../../../slices/userSlice';

const usersApiEndpoints = usersApi
  .enhanceEndpoints({
    addTagTypes: ['Users'],
  })
  .injectEndpoints({
    endpoints: (builder) => ({
      getUsersInfo: builder.query({
        query: (id) => ({
          url: `/user/${id}`,
          method: 'GET',
        }),
        providesTags: ['Users'],
      }),
      updateUser: builder.mutation({
        query: (user) => ({
          url: '/user/profile',
          method: 'PUT',
          data: user,
          async onSuccess(dispatch, data) {
            await dispatch(setCredentials(data as User));
          },
          providesTags: ['Users'],
        }),
      }),
      updateAvatar: builder.mutation({
        query: (formData) => ({
          url: '/user/profile/avatar',
          method: 'PUT',
          headers: {
            'Content-Type': 'multipart/form-data',
          },
          data: formData.avatar,
          providesTags: ['Users', 'User'],
          async onSuccess(dispatch, data) {
            await dispatch(setCredentials(data as User));
          },
        }),
      }),
      updateUserPassword: builder.mutation({
        query: (user) => ({
          url: '/user/password',
          method: 'PUT',
          data: user,
          // async onSuccess(dispatch, data) {
          //   await dispatch(setCredentials(data as User));
          // },
          // providesTags: ['Users'],
        }),
      }),
    }),
  });

export const {
  useGetUsersInfoQuery,
  useUpdateUserMutation,
  useUpdateAvatarMutation,
  useUpdateUserPasswordMutation,
} = usersApiEndpoints;

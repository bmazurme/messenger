import chatApi from '..';

const chatApiEndpoints = chatApi
  .enhanceEndpoints({
    addTagTypes: ['Chat'],
  })
  .injectEndpoints({
    endpoints: (builder) => ({
      getChats: builder.query<Chat[], number>({
        query: () => ({
          url: '/',
          method: 'GET',
        }),
        providesTags: ['Chat'],
      }),
      getChatUsers: builder.query<Chat[], { id: number }>({
        query: ({ id }) => ({
          url: `/${id}/users`,
          method: 'GET',
        }),
        providesTags: ['Chat'],
      }),
      createChat: builder.mutation({
        query: (data) => ({
          url: '/',
          method: 'POST',
          data,
        }),
        invalidatesTags: ['Chat'],
      }),
      deleteChat: builder.mutation({
        query: (data) => ({
          url: '/',
          method: 'DELETE',
          data,
        }),
        invalidatesTags: ['Chat'],
      }),
      addUserToChatChat: builder.mutation({
        query: (data) => ({
          url: '/users',
          method: 'PUT',
          data,
        }),
        invalidatesTags: ['Chat'],
      }),
      deleteUserFromChat: builder.mutation({
        query: (data) => ({
          url: '/users',
          method: 'DELETE',
          data,
        }),
        invalidatesTags: ['Chat'],
      }),
      updateChatAvatar: builder.mutation({
        query: (formData) => ({
          url: '/avatar',
          method: 'PUT',
          data: formData.avatar,
        }),
        invalidatesTags: ['Chat'],
      }),
      getToken: builder.mutation({
        query: (data) => ({
          url: `/token/${data.id}`,
          method: 'POST',
          data,
        }),
        invalidatesTags: ['Chat'],
      }),
    }),
  });

export const {
  useGetChatsQuery,
  useGetChatUsersQuery,
  useCreateChatMutation,
  useDeleteChatMutation,
  useUpdateChatAvatarMutation,
  useAddUserToChatChatMutation,
  useDeleteUserFromChatMutation,
  useGetTokenMutation,
} = chatApiEndpoints;

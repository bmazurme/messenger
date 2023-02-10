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
      getChat: builder.mutation({
        query: (data) => ({
          url: '/',
          method: 'GET',
          data,
        }),
        invalidatesTags: ['Chat'],
      }),
      createChat: builder.mutation({
        query: (data) => ({
          url: '/',
          method: 'POST',
          data,
        }),
      }),
      deleteChat: builder.mutation({
        query: (data) => ({
          url: '/',
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
    }),
  });

export const {
  useGetChatsQuery,
  useGetChatMutation,
  useCreateChatMutation,
  useDeleteChatMutation,
  useUpdateChatAvatarMutation,
} = chatApiEndpoints;

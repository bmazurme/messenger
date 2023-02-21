import resourcesApi from '..';

const resourcesApiEndpoints = resourcesApi
  .enhanceEndpoints({
    addTagTypes: ['resources'],
  })
  .injectEndpoints({
    endpoints: (builder) => ({
      getFile: builder.query<Chat[], { path: string }>({
        query: ({ path }) => ({
          url: `/${path}`,
          method: 'GET',
        }),
        providesTags: ['resources'],
      }),
      postFile: builder.mutation({
        query: (formData) => ({
          url: '/',
          method: 'POST',
          data: formData.file,
        }),
        invalidatesTags: ['resources'],
      }),
    }),
  });

export const { useGetFileQuery, usePostFileMutation } = resourcesApiEndpoints;

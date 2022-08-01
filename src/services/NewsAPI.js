import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const newsApi = createApi({
  reducerPath: "newsApi",

  baseQuery: fetchBaseQuery({
    baseUrl: "https://newsapi.org/v2",
  }),
  endpoints: (builder) => ({
    // builder query untuk get
    // builder mutation ....
    news: builder.query({
      query: () => "top-headlines?sources=techcrunch&apiKey=c061111314204e438fb75841651ac161",
    }),
    // newsByTechCrunch: builder.query({
    //   query: () => "/top-headlines?sources=techcrunch&apiKey=c061111314204e438fb75841651ac161",
    // }),
  }),
});

export const { useNewsQuery,useNewsByTechCrunchQuery } = newsApi;

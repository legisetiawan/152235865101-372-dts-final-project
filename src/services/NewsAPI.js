import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const newsApi = createApi({
    reducerPath:"newsApi",
    
    baseQuery:fetchBaseQuery({
        baseUrl:"https://newsapi.org/v2/",
    }),
    endpoints:(builder) => ({
        // builder query untuk get
        // builder mutation ....
        news:builder.query({
            query:() => "top-headlines?country=us&apiKey=c061111314204e438fb75841651ac161",
        }),
        newsByAticle:builder.query({
            query:(country) => `/v2/top-headlines${country}`,
        }),
    }),
});

export const {useNewsQuery} = newsApi;
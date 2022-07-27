import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { newsApi } from "../services/NewsAPI";

export const store = configureStore({
  reducer: {
    [newsApi.reducerPath]: newsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(newsApi.middleware);
  },
});

//  // GET /colors/:id <--- di sini kita akan meminta parameter di dalam endpointnya dengan nama "id"
//     // Karena GET, kita masih menggunakan builder.query
//     colorById: builder.query({
//         // Sekarang karena kita meminta ada parameter id, kita berikan di dalam fungsi query nya
//         // suatu parameter id juga
//         query: (id) => `/colors/${id}`,
//       }),

//       // POST /colors
//       // Karena ini sudah akan mengubah data, kita tidak menggunakan builder.query lagi
//       // melainkan builder.mutation
//       addColor: builder.mutation({
//         // tetap sama dengan builder.query, menerima options yang ada property "query"
//         // nah di sini ceritanya sekarang kita asumsi akan menerima object dengan nama color yah

//         // Perhatikan fungsi ini akan mereturn suatu object yah !
//         query: (color) => ({
//           // Kalau tadi di atas builder.query kita langsung return string
//           // di sini kita return object, sehingga ada property yang harus digunakan:
//           // url: untuk mendeskripsikan url nya apa
//           // method: untuk menjelaskan HTTP Method apa yang digunakan
//           // body: untuk menjelaskan isi (data) yang akan dilempar via method ini ada apa saja
//           url: "/colors",
//           method: "POST",
//           body: color,
//         }),
//       }),

//       // PUT /colors/:id
//       // nah di sini kita akan menerima parameter id dan data yang ingin diberikan
//       // Karena kita akan memberikan data, gunakan builder.mutation
//       updateColorById: builder.mutation({
//         // Perhatikan di sini kita hanya bisa menerima satu parameter saja
//         // jadi kita formasikan dalam bentuk Object
//         query: ({ id, ...color }) => ({
//           url: `/colors/${id}`,
//           method: "PUT",
//           // Loh kok di atasnya pakai spread, tapi di bawah sini satuan saja cukup?
//           // Karena di balik layar akan ada proses untuk menyatukannya, jadi kita
//           // tidak perlu khawatir ^_^
//           body: color,
//         }),
//       }),

//       // DELETE /colors/:id
//       // di sini kita hanya butuh parameter id saja tanpa data yang diberikan
//       // tapi karena kita akan mengubah data
//       // tetap menggunakan builder.mutation yah !
//       deleteColorById: builder.mutation({
//         query: (id) => ({
//           url: `/colors/${id}`,
//           method: "DELETE",
//         }),
//       }),
//     }),
//   });

// Nah setelah mendeskripsikannya, kita akan menggunakannya
// Bagaimana cara menggunakannya?
// Kita akan EXPORT hooks yang dibuat secara otomatis pada createApi di atas

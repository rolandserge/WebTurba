import { configureStore } from "@reduxjs/toolkit"
import livresSlice from "./slices/livresSlice"

export const store = configureStore({
     reducer: {
          livres: livresSlice
     },
})
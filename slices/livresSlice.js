import {createSlice} from "@reduxjs/toolkit"

export const livresSlice = createSlice({
     name: 'livres',
     initialState: {
          "livres": [],
          'livre' : null
     },
     reducers: {
          listeLivre: (state, action) => {

               state.livres = action.payload
          },
          ajoutLivre: (state, {payload}) => {

               state.livres.push(payload)
          },
          editLivre : (state, {payload}) => {

               state.livres = state.livres.map((livre) => {
                    if(livre.id === payload[1]) {

                         return {
                              ...livre,
                              titre: payload[0]
                         }
                    } else {
                         return livre
                    }
               })
          },
          unLivre : (state, {payload}) => {
               state.livre = state.livres.filter((livre) => livre.id == payload)
          },

          deleteLivre : (state, {payload}) => {

               state.livres = state.livres.filter((livre) => livre.id !== payload)
          }
     },
})

export const { listeLivre, ajoutLivre, editLivre, deleteLivre, unLivre } = livresSlice.actions

export default livresSlice.reducer
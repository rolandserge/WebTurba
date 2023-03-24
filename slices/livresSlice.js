import {createSlice} from "@reduxjs/toolkit"

export const livresSlice = createSlice({
     name: 'livres',
     initialState: {
          "commentaires": [],
     },
     reducers: {
          ListeCommentaires: (state, action) => {

               state.commentaires = action.payload
          },
          AjoutCommentaires: (state, {payload}) => {

               state.commentaires.push(payload)
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

          deleteLivre : (state, {payload}) => {

               state.livres = state.livres.filter((livre) => livre.id !== payload)
          }
     },
})

export const { ListeCommentaires, AjoutCommentaires, editLivre, deleteLivre, unLivre } = livresSlice.actions

export default livresSlice.reducer
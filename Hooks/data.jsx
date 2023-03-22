import React from 'react';
import axios from '../Lib/axios';
import useSWR from "swr"

const useData = () => {

     const { data: livres , error, mutate} = useSWR("/api/livres/liste-livre", () => 
               axios.get('/api/livres/liste-livre')
                    .then( response => response.data.livres)
          )

     const { data: commentaires , errors, mutate} = useSWR("/api/commentaires/liste-commentaire", () => 
          axios.get('/api/commentaires/liste-commentaire')
               .then( response => response.data.commentaires)
     )

     

     return {

          livres
     }
};

export default useData;
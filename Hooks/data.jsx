import React from 'react';
import axios from '../Lib/axios';
import useSWR from "swr"

const useData = () => {

     const { data: livres , error, mutate} = useSWR("/api/livres/liste-livre", () => 
               axios.get('/api/livres/liste-livre')
                    .then( response => response.data.livres)
          )

     const { data: commentaires , errors} = useSWR("/api/commentaires/liste-commentaire", () => 
          axios.get('/api/commentaires/liste-commentaire')
               .then( response => response.data.commentaires)
     )

     const { data: categories } = useSWR("/api/categories/liste-categorie", () => 
          axios.get('/api/categories/liste-categorie')
     .then((response) => response.data.categories)
)
     

     return {

          livres,
          commentaires,
          categories
     }
};

export default useData;
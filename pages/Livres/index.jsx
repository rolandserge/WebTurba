import React, { useState } from 'react';
import Image from "next/image"
import CardLivre from "../../Component/CardLivre"
import { useSelector } from "react-redux"
import useSWR from "swr"
import axios from '../../Lib/axios';

const index = () => {

     const { livres } = useSelector(item => item.livres)

     const [change, setChange] = useState()
     const [filter, setFilter] = useState(livres)

     const { data: categories, error, mutate} = useSWR("/api/categories/liste-categorie", () => 
          axios.get('/api/categories/liste-categorie')
          .then((response) => response.data.categories)
     )
     
     const changeClasse = (index) => {
          if(index === change) {
               return 'active'
          }
     }
     const FilterData = (index) => {

          setChange(index)

          if(index == -1) {
               const filter = livres.filter((x) => x.id != index)
               setFilter(filter)
          } else {
               const filter = livres.filter((x) => x.categorie_id === index)
               setFilter(filter)
          }
     };
     return (
          <div className='lecture_image'>
               <div className="image_livre">
                   <div className='fond_livre'>
                         <div className='text'>
                              <p>Decouvrez tous les livres !</p>
                         </div>
                   </div>
               </div>
               <div>
                    <div className='recherche_container'>
                         <div className='recherche_div'>
                              <label htmlFor="">Faites vos recherches dans cette barre</label>
                              <div className='form_search'>
                                   <input type="search" placeholder='Entrer vos recherche ici' />
                                   <button>Rechercher</button>
                              </div>
                         </div>
                    </div>
                    <div>
                          <div className="categories">
                         <button className={changeClasse(-1)} onClick={() => FilterData(-1)}>Tous</button>
                         {
                              categories?.map((categorie, index) => {

                                   return (
                                        <button key={index} className={changeClasse(categorie.id)} onClick={() => FilterData(categorie.id)}>{categorie.nom}</button>
                                   )
                              })
                         }
                    </div>
                    
                    </div>
                    <div className="livres_cards_listes">
                    {
                         filter.length > 1 ? filter.map((livre, index) => {

                              return (

                                   <CardLivre livres={livre} key={index} />
                              )
                         }) :

                              'Aucun livre trouver'
                         }
                    </div>
                    
               </div>
          </div>
     );
};

export default index;
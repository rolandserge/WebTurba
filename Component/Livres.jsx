import React, { useEffect, useState } from 'react';
import Commentaire from "../Component/Commentaire"
import CardLivre from "../Component/CardLivre"
import axios from '@/Lib/axios';
import { useSelector } from 'react-redux';

const Livres = () => {

     const { livres } = useSelector(item => item.livres)


     const [active, setActive] = useState(false)
     const [change, setChange] = useState()
     const [categories, setCategories] = useState([])
     const [filter, setFilter] = useState(livres)


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


     useEffect(() => {

          (async() => {

               const response = await axios.get("/api/categories/liste-categorie")

               setCategories(response.data.categories)
          })()
     }, [])


     return (
          <div className='container_livres'>
               <div className='livres_div'>
                    <div>
                         <h2>Collection de nos livres && toutes les categories</h2>
                    </div>
                    <div className="categories">
                         <button className={changeClasse(-1)} onClick={() => FilterData(-1)}>Tous</button>
                         {
                              categories.map((categorie, index) => {

                                   return (
                                        <button key={index} className={changeClasse(categorie.id)} onClick={() => FilterData(categorie.id)}>{categorie.nom}</button>
                                   )
                              })
                         }
                    </div>
                    <div className="livres_cards">
                         {
                              filter.length > 1 ? filter.slice(0, 10).map((livre, index) => {

                                   return (

                                        <CardLivre livres={livre} key={index} />
                                   )
                              }):

                              'Aucun livre trouver'
                         }
                    </div>
               </div>
               {active && <Commentaire close={() => setActive(false)} /> }
          </div>
     );
};

export default Livres;
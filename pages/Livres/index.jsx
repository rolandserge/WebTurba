import React, { useState } from 'react';
import CardLivre from "../../Component/CardLivre"
import useData from '../../Hooks/data';

const index = () => {

     const { livres, categories } = useData()

     const [change, setChange] = useState()
     
     const [filter, setFilter] = useState(livres)
     const [search, setSearch] = useState("")
     
     
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

     var keys = ['titre','categorie.nom', 'auteur']
     
     const rechercheFiltre = (livres) => {
          return livres.filter((livre) => keys.some((key) => String(livre[key]).toLowerCase().includes(search.toLowerCase())))
     }


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
                                   <input type="search" onChange={(event) => setSearch(event.target.value)} placeholder='Entrer vos recherche ici' />
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
                         search ? rechercheFiltre(livres).map((livre, index) => {

                              return (
                              
                                   <CardLivre livres={livre} key={index} />
                              ) 
                         }) 

                         :
                         typeof filter === 'undefined' ? livres?.map((livre, index) => {

                              return (

                                   <CardLivre livres={livre} key={index} />
                              )
                         }) :

                              filter?.map((livre, index) => {

                                   return (

                                        <CardLivre livres={livre} key={index} />
                                   )
                              })
                         }
                    </div>
                    
               </div>
          </div>
     );
};

export default index;
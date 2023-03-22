import React, { useEffect, useState } from 'react';
import Commentaire from "../Component/Commentaire"
import CardLivre from "../Component/CardLivre"
import axios from '@/Lib/axios';
import { useSelector } from 'react-redux';
import Link from 'next/link';

const Livres = () => {

     const { livres } = useSelector(item => item.livres)


     const [active, setActive] = useState(false)
     const [categories, setCategories] = useState([])
     const [filter, setFilter] = useState(livres)


    


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
                         <h2>Quelles que collections de nos livres</h2>
                    </div>
                    <div className="livres_cards_listes">
                         {
                              livres?.length > 1 ? livres?.slice(0, 10).map((livre, index) => {

                                   return (

                                        <CardLivre livres={livre} key={index} />
                                   )
                              }):

                              'Aucun livre trouver'
                         }
                    </div>
                    <div className='voir_container'>
                         <Link href={"/Livres"} className='voir'>Plus de livres</Link>
                    </div>
               </div>
               {active && <Commentaire close={() => setActive(false)} /> }
          </div>
     );
};

export default Livres;
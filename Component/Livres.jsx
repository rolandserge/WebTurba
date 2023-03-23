import React from 'react';
import CardLivre from "../Component/CardLivre"
import Link from 'next/link';
import useData from '@/Hooks/data';

const Livres = () => {

     const { livres } = useData()

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
          </div>
     );
};

export default Livres;
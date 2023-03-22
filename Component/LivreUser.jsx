import Image from 'next/image';
import React from 'react';
import { AiOutlineComment, AiOutlineDelete } from "react-icons/ai"
import Cover from "../Assets/c4.jpg"
import { GrUpdate } from "react-icons/gr"

const LivreUser = ({livres}) => {
     return (
          <div className='livre_user'>
               <div className='intitule'>
                   <div className='titre'>
                         <p>Mes livres créés</p>
                   </div>
                   <div className='add_book'>
                         <button>
                              Ajouter un livre
                         </button>
                   </div>
               </div>
               <div className='container_livre_user'>
                    {
                         livres?.map((livre, index) => {
                              return (

                              <div className='card_user_livre' key={index}>
                                   <div className="cover_image">
                                        <Image loader={() => `http://127.0.0.1:8000/${livre.cover}`} src={livre ? `http://127.0.0.1:8000/${livre?.cover}` : 'Chargement'} width={10} height={10} alt='Image de couverture du livre' priority className='image' />
                                   </div>
                                   <div className="categorie_div">
                                        {
                                             livre.categorie.nom
                                        }
                                   </div>
                                   <div className='info_livre'>
                                        <p>{livre.auteur}</p>
                                        <p className='livre'>{livre.titre}</p>
                                   </div>
                                   <div className='action_livre'>
                                        <div className='commenter'>
                                             <AiOutlineComment />
                                        </div>
                                        <div className='update'>
                                             <GrUpdate />
                                        </div>
                                        <div className='delete'>
                                             <AiOutlineDelete />
                                        </div>
                                   </div>
                              </div>
                              )
                         })
                    }
               </div>
          </div>
     );
};

export default LivreUser; 
import Image from 'next/image';
import React, { useState } from 'react';
import { AiOutlineComment, AiOutlineDelete } from "react-icons/ai"
import { GrUpdate } from "react-icons/gr"
import { useRouter } from 'next/router';
import { useAuth } from '../Hooks/auth';
import Commentaire from './Commentaire';
import axios from '../Lib/axios';
import AddLivre from './AddLivre';
import EditLivre from './EditLivre';

const LivreUser = ({livres}) => {

     
     const [active, setActive] = useState(false)
     const [id, setId] = useState()
     const [add, setAdd] = useState(false)
     const [idLivre, setIdLivre] = useState()
     const [update, setUpdate] = useState(false)


     const { user } = useAuth()


     const router = useRouter()

     const supprimerLivre = async(id) => {

          await axios.delete('/api/livres/delete-livre/'+ id)
      } 

     const VoirComment = (id) => {
          setActive(true)
          setId(id)
     }
     const ModifierLivre = (id) => {
          setUpdate(true)
          setIdLivre(id)
     }

     if(active && !user) {
                    
          router.push('/Auth/login')
     }

     return (
          <div className='livre_user'>
               <div className='intitule'>
                   <div className='titre'>
                         <p>Mes livres créés</p>
                   </div>
                   <div className='add_book'>
                         <button onClick={() => setAdd(true)}>
                              Ajouter un livre
                         </button>
                   </div>
               </div>
               <div className='container_livre_user'>
                    {
                         livres?.map((livre, index) => {
                              return (
                              <>
                              <div className='card_user_livre' key={index}>
                                   <div className="cover_image" onClick={() => VoirComment(livre.id)}>
                                        <Image loader={() => `http://127.0.0.1:8000/${livre.cover}` || `http://127.0.0.1:8000/${livre?.livre?.cover}`} src={livre ? `http://127.0.0.1:8000/${livre?.cover}` || `http://127.0.0.1:8000/${livre?.livre?.cover}` : 'Chargement'} width={10} height={10} alt='Image de couverture du livre' priority className='image' />
                                   </div>
                                   <div className="categorie_div">
                                        {
                                             livre.categorie?.nom
                                        }
                                   </div>
                                   <div className='info_livre'>
                                        <p className='auteur'>{livre.auteur || livre.livre.auteur}</p>
                                        <p>{livre.titre || livre.livre.titre}</p>
                                   </div>
                                   <div className='action_livre'>
                                        <div className='commenter' onClick={() => VoirComment(livre.id)}>
                                             <AiOutlineComment />
                                        </div>
                                        <div className='update' onClick={() => ModifierLivre(livre.id)}>
                                             <GrUpdate />
                                        </div>
                                        <div className='delete' onClick={() => supprimerLivre(livre.id)}>
                                             <AiOutlineDelete />
                                        </div>
                                   </div>
                              </div>
                         </>
                              )
                         })
                    }
                
                    { active && user && <Commentaire id={id} close={() => setActive(false)} /> }
                    { add && <AddLivre close={() => setAdd(false)} /> }
                    { update && <EditLivre id={idLivre} close={() => setUpdate(false)} /> }
               </div>
          </div>
     );
};

export default LivreUser; 
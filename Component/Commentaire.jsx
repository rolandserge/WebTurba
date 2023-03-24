import React, { useRef } from 'react';
import { BiSend } from "react-icons/bi";
import Image from "next/image"
import axios from '@/Lib/axios';
import { useAuth } from '@/Hooks/auth';
import useData from '@/Hooks/data';
import { useDispatch, useSelector } from 'react-redux';
import { AjoutCommentaires } from '@/slices/livresSlice';
import moment from "moment"
import "moment/locale/fr"


const Commentaire = ({close, id}) => {

    const messageRef = useRef()

    const dispatch = useDispatch()

    const { user } = useAuth()
    const { livres } = useData()

    const { commentaires } = useSelector(item => item.livres)

    const FilterLivre = () => {
      
      const filter = livres?.filter((x) => x.id === id)
      
      return filter[0]
    }

    const AddCommentaire = (event) => {

      event.preventDefault()

      const message = messageRef.current.value


      axios.post('/api/commentaires/add-commentaire', {evaluation: 10, message: message, user: user.id, livre: id}).then(res => {
        if(res.data.status == 200) {
          dispatch(AjoutCommentaires(res.data.commentaire[0]))
          messageRef.current.value = ''
        }
      })
      
    }

     return (
          <div className='commentaire_container'>
               <div className='commentaire_div'>
                    <div className='entete'>
                         <div className='pub'>
                              <p>La publication de {FilterLivre()?.user?.nom + " " + FilterLivre()?.user?.prenom}</p>
                         </div>
                         <div className='close' onClick={close}>
                              <p>X</p>
                         </div>
                    </div>
                    <div className="card_livre">
                      <div className='header_livre'>
                        <div className='profil_photo'>
                          <p>{FilterLivre()?.user?.nom[0]}</p>
                        </div>
                        <div className='user_info'>
                          <p>{ FilterLivre()?.user?.nom + " " + FilterLivre()?.user?.prenom }</p>
                          <span>Publié {moment(FilterLivre()?.created_at).locale("fr").calendar()}</span>
                        </div>
                      </div>
                      <div className='contenu_livre'>
                        <div className='info_livre'>
                          <p>Titre du livre : <span>{FilterLivre()?.titre}</span></p>
                          <p>Auteur du livre : <span>{FilterLivre()?.auteur}</span></p>
                          <p>Categorie du livre : <span>{FilterLivre()?.categorie?.nom}</span></p>
                        </div>
                        <div className='description_livre'>
                           <p>
                           {
                            FilterLivre()?.description
                           }
                           </p>
                        </div>
                      </div>
                      <div className='cover_image'>
                          <Image loader={() => `http://127.0.0.1:8000/${FilterLivre()?.cover}`} src={`http://127.0.0.1:8000/${FilterLivre()?.cover}`} width="10" height={10} alt='Image de couverture de livre' className='image' />
                      </div>
                      <div className='liste_commentaire'>
                        {
                          commentaires?.filter((x) => x.livre_id === id).length == 0 ? "Pas de commentaire pour ce livre" :
                        <>
                          <div className='titre'>
                            <p>Liste des commentaire du livre</p>
                          </div>
                          {
                            commentaires?.
                            filter((x) => x.livre_id == id)
                            .sort((a, b) => a.id < b.id ? 1 : -1).map((commentaire, index) => {

                              return (

                                <div className='card_commentaire' key={index}>
                                  <div className='user_profil'>
                                      <p>{commentaire.user.nom[0]}</p>
                                  </div>
                                  <div className='messages'>
                                      <p>{commentaire.user.nom + ' ' + commentaire.user.prenom}</p>
                                      <span>Publié {moment(commentaire.created_at).locale("fr").calendar()}</span>
                                      <div className='message'>
                                        <p>
                                          {
                                            commentaire.message
                                          }
                                        </p>
                                      </div>
                                  </div>
                                </div>
                              )
                            })
                          }
                          </>
                          }
                      </div>
                    </div>
                    <div className='comment_div'>
                         <form method='post' onSubmit={AddCommentaire}>
                              <textarea rows="10" ref={messageRef} id='message' required placeholder='Entrer votre commentaire' cols="30"></textarea>
                              <button>
                                   <BiSend />
                              </button>
                         </form>
                    </div>
               </div>
          </div>
     );
};

export default Commentaire;
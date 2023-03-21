import React, { useEffect, useRef, useState } from 'react';
import { BiSend } from "react-icons/bi";
import Image from "next/image"
import axios from '@/Lib/axios';
import { useAuth } from '@/Hooks/auth';


const Commentaire = ({close, id}) => {

    const [livre, setLivre] = useState()
    const [commentaires, setcommentaires] = useState([])

    const messageRef = useRef()

    const { user } = useAuth()


    useEffect(() => {

        (async() => {

            axios.get('/api/livres/show-livre/'+ id).then((res) => {
              setLivre(res.data.livre)
              setcommentaires(res.data.commentaires)
            })
        })()

    }, [])

    const AddCommentaire = (event) => {

      event.preventDefault()

      const message = messageRef.current.value

      axios.post('/api/commentaires/add-commentaire', {evaluation: 10, message: message, user: user.id, livre: id}).then(res => {
        if(res.data.status == 200) {
          
          // alert(res.data.message)
          // document.getElementById('message').reset()
        }
      })
    }

     return (
          <div className='commentaire_container'>
               <div className='commentaire_div'>
                    <div className='entete'>
                         <div className='pub'>
                              <p>La publication du {livre?.user?.nom + " " + livre?.user?.prenom}</p>
                         </div>
                         <div className='close' onClick={close}>
                              <p>X</p>
                         </div>
                    </div>
                    <div className="card_livre">
                      <div className='header_livre'>
                        <div className='profil_photo'>
                          <p>{livre?.user?.nom[0]}</p>
                        </div>
                        <div className='user_info'>
                          <p>{ livre?.user?.nom + " " + livre?.user?.prenom }</p>
                          <span>Publié le {livre?.created_at}</span>
                        </div>
                      </div>
                      <div className='contenu_livre'>
                        <div className='info_livre'>
                          <p>Titre du livre : <span>{livre?.titre}</span></p>
                          <p>Auteur du livre : <span>{livre?.auteur}</span></p>
                          <p>Categorie du livre : <span>{livre?.categorie?.nom}</span></p>
                        </div>
                        <div className='description_livre'>
                           <p>
                           {
                            livre?.description
                           }
                           </p>
                        </div>
                      </div>
                      <div className='cover_image'>
                          <Image loader={() => `http://127.0.0.1:8000/${livre?.cover}`} src={`http://127.0.0.1:8000/${livre?.cover}`} width="10" height={10} alt='Image de couverture de livre' className='image' />
                      </div>
                      <div className='liste_commentaire'>
                        {
                          commentaires.length == 0 ? "Pas de commentaire pour ce livre" :
                        <>
                          <div className='titre'>
                            <p>Liste des commentaire du livre</p>
                          </div>
                          {
                            commentaires?.map((commentaire, index) => {

                              return (

                                <div className='card_commentaire' key={index}>
                                  <div className='user_profil'>
                                      <p>{commentaire.user.nom[0]}</p>
                                  </div>
                                  <div className='messages'>
                                      <p>{commentaire.user.nom + ' ' + commentaire.user.prenom}</p>
                                      <span>Publie le {commentaire.created_at}</span>
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
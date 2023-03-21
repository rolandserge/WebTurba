import React, { useEffect } from 'react';
import Profil from "../../public/Assets/olla.jpg"
import { useRouter } from 'next/router'
import Image from 'next/image'
import { useAuth } from "../../Hooks/auth"
import axios from '../../Lib/axios';
import {useDispatch, useSelector } from 'react-redux';
import { unLivre} from "../../slices/livresSlice"

export default function detail() {

     const router = useRouter()
     const { user } = useAuth()
     const { id } = router.query
     const dispatch = useDispatch()
     

     const { livre } = useSelector(item => item.livres)
     // console.log(livre);
     
     useEffect(() => {

          if(!user) {
               router.push('/Auth/login')
          }
          
          dispatch(unLivre(id))
          
     }, [id, user])

     return (
          <div className='container_detail'>
               <div className='card_livre'>
                    <div className='user_infos'>
                         <div className='photo'>
                              <Image
                                   src={Profil}
                                   className='image'
                                   alt="Photo de profil de l'utilsateur"
                              />
                         </div>
                         <div className='data'>
                              <p className='nom_prenom'>{livre === null ? 'chargement en cour' : livre[0].user.nom + ' ' + livre[0].user?.prenom }</p>
                              <p className='date'>Publie le {livre === null ? 'en cour' : livre[0].created_at}</p>
                         </div>
                    </div>
                    <div className='description_livre'>
                         <div className='livre'>
                              <p>Titre du livre : <span>{livre === null ? 'en cour' : livre[0].titre}</span></p>
                              <p>Auteur du livre : <span>{livre === null ? 'en cour' : livre[0].auteur}</span></p>
                              <p>Categorie du livre : <span>{livre === null ? 'en cour' : livre[0].categorie.nom}</span></p>
                         </div>
                         <p>
                              {
                                   livre === null ? 'en cour' : livre[0].description
                              }
                         </p>
                    </div>
                    <div className='image_cover'>
                         <Image
                              src={Profil}
                              className='image'
                              alt="L'image de couverture du livre"
                         />
                    </div>
                    <div className='commentaire_form'>
                         <form action="" method="post">
                              <div>
                                   <textarea name="" id="" cols="30" placeholder='Entrer votre commentaire sur le livre' rows="10"></textarea>
                              </div>
                              <div className='btn_comment'>
                                   <button>Commenter</button>
                              </div>
                         </form>
                    </div>
                    <div className='commentaire_liste'>
                         <div className='card_commentaire'>
                              <div className='user_profil'>
                                   <Image
                                        src={Profil}
                                        width={50}
                                        height={50}
                                        className='image'
                                        alt="Photo de profile de l'utilisateur"
                                   />
                              </div>
                              <div className='comment_user'>
                                   <p className='nom'>Serge Roland Komenan Koffi</p>
                                   <p className='message'>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Minima, libero.
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo, doloribus cupiditate! Repellat quos omnis neque porro veniam, voluptate aliquid suscipit?
                                   </p>
                              </div>
                         </div>
                         <div className='card_commentaire'>
                              <div className='user_profil'>
                                   <Image
                                        src={Profil}
                                        width={50}
                                        height={50}
                                        className='image'
                                        alt="Photo de profile de l'utilisateur"
                                   />
                              </div>
                              <div className='comment_user'>
                                   <p className='nom'>Serge Roland Komenan Koffi</p>
                                   <p className='message'>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Minima, libero.
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo, doloribus cupiditate! Repellat quos omnis neque porro veniam, voluptate aliquid suscipit?
                                   </p>
                              </div>
                         </div>
                         <div className='card_commentaire'>
                              <div className='user_profil'>
                                   <Image
                                        src={Profil}
                                        width={50}
                                        height={50}
                                        className='image'
                                        alt="Photo de profile de l'utilisateur"
                                   />
                              </div>
                              <div className='comment_user'>
                                   <p className='nom'>Serge Roland Komenan Koffi</p>
                                   <p className='message'>
                                        Lorem ipsum dolor sit amet, consectet
                                   </p>
                              </div>
                         </div>
                         <div className='card_commentaire'>
                              <div className='user_profil'>
                                   <Image
                                        src={Profil}
                                        width={50}
                                        height={50}
                                        className='image'
                                        alt="Photo de profile de l'utilisateur"
                                   />
                              </div>
                              <div className='comment_user'>
                                   <p className='nom'>Serge Roland Komenan Koffi</p>
                                   <p className='message'>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Minima, libero.
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo, doloribus cupiditate! Repellat quos omnis neque porro veniam, voluptate aliquid suscipit?
                                   </p>
                              </div>
                         </div>
                         <div className='card_commentaire'>
                              <div className='user_profil'>
                                   <Image
                                        src={Profil}
                                        width={50}
                                        height={50}
                                        className='image'
                                        alt="Photo de profile de l'utilisateur"
                                   />
                              </div>
                              <div className='comment_user'>
                                   <p className='nom'>Serge Roland Komenan Koffi</p>
                                   <p className='message'>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Minima, libero.
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo, doloribus cupiditate! Repellat quos omnis neque porro veniam, voluptate aliquid suscipit?
                                   </p>
                              </div>
                         </div>
                         <div className='card_commentaire'>
                              <div className='user_profil'>
                                   <Image
                                        src={Profil}
                                        width={50}
                                        height={50}
                                        className='image'
                                        alt="Photo de profile de l'utilisateur"
                                   />
                              </div>
                              <div className='comment_user'>
                                   <p className='nom'>Serge Roland Komenan Koffi</p>
                                   <p className='message'>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Minima, libero.
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo, doloribus cupiditate! Repellat quos omnis neque porro veniam, voluptate aliquid suscipit?
                                   </p>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
};

// export const getStaticProps = async(context) => {
//      // code
//      // console.log(context.params.id);
//        const response = await axios.get('/api/livres/show-livre'+ context.params.id);

//      return {
//           props: {liste: response},
//      }
// }
// export const getStaticPaths = async() => {

//      const response = await axios.get('/api/livres/liste-livre');
//      const livres = response.data;
   
//      const paths = livres.map((livre) => ({
//        params: { id: livre.id.toString() },
//      }));
   
//      return {
//        paths,
//        fallback: 'blocking'
//      };
//  }

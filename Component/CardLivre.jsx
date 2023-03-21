import React, { useState} from 'react';
import Image from "next/image"
import { AiOutlineComment } from "react-icons/ai"
import Link from "next/link"
import Commentaire from './Commentaire';
import { useAuth } from '@/Hooks/auth';
import { useRouter } from 'next/router';


const CardLivre = ({livres}) => {

     const [active, setActive] = useState(false)

     const { user } = useAuth()

     const router = useRouter()



     if(active && !user) {
                    
          router.push('/Auth/login')
     }    

     return (
          <>
               <div className="cards_livres">
                    <div className='image_cover'>
                         <Link href='' onClick={() => setActive(true)}>
                              <Image loader={() => `http://127.0.0.1:8000/${livres?.cover}`} src={livres ? `http://127.0.0.1:8000/${livres?.cover}` : 'Chargement'} width={10} height={10} alt='Image de couverture du livre' priority className='image' />
                         </Link>
                    </div>
                    <div className='categorie_div'>
                         <p>{livres?.categorie.nom}</p>
                    </div>
                    <div className='livre_info'>
                         <p>{livres?.auteur}</p>
                         <p>{livres?.titre}</p>
                    </div>
                    <div className='info_user'>
                         <div className='profil_user'>
                              <div className='profil'>
                                   <p>{livres?.user.nom[0]}</p>
                              </div>
                              <div className='nom'>
                                   {livres?.user.nom}
                              </div>
                         </div>
                         <div className='commenter' onClick={() => setActive(true)}>
                              <AiOutlineComment />
                         </div>
                    </div>
               </div> 
               {
                    active && user && <Commentaire id={livres.id} close={() => setActive(false)} /> 
                    
               }
               
          </>
     );
};

export default CardLivre;
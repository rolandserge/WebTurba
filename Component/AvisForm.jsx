import Image from 'next/image';
import React from 'react';
import Cover from "../Assets/avis.jpg"

const AvisForm = () => {
     return (
          <div className='container_avis_form'>
               <div className='avis_div'>
                    <div className='avis_image'>
                         <Image src={Cover} alt="Formulaire d'illustration d'avis" className='image' />
                    </div>
                    <div className='form_div'>
                         <div className='titre'>
                              <p>Entrer votre avis</p>
                         </div>
                         <div className='form_card'>
                              <form action="" method="post">
                                   <div>
                                        <input type="text" placeholder='Entrer votre nom et prenom' />
                                   </div>
                                   <div className='message'>
                                        <textarea name="" id="" cols="30" placeholder='Entrer votre avis ici' rows="10"></textarea>
                                   </div>
                                   <div className='action'>
                                        <button>Envoyer</button>
                                   </div>
                              </form>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default AvisForm;
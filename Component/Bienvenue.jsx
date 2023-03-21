import Image from 'next/image';
import React from 'react';
import Bienvenu from "../Assets/bienvenu.jpg"

const Bienvenue = () => {
     return (
          <div className='container_bienvenu'>
               <div className='bienvenu_div'>
                    <div className='bienvenue_image'>
                         <Image src={Bienvenu} alt="L'image de bienvenue" className='image' />
                    </div>
                    <div className='text_bienvenu'>
                         <div className='titre'>
                              <h2>Akwaba ! Vous etes sur la bonne adresse</h2>
                         </div>
                         <div className='text'>
                              <p>
                              Nous sommes heureux de vous accueillir ici et nous espérons que 
                              vous trouverez ce que vous cherchez. Notre site vous permettra de gérer 
                              efficacement votre collection de livres, d'ajouter de nouveaux titres, 
                              de suivre les livres que vous avez lus, de noter vos lectures, de partager 
                              des commentaires et bien plus encore. 
                              </p>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Bienvenue;
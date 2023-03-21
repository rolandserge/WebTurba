import React from 'react';
import Image from "next/image"
import logoutUser from "../Assets/logout.png"
import Profil from "../Assets/utilisateur.png"
import Ajouter from "../Assets/ajouter.png"
import Livre from "../Assets/livre-ouvert.png"
import Link from 'next/link';
import { useAuth } from '@/Hooks/auth';

const PopProfile = ({close}) => {

     const { logout } = useAuth()

     return (
          <div className='container_pop' onMouseLeave={close}>
               <div className='pop_up'>
                    <Link href='/Profile' className="pop_card">
                         <div className='image_pop'>
                              <Image src={Profil} className='image' alt='image illustration' />
                         </div>
                         <div className="titre">
                              <p>Mon profil</p>
                         </div>
                    </Link>
                    <Link href='/' className="pop_card">
                         <div className='image_pop'>
                              <Image src={Ajouter} className='image' alt='image illustration' />
                         </div>
                         <div className="titre">
                              <p>Ajouter un livre</p>
                         </div>
                    </Link>
                    <Link href='/' className="pop_card">
                         <div className='image_pop'>
                              <Image src={Livre} className='image' alt='image illustration' />
                         </div>
                         <div className="titre">
                              <p>Mes livres</p>
                         </div>
                    </Link>
                    <Link href='/' className="pop_card deconnexion" onClick={logout}>
                         <div className='image_pop'>
                              <Image src={logoutUser} className='image' alt='image illustration' />
                         </div>
                         <div className="titre">
                              <p>Deconnexion</p>
                         </div>
                    </Link>
               </div>
          </div>
     );
};

export default PopProfile;
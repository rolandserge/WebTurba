import React from 'react';
import Image from "next/image"
import Image2 from "../Assets/illustration2.png"
import Image1 from "../Assets/illustration3.png"
import Link from 'next/link';
import { useAuth } from '@/Hooks/auth';

const Header = () => {

     const { user } = useAuth()

     return (
          <div className='container_header'>
               <div className='card_header'>
                    <div className='image_gauche'>
                         <Image src={Image1} alt='image illustration' className='image'/>
                    </div>
                    <div className='bienvenu_div'>
                         <div className='text_acceuil'>
                              <p>Bienvenue sur <span className='logo'>GesiLivre</span></p>
                              <p className='collection'>Collection de livre en ligne</p>
                              <div className='span'>
                                   <span>Une plateforme entierement digitalisée dediée aux personnes amoureuses de la lecture !!! Retrouvez les meilleures collections ainsi que la gestion de vos livres ici</span>
                              </div>
                         </div>
                         <div className='auth'>
                              {
                                   user ? <Link href={'/Livres'} className='profile'>Decouvrez tous les livres</Link> : 
                                   <>
                                        <Link href={'/Auth/login'} className="login">Se conneter</Link>
                                        <Link href={'/Auth/register'} className='register'>S'incrire</Link>
                                   </>
                              }
                         </div>
                    </div>
                    <div className='image_droite'>
                         <Image src={Image2} alt='illustration image' className="image" />
                    </div>
               </div>
          </div>
     );
};

export default Header;
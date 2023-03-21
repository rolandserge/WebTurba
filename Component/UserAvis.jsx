import React from 'react';
import Link from 'next/link'

const UserAvis = () => {
     return (
          <div className='container_avis'>
               <div className='titre'>
                    <h2>Les commentaires des utilisateurs</h2>
               </div>
               <div className='avis_cards'>
                    <div className="avis_card">
                         <div className='image_div'>
                              <div className='card_image'>
                                   <p>k</p>
                              </div>
                         </div>
                         <div className='div_nom'>
                              <h3>Serge-Roland</h3>
                         </div>
                         <div className='message_div'>
                              <p>
                                   Lorem ipsum dolor sit amet 
                                   consectetur adipisicing elit. Fugit, sequi?
                                   Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
                                   Lorem ipsum dolor sit amet consectetur
                              </p>
                         </div>
                         <div className='voir_div'>
                              <Link href='/'>Voir plus</Link>
                         </div>
                    </div>
                    <div className="avis_card">
                         <div className='image_div'>
                              <div className='card_image'>
                                  <p>M</p>
                              </div>
                         </div>
                         <div className='div_nom'>
                              <h3>Serge-Komenan</h3>
                         </div>
                         <div className='message_div'>
                              <p>
                                   Lorem ipsum dolor sit amet 
                                   consectetur adipisicing elit. Fugit, sequi?
                                   Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
                                   Lorem ipsum dolor sit amet consectetur
                              </p>
                         </div>
                         <div>
                              <Link href='/'>Voir plus</Link>
                         </div>
                    </div>
                    <div className="avis_card">
                         <div className='image_div'>
                              <div className='card_image'>
                                   <p>S</p>
                              </div>
                         </div>
                         <div className='div_nom'>
                              <h3>Komenan koffi</h3>
                         </div>
                         <div className='message_div'>
                              <p>
                                   Lorem ipsum dolor sit amet 
                                   consectetur adipisicing elit. Fugit, sequi?
                                   Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
                                   Lorem ipsum dolor sit amet consectetur
                              </p>
                         </div>
                         <div>
                              <Link href='/'>Voir plus</Link>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default UserAvis;
import React from 'react';
import { MdOutlineMailOutline } from "react-icons/md"
import { GoLocation } from "react-icons/go"
import { BsTelephone } from "react-icons/bs"

const Footer = () => {
    return (
        <div className='footer_center'>
            <div className='footer_container'>
                <div className="card titre">
                    <div className='logo'>
                        <p className='grand'>GesiLivre</p>
                    </div>
                    <div className='description'>
                        <p>
                            Une plateforme entierement digitalisée 
                            dediée aux personnes amoureuses de la lecture 
                            !!! Retrouvez les meilleures collections ainsi que 
                            la gestion de vos livres ici
                        </p>
                    </div>
                    <div className='compte_infos'>
                        <h3>Rejoignez nous vite !</h3>
                    </div>
                </div>
                <div className="card quicks">
                    <div>
                        <p className='quick'>Categories</p>
                    </div>
                    <div className='quick_menu'>
                        <p>Scientifique</p>
                        <p>Roman</p>
                        <p>Litterature</p>
                        <p>Sport</p>
                    </div>
                </div>
                <div className="card working">
                    <div className='work'>
                        <p>Pourquoi Nous</p>
                    </div>
                    <div className='horaire'>
                        <p>Disponibilté H 24</p>
                        <p>Performant</p>
                        <p>Securiser</p>
                    </div>
                </div>
                <div className="card coordonner">
                    <div className='finds'>
                        <p>Nos coordonnées</p>
                    </div>
                    <div className='mes_contacts'>
                        <div>
                            <div>
                                <MdOutlineMailOutline />
                            </div>
                            <p>GesiLivre@gmail.ci</p>
                        </div>
                        <div>
                            <div>
                                <BsTelephone />
                            </div>
                            <p>+ 225 07 04 21 91 95</p>
                        </div>
                        <div>
                            <div>
                                <GoLocation />
                            </div>
                            <p>Web Turba Cocody</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;

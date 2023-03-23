import React, { useEffect, useRef } from 'react';
import { useState } from 'react';
import useData from '../Hooks/data';
import axios from '../Lib/axios';

const EditLivre = ({id, close}) => {

     const coverRef = useRef()

     const [infoLivre, setInfoLivre] = useState({
          titre: "",
          auteur: "",
          description: "",
          categorie_id: ""
     })

     const handlechange = (e) => {
          const value = e.target.value;
          const name = e.target.name
          setInfoLivre(infoLivre => {
               return {...infoLivre, [name]: value}
          });
     };

     const { livres, categories } = useData()

     const MonLivre = () => {

          const filter = livres?.filter((x) => x.id == id)

          return filter[0]
     };

     useEffect(() => {
          
          setInfoLivre(MonLivre())
          
     }, [])

     const modifierLivre = async(e) => {

          e.preventDefault()

          const formData = new FormData()

          const titre = infoLivre.titre
          const auteur = infoLivre.auteur
          const image = coverRef.current.files[0]
          const description = infoLivre.description
          const categorie = infoLivre.categorie_id

          formData.append("titre", titre)
          formData.append("auteur", auteur)
          formData.append("cover", image)
          formData.append("description", description)
          formData.append("categorie", categorie)
          formData.append('_method', 'PATCH');

          axios.post(`/api/livres/update-livre/${id}`, formData)
          .then((res) => {
               if(res.data.status == 200) {
                    alert(res.data.message)
               }
          })
     }

     return (
          <div className='form_add_livre'>
          <form action="" method="post" encType="multipart/form-data" onSubmit={modifierLivre}>
               <div className='entete'>
                    <p>Modifier un livre</p>
                    <p className='close' onClick={close}>X</p>
               </div>
               <div>
                    <label htmlFor="">Modifier le titre du livre</label>
                    <input type="text" required name='titre' onChange={handlechange} value={infoLivre?.titre} placeholder='Entrer le titre du livre'/>
               </div>
               <div>
                    <label htmlFor="">Modifier le nom de l'auteur du livre</label>
                    <input type="text" required name='auteur' onChange={handlechange} value={infoLivre?.auteur} placeholder="Entrer le nom de l'auteur du livre" />
               </div>
               <div>
                    <label htmlFor="">Modifier la categorie du livre</label>
                    <select name="categorie_id" value={infoLivre.categorie_id} onChange={handlechange} required>
                         {
                              categories.map((categorie, index) => {

                                   return ( 
                                        <option key={index} value={categorie.id}>{categorie.nom}</option>
                                   )

                              })
                         }

                    </select>
               </div>
               <div>
                    <label htmlFor="">Modifier la description du livre</label>
                    <textarea name="description" required onChange={handlechange} value={infoLivre?.description} cols="30" rows="10"></textarea>
               </div>
               <div>
                    <label htmlFor="">Modifier la photo de couverture</label>
                    <input type="file" required ref={coverRef}/>
               </div>
               <div className='add_btn'>
                    <button>Modifier le livre</button>
               </div>
          </form>
     </div>
     );
};

export default EditLivre;
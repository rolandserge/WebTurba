import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useState } from 'react';

const EditLivre = () => {
     
     const router = useRouter()
     const [livre, setLivre] = useState()
     const { id } = router.query

     useEffect(() => {
          axios.get('/api/livres/show-livre/'+ id).then((res) => {
               if(res.data.status == 200) {

                    setLivre(res.data.livre)
               }
          })
     }, [id])
     console.log(livre);
     const modifierLivre = async(e) => {

          e.preventDefault();
     }

     return (
          <div className='form_add_livre'>
          <form action="" method="post" onSubmit={modifierLivre}>
               <div className='entete'>
                    <p>Modifier un livre</p>
                    <p className='close' onClick={modal}>X</p>
               </div>
               <div>
                    <label htmlFor="">Modifier le titre du livre</label>
                    <input type="text" ref={titreRef} placeholder='Entrer le titre du livre' id="" />
               </div>
               <div>
                    <label htmlFor="">Modifier le nom de l'auteur du livre</label>
                    <input type="text" ref={auteurRef} placeholder="Entrer le nom de l'auteur du livre" />
               </div>
               <div>
                    <label htmlFor="">Modifier la categorie du livre</label>
                    <select name="" ref={categorieRef}>
                         <option value="">--- selectionner la categorie ---</option>
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
                    <textarea name="" ref={descriptionRef} cols="30" rows="10"></textarea>
               </div>
               <div>
                    <label htmlFor="">Modifier la photo de couverture</label>
                    <input type="file" name="" ref={coverRef}/>
               </div>
               <div className='add_btn'>
                    <button>Modifier le livre</button>
               </div>
          </form>
     </div>
     );
};

export default EditLivre;
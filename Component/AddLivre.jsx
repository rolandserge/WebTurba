import React, { useEffect, useRef, useState } from 'react';
import { useAuth } from '@/Hooks/auth';
import { useDispatch } from 'react-redux';
import axios from '@/Lib/axios';
import { ajoutLivre } from '@/slices/livresSlice';

const AddLivre = ({modal}) => {

     const titreRef = useRef()
     const auteurRef = useRef()
     const coverRef = useRef()
     const descriptionRef = useRef()
     const categorieRef = useRef()

     const [categories, setCategories] = useState([])

     const dispatch = useDispatch()

     const { user } = useAuth()

     useEffect(() => {

          (async() => {

               const response = await axios.get("/api/categories/liste-categorie")

               setCategories(response.data.categories)
          })()
     }, [])

     const addLivre = async(e) => {

          e.preventDefault()
          const titre = titreRef.current.value
          const auteur = auteurRef.current.value
          const cover = coverRef.current.files[0]
          const description = descriptionRef.current.value
          const categorie = categorieRef.current.value

          const data = new FormData()
          data.append('titre', titre)
          data.append('auteur', auteur)
          data.append('cover', cover)
          data.append('description', description)
          data.append('user', user.id)
          data.append('categorie', categorie)
               
          await axios.post('/api/livres/add-livre', data).then((response) => 
               {    
                    if (response.data.status == 200) {

                    dispatch(ajoutLivre(response.data.livre))

               }
               
          }).catch(error => console.log(error))
     }

     return (
          <div className='form_add_livre'>
               <form action="" method="post" onSubmit={addLivre}>
                    <div className='entete'>
                         <p>Ajouter un livre</p>
                         <p className='close' onClick={modal}>X</p>
                    </div>
                    <div>
                         <label htmlFor="">Enter le titre du livre</label>
                         <input type="text" ref={titreRef} placeholder='Entrer le titre du livre' id="" />
                    </div>
                    <div>
                         <label htmlFor="">Entrer le nom de l'auteur du livre</label>
                         <input type="text" ref={auteurRef} placeholder="Entrer le nom de l'auteur du livre" />
                    </div>
                    <div>
                         <label htmlFor="">Selectionner la categorie du livre</label>
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
                         <label htmlFor="">Entrer la description du livre</label>
                         <textarea name="" ref={descriptionRef} cols="30" rows="10"></textarea>
                    </div>
                    <div>
                         <label htmlFor="">Choisissez la photo de couverture</label>
                         <input type="file" name="" ref={coverRef}/>
                    </div>
                    <div className='add_btn'>
                         <button>Ajouter le livre</button>
                    </div>
               </form>
          </div>
     );
};

//excecuter code cote serveur
export async function getStaticProps() {
     // code
          
          // const categories = await response.json()

          // console.log(response)

     return {
          props: {
               categories: response
          },
     }
 }
export default AddLivre;


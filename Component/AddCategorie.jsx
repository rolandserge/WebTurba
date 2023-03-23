import React from 'react';
import { useRef } from 'react';
import { useAuth } from '../Hooks/auth'
import axios from '../Lib/axios';


const AddCategorie = ({close}) => {

     const nomRef = useRef()
     const descriptionRef = useRef()
     const { user } = useAuth()
     const AddCategory = async (e) => {
          

          e.preventDefault()
          const nom = nomRef.current.value
          const description = descriptionRef.current.value

          await axios.post('/api/categories/add-categorie', {nom: nom, description: description, user: user.id})
          .then((res) => {
               if(res.data.status == 200) {
                    nomRef.current.value = ''
                    descriptionRef.current.value = ''
               }
          })

     }
     return (
          <div className='form_add_livre'>
               <form action="" method="post" onSubmit={AddCategory}>
                    <div className='entete'>
                         <p>Ajouter une categorie</p>
                         <p className='close' onClick={close}>X</p>
                    </div>
                    <div>
                         <label htmlFor="">Enter le nom de la categorie</label>
                         <input type="text" ref={nomRef} required placeholder='Entrer le nom de la categorie'/>
                    </div>
                    <div>
                         <label htmlFor="">Entrer la descritpion</label>
                         <textarea name="" ref={descriptionRef} required cols="30" rows="10" placeholder='Entrer la description de la categorie'></textarea>
                    </div>
                    <div className='add_btn'>
                         <button>Ajouter categorie</button>
                    </div>
               </form>
          </div>
     );
};

export default AddCategorie;
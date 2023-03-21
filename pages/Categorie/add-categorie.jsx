import React from 'react';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { ajouterLivre } from '../../slices/livresSlice'
import { useAuth } from '../../Hooks/auth'


const categorie = () => {

     const nomRef = useRef()
     const descriptionRef = useRef()

     const dispatch = useDispatch();
     
     const AddCategory = async (e) => {
          
          const { user } = useAuth()

          e.preventDefault()
          const users = user.id
          const nom = nomRef.current.value
          const description = descriptionRef.current.value

          dispatch(ajouterLivre({nom, description, users}))

     }
     return (
          <div className='login_form'>
               <form action="" method="post" onSubmit={AddCategory}>
                    <div>
                         <p>Ajouter une categorie</p>
                    </div>
                    <div>
                         <label htmlFor="">Enter le nom de la categorie</label>
                         <input type="text" ref={nomRef} placeholder='Entrer le nom de la categorie'/>
                    </div>
                    <div>
                         <label htmlFor="">Entrer la descritpion</label>
                         <textarea name="" ref={descriptionRef} cols="30" rows="10" placeholder='Entrer la description de la categorie'></textarea>
                    </div>
                    <div className='button'>
                         <button>Ajouter categorie</button>
                    </div>
               </form>
          </div>
     );
};

export default categorie;
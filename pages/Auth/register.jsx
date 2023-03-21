import Link from 'next/link';
import React, { useRef } from 'react';
import { useAuth } from '../../Hooks/auth';

const register = () => {
     
     const nomRef = useRef()
     const prenomRef = useRef()
     const emailRef = useRef()
     const passwordRef = useRef()

     const { register, isLoading, user } = useAuth({middleware : "guest"})
     

     const registerFrom = async (e) => {

          e.preventDefault()
          const nom = nomRef.current.value
          const prenom = prenomRef.current.value
          const email = emailRef.current.value
          const password = passwordRef.current.value

          register({nom, prenom, email, password})
     }

     if(isLoading || user) {
          
          return "Chargement ..."
     }

     return (
          <div className='login_form'>
              <form action="" method="post" onSubmit={registerFrom}>
                    <div>
                         <p>Formulaire d'inscription</p>
                    </div>
                    <div>
                         <label htmlFor="">Entrer votre nom</label>
                         <input type="text" name="" ref={nomRef} placeholder='Entrer votre nom' />
                    </div>
                    <div>
                         <label htmlFor="">Entrer votre prenom</label>
                         <input type="text" name="" ref={prenomRef} placeholder='Entrer votre prenom' />
                    </div>
                    <div>
                         <label htmlFor="">Entrer votre adresse email</label>
                         <input type="email" name="" ref={emailRef} placeholder='Entrer votre adresse e-mail' />
                    </div>
                    <div>
                         <label htmlFor="">Entrer votre mot de passe</label>
                         <input type="password" name="" ref={passwordRef} placeholder='Entrer votre mot de passe' />
                    </div>
                    <div className='button'>
                         <button>S'inscrire</button>
                    </div>
                    <div>
                         <Link href={'/Auth/login'}>Se connecter</Link>
                    </div>
              </form>
          </div>
     );
};

export default register;
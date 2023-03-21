import Link from 'next/link';
import React, {useRef} from 'react';
import { useAuth } from '../../Hooks/auth';

const login = () => {

     const emailRef = useRef()
     const passwordRef = useRef()
     
     const { Login, isLoading, user} = useAuth({ middleware : "guest"})

     const loginForm = async (e) => {

          e.preventDefault()

          const email = emailRef.current.value
          const password = passwordRef.current.value
          Login({email, password})
     }

     if(isLoading || user) {
          
          return 'Chargement ...'
     }

     return (
          <div className='login_form'>
               <form action="" method="post" onSubmit={loginForm}>
                    <div>
                         <p>Formulaire de connexion</p>
                    </div>
                    <div>
                         <label htmlFor="">Entrer votre adresse email</label>
                         <input type="email" ref={emailRef} placeholder='Entrer votre adresse email' />
                    </div>
                    <div>
                         <label htmlFor="">Entrer votre mot de passe</label>
                         <input type="password" name="" ref={passwordRef} placeholder='Entrer votre mot de passe'/>
                    </div>
                    <div className='button'>
                         <button>Se connecter</button>
                    </div>
                    <div>
                         <Link href={'/Auth/register'}>S'incrire</Link>
                    </div>
               </form>
          </div>
     );
};

export default login;
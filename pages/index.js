import AddLivre from '../Component/AddLivre'
import Livres from "../Component/Livres"
import Header from "../Component/Header"
import { useEffect, useState } from 'react';
import { useAuth } from "../Hooks/auth"
import NouvelSortie from "../Component/NouvelSortie"
import UserAvis from "../Component/UserAvis"
import Bienvenue from "../Component/Bienvenue"
import AvisForm from "../Component/AvisForm"
import axios from '@/Lib/axios';
import { useDispatch } from 'react-redux';
import NewSletter from "../Component/NewSletter"
import { deleteLivre, listeLivre } from '@/slices/livresSlice';

export default function Home() {

  const [check, setCheck] = useState(false)

  const { user } = useAuth()
  
  const dispatch =  useDispatch()
  


    useEffect(() => {
        // (async() => {
            axios.get("/api/livres/liste-livre").then((response) => dispatch(listeLivre(response.data.livres)))
        // })

    }, [])

    const supprimerLivre = async(id) => {

        await axios.delete('/api/livres/delete-livre/'+ id).then((response) => {
            if(response.data.status == 200) {
                dispatch(deleteLivre(id))
            }
        })
    } 
  return (
    <div>
        <section>
            <Header />
        </section>
        <section>
            <NouvelSortie />
        </section>
        <section>
            <Bienvenue />
        </section>
        <section>
            <Livres />
        </section>
        <section>
            <UserAvis />
        </section>
        <section>
            <AvisForm />
        </section>
        <section>
            <NewSletter />
        </section>
    </div>
  )
}

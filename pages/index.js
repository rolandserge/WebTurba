import Livres from "../Component/Livres"
import Header from "../Component/Header"
import NouvelSortie from "../Component/NouvelSortie"
import UserAvis from "../Component/UserAvis"
import Bienvenue from "../Component/Bienvenue"
import AvisForm from "../Component/AvisForm"
import NewSletter from "../Component/NewSletter"
import Footer from "@/Component/Footer"

export default function Home() {

  return (
    <div className="body">
        <section className="section_navbar">
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
        <footer>
            <Footer />
        </footer>
    </div>
  )
}

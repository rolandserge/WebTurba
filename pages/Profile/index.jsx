import React, { useState } from 'react';
// import Livres from "../../Component/livres";
// import Layout from "../../Layout/Layout"
// import LivreUser from '../../Component/LivreUser';
import { useAuth } from '../../Hooks/auth';
import DashbordLayout from '../../Layout/DashbordLayout';




// const collectionLinks = collections.map((collection) => (
//       <a
//         href="/"
//           onClick={(event) => event.preventDefault()}
//           key={collection.label}
//           className={classes.collectionLink}
//         >
//       <span style={{ marginRight: rem(9), fontSize: rem(16) }}>{collection.emoji}</span>{' '}
//         {collection.label}
//       </a>
//       ));


export default function profile({Children}) {

          const [content, setContent] = useState('creer')

          const { user, isLoading } = useAuth({middleware : "auth"})


        if(isLoading || !user) {

          return <>Changerment ...</> 
        }
     
     return (
        <>
         {Children}
        </>
  );
}

profile.getLayout = function getLayout(profile) {

  return (
        <DashbordLayout>
          {profile}
      </DashbordLayout>
  )
}

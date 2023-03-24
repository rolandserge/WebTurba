import React, { useState } from 'react';
import { BiBookAdd, BiCommentCheck } from "react-icons/bi"
import { MdLibraryBooks, MdOutlineLogout } from "react-icons/md"
import { createStyles, Navbar, UnstyledButton, Badge, Text, Group, ActionIcon, Tooltip, rem} from '@mantine/core';
import { IconPlus } from '@tabler/icons-react'
import LivreUser from '../../Component/LivreUser';
import { useAuth } from '../../Hooks/auth';
import AddLivre from '../../Component/AddLivre';
import useData from '../../Hooks/data';
import AddCategorie from '../../Component/AddCategorie';
import { useRouter } from 'next/router';


const useStyles = createStyles((theme) => ({
  navbar: {
    paddingTop: 0,
    overflowY: "scroll",
    minHeight: "88vh",
    height: "88vh",
    position: "fixed",
    top: "5em",
    zIndex: 1
  },

  section: {
    marginLeft: `calc(${theme.spacing.md} * -1)`,
    marginRight: `calc(${theme.spacing.md} * -1)`,
    marginBottom: theme.spacing.md,

    '&:not(:last-of-type)': {
      borderBottom: `${rem(1)} solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
      }`,
    },
  },

  searchCode: {
    fontWeight: 700,
    fontSize: rem(10),
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
    border: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[2]
    }`,
  },

  mainLinks: {
    paddingLeft: `calc(${theme.spacing.md} - ${theme.spacing.xs})`,
    paddingRight: `calc(${theme.spacing.md} - ${theme.spacing.xs})`,
    paddingBottom: theme.spacing.md,
  },

  mainLink: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    fontSize: theme.fontSizes.xs,
    padding: `${rem(8)} ${theme.spacing.xs}`,
    borderRadius: theme.radius.sm,
    fontWeight: 500,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    },
  },

  mainLinkInner: {
    display: 'flex',
    alignItems: 'center',
    flex: 1,
  },

  mainLinkIcon: {
    marginRight: theme.spacing.sm,
    fontSize: "1.5em",
    color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[6],
  },

  mainLinkBadge: {
    padding: 0,
    width: rem(20),
    height: rem(20),
    pointerEvents: 'none',
  },

  collections: {
    paddingLeft: `calc(${theme.spacing.md} - ${rem(6)})`,
    paddingRight: `calc(${theme.spacing.md} - ${rem(6)})`,
    paddingBottom: theme.spacing.md,
  },

  collectionsHeader: {
    paddingLeft: `calc(${theme.spacing.md} + ${rem(2)})`,
    paddingRight: theme.spacing.md,
    marginBottom: rem(5),
  },

  collectionLink: {
    display: 'block',
    padding: `${rem(8)} ${theme.spacing.xs}`,
    borderRadius: theme.radius.sm,
    textTransform: 'capitalize',
    fontSize: theme.fontSizes.xs,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    lineHeight: 1,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    },
  },
}));


export default function profile() {
  
        const [content, setContent] = useState("livre")
        const [addCategorie, setAddCategorie] = useState(false)

        const { user, isLoading, logout } = useAuth({middleware : "auth"})
        
        const { livres, categories } = useData()
        const router = useRouter()



        const { classes } = useStyles();

        const FilterDataLivre = () => {

            const filter = livres?.filter((x) => x.user_id === user.id)

            return filter
       };
  
      if(isLoading || !user) {

          return <>Changerment ...</> 
        }

     return (
        <div className='profile_page'>
          <header>
          <Navbar width={{ sm: 300 }} p="md" className={classes.navbar}>
                    <Navbar.Section className={classes.section}>
                        <div className='profil_user_div'>
                          <div className='photo'>
                            {user.nom[0]}
                          </div>
                          <div className='nom_prenom'>
                            <p>{user?.nom + ' ' + user?.prenom}</p>
                          </div>
                        </div>
                    </Navbar.Section>
                    <Navbar.Section className={classes.section}>
                        <div className={classes.mainLinks} onClick={() => setContent('livre')}>
                              <UnstyledButton className={classes.mainLink}>
                            <div className={classes.mainLinkInner}>
                              <div className={classes.mainLinkIcon}>
                                <MdLibraryBooks />
                              </div>
                              <p className='theme'>Mes livres crées</p>
                          </div>
                            <Badge size="sm" variant="filled" className={classes.mainLinkBadge}>
                              {  FilterDataLivre() ? FilterDataLivre().length : 'Loading ...'}
                            </Badge>
                          </UnstyledButton>
                        </div>
                        <div className={classes.mainLinks} onClick={() => router.push('/Livres')}>
                                  <UnstyledButton className={classes.mainLink}>
                            <div className={classes.mainLinkInner}>
                              <div className={classes.mainLinkIcon}>
                                  <BiCommentCheck />
                              </div>
                              <p className='theme'>Tous les livres</p>
                          </div>
                            <Badge size="sm" variant="filled" className={classes.mainLinkBadge}>
                              {livres ? Object.keys(livres).length : "Loading ..." }
                            </Badge>
                          </UnstyledButton>
                        </div>
                        <div className={classes.mainLinks} onClick={() => setContent('creer')}>
                                  <UnstyledButton className={classes.mainLink}>
                            <div className={classes.mainLinkInner}>
                              <div className={classes.mainLinkIcon}>
                                <BiBookAdd />
                              </div>
                              <p className='theme'>Creer un livre</p>
                          </div>
                          </UnstyledButton>
                        </div>
                        <div className={classes.mainLinks} onClick={logout}>
                                  <UnstyledButton className={classes.mainLink}>
                            <div className={classes.mainLinkInner}>
                              <div className={classes.mainLinkIcon}>
                                <MdOutlineLogout />
                              </div>
                              <p className='theme'>Deconnexion</p>
                          </div>
                          </UnstyledButton>
                        </div>
                    </Navbar.Section>
                    <Navbar.Section className={classes.section}>
                    <Group className={classes.collectionsHeader} position="apart">
                         <Text size="1.1rem" weight={500} color="dimmed">
                         Categories
                         </Text>
                         <Tooltip label="Creer une categorie" onClick={() => setAddCategorie(true)} withArrow position="right">
                         <ActionIcon variant="default" size={18}>
                         <IconPlus size="0.8rem" stroke={1.5} />
                         </ActionIcon>
                         </Tooltip>
                    </Group>
                    {
                      categories?.map((categorie, index) => {
                          return (
                            <div className={classes.collections} key={index}>
                              <p className={classes.collectionLink}>
                                {categorie.nom}
                              </p>
                            </div>
                          )
                      })
                    }
                    </Navbar.Section>
               </Navbar>
          </header>
         <section>
          {
            content === "livre" && <LivreUser livres={FilterDataLivre()} /> }
           { content === "creer" && <AddLivre close={() => setContent('livre')} /> }
           { addCategorie && <AddCategorie close={() => setAddCategorie(false)} /> }
          
         </section>
        </div>
  );
}


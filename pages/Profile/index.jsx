import React, { useState } from 'react';
import Livres from "../../Component/livres";
import Link from "next/link"
import { BiBookAdd, BiCommentCheck } from "react-icons/bi"
import { MdLibraryBooks } from "react-icons/md"
import { TbChartInfographic } from "react-icons/tb"
import { createStyles, Navbar, TextInput, Code, UnstyledButton, Badge, Text, Group, ActionIcon, Tooltip, rem} from '@mantine/core';
import { IconSearch, IconPlus } from '@tabler/icons-react'
import LivreUser from '../../Component/LivreUser';
import { useAuth } from '../../Hooks/auth';
import AddLivre from './Livres/AddLivre';
import useData from '../../Hooks/data';


const useStyles = createStyles((theme) => ({
  navbar: {
    paddingTop: 0,
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
    textDecoration: 'none',
    borderRadius: theme.radius.sm,
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

const collections = [
  { emoji: '👍', label: 'Sales' },
  { emoji: '🚚', label: 'Deliveries' },
  { emoji: '💸', label: 'Discounts' },
  { emoji: '💰', label: 'Profits' },
  { emoji: '✨', label: 'Reports' },
  { emoji: '🛒', label: 'Orders' },
  { emoji: '📅', label: 'Events' },
  { emoji: '🙈', label: 'Debts' },
  { emoji: '💁‍♀️', label: 'Customers' },
];


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


export default function profile() {

          const [content, setContent] = useState('livre')

          const { user, isLoading } = useAuth({middleware : "auth"})

        const { livres } = useData()

        const { classes } = useStyles();

        const FilterDataLivre = () => {

            const filter = livres?.filter((x) => x.user_id === user.id)

            return filter
       };
      //  const FilterDataLivreCommenter = () => {

      //   const filter = livres.filter((x) => x.livre_id === user.id)
      // };
  
      if(isLoading || !user) {

          return <>Changerment ...</> 
        }
     
     return (
        <div className='profile_page'>
          <header>
          <Navbar height={700} width={{ sm: 300 }} p="md" className={classes.navbar}>
                    <Navbar.Section className={classes.section}>
                    {/* <UserButton
                         image="https://i.imgur.com/fGxgcDF.png"
                         name="Bob Rulebreaker"
                         email="Product owner"
                         icon={<IconSelector size="0.9rem" stroke={1.5} />}
                    /> */}
                    </Navbar.Section>

                    <TextInput
                    placeholder="Search"
                    size="xs"
                    icon={<IconSearch size="0.8rem" stroke={1.5} />}
                    rightSectionWidth={70}
                    rightSection={<Code className={classes.searchCode}>Ctrl + K</Code>}
                    styles={{ rightSection: { pointerEvents: 'none' } }}
                    mb="sm"
                    />

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
                        <div className={classes.mainLinks} onClick={() => setContent('creer')}>
                                  <UnstyledButton className={classes.mainLink}>
                            <div className={classes.mainLinkInner}>
                              <div className={classes.mainLinkIcon}>
                                <BiBookAdd />
                              </div>
                              <p className='theme'>Creer un livre</p>
                          </div>
                            <Badge size="sm" variant="filled" className={classes.mainLinkBadge}>
         
                              12
                            </Badge>
                          </UnstyledButton>
                        </div>
                        <div className={classes.mainLinks} onClick={() => setContent('commenter')}>
                                  <UnstyledButton className={classes.mainLink}>
                            <div className={classes.mainLinkInner}>
                              <div className={classes.mainLinkIcon}>
                                  <BiCommentCheck />
                              </div>
                              <p className='theme'>Les livres commentés</p>
                          </div>
                            <Badge size="sm" variant="filled" className={classes.mainLinkBadge}>
                              12
                            </Badge>
                          </UnstyledButton>
                        </div>
                        <div className={classes.mainLinks} onClick={() => setContent('stats')}>
                                  <UnstyledButton className={classes.mainLink}>
                            <div className={classes.mainLinkInner}>
                              <div className={classes.mainLinkIcon}>
                                <TbChartInfographic />
                              </div>
                              <p className='theme'>Mes Statitisques</p>
                          </div>
                            <Badge size="sm" variant="filled" className={classes.mainLinkBadge}>
                              12
                            </Badge>
                          </UnstyledButton>
                        </div>
                    </Navbar.Section>

                    <Navbar.Section className={classes.section}>
                    <Group className={classes.collectionsHeader} position="apart">
                         <Text size="xs" weight={500} color="dimmed">
                         Categories
                         </Text>
                         <Tooltip label="Create collection" withArrow position="right">
                         <ActionIcon variant="default" size={18}>
                         <IconPlus size="0.8rem" stroke={1.5} />
                         </ActionIcon>
                         </Tooltip>
                    </Group>
                    {/* <div className={classes.collections}>{collectionLinks}</div> */}
                    </Navbar.Section>
               </Navbar>
          </header>
         <section>
          {
            content === "livre" && <LivreUser livres={FilterDataLivre()} /> }
           { content === "creer" && <AddLivre /> }
           { content === "commenter" && <Livres livres = {FilterDataLivre()} /> }
           { content === "stats" && <Livres /> }
          
         </section>
        </div>
  );
}


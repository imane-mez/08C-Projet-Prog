import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base:"/08C-Projet-Prog/",
  lang: 'fr-CA',
  cleanUrls: true,
  title: "420-08C-FX",
  description: "Énoncés, grilles, calendrier et ressources du cours",
  themeConfig: {
    logo: './logos/logo.png',
    nav: [
      { text: 'Calendrier', link: '/calendrier' },
      { text: 'Horaires de rencontres', 
        // { text: 'Horaires', link: '/horaires' },
        items: [
          { text: 'Groupe 1', link: '/horaires-g1' },
          { text: 'Groupe 2', link: '/horaires-g2' }
        ]
      },
      // { text: 'Horaires', link: '/horaires' },
      { 
        text: 'Énoncés',
        items: [
          { text: 'Planification du projet', link: '/enonces/planif-projet' }
          // ,
          // { text: 'Planification de sprint', link: '/enonces/planif-sprint' },
          // { text: 'Rapport de fin de sprint', link: '/enonces/fin-sprint' },
          // { text: 'Finalisation du projet', link: '/enonces/finalisation' },
          // { text: 'Présentation finale', link: '/enonces/presentation-finale' }
        ]
       },
      { 
        text: 'Grilles', 
        items: [
          { text: 'Planification du projet', link: '/grilles/grille-planif-projet' }
          // ,
          // { text: 'Sprint (complet)', link: '/grilles/grille-sprint' },
          // { text: 'Finalisation du projet', link: '/grilles/grille-finalisation' }
        ]
       },
      {
        text: 'Ressources',
        items: [
          { text: 'Récits utilisateur', link: '/ressources/userstory' },
          { text: 'Agile & Scrum', link: '/ressources/agile-scrum' },
          { text: 'GitHub Project', link: '/ressources/github-project' },
          { text: 'GitHub Project - Guide', link: '/ressources/github-project-guide' },
          // { text: 'Normes de commentaires', link: '/ressources/normes_commentaires' },
          // { text: 'Normes de nomenclature', link: '/ressources/normes_nomenclature_code' },
          // { text: 'Diagrammes de classes', link: '/ressources/diagrammes-de-classes' },
          // { text: 'GitHub Release', link: '/ressources/github-release' },
          { text: 'Liens utiles', link: '/ressources/liens-utiles' }
        ]
      }
    ],
    sidebar: [
      {
        text: 'Documents généraux',
        items: [
          { text: 'Plan de cours', link: '/plan-de-cours' },
          { text: 'Calendrier', link: '/calendrier' }
        ]
      },
      {
        text: 'Horaires de rencontres',
        items: [
          { text: 'Groupe 1', link: '/horaires-g1' },
          { text: 'Groupe 2', link: '/horaires-g2' }
        ]
      },
      {
        text: 'Énoncés',
        items: [
          { text: 'Planification du projet', link: '/enonces/planif-projet' }
          // ,
          // { text: 'Planification de sprint', link: '/enonces/planif-sprint' },
          // { text: 'Rapport de fin de sprint', link: '/enonces/fin-sprint' },
          // { text: 'Finalisation du projet', link: '/enonces/finalisation' },
          // { text: 'Présentation finale', link: '/enonces/presentation-finale' }
        ]
      },
      {
        text: 'Grilles d’évaluation',
        items: [
          { text: 'Planification du projet', link: '/grilles/grille-planif-projet' }
          // ,
          // { text: 'Sprint (complet)', link: '/grilles/grille-sprint' },
          // { text: 'Finalisation du projet', link: '/grilles/grille-finalisation' }
        ]
      },
      {
        text: 'Modèles de départ',
        items: [
          { text: 'Planification du projet', link: '/templates/planif-projet-modele' }
          // ,
          // { text: 'Planification de sprint', link: '/templates/planif-sprint-modele' },
          // { text: 'Rapport fin de sprint', link: '/templates/fin-sprint-modele' }
        ]
      },
      {
        text: 'Ressources',
        items: [
          { text: 'Récits utilisateur', link: '/ressources/userstory' },
          { text: 'Agile & Scrum', link: '/ressources/agile-scrum' },
          { text: 'GitHub Project', link: '/ressources/github-project' },
          { text: 'GitHub Project - Guide', link: '/ressources/github-project-guide' },
          // { text: 'Normes de commentaires', link: '/ressources/normes_commentaires' },
          // { text: 'Normes de nomenclature', link: '/ressources/normes_nomenclature_code' },
          // { text: 'Diagrammes de classes', link: '/ressources/diagrammes-de-classes' },
          // { text: 'GitHub Release', link: '/ressources/github-release' },
          { text: 'Liens utiles', link: '/ressources/liens-utiles' }
        ]
      }
    ],
    search: {
      provider: 'local'
    },
    footer: {
      message: 'Cégep Garneau - 420-08C-FX<br>Version reproduite du <a href="https://08c-projet-prog.github.io/cours/" target="_blank">site</a> d\'Olivier Tremblay (Automne 2025)'
    }
  }
})
---
outline: deep
---

# Énoncé – Planification du projet

## Objectif
Présenter la planification complète du projet que vous réaliserez pendant la session.  

Ce document servira de référence pour :
- Valider la faisabilité technique et fonctionnelle du projet.  
- Organiser le développement en sprints.  
- Fournir un premier jalon d’évaluation.  

---

## Contenu attendu

Pour ce travail de planification, vous devez produire un **document PDF**  structuré à l’aide des sections suivantes :
1) Identification du projet
2) Récit utilisateur principal
3) Fonctionnalités prévues
4) Exigences techniques
5) Organisation du projet (récits utilisateurs)
6) Planification par sprints
7) Liens vers les outils

### Identification du projet
- **Titre du projet**  
- **Membres de l’équipe** (travail individuel priorisé)
- A été approuvé par le professeur (oui/non -> la réponse devrait être oui)

### Récit utilisateur principal
Formulez un récit utilisateur qui décrit l’objectif général de l’application :  


> En tant que **[type d’utilisateur]**, je veux **[fonctionnalité]** afin de **[bénéfice ou valeur ajoutée]**.

::: tip Astuce
Revisitez votre récit principal après avoir réalisé les autres section.
:::

### Fonctionnalités prévues
- Liste d'au moins **trois** grandes fonctionnalités principales accompagnées d’une brève description.
- Les fonctionnalités doivent être réalistes et non pas simplifiées, en respectant une complexité raisonnable.
- Une fonctionnalité regroupe un ensemble de cas d'utilisation.  
- **Le projet devra comporter une interface graphique et inclure au moins 2 vues (pages) différentes à intégrer à l’application :**
    - Dans une application Desktop, 2 fenêtres constituent 2 vues.
    - Dans une application console, la console ne compte que pour une vue. Une seconde vue pourrait être une exportation de données sous un tableur.

- **Minimum requis** :  
  - **Intégration de sons, d’images et de vidéos** (pas de liens Youtube) 
  - Persistance des données (dans un fichier ou une base de données) 
  - **Formulaires**  
    - Par exemple:
    - Un formulaire offrant à l’utilisateur une personnalisation de l’interface (couleurs, polices, etc.) ; l’information recueillie étant consignée dans un fichier de préférences (ex.: AppSettings.json).
    - Un formulaire permettant de saisir les valeurs d’enregistrement pour un animal dans le contexte d’une application pour un cabinet vétérinaire.
  - **Personnalisation de l’interface** (options choisies par l’utilisateur, enregistrées dans un fichier de préférences)
  - **Tutoriel d’utilisation** : Un court tutoriel d’aide à l’utilisation au format vidéo devra être accessible à même l’application. Cette fonctionnalité est en complément des 3 fonctionnalités minimalement requises.
  - Utilisation du **principe de composition** dans au moins une classe (relation un à plusieurs) 

- **Fonctionnalités optionnelles envisagées** (au moins une) :  
  - Dessin 2D  
  - Tri / recherche  
  - Génération de contenu par code  
  - Effets visuels  
  - Autre (au choix, à discuter)

- **Voici quelques types de projets pouvant être développés :**
  - Application de gestion de données / fichiers.
  - Application d’analyse de données.
  - Jeu 2D.
  - Outil d’automatisation de tâches.
  - Autre : À valider avec l’enseignant.

### Exigences techniques

- Langage de programmation (doit être orienté objet et approuvé par le prof).
- Type de fichier ou base de données pour la persistence des données.
- Environnement de développement.
- Versionnement du code (GitHub).
- Suivi du projet (GitHub Project).
- Bibliothèques, frameworks ou modules tiers (**à approuver**).  
- Formats des fichiers utilisés (images, sons, vidéos, `.json`, `.config`, etc.).  
- Plateformes cibles (ex. : Windows, tablette, téléphone).  

### Organisation du projet (Backlog produit)

- Vous devez décrire votre projet sous forme de récits utilisateurs (Qui, Quoi, Pourquoi). Voir section [récits utilisateurs](../ressources/userstory.md).
  - Par exemple :
    - En tant qu’utilisateur, je veux me connecter à l’application avec mon nom d’utilisateur et mon mot de passe afin d’accéder aux fonctionnalités qui me sont réservées.
    - En tant qu’usager, je veux pouvoir rechercher un livre par titre, auteur ou catégorie afin de trouver rapidement les ouvrages disponibles.
    - etc.
- Vous devrez créer ces récits dans votre outil de gestion de projet (GitHub Project).
  - Les récits doivent tous être sous la colonne Backlog. Ils seront déplacés durant les sprints lors des planifications de sprint.
- Identification des dépendances (quelles tâches doivent précéder les autres)

Exemple de tableau à inclure à votre remise:

| ID récit | Titre | Estimation (h) | Responsable | Dépendances |
|----------|-------|----------------|-------------|-------------|
| 1 | Ex : Implémenter le menu principal | 5 h | Alex | — |
| 2 | Ex : Intégrer l’API vidéo d’aide | 4 h | Sam | Récit 1 |


### Planification par sprints
- **Sprint 1** : objectifs et critères de complétion  
- **Sprint 2** : objectifs et critères de complétion  
- **Sprint 3** : objectifs et critères de complétion  

### Liens vers les outils
- Lien vers le tableau **Kanban** (GitHub Projects).  
  - Votre tableau doit contenir les colonnes : `Backlog`, `À faire`, `En cours`, `Terminée`, `Bogues et finition`  
- Lien vers le dépôt GitHub  
  - Vous devez ajouter mon utilisateur `imane-mez` dans votre répertoire ET votre projet  

---

## Procédure de remise

- **À remettre sur LÉA** un document PDF nommé :  
  `Planification_Nom1_Nom2.pdf`  

- N’oubliez pas de m’ajouter à votre répertoire et à votre projet GitHub.  

- **Rédaction claire**, sans fautes majeures de français  
  - *(-0,25 % par faute, max. -20 %)*  
- Présentation structurée avec titres et sous-titres  

::: warning Date limite
**Groupe 1 :** Jeudi 5 février à **09h00**  
**Groupe 2 :** Lundi 2 février à **15h00**  
Pénalité : -10 % par jour de retard (maximum 3 jours)
:::

::: tip Grille de correction
[Voir la grille de correction avec critères détaillés.](../grilles/grille-planif-projet.md)
:::

# Récits utilisateur
<blockquote>D'après les notes de cours de Martin Vézina</blockquote>


Un récit utilisateur (<i>User Story</i>) est une description simple et concise d'une fonctionnalité du point de vue de l'utilisateur final. Il permet de clarifier ce qui doit être développé en se concentrant sur la valeur ajoutée pour l’utilisateur.

Un récit utilisateur suit généralement la structure suivante :

**"En tant que [`type d'utilisateur`], je veux [`action`] afin de [`bénéfice attendu`]."**

Exemple :<br>
<i>"En tant que bibliothécaire, je veux pouvoir rechercher un livre par son titre afin de retrouver son emplacement dans la bibliothèque."</i>

## Pourquoi Utiliser les Récits Utilisateur ?

- **Favorise la compréhension** : Il se concentre sur le besoin métier plutôt que sur la solution technique.
- **Simplifie la communication** : Utilisé par toute l’équipe (développeurs, testeurs, Client, etc.).
- **Oriente vers la valeur ajoutée** : Permet de prioriser le travail en fonction des besoins réels des utilisateurs.
- **Facilite l'adaptabilité** : Agile encourage des itérations rapides et l’amélioration continue.

## Les Critères d’un Bon Récit Utilisateur (INVEST)

Un bon récit utilisateur respecte le modèle INVEST :

- **I**ndépendant : Peut être développé sans dépendre d'autres récits (le moins possible).
- **N**égociable : Peut être ajusté selon les besoins et les discussions.
- **V**aleur métier : Apporte un bénéfice clair pour l'utilisateur.
- **E**stimable : Peut être évalué en termes d'effort de développement.
- **S**uffisamment petit : Doit pouvoir être développé en un court laps de temps.
- **T**estable : Doit pouvoir être validé à l’aide de critères d’acceptation.

## Critères d’Acceptation

Les critères d’acceptation précisent les conditions à remplir pour considérer un récit comme terminé.

Exemple de critères pour le récit sur la recherche d'un livre :

- :white_check_mark: L'utilisateur doit pouvoir rechercher un livre par titre.
- :white_check_mark: Les résultats doivent inclure le titre, l’auteur et l’emplacement du livre.

## Comment Identifier les Récits Utilisateurs à partir d’une Fonctionnalité ?

Une fonctionnalité représente un besoin métier ou technique, tandis qu’un récit utilisateur (<i>User Story</i>) décrit comment un utilisateur interagit avec cette fonctionnalité pour en tirer un bénéfice.

**Processus en 4 étapes :**

- Comprendre la fonctionnalité
- Identifier les rôles des utilisateurs
- Décomposer en interactions utilisateur
- Formuler les récits utilisateur avec le format standard

### 1) Comprendre la Fonctionnalité

Prenons l'exemple d'une fonctionnalité pour une application de gestion de bibliothèque :

- **Fonctionnalité** : "Recherche de livres"

Permet aux utilisateurs de rechercher un livre par titre, auteur ou catégorie et d'afficher sa disponibilité.

### 2) Identifier les Rôles des Utilisateurs

Qui utilisera cette fonctionnalité ?

|Rôle	|Utilisation de la recherche|
|-------|---------------------------|
|Usager	|Recherche un livre pour l’emprunter
|Bibliothécaire	|Recherche un livre pour vérifier sa disponibilité
|Administrateur	|Recherche un livre pour gérer le catalogue

### 3) Décomposer en Interactions

Chaque utilisateur a un objectif spécifique en utilisant la recherche.

|Cas d'utilisation	|Objectif
|-------------------|--------
|L’usager cherche un livre par titre, auteur ou catégorie	|Trouver rapidement un livre intéressant
|L’usager veut voir la disponibilité d’un livre	|Éviter un déplacement inutile
|Le bibliothécaire recherche un livre pour le réserver à un client	|Vérifier qu’il est disponible avant la réservation
|L’administrateur recherche un livre pour modifier ses informations	|Mettre à jour ou supprimer un livre obsolète

### 4) Rédiger les Récits Utilisateurs

- En tant qu’usager, je veux rechercher un livre par titre, auteur ou catégorie afin de trouver un ouvrage qui m’intéresse rapidement.
- En tant qu’usager, je veux voir si un livre est disponible afin d’éviter un déplacement inutile à la bibliothèque.- 
- etc.

## Exercice

Vous travaillez dans une équipe qui développe une application web pour une bibliothèque municipale. Cette application doit permettre aux bibliothécaires de gérer les emprunts, aux usagers de rechercher et emprunter des livres et aux administrateurs de gérer les utilisateurs.

### Énoncé du besoin
L'application devra offrir plusieurs fonctionnalités :

- Les usagers doivent pouvoir rechercher un livre par titre, auteur ou catégorie.
- Les usagers doivent pouvoir consulter la disponibilité d’un livre avant de se déplacer à la bibliothèque.
- Les usagers doivent pouvoir emprunter et retourner des livres via leur compte en ligne.
- Les usagers doivent pouvoir se créer un compte avec leurs informations personnelles (nom, prénom, courriel, mot de passe).
- Les bibliothécaires doivent pouvoir ajouter, modifier et supprimer des livres du catalogue.
- Les bibliothécaires doivent pouvoir gérer les emprunts (suivre les livres empruntés et envoyer des rappels aux retardataires).
- Les usagers doivent recevoir des notifications lorsqu’un livre qu’ils ont réservé est disponible.
- Les administrateurs doivent pouvoir gérer les comptes utilisateurs (ajouter/supprimer des usagers et bibliothécaires).

### Consignes 
1) Identifiez les acteurs de l'application.
2) Rédigez les récits utilisateur pour chaque fonctionnalité en utilisant la structure suivante :
**"En tant que [`type d'utilisateur`], je veux [`action`] afin de [`bénéfice attendu`]."**
3) Ajoutez des critères d’acceptation pour **au moins 3 récits**.

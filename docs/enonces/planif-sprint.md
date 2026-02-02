# Énoncé – Planification de sprint

## Objectif
Présenter la planification détaillée des tâches qui seront réalisées durant le sprint, en lien direct avec les objectifs globaux du projet.  
Ce document permet de :  
- Cibler les fonctionnalités à livrer.  
- Estimer l’effort requis.  
- Définir les critères de réussite du sprint.  
- Faciliter le suivi lors des rencontres et à la revue du sprint.  

---

## Contenu attendu
Pour ce travail de planification, vous devez produire un **document PDF**  structuré à l’aide des sections suivantes :
1) Informations générales
2) Objectifs du sprint
3) Backlog du sprint
4) Critères de complétion
5) Lien vers les outils

### Informations générales
- Nom du projet  
- Membre(s) de l’équipe  
- Numéro du sprint (1, 2 ou 3)  

### Objectifs du sprint
Description claire et concise des fonctionnalités ou améliorations prévues.  

### Backlog du sprint
Tableau présentant les récits prévus (en ordre de priorité) pour le sprint :  

| ID récit | Titre | Estimation (h) | Responsable | Dépendances |
|----------|-------|----------------|-------------|-------------|
| 1 | Ex : Implémenter le menu principal | 5 h | Alex | — |
| 2 | Ex : Intégrer l’API vidéo d’aide | 4 h | Sam | Récit 1 |

- Vos récits doivent être complètement documentés selon les normes établies dans [Récits utilisateur](../ressources/userstory.md)
- Vous devez aussi inclure une **capture d’écran** de l’état de votre tableau Kanban.  
- Les récits à réaliser pour le sprint à venir devraient être dans la colonne **À faire**.
- Les récits doivent être converties de « draft » à « Issues ».
- Vous devez ajouter les critères d'accepations à chaque récit utilisateur.
- Vous devez ajouter la liste des sous-tâches du récit utilisateur sous forme de cases à cocher. Pendant le développement, c'est le développeur qui devra cocher ces cases.
- Les récits pourront être déplacés dans les colonnes subséquentes pendant la réalisation du sprint. 
- Un récit ne peut être déplacé dans la colonne **Terminée** avant sa présentation et validation au près du client (professeur).
- Le jour de la présentation, un récit qui est jugé complété sera fermé et déplacé dans la colonne **Terminée**. 
- Les récits non terminés devront être placés dans la colonne **Bogues et finitions** pour la période de finalisation du projet sauf si la réalisation du sprint suivant en dépend. Dans ce cas, et après concertation avec le professeur, ils devront être **replanifiés** pour le sprint suivant  

### Critères de complétion
Liste des conditions permettant de considérer le sprint terminé avec succès.  

Exemple :  
« Le module de gestion de profil est accessible depuis le menu principal, permet la saisie et la sauvegarde des données dans le fichier de préférences et affiche un message de confirmation. »  

### Liens vers les outils
- Lien vers le dépôt GitHub avec le tableau Kanban (GitHub Projects).  
  > Conservez le même tableau pendant toute la durée du projet.  

---

## Procédure de remise
- Le fichier de planification pour le sprint 1 doit être remis **avant le début du sprint**.  
- À remettre sur LÉA un PDF : `Planification_Sprint[numéro]_Nom1_Nom2.pdf`  
- Rédaction claire, sans fautes majeures de français (-0,25 % par faute, max. 20 %).  
- Présentation structurée avec titres et sous-titres.

::: warning Date limite
Indiquée dans LÉA pour le # de sprint concerné.    
Pénalité : -10 % à la planification du sprint (20% de la note du sprint) par jour de retard (max 3 jours).
:::

::: warning Qualité du code
La qualité de votre code et de votre dépôt dans leurs états actuels seront également évalués à la fin de chaque sprint.<br>
[Voir les normes de nomenclature de code attendues](../ressources/normes_nomenclature_code.md)<br>
[Voir les normes de commentaires attendues](../ressources/normes_commentaires.md)
:::

::: tip Rappel
[Voir la grille de correction avec critères détaillés.](../grilles/grille-sprint.md)
:::

---

## Déroulement du sprint
**Vous serez évalués pendant toutes les étapes du sprint.**

Chaque sprint doit suivre le cycle suivant :  

### Planification (avant le sprint)
- Définir les tâches à réaliser.  
- Estimer l’effort et répartir le travail.  
- Déposer la planification sur LÉA.  

### Exécution (pendant le sprint)
- Développement des fonctionnalités prévues.  
- Mise à jour régulière du tableau Kanban.  
- Suivi hebdomadaire avec le professeur (mêlée courte).  

### Clôture (fin du sprint)
- Démonstration du travail réalisé (présentation du sprint).  
  > Vous serez évalués sur la présentation convaincante des fonctionnalités réalisées pendant le sprint.
  > Assurez-vous de présenter une version stable de votre application et d'avoir bien pratiqué ce que vous démontrerez.
- Remise du rapport de fin de sprint (à la même date que la planification du prochain sprint).  

---

## Note
Lorsque vous trouvez un bogue dans votre application, vous devez l’ajouter et le documenter dans votre tableau Kanban dans une colonne **Bogues**.  

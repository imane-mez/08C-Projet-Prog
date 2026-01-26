# Guide – Utiliser GitHub Projects (Board)

GitHub Projects permet de gérer un projet de programmation sous forme de tableau (Kanban).  
C’est un outil pratique pour organiser vos récits utilisateurs, vos tâches et vos bogues.

---

## 1. Créer un nouveau projet

1. Dans GitHub, à partir du dépôt de votre projet, cliquez sur l’onglet **Projects**. 
2. Cliquez sur **New project**.   
   ![Accéder aux projets et créer un nouveau projet](../img/project-1bis.png)

2. Choisissez le type **Board**.   
   ![Choisir le type Board](../img/project-2.png)

3. Donnez un **nom au projet** (ex. *Projet Prog*) et cliquez sur **Create project**.    
   ![Nommer le projet et cliquer sur Create project](../img/project-3.png)

---

## 2. Créer et personnaliser vos colonnes

1. Par défaut, vous avez **Todo / In Progress / Done**.  
   Modifiez le nom et la description des colonnes en cliquant sur les `...` → **Edit details**.  
   ![Modifier le nom et la description d’une colonne](../img/project-4.png)

2. Donnez un nouveau nom et description à chaque colonne.  
   ![Exemple d’édition de colonne Backlog avec description](../img/project-5.png)

3. Pour ajouter une colonne, cliquez sur **+ New Column**.  
   ![Ajouter une nouvelle colonne](../img/project-6.png)

👉 Exemple de colonnes utiles :
- **Backlog** : Récits à réaliser pendant le projet.  
- **À faire** : Récits sélectionnés pour le sprint en cours.  
- **En cours** : Tâches actuellement en réalisation.  
- **Terminé** : Récits complétés.  
- **Bogues** : Problèmes à corriger avant la remise finale.  

---

## 3. Ajouter un récit utilisateur

1. Dans la colonne **Backlog**, cliquez sur **Add item**.  
   ![Exemple de tableau avec colonnes complètes](../img/project-7.png)

2. Choisissez entre :
   - **Create a draft** (Utile pendant la planification pour lister les idées initiales)  
   ![Créer un nouvel item ou un draft](../img/project-8.png) 
   - **Create new issue** (lié au dépôt GitHub)  

*Pendant la planification du projet, vous allez créer les récits utilisateurs comme des "drafts". Ensuite, pendant la planification d'un sprint, vous les convertirez en "issues" afin de commencer le développement*

---

## 4. Assigner un récit

Vous pouvez assigner un membre de l’équipe à un récit.  
Cliquez sur **Add assignees...** et sélectionnez la personne concernée.  
![Assigner un membre à un récit](../img/project-8-5.png)

---

## 5. Ajouter des critères d’acceptation et tâches techniques

1. Cliquez sur un récit pour ouvrir ses détails.  
   ![Ouvrir un récit utilisateur](../img/project-9.png)
   
2. Ajoutez vos critères d’acceptation et tâches techniques en **Markdown**.  
   Exemple :  

   ```markdown
   ## Critères d'acceptation
   - L’utilisateur peut cliquer sur un bouton **« Ajouter une tâche »**.  
   - Un formulaire s’ouvre avec au moins deux champs obligatoires : **Titre** et **Description**.  
   - Si le titre est vide, un message d’erreur clair s’affiche et la tâche n’est pas enregistrée.  
   - Une fois validée, la nouvelle tâche apparaît immédiatement dans la liste.  
   - Les données de la tâche sont sauvegardées dans un fichier `.json` ou `.ini`.  

   ## Tâches techniques
   - [ ] Créer un formulaire « Nouvelle tâche »  
   - [ ] Créer une classe `Task` avec propriétés `Title` et `Description`  
   - [ ] Sauvegarder la tâche dans une liste en mémoire  
   - [ ] Rafraîchir l’affichage dans la liste des tâches

   ```
   ![Éditer le récit](../img/project-10.png) 
   Rendu:
   ![Récit édité](../img/project-11.png)

---

## 6. Exemple de projet
   ![Projet complet](../img/project-12.png)

   

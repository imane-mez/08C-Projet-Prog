# Guide — Créer une release GitHub manuelle

## Objectif

Publier l'installateur d'une application WPF sur GitHub sous forme de *release manuelle*.  
Cette procédure permet à toute personne de **télécharger et d’exécuter** l'installateur d’une application.

## Étapes à suivre

### 1. Créer l'installateur de l'application WPF
Suivre la [procédure détaillée](../ressources/setup.md) qui sera également présentée en classe à la semaine 12.

---

### 2. Préparer le fichier à publier
À partir de l'explorateur windows, renommer le fichier installateur (`setup.exe`) se trouvant dans le dossier Release du projet installateur.<br>
Exemple de nom : `MonApplication-v1.0.0.exe`.

---

### 3. Créer une release sur GitHub

1. Ouvrir la page du dépôt GitHub.  
2. Cliquer sur l’onglet **Releases**.  (dans le sidebar à droite)
3. Sélectionner **Create a new release**.  
4. Remplir les champs :
- **Tag version** → `v1.0.0`  (Select tag / créer un nouveau tag / Create new tag)
- **Target** → `main`  
- **Title** → `Version 1.0.0`  
- **Description** → inscrire les nouveautés ou correctifs :
  ```markdown
  Nouveautés :
  - Ajout du module de recherche
  - Amélioration de la performance

  Corrections :
  - Résolution du bogue d’affichage
  ```
5. Glisser le fichier d'installation `MonApplication-v1.0.0.exe` dans la section **Attach binaries**.  
6. Cliquer sur **Publish release**.

La page de release sera disponible à une adresse du type : https://github.com/nom-utilisateur/nom-repo/releases/tag/v1.0.0

# Exigences – Diagrammes de classes UML

Un diagramme de classes UML permet de représenter la structure de votre application.  
Il doit montrer les **classes principales**, leurs **propriétés** et leurs **méthodes publiques**, ainsi que leurs **relations**.

---

## Noms de classes
- Les noms doivent être clairs, significatifs et écrits en **PascalCase***   
- Exemple : `Utilisateur`, `GestionnaireTache`, `PreferencesService`.  
- Évitez les abréviations obscures.

**ou refléter les conventions de votre langage de programmation*

---

## Attributs et propriétés
- Indiquer uniquement les attributs **essentiels** au projet.  
- Notation recommandée :
  - `-` (privé)  
  - `+` (public)  
- Exemple :  
  - `- id : int`  
  - `+ Titre : string`  
- Les types doivent être précisés (`int`, `string`, `bool`, etc.).  

---

## Méthodes publiques
- Seules les **méthodes publiques** doivent être indiquées. Vous présenterez ainsi un Diagramme d'Interface, utile pour avoir une vue de haut niveau de votre application.
- Utiliser un verbe d’action clair dans le nom.  
- Exemple :  
  - `+ SauvegarderPreferences()`  
  - `+ ChargerTaches(cheminAccess : string)`  
- Les paramètres et types de retour doivent être visibles.

---

## Relations
- Représenter les relations principales entre classes :  
  - **Composition / agrégation** : une classe contient ou utilise une autre.  
  - **Héritage** : une classe dérive d’une autre.  
  - **Associations** pertinentes (par ex. un `Utilisateur` peut avoir plusieurs `Tache`).  

---

## Exemple simplifié
```text
+---------------------------------+
|    GestionnaireTaches           |
+---------------------------------+
| - taches : Liste<Tache>         |
+---------------------------------+
| + AjouterTache(t : Tache)       |
| + SupprimerTache(id : int)      |
| + ChargerTaches(chemin : string)|
| + SauvegarderTaches()           |
+---------------------------------+

                    1    * 
 GestionnaireTaches ------ Tache
 ```

---

 ## Attentes pour vos rapports

- Votre diagramme doit être à jour a la fin de chaque sprint.
- Les nouvelles classes ou modifications doivent être clairement visibles (utiliser un outil de traitement d'image au besoin).
- Joindre une capture d’ecran lisible dans vos documents remis (planification, fin de sprint, finalisation).

## Outils gratuits recommandés

Voici quelques solutions accessibles pour créer vos diagrammes de classes UML :

- **Concepteur de classe** de Visual Studio.

- **[draw.io (diagrams.net)](https://app.diagrams.net/)**  
  Outil gratuit en ligne, simple et efficace, exportable en image ou PDF.  

- **[UMlet](https://umlet.com/)**
  Logiciel bureau gratuit et simple d'utilisation pour concevoir différents digrammes UML.


- **[Lucidchart](https://www.lucidchart.com/)** (version gratuite limitee)  
  Interface conviviale, pratique pour des diagrammes rapides.  

- **[PlantUML](https://plantuml.com/)**  
  Outil texte → diagramme. Idéal si vous préférez écrire votre diagramme et le générer automatiquement.  

- **[Mermaid.js](https://mermaid.js.org/)**  
  Intégré dans certains editeurs Markdown et GitHub, permet de faire des diagrammes UML directement en Markdown.  
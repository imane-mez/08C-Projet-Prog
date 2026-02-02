
# Commentaires de Code  
<blockquote>D'après les notes de cours de Martin Vézina</blockquote>


Il n’existe pas de consensus au sujet de la façon de commenter les programmes. Ce document présente les normes à respecter en matière de commentaire de programme pour ce cours. Inspirez-vous en pour commenter le code de vos projets.

## Deux types de commentaires
- **Commentaires normés** : suivent une forme et une syntaxe précises. Utilisés pour introduire les classes et les méthodes.
- **Commentaires libres** : ne suivent pas de forme particulière, généralement des commentaires de ligne.

---

### Commentaires normés

#### Java
Les commentaires normés suivent les annotations `@` (tags javadoc).

**Exemple d’en-tête de classe (facultatif)** :
```java
/**
 * @author MHermet
 * @version 1.1
 */
```

**En-têtes de Méthodes** :
- `@param` : description des paramètres de la méthode
- `@return` : description de la valeur retournée
- `@throws` : exception lancée

```java
/**
 * Courte description de la méthode
 * Description plus longue au besoin
 * @param param1 Description du paramètre d’entrée 1
 * @param param2 Description du paramètre d’entrée 2
 * @return Description de la valeur retournée
 * @throws Exception nommée
 */
```

---

#### C#
Les commentaires normés en C# utilisent le format XML :

```csharp
/// <summary>Description de la méthode</summary>
/// <param name="Int1">Description du paramètre d’entrée 1.</param>
/// <param name="Int2">Description du paramètre d’entrée 2.</param>
/// <returns>Description de la valeur retournée</returns>
/// <exception cref="Exception">Exception lancée</exception>
```

> **Note** : Les commentaires normés produisent une documentation de classe sous forme de document Web (Javadoc, SandCastle en C#).

---

### Commentaires libres

Les commentaires libres utilisent la syntaxe propre au langage :

- **Commentaire simple** : `//` ou `///` (C#)
- **Commentaire multi-lignes** :
  ```c
  /* 
   * Commentaire sur plusieurs lignes
   */
  ```

**Cas où éviter les commentaires** :
- Utiliser des variables explicatives :
  ```c
  // Inclure rabais dans le calcul du prix
  prixFinal = (qte * prix) – (qte * prix) * 0.1;

  // Préférez :
  prix = qte * prix;
  rabais = prix * 0.1;
  prixFinal = prix – rabais;
  ```

- Extraire une méthode :
  ```c
  // Supprimer les lignes vides
  SupprimerLignesVides(lignes);
  ```

- Utiliser des noms descriptifs :
  ```c
  int hauteurEnMetres = ...;
  ```

- Ajouter un contrôle :
  ```c
  verifierHauteur(hauteur);
  return largeur / hauteur;
  ```

---

### Cas où les commentaires sont utiles
Les commentaires sont utiles pour expliquer **le pourquoi** d’une action, pas le **quoi** :
- Boucles itératives à pas multiples.
- Interruptions dans une boucle.
- Fonctionalité incomplète ou tâche à terminer plus tard: `TODO`
- Bogue connu ou une erreur logique à corriger impérativement : `FIXME`
- Prototypage ou une solution bricolée qui fonctionne mais qui n'est pas propre : `HACK`

> **Règle générale** : Rendez votre code lisible, structuré et intelligible grâce à des noms clairs et des commentaires pertinents.

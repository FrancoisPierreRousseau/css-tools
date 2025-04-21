# 📚 Documentation : Génération Automatique des Classes Utilitaires

## 🧱 1. Définition des Utilitaires (`_utilities.scss`)

Le fichier `_utilities.scss` définit une **carte Sass (`$utilities`)** qui centralise les propriétés CSS à générer sous forme de classes utilitaires. Chaque entrée de cette carte spécifie :

- `property` : la propriété CSS ciblée.
- `class` : le préfixe de la classe générée.
- `values` : les valeurs possibles pour cette propriété.
- `responsive` (optionnel) : indique si la classe doit être générée pour chaque breakpoint.

### Exemple :

```scss
$utilities: map-merge(
  (
    "align": (
      property: vertical-align,
      class: align,
      values: baseline top middle bottom text-bottom text-top,
    ),
    "float": (
      responsive: true,
      property: float,
      values: (
        start: left,
        end: right,
        none: none,
      ),
    ),
    "top": (
      property: top,
      values: $position-values,
    ),
  ),
  $utilities
);
```

---

## ⚙️ 2. Génération des Classes Utilitaires (`_api.scss`)

Le fichier `_api.scss` parcourt la carte `$utilities` et génère les classes correspondantes, en tenant compte des breakpoints définis.

### Processus :

1. Parcours des breakpoints définis dans `$grid-breakpoints`.
2. Pour chaque breakpoint, application du mixin `media-breakpoint-up` (défini dans `_breakpoints.scss`).
3. Pour chaque utilitaire :
   - Vérification que l'entrée est une carte (`map`) et que la génération responsive est activée ou que l'infixe est vide.
   - Appel du mixin `generate-utility` avec les paramètres appropriés.

### Code :

```scss
@each $breakpoint in map-keys($grid-breakpoints) {
  @include media-breakpoint-up($breakpoint) {
    $infix: breakpoint-infix($breakpoint, $grid-breakpoints);
    @each $key, $utility in $utilities {
      @if type-of($utility) ==
        "map" and
        (map-get($utility, responsive) or $infix == "")
      {
        @include generate-utility($utility, $infix);
      }
    }
  }
}
```

---

## 📐 3. Gestion des Breakpoints (`_breakpoints.scss`)

Le fichier `_breakpoints.scss` fournit des mixins et fonctions pour gérer les media queries de manière fluide.

### Mixin `media-breakpoint-up` :

Permet d'appliquer des styles à partir d'un certain breakpoint.

```scss
@mixin media-breakpoint-up($name, $breakpoints: $grid-breakpoints) {
  $min: breakpoint-min($name, $breakpoints);
  @if $min {
    @media (min-width: $min) {
      @content;
    }
  } @else {
    @content;
  }
}
```

### Fonction `breakpoint-infix` :

Retourne l'infixe à utiliser dans le nom de la classe en fonction du breakpoint.

```scss
@function breakpoint-infix($name, $breakpoints: $grid-breakpoints) {
  @return if(breakpoint-min($name, $breakpoints) == null, "", "-#{$name}");
}
```

---

## 🎯 4. Avantages des Classes Utilitaires Générées Automatiquement

- **Modularité** : Permet de modifier des propriétés spécifiques sans affecter la structure globale.
- **Réactivité** : Facilite l'adaptation des styles en fonction des breakpoints sans dupliquer le code.
- **Cohérence** : Assure une uniformité des styles à travers l'ensemble du projet.
- **Maintenance Simplifiée** : Centralise la gestion des classes utilitaires, réduisant le risque d'erreurs.

---

## 📌 5. Exemple d'Utilisation

Supposons que vous souhaitiez appliquer un alignement vertical au centre pour un élément, uniquement sur les écrans de taille moyenne et supérieure :

```html
<div class="align-middle-md">Contenu centré verticalement</div>
```

Cette classe est générée automatiquement grâce à la configuration des utilitaires et des breakpoints.

---

## 📁 6. Fichiers Impliqués

| Fichier             | Rôle                                                            |
| ------------------- | --------------------------------------------------------------- |
| `_utilities.scss`   | Définition des propriétés et valeurs des utilitaires.           |
| `_api.scss`         | Génération des classes utilitaires en fonction des breakpoints. |
| `_breakpoints.scss` | Gestion des media queries et des infixes de breakpoints.        |
| `_variables.scss`   | Définition des breakpoints et autres variables globales.        |

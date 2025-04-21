# 📘 Documentation Complète : `_reboot.scss` (et ses dépendances)

## 🎯 Objectif global

Le fichier `_reboot.scss` vise à fournir une **base CSS moderne, cohérente et optimisée** pour tout projet web. Il ne s'agit pas d'un simple "reset", mais d'une **normalisation intelligente** des styles HTML de base, enrichie de typographie fluide, d'accessibilité améliorée, et de cohérence visuelle systématique.

---

## ⚙️ Les piliers du Reboot CSS

### 🔄 1. Réinitialisation contrôlée (inspirée de `normalize.css`)

Contrairement aux anciens resets qui supprimaient _tout_ (ex. `margin`, `padding`, `border`, `list-style`, etc.), `_reboot.scss` :

- **préserve les comportements utiles** (ex. `button` cliquable, `input` stylé),
- **corrige les incohérences de rendu** entre navigateurs,
- **pose une base visuelle stable et prévisible**.

🔧 _Exemple de code :_

```scss
*,
*::before,
*::after {
  box-sizing: border-box;
}
body {
  margin: 0;
  font-family: $font-family-base;
  line-height: $line-height-base;
}
```

🟢 **Pourquoi c’est utile ?**

- Pas besoin de "batailler" avec des styles par défaut inconnus.
- Résultat visuel cohérent dès le départ → Moins de debugging.
- Gain de temps énorme à moyen/long terme.

---

### 🧠 2. Typographie fluide et système modulaire

💡 **Inspiré des approches de Piper Haywood et Mark Boulton :**

- Utilisation de `rem`, `em`, `clamp()`, ratios typographiques (golden ratio, minor third, etc.).
- Échelles modulaires et variables Sass pour un système typographique cohérent.

🔧 _Exemple de logique (avec `_variables.scss`) :_

```scss
$font-size-base: 1rem;
$font-size-lg: 1.25rem;
$font-size-sm: 0.875rem;
```

🟢 **Pourquoi ça change tout ?**

- La typographie **s’adapte aux écrans** : du mobile à l’ultra-wide.
- Lisibilité optimisée (interligne, alignement vertical).
- Mise en place rapide d’une hiérarchie visuelle solide.
- Plus de "bricolage" manuel entre h1, h2, p, etc.

---

### 📐 3. Système de variables Sass : cohérence & maintenabilité

✅ `_variables.scss` centralise tous les tokens de design :

- couleurs (`$primary`, `$gray-900`...),
- espacements (`$spacer`, `$gutter`, etc.),
- tailles, rayons, interlignes…

🟢 **Avantages immédiats :**

- Modifier un détail de style = 1 ligne modifiée, propagation globale.
- Facilite les refontes visuelles.
- Permet de créer des **design systems scalables**.

---

### 🎨 4. Mixins Sass pour la personnalisation dynamique

🧱 Exemple avec le fichier [`_border-radius.scss`](https://github.com/FrancoisPierreRousseau/css-tools/blob/main/sass/mixins/_border-radius.scss) :

```scss
@mixin border-radius($radius: $border-radius, $fallback-border-radius: false) {
  @if $enable-rounded {
    border-radius: valid-radius($radius);
  } @else if $fallback-border-radius != false {
    border-radius: $fallback-border-radius;
  }
}
```

🟢 **Pourquoi utiliser des mixins ?**

- Active/désactive des fonctionnalités (ex. coins arrondis) à l’échelle du projet.
- Simplifie l’écriture des composants : `@include border-radius();` et c’est plié.
- Ajoute une **couche de logique conditionnelle** dans le CSS = plus intelligent, plus flexible.

---

### 📏 5. Espacement fluide et design adaptatif

🔁 Utilisation de fonctions telles que `clamp()` et `calc()` (non incluses explicitement ici, mais suggérées dans l’esprit de ce projet) pour :

- éviter les "media queries rigides",
- créer des **espacements et tailles fluides** (entre deux bornes).

🔧 _Approche typique (inspirée de Piper Haywood) :_

```scss
font-size: clamp(1rem, 2vw, 1.5rem);
```

🟢 **Résultats ?**

- Expérience utilisateur améliorée sur toutes les tailles d’écran.
- Plus de zones "vides" ou trop denses.
- Moins de règles CSS → meilleur rendu, plus rapide à écrire.

---

## 🚀 Pourquoi cette approche est-elle meilleure ?

### ✅ Avantages pratiques

| Bénéfice                        | Impact                                                                         |
| ------------------------------- | ------------------------------------------------------------------------------ |
| 💼 Gain de temps                | Moins de redondance, logique factorisée.                                       |
| 🎯 Meilleure cohérence visuelle | Hiérarchie claire, typographie homogène.                                       |
| 🔧 Maintenance simplifiée       | Une variable = un point de contrôle.                                           |
| 🧪 Scalabilité                  | Idéal pour des projets de toute taille, du one-pager au design system complet. |
| 🔒 Fiabilité                    | Comportement visuel prévisible sur tous les navigateurs.                       |
| 📱 Mobile-first et adaptatif    | Fluidité sur tous les écrans sans devoir tout réécrire.                        |

---

## 📎 Conclusion

Cette combinaison de fichiers Sass (`_reboot.scss`, `_variables.scss`, `_border-radius.scss`) constitue bien plus qu’une simple base de style : **c’est un véritable socle de design system intelligent**.

En intégrant les meilleures pratiques du web moderne :

- reset raisonné,
- typographie fluide,
- logique modulaire Sass,
- et responsive content-first,

on obtient un **flux de production rapide, robuste et visuellement cohérent**.

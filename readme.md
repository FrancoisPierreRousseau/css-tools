# 📦 SCSS Utility Framework – Standardisation CSS

## 💡 Présentation

Ce projet a pour but de montrer comment standardiser efficacement son code CSS en utilisant **SCSS**.

Il centralise la logique de création de **classes utilitaires**, notamment en prenant en compte les **breakpoints** définis durant la phase de conception de l'application.

Le framework inclut également un **reboot embarqué** : une couche de normalisation CSS appliquée automatiquement. Cela garantit un rendu cohérent des éléments HTML de base, en supprimant les différences de styles par défaut entre navigateurs et en offrant une base saine pour vos développements. Ce reboot s’inspire des resets modernes et assure une harmonisation des styles natifs (marges, tailles de police, titres, listes, etc.), facilitant ainsi la construction d’interfaces fiables et prévisibles[7].

## ⚙️ Fonctionnalités

- Système de génération de classes utilitaires responsive basé sur vos breakpoints.
- Organisation claire et modulaire du code SCSS.
- **Reboot embarqué** pour normaliser les styles natifs des navigateurs et garantir une base CSS homogène.
- Processus de transformation CSS :
  - Minification automatique.
  - Suppression du code inutilisé (via purge).
  - Optimisation des performances pour un rendu plus rapide.

## ⚠️ À propos de l’approche

> ⚠️ Ce framework maison n’est **pas nécessairement recommandé** pour des projets neufs ou modernes où des solutions robustes comme Tailwind, Bootstrap ou autres sont disponibles et activement maintenues[3][6][8].

Cependant, il peut s’avérer **très utile pour moderniser ou refactorer du CSS legacy**. Il existe encore de nombreuses vieilles applications à remettre au goût du jour, et connaître ces outils de standardisation reste une **compétence intemporelle**.

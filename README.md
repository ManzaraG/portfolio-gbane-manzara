# Portfolio de GBANE Manzara — version React

Portage du portfolio statique (`../index.html`) vers **React 19 + TypeScript + Vite**.
Le rendu visuel, les textes, le responsive et les animations sont identiques à la
version statique, qui reste disponible à la racine du dépôt.

## Prérequis

- Node.js 20+ et npm

## Commandes

```bash
npm install       # installer les dépendances
npm run dev       # serveur de développement (http://localhost:5173)
npm run build     # build de production dans dist/
npm run preview   # servir le build de production localement
npm run lint      # oxlint
```

## Structure

```
src/
  main.tsx                 point d'entrée, importe styles/global.css
  App.tsx                  assemble les sections + hook useReveal()
  styles/global.css        tokens :root, reset, primitives (.section, .kicker…), .reveal
  hooks/useReveal.ts       IntersectionObserver (ex-script.js) : apparition au scroll
  data/                    contenu structuré et typé (projets, compétences, expériences, formation, nav)
  components/
    Section/ SectionHead/  briques partagées entre sections
    Header/ Hero/ Projects/ Skills/ Experience/ About/ Contact/ Footer/
                           une section = un composant + un fichier .module.css
```

Chaque composant a son **CSS Module** (`*.module.css`) ; seuls les tokens, le
reset et les primitives réutilisées sont globaux (`styles/global.css`).

## Déploiement

`npm run build` produit un dossier `dist/` statique, déployable comme l'ancienne
version (GitHub Pages, Netlify, Vercel…). Pour GitHub Pages en sous-chemin,
définir `base` dans `vite.config.ts`.

## Personnalisation avant mise en ligne

- `public/cv-gbane-manzara.pdf` : déposer le CV à ce nom (le bouton « Télécharger
  mon CV » de la section Contact pointe dessus).
- `src/data/*.ts` : ajuster les contenus (projets, expériences, formation).

Les liens de contact (email, LinkedIn, GitHub) sont déjà renseignés dans
`src/components/Contact/Contact.tsx`.

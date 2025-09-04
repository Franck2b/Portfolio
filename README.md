<div align="center">

# 🎯 Portfolio Franck Poletti

*Développeur Web Full Stack & Étudiant EEMI Lyon*

[![Next.js](https://img.shields.io/badge/Next.js-13-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.2-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?style=for-the-badge&logo=vercel)](https://vercel.com/)

[🌐 **Voir le Site Live**](https://portfolio-sand-beta-tuvye89h58.vercel.app/) • [📱 **Version Mobile**](https://portfolio-sand-beta-tuvye89h58.vercel.app/) • [📧 **Contact**](mailto:franck.poletti@gmail.com)

</div>

---

## ✨ Fonctionnalités

<table>
<tr>
<td width="50%">

### 🎨 **Design Moderne**
- Interface élégante et responsive
- Animations fluides et interactives
- Thème professionnel avec gradients
- Compatible tous appareils

</td>
<td width="50%">

### ⚡ **Performance Optimisée**
- Next.js 13 avec App Router
- Chargement ultra-rapide
- SEO optimisé
- Bundle minimal et optimisé

</td>
</tr>
<tr>
<td width="50%">

### 📱 **Responsive Design**
- Adaptatif mobile-first
- Navigation tactile intuitive
- Images optimisées
- Expérience utilisateur fluide

</td>
<td width="50%">

### 🔧 **Code Propre**
- TypeScript strict
- Architecture modulaire
- Composants réutilisables
- Standards de développement

</td>
</tr>
</table>

---

## 🚀 Démarrage Rapide

### Prérequis
```bash
Node.js >= 16.0.0
npm >= 8.0.0
```

### Installation

1. **Cloner le projet**
   ```bash
   git clone https://github.com/Franck2b/portfolio.git
   cd portfolio
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   ```

3. **Lancer en développement**
   ```bash
   npm run dev
   ```

4. **Ouvrir dans le navigateur**
   ```
   http://localhost:3000
   ```

### Commandes Disponibles

| Commande | Description |
|----------|-------------|
| `npm run dev` | 🔥 Mode développement avec hot reload |
| `npm run build` | 📦 Build de production optimisé |
| `npm run start` | 🚀 Serveur de production |
| `npm run lint` | 🔍 Vérification du code |

---

## 🏗️ Architecture

```
📁 Portfolio/
├── 📁 app/                    # Next.js App Router
│   ├── 📄 layout.tsx         # Layout principal + métadonnées
│   ├── 📄 page.tsx           # Page d'accueil
│   └── 📄 globals.css        # Styles globaux
├── 📁 components/            # Composants React
│   ├── 📁 layout/           # Layout (Navigation, Footer)
│   ├── 📁 sections/         # Sections principales
│   │   ├── 🎯 Hero.tsx      # Section héro avec présentation
│   │   ├── 💼 Projects.tsx   # Galerie de projets
│   │   ├── 🎓 Journey.tsx    # Parcours professionnel
│   │   ├── ⚡ Skills.tsx     # Compétences techniques
│   │   └── 📧 Contact.tsx    # Formulaire de contact
│   └── 📁 ui/               # Composants UI de base
├── 📁 data/                 # Données du portfolio
│   ├── 📊 skills.ts         # Compétences & niveaux
│   ├── 📈 timeline.ts       # Expériences & formation
│   └── 🚀 projects.ts       # Projets réalisés
├── 📁 lib/                  # Utilitaires
├── 📁 public/              # Assets statiques
│   ├── 🖼️ images/          # Images du portfolio
│   ├── 📄 CV.pdf           # CV téléchargeable
│   └── ⭐ favicon.svg      # Favicon personnalisé
└── ⚙️ Configuration files
```

---

## 🛠️ Stack Technologique

<div align="center">

### Frontend
[![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Lucide](https://img.shields.io/badge/Lucide-000000?style=flat-square&logo=lucide&logoColor=white)](https://lucide.dev/)

### Développement
[![VS Code](https://img.shields.io/badge/VS_Code-007ACC?style=flat-square&logo=visual-studio-code&logoColor=white)](https://code.visualstudio.com/)
[![Git](https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white)](https://git-scm.com/)
[![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=flat-square&logo=eslint&logoColor=white)](https://eslint.org/)
[![Prettier](https://img.shields.io/badge/Prettier-F7B93E?style=flat-square&logo=prettier&logoColor=black)](https://prettier.io/)

### Déploiement
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white)](https://vercel.com/)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/)

</div>

---

## 🎨 Personnalisation

### Modifier les Données

| Fichier | Description | Contenu |
|---------|-------------|---------|
| `data/skills.ts` | 💪 Compétences techniques | Langages, frameworks, outils |
| `data/timeline.ts` | 📅 Parcours professionnel | Expériences, formations |
| `data/projects.ts` | 🚀 Portfolio projets | Réalisations, technologies |

### Personnaliser le Design

```typescript
// tailwind.config.ts - Couleurs principales
const colors = {
  primary: {
    50: '#eff6ff',   // Bleu très clair
    600: '#2563eb',  // Bleu principal
    700: '#1d4ed8',  // Bleu foncé
  },
  secondary: {
    600: '#7c3aed',  // Violet principal
    700: '#6d28d9',  // Violet foncé
  }
}
```

### Ajouter des Sections

```typescript
// app/page.tsx - Ajouter une nouvelle section
import NouvelleSection from '@/components/sections/NouvelleSection';

export default function Home() {
  return (
    <main>
      {/* Sections existantes */}
      <NouvelleSection /> {/* 👈 Nouvelle section */}
    </main>
  );
}
```

---

## 📊 Optimisations

### Performance
- ⚡ **Loading optimisé** : Images lazy-loading avec Next.js Image
- 🎯 **Bundle splitting** : Code splitting automatique
- 📱 **Mobile-first** : Responsive design optimisé
- 🚀 **Static generation** : Génération statique pour de meilleures performances

### SEO
- 🔍 **Métadonnées** : Open Graph, Twitter Cards
- 🎯 **Structure sémantique** : HTML sémantique
- 📱 **Mobile-friendly** : Responsive et accessible
- ⭐ **Favicon personnalisé** : Identité visuelle

---

## 📞 Contact & Support

<div align="center">

**Franck Poletti** - Développeur Full Stack

[![Email](https://img.shields.io/badge/Email-franck.poletti@gmail.com-red?style=for-the-badge&logo=gmail)](mailto:franck.poletti@gmail.com)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Franck_Poletti-blue?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/franck-poletti-443a1b266)
[![GitHub](https://img.shields.io/badge/GitHub-Franck2b-black?style=for-the-badge&logo=github)](https://github.com/Franck2b)

📍 **Lyon, France** • 🎓 **Étudiant EEMI Lyon** • 💼 **Disponible pour missions**

</div>

---

<div align="center">

**⭐ Si ce portfolio vous inspire, n'hésitez pas à le star !**

*Développé avec ❤️ par Franck Poletti*

</div>

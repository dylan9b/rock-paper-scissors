# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
# rock-paper-scissors

#Screenshots
## Game Interaction
<img width="1168" height="833" alt="image" src="https://github.com/user-attachments/assets/998be512-87c2-4891-8672-13da1474c35c" />
<img width="940" height="808" alt="image" src="https://github.com/user-attachments/assets/02af8dba-d1ce-4122-ad32-d7ead8f81634" />
<img width="944" height="785" alt="image" src="https://github.com/user-attachments/assets/03e347f4-5b76-45bb-b177-bc8acb1fde14" />
<img width="789" height="783" alt="image" src="https://github.com/user-attachments/assets/f1f3c935-123a-44a1-bf07-4a5ae18fc034" />

## Redux State Management
<img width="450" height="356" alt="image" src="https://github.com/user-attachments/assets/1ea1a151-52a2-45cb-942b-7672380f6fba" />

## Mobile View
<img width="494" height="619" alt="image" src="https://github.com/user-attachments/assets/ebbade48-5dcb-409d-9f54-1b9eb78d3bef" />

## Build
<img width="565" height="230" alt="image" src="https://github.com/user-attachments/assets/18dca13b-6f97-41ef-8bea-159ff18a5269" />

## Mimic Prod environment locally
<img width="687" height="752" alt="image" src="https://github.com/user-attachments/assets/263b5b75-e347-48fc-b221-0c9140ec7c8b" />





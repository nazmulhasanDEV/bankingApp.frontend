# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Notes:

==> Check jsconfig.json, .eslintrc.cjs, .prettierrc, and vite.config.js file for understanding absolute import, prettier and indentation issue. Absolute import is more likely professional and easy to maintain app then dir based imports



==> **.env.local**: for just development environment and it will only work in dev environment. It will be ignored by github

==> **.env.production** :: for production environment and it will only work in production environment. It will not be ignored by github

==> **Add new env following below process:**
VITE_API_URL=http://127.0.0.1:8000/
VITE_YOUR_NEW_ENV="YOUR_VALUE"  **VITE_** prefix is mendatory

#Installation:
1. Clone git  repo
2. Run "yarn" or "npm install" command and make sure you have node version > 18
3. Run "yarn dev" or "npm start" and you are ready to go
4. Make sure you have back-end server up and running
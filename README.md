# Vue 3 + Typescript + Vite

This template should help get you started developing with Vue 3 and Typescript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's `.vue` type support plugin by running `Volar: Switch TS Plugin on/off` from VSCode command palette.

# ts_vue_app_ls_vite

Ts Vue App LS Vite

npm init vite@latest

npm install vue-router@4

npm install vuex@next --save

npm install -D vitest

npm install -D @vue/test-utils@next

npm install -D @testing-library/vue@next

npm i axios

npm install -D tailwindcss postcss autoprefixer

npx tailwindcss init -p

```
module.exports = {
  content: [
    "./index.html",    
    "./**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: []
}
```
npm i -D eslint

npm i -D eslint-config-prettier

npm i -D eslint-plugin-vue

npm i -D prettier

npm i -D @vue/eslint-config-typescript

npm i -D @typescript-eslint/parser

npm i -D @typescript-eslint/eslint-plugin

https://miyauchi.dev/posts/vite-vue3-typescript/

npm i -D @types/jest

npm i axios

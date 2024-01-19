# Userscript TypeScript Template

A template for creating userscripts in TypeScript. This repository provides a basic structure and tooling to get you started quickly with userscript development.

## Features

- Userscripts using TypeScript powered by Vite
- Configurable userscript headers using [vite-plugin-monkey](https://github.com/lisonge/vite-plugin-monkey)
- Prettier as formatter with pre-commit hook to run lint-staged
- Pre-commit hook to build latest code so you can use repository as installation link (See [Deployment](#deployment))

## Install

1. Install Tampermonkey
   - [Chrome](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)
   - [FireFox](https://addons.mozilla.org/firefox/addon/tampermonkey)
   - [Edge](https://microsoftedge.microsoft.com/addons/detail/tampermonkey/iikmkjmpaadaobahmlepeloendndfphd)
2. [![Install](https://img.shields.io/badge/-Install-blue)][installUrl]

## Development

1. Customize userscript headers in [vite.config.ts][userscriptConfig]
2. Modify entry file [src/main.ts][inputFile]
3. Run `npm run dev` to install script with hot module replacement using vite
4. Run `npm run build` to build the resulting [script.user.js][outputFile]
5. Run `npm run preview` to install the built script through the vite dev server

## Deployment

This template is currently configured with a pre-commit hook to run

```
npm run build
git add dist
```

This ensures that the [script.user.js][outputFile] file in the repository will automatically be up to date with the source code.

This allows users to use this [link][installUrl] as the installation link.

Alternatively, this behavior can be removed by:

1. Remove command in [pre-commit](/.husky/pre-commit#L5-L6)
2. Add `dist` to [.gitignore](/.gitignore)
3. Run `npm run build` when needed

[userscriptConfig]: /vite.config.ts#L4
[inputFile]: /src/main.ts
[outputFile]: /dist/script.user.js
[installUrl]: /dist/script.user.js?raw=1

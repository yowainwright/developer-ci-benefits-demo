# Developer CI Benefits Demo

This repository show's a CI setup. It works using steps described in the [Developer CI Benefits Talk repository](https://github.com/yowainwright/developer-ci-benefits).

This repository should be used to help setup viewers repositories or for reference when reading the  [Developer CI Benefits Talk repository](https://github.com/yowainwright/developer-ci-benefits).


## High level repository features

Listed below are tools used to setup this Repository and its CI with links to tool information as well as a link to where the tool is used in this repository.

- **[EditorConfig](https://editorconfig.org/):** provides a standard [config](.editorconfig) for code editors.
- **[Markdownlint](https://github.com/markdownlint/markdownlint);** ensures that [markdown](.markdownlintrc) is written to a standard.
- **[NVM](https://github.com/creationix/nvm):** defines the version of [node](.nvmrc) to be used for this project
- **[TypeScript](http://www.typescriptlang.org/):** provides [type checking](/src/index.ts); helps articulate what code is doing.

----

### Can JS be used instead of TS?

JavaScript can be used instead of TypeScript. The list below articulates the differences at a high level.

- This repository uses TypeScript because TypeScript is a great tool for articulating code.
  - TypeScript is 100% interchangeable with JavaScript.
    - To use JavaScript instead of TypeScript, use JavaScript with Babel.
    - To test JavaScript instead of TypeScript, use Jest.
    - To lint JavaScript istead of TypeScript, use ESLisnt.
- [Read more](https://github.com/yowainwright/developer-ci-benefits) about the talk by clicking the "Developer CI Benefits Talk" or "Read more" links.

----

## Reference

Listed below is attriubtion to this repository and where this repository can be referenced.

- This is a demo repo setup to go along with the Developer CI Benefits Talk.
- This is a dependency repository example for the [Developer CI Benefits Talk](https://github.com/yowainwright/developer-ci-benefits).
- This repository is a published on [NPM](https://www.npmjs.com/package/developer-ci-benefits-demo). It development a full CI process.

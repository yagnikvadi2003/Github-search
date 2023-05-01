<p align="center">
  <a href="https://getbootstrap.com/">
    <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="Bootstrap logo" width="200" height="165">
  </a>
</p>

<h3 align="center">Github User Search Project</h3>

<p align="center">
  we will use an input's value to search for users in GitHub using their username or email.
  <br>
  <br>
  <a href="https://github.com/yagnikvadi2003/github-user-search/issues">Report bug</a>
  ·
  <a href="https://github.com/yagnikvadi2003/github-user-search/pulls">Pull requests</a>
</p>

<br />

Description
===========

Our default branch is for development of our Github User Search release. Head to the 
[`development` branch](https://github.com/yagnikvadi2003/github-user-search/tree/development) 
to view the readme, documentation, and source code for Github User Search.

You will first store the value typed into the input in a state value called `query`. After that, 
you will perform an HTTP request to a GitHub API endpoint to then fetch the users' profile which 
once again uses the browser fetch API. The request URL will use the input value.

Once the results are fetched, we'll see how to display all the relevant info such as their name, 
avatar, and a link to go to their profile.

<br />
<br />

Setup/Installation Requirements
==================================

git clone -b development https://github.com/yagnikvadi2003/github-user-search/
- git branch
    - development
    - create new branch
      - git checkout -b new-branch

Once all the necessary modifications and updates have been made to the codebase, it is recommended to stage the changes using the "git add" command and create a commit with a descriptive message summarizing the changes made.

Afterwards, it is advisable to switch to the development branch and merge the changes from the current branch using the "git merge" command, ensuring that any conflicts are resolved before finalizing the merge. This ensures that the latest changes are integrated into the development branch and can be tested and reviewed by the rest of the team.

<br />
<br />

Documentation
=============

Github User Search documentation, included in this repo in the root directory, is built publicly hosted on GitHub Pages at <https://github-user-search.com/>. The docs may also be run locally.

Documentation search is powered by [Yagnik Vadi](https://portfolio.com/).

### Running documentation locally

| Script | Description | Command |
| --- | --- | --- |
| install | installation the project | `yarn install` |
| start | Starts the development server | `yarn start` |
| build | Builds the production version of the app | `yarn build` |

Learn more about using Hugo by reading its [documentation](https://github.com/yagnikvadi2003/github-user-search/blob/production/README.md).

<br />
<br />

Folder Structure Conventions
============================

> Folder structure options and naming conventions for Github-User-Search projects

### A typical top-level directory layout

    github-user-search/
    ├── Public
    ├── src
    ├── .env.d.ts
    ├── .gitignore
    ├── LICENSE
    ├── package.json
    ├── README.md
    └── tsconfig.json

<details>

<summary>Basic Folder structure conversions</summary>

* [public/](./public): This folder may contain public assets such as images, fonts, or other files that can be accessed directly by the client. This folder is typically served statically by a web server, so it's important to keep sensitive information out of this folder.

* [src/](./src): This is likely the main source code folder for the project. It may contain subfolders for different parts of the application, such as components, services, or utilities. It's important to keep your source code organized to make it easier to maintain and extend.

* [.env.d.ts](./.env.d.ts): This file is likely used to define type definitions for environment variables used in the project. It's important to have type definitions for environment variables to ensure type safety and reduce errors in your code.

* [.gitignore](./.gitignore): This file is used to specify files or folders that should be ignored by version control systems such as Git. It's important to keep sensitive or temporary files out of version control to avoid accidentally committing them.

* [LICENSE](./LICENSE): This file is used to specify the license under which the project is released. It's important to choose a license that is appropriate for your project and to include it in the source code to clarify the terms of use for potential users.

* [README.md](./README.md): This file is typically used to provide a brief overview of the project, including instructions for installation, usage, and contribution. It's important to have a clear and concise README to make it easier for others to understand and use your code.

* [package.json](./package.json): This file is used to specify metadata and dependencies for the project, as well as scripts for building, testing, or running the application. It's important to keep this file up-to-date and well-organized to make it easier for others to contribute to your project.

* [tsconfig.json](./tsconfig.json): This file is used to specify configuration options for the TypeScript compiler, such as target version, module resolution, or code generation options. It's important to configure the TypeScript compiler properly to ensure compatibility and performance of your code.

</details>

<br />
<br />

Source files
=============
The actual source files of a Github-User-Search project are usually stored inside the
`src` folder. Alternatively, you can put them into the `lib` (if you're
developing a library), or into the `app` folder (if your application's source
files are not supposed to be compiled).

    src
    ├── @types
    ├── assets
    ├── components
    ├── container
    ├── hooks
    ├── router
    ├── styles
    ├── App.tsx
    ├── index.tsx
    ├── react-app-env.d.ts
    └── reportWebVitals.ts


<details>

<summary>Source Folder Structure Conventions</summary>

* [@types/](./src/@types): This folder is likely used to store type definitions for third-party libraries or modules that do not have built-in types. It's good practice to define types for your code to ensure type safety and reduce errors, so this folder is a useful addition.

* [assets/](./src/assets): This folder is usually used to store static assets such as images, fonts, or other files that are required by your application. It's a good idea to keep these files separate from your code to make them easier to manage and optimize for performance.

* [components/](./src/components): This folder is where you would store reusable components that are used throughout your application. It's a good practice to break down your UI into smaller, more manageable components, so this folder can help organize and group related components together.

* [container/](./src/container): This folder may contain components that are responsible for managing state and passing data down to child components. This is a common pattern in React applications, and separating these components from presentational components can make your code easier to understand and maintain.

* [hooks/](./src/hooks): This folder is likely used to store custom React hooks, which are reusable functions that encapsulate common stateful logic. Hooks can be a powerful way to share logic between components and keep your code DRY (Don't Repeat Yourself).

* [router/](./src/router): This folder is likely used to store code related to routing and navigation within your application. There are several popular routing libraries for React, and this folder may contain custom router components or configuration files for those libraries.

* [styles/](./src/styles): This folder is where you would store CSS or other styling files for your application. There are several popular styling libraries for React, and this folder may contain global styles, component-specific styles, or theme files.

* [App.tsx](./src/App.tsx): This is likely the main entry point for your application, where you would define the root component and any top-level configuration or initialization code.

* [index.tsx](./src/index.tsx): This file is typically used to render the root component and mount it to the DOM.

* [react-app-env.d.ts](./src/react-app-env.d.ts): This file may contain additional type definitions or configuration for your React application. It's not always necessary, but it can be useful for larger or more complex projects.

* [reportWebVitals.ts](./src/reportWebVitals.ts): This file is likely used to track and report performance metrics for your application. It's a good practice to monitor performance and optimize where necessary, so this file can be a useful addition.
</details>

<br />
<br />

# License information
By contributing your code, you agree to license your contribution under the [MIT License](./LICENSE).
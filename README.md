# new-app

A simple CLI tool for making React applications, because I can't stand the boilerplating. I mainly use Vite/React and it's currently the only option, but I may add some more functionality later such as a barebones node TS repo or Nextjs.

## Usage

`npx @logantm/new-app <type> <project_name>`

Example:
`npx @logantm/new-app vite helloworld`

## Features

- My preferred file structure (vite)
  - api: proxy server and data fetching
  - assets: static files
  - components: globally shared components
  - features:
    - [feature]
      - components: feature-specific components
      - featureSlice: state management for this feature
      - Feature.tsx: the index equivalent of the feature
  - lib: libraries and shared functionality (such as store)
  - pages: react components that represent the pages users interact with
    - layouts: parent components of pages (may move this somewhere else)
- Routing (react-router-dom)
- State management (redux toolkit)
- Proxy server (express, but can be changed)

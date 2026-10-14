# Trello Task Board

**A Kanban-style task management application built with Angular and TypeScript.**

Organize work into boards, columns, and tasks, and move tasks through your workflow using drag-and-drop interactions. The project uses a shared Angular service for data management and browser local storage for persistence.

> **Project status:** Existing Angular 13 project. This repository is being refreshed for a clearer developer experience. A hosted live demo and screenshots have not yet been added.

## Features

- Create, edit, and delete boards
- Add, rename, and remove columns within boards
- Create, update, and delete tasks
- Drag and drop tasks between columns and boards
- Share board/task state across components using an Angular service
- Persist data in browser local storage
- Reusable inline-form and top-bar components

These features are described in the existing project documentation. Test them locally before presenting them as verified in a live demo.

## Technology

| Area | Technology |
| --- | --- |
| Framework | Angular 13 |
| Language | TypeScript |
| UI | Angular Material, Bootstrap, HTML, CSS |
| Interactions | Angular CDK |
| Reactive utilities | RxJS |
| Persistence | Browser local storage |

## Getting started

### Prerequisites

- Node.js and npm compatible with Angular 13
- Angular CLI 13, or use the locally installed CLI via `npx`

### Run locally

```bash
git clone https://github.com/sabra123/trello-taskBoard.git
cd trello-taskBoard
npm install
npm start
```

Open `http://localhost:4200` in your browser.

### Build and test

```bash
npm run build
npm test
```

> This documentation update does not verify that installation, tests, or production builds pass on a current machine. Angular 13 is an older release, so check Node.js compatibility if setup fails.

## Project structure

```text
src/app/
├── components/       # Application UI components
├── shared/           # Shared models, components and services
├── app-routing.module.ts
├── app.module.ts
└── app.component.ts
```

The original project README describes components for boards, columns, and tasks, with a shared service at `src/app/shared/service/shared.service.ts`.

## Architecture notes

The shared service coordinates board, column, and task operations and stores data in local storage. This makes the app usable without a backend but also means data is specific to the current browser and is not synchronized across users or devices.

## Screenshots

Screenshots will be added after the application is run and visually reviewed. Avoid presenting mockups as actual application screenshots.

## Planned improvements

- Refresh the Kanban board UI and mobile layout
- Improve accessibility and keyboard interactions
- Add focused tests for task movement and persistence
- Review Angular dependencies and plan a safe upgrade
- Deploy a working public demo

## Author

**Sabra Bano** — Frontend Engineer | Angular & TypeScript | 4+ years of experience

- [Portfolio](https://sabra-bano.netlify.app/)
- [LinkedIn](https://www.linkedin.com/in/sabra-bano-40931215a)
- [GitHub](https://github.com/sabra123)

## License

No open-source license has been added yet. Add one only if you intend to grant others permission to reuse this code.

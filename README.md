# Basic Project Workspaces Firebase Function & Hosting (Typescript)

1. NestJs for Backend

1. VueJs for Frontend

1. Core package (Share resource to NestJs & VueJs)

---

## Instruction

Follow instruction before you can run it

### Clone this project and change directory to clone project.

> Open terminal and run:

```bash
yarn
```

After finish installation, you can check by running:

```bash
yarn deploy:frontend
```

or

```bash
yarn deploy:backend
```

### Firebase setup for initialized first on the project directory

> Open terminal and run:

```bash
firebase init
```

Select `Functions` and `Hosting` and follow the step, and use language `Typescript`.

> remove installation directories `(functions and public)`

Edit `firebase.json` same as the repo.

create directory `packages` and you can copy place `backend`, `frontend` & `core` from repo to this `packages` directory.

check your `package.json` on each `backend`, `frontend` & `core` directory, or just copy from repo.

---

Inspiration from github: `Firebase monorepo with functions and web services use Express and React` [repo on github](https://github.com/cjmyles/firebase-monorepo)

Thank you :pray: [Craig Myles](https://github.com/cjmyles)

Do not hesitate if there are suggestions and criticisms :slightly_smiling_face: [@asapdotid](https://github.com/asapdotid)

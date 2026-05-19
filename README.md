# vue3-ts-start-template

Opinionated Vue 3 starter template with enforced module boundaries, full TypeScript, and a modern toolchain ready for production.

## Stack

| Tool | Version | Purpose |
|---|---|---|
| Vue 3 | ^3.5 | UI framework (Composition API) |
| TypeScript | ~6.0 | Type safety |
| Vite (Rolldown) | ^8.0 | Build tool |
| Pinia | ^3.0 | State management |
| Vue Router | ^5.0 | Client-side routing |
| Tailwind CSS | ^4.0 | Utility-first styling |
| Vitest | ^3.0 | Unit testing |
| ESLint + Oxlint | latest | Linting (dual-pass) |
| Prettier | 3.x | Formatting |
| Husky + lint-staged | latest | Pre-commit hooks |

## Getting started

```bash
npm install
npm run dev        # dev server → http://localhost:8080
```

## Commands

```bash
npm run dev          # dev server with HMR
npm run build        # type-check + production build (parallel)
npm run type-check   # vue-tsc only
npm run lint         # oxlint → eslint (sequential, with --fix)
npm run format       # prettier over src/
npm test             # vitest watch mode
npm run test:run     # vitest single run (CI)
```

## Architecture

```
src/
├── core/         # Framework wiring — router, ESLint configs, HTTP client
├── common/       # App-wide shared — components, composables, UI primitives, wrappers, styles
├── modules/      # Feature modules (self-contained, enforced boundaries)
└── pages/        # Thin route entry points, import only from module public APIs
```

### Module convention

Every feature lives in `src/modules/{name}/` and follows this structure:

```
{module}/
├── index.ts           # Public API — the only file other code may import
├── components/        # {kebab-case}.vue + index.ts barrel
├── composables/       # use{PascalCase}.ts + index.ts barrel
├── store/             # {name}.store.ts
├── services/          # API calls
├── helpers/           # Pure utility functions
├── models/            # interfaces/, types/, enums/
├── modals/            # Modal components
└── consts/            # Constants
```

Structure is enforced by `eslint-plugin-project-structure` — violations are compile-time errors.

### Import rules (ESLint-enforced)

| From | To | Rule |
|---|---|---|
| Anywhere | Own files | Always use `@/` — relative imports banned |
| `pages/`, `App.vue`, `main.ts` | Modules | Only via `@/modules/{name}` (`index.ts`) |
| Inside a module | Own internals | Full path (`@/modules/{name}/store/…`) — self-`index.ts` banned |
| Inside a module | Another module | Only via target's `index.ts` |

### Auto-imports

`ref`, `computed`, `watch`, `readonly`, `useRoute`, `useRouter`, `defineStore`, etc. are available globally — no manual imports needed. See `auto-imports.d.ts` for the complete list.

### Included composables

| Composable | Location | Usage |
|---|---|---|
| `useTheme` | `common/composables/use-theme.ts` | Toggle dark/light mode; persists to `localStorage` |
| `useLocalStorage` | `common/composables/use-local-storage.ts` | Reactive wrapper around `localStorage` |

### HTTP client

`core/api/client.ts` exports `apiClient` with typed `.get`, `.post`, `.put`, `.delete` methods. Configure the base URL via `VITE_API_URL` in `.env`.

```ts
const data = await apiClient.get<User[]>('/users')
await apiClient.post('/users', { name: 'Alice' })
```

### Dark mode

CSS variables for both themes are in `src/common/styles/variables.css`. Toggle via `useTheme`:

```ts
const { theme, toggleTheme } = useTheme()
// theme: Readonly<Ref<'light' | 'dark'>>
```

## Adding a module

1. Create `src/modules/{name}/index.ts` (public API, can be empty initially)
2. Add subfolders as needed (components, store, services, …)
3. Register a route in `src/core/router/app-routes.ts`
4. Create `src/pages/{Name}Page.vue` — import only via `@/modules/{name}`

ESLint enforces all boundary rules automatically on save and on commit.

## Testing

Tests live in `src/__tests__/`. Run with:

```bash
npm test             # watch mode
npm run test:run     # single run
```

The Vitest config (`vitest.config.ts`) mirrors Vite's alias and auto-import setup so store and composable tests work without boilerplate imports.

## Environment variables

| Variable | Description | Default |
|---|---|---|
| `VITE_API_URL` | Base URL for `apiClient` | `""` (relative paths) |

Create `.env.local` for local overrides (git-ignored).

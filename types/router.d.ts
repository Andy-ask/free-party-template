/// <reference types="vite/client" />

interface RouteInterface {
  readonly path: string;
  readonly element: T;
}

interface RouterViewInterface {
  readonly Routes: Array<RouteInterface>;
}

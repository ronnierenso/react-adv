import { lazy, LazyExoticComponent } from "react";
import { NoLazy } from '../01-lazyload/pages/NoLazy';

type JSXComponent = () => JSX.Element

interface Route {
  to: string,
  path: string,
  component: JSXComponent | LazyExoticComponent<JSXComponent>
  name: String
}



const LazyLayout = lazy(() => import(/*webpackChunkName: "LazyLayout"*/'../01-lazyload/layout/LazyLayout'))


export const routes: Route[] = [
  {
    path: '/lazyload/*',
    to: '/lazyload/',
    component: LazyLayout,
    name: 'LazyLayout'
  },
  {
    path: 'no-lazy',
    to: '/no-lazy',
    component: NoLazy,
    name: 'No Lazy'
  }
]
import { lazy } from "react";
// const DemoPage = lazy(() => import("../pages/Demo/DemoPage"));
const HomePage = lazy(() => import("../pages/Home/Home"));
const About = lazy(() => import("../pages/About/About"));
const Commandant = lazy(() => import("../pages/Commandant/Commandant"));
const Gallery = lazy(() => import("../pages/Gallery/Gallery"));


const routes = [
    {
        path: "/",
        component: HomePage,
      },
      {
        path: "/home",
        component: HomePage,
      },
      {
        path: "/about",
        component: About,
      },
      {
        path: "/commandant",
        component: Commandant,
      },
      {
        path: "/gallery",
        component: Gallery,
      },
     
];
export default routes;
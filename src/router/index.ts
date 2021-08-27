import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/dev",
    name: "dev",
    component: () =>
      import(/* webpackChunkName: "dev" */ "../views/Development.vue"),
  },
  {
    path: "/resources",
    name: "resources",
    component: () =>
      import(/* webpackChunkName: "resources" */ "../views/Resources.vue"),
  },
  {
    path: "/docs",
    name: "documentation",
    component: () =>
      import(/* webpackChunkName: "docs" */ "../views/Documentation/index.vue"),
    children: [
      {
        path: "",
        name: "getting-started",
        component: () =>
          import(
            /* webpackChunkName: "getting" */ "../views/Documentation/Getting.vue"
          ),
      },
      {
        path: "html",
        name: "html-elements",
        component: () =>
          import(
            /* webpackChunkName: "html" */ "../views/Documentation/Html.vue"
          ),
      },
      {
        path: "buttons",
        name: "buttons",
        component: () =>
          import(
            /* webpackChunkName: "buttons" */ "../views/Documentation/Buttons.vue"
          ),
      },
      {
        path: "loaders",
        name: "loaders",
        component: () =>
          import(
            /* webpackChunkName: "loaders" */ "../views/Documentation/Loaders.vue"
          ),
      },
      {
        path: "fonts",
        name: "fonts",
        component: () =>
          import(
            /* webpackChunkName: "fonts" */ "../views/Documentation/Fonts.vue"
          ),
      },
      {
        path: "frameworks",
        name: "frameworks",
        component: () =>
          import(
            /* webpackChunkName: "frameworks" */ "../views/Documentation/Frameworks.vue"
          ),
      },
      {
        path: "assets",
        name: "assets",
        component: () =>
          import(
            /* webpackChunkName: "assets" */ "../views/Documentation/Assets.vue"
          ),
      },
      {
        path: "palettes",
        name: "color-palettes",
        component: () =>
          import(
            /* webpackChunkName: "color-palettes" */ "../views/Documentation/Color.vue"
          ),
      },
      {
        path: "wysiwyg",
        name: "wysiwyg",
        component: () =>
          import(
            /* webpackChunkName: "wysiwyg" */ "../views/Documentation/Wysiwyg.vue"
          ),
      },
    ],
  },
  {
    path: "/editor",
    name: "editor",
    component: () =>
      import(/* webpackChunkName: "editor" */ "../views/Editor.vue"),
  },
  {
    path: "/showcase",
    name: "showcase",
    component: () =>
      import(/* webpackChunkName: "showcase" */ "../views/Showcase.vue"),
  },
  {
    path: "/library",
    name: "library",
    component: () =>
      import(/* webpackChunkName: "library" */ "../views/Library.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  linkActiveClass: "active",
  linkExactActiveClass: "active",
});

export default router;

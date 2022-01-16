import { createRouter, createWebHistory } from 'vue-router'

const routes=[
    {
        path: "/entrees",
        name: "entrees",
        component: () => import("../views/entrees.vue")
    },
    {
        path: "/brochettes",
        name: "brochettes",
        component: () => import("../views/brochettes.vue")
    },
    {
        path: "/menus",
        name: "menus",
        component: () => import("../views/menus.vue")
    },
    {
        path: "/desserts",
        name: "desserts",
        component: () => import("../views/desserts.vue")
    },
    {
        path: "/vueCommande",
        name: "vueCommande",
        component: () => import("../views/vueCommande.vue")
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })
  
  export default router
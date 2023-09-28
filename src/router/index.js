import { createRouter, createWebHistory } from 'vue-router'


const routes = [{
        path: '/',
        name: 'Choose',
        component: () =>
            import ('@/views/Choose.vue')
    },
    {
        path: '/drface',
        name: 'Drface',
        component: () =>
            import ('@/views/skincare/Home.vue')
    },
    {
        path: '/clinic',
        name: 'Clinic',
        component: () =>
            import ('@/views/clinic/Home.vue')
    },
    {
        path: '/products',
        name: 'Products',
        component: () =>
            import ('@/views/skincare/Products.vue')
    },
    {
        path: '/product/:id',
        name: 'Product',
        component: () =>
            import ('@/views/skincare/Product.vue'),
        props: true
    },
    {
        path: '/available-shop',
        name: 'Available Shop',
        component: () =>
            import ('@/views/skincare/Shop.vue')
    },
    {
        path: '/set-cateogry',
        name: 'Skincare Set Category',
        component: () =>
            import ('@/views/skincare/SetCategory.vue')
    },
    {
        path: '/set/:slug',
        name: 'Set',
        component: () =>
            import ('@/views/skincare/Set.vue'),
        props: true
    },
    {
        path: '/comming',
        component: () =>
            import ('@/views/Comming.vue')
    }

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
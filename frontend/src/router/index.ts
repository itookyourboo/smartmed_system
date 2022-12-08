import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import doctorRoutes from "@/router/doctor";
import patientRoutes from "@/router/patient";

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/doctor',
        name: 'doctor',
        component: () => import('../views/DoctorView.vue'),
        children: doctorRoutes
    },
    ...doctorRoutes,
    {
        path: '/patient',
        name: 'patient',
        component: () => import('../views/PatientView.vue')
    },
    ...patientRoutes
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router

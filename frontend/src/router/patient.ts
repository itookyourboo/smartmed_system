import {RouteRecordRaw} from "vue-router";

const patientRoutes: Array<RouteRecordRaw> = [
    {
        path: '/patient/attach',
        name: 'patient_attach',
        component: () => import('../views/patient/AttachView.vue')
    },
    {
        path: '/patient/quizes',
        name: 'patient_quizes',
        component: () => import('../views/patient/QuizesView.vue')
    },
    {
        path: '/patient/reminders',
        name: 'patient_reminders',
        component: () => import('../views/patient/RemindersView.vue')
    },
    {
        path: '/patient/chat',
        name: 'patient_chat',
        component: () => import('../views/patient/ChatView.vue')
    },
    {
        path: '/patient/alarm',
        name: 'patient_alarm',
        component: () => import('../views/patient/AlarmView.vue')
    },
    {
        path: '/patient/recommendations',
        name: 'patient_recommendations',
        component: () => import('../views/patient/RecommendationsView.vue')
    }
]

export default patientRoutes
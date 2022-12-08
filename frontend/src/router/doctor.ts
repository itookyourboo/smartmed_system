import {RouteRecordRaw} from "vue-router";

const doctorRoutes: Array<RouteRecordRaw> = [
    {
        path: '/doctor/patients',
        name: 'doctor_patients',
        component: () => import('../views/doctor/PatientsView.vue')
    },
    {
        path: '/doctor/quizes',
        name: 'doctor_quizes',
        component: () => import('../views/doctor/QuizesView.vue')
    },
    {
        path: '/doctor/reminders',
        name: 'doctor_reminders',
        component: () => import('../views/doctor/RemindersView.vue')
    },
    {
        path: '/doctor/chat',
        name: 'doctor_chat',
        component: () => import('../views/doctor/ChatView.vue')
    },
    {
        path: '/doctor/diary',
        name: 'doctor_diary',
        component: () => import('../views/doctor/DiaryView.vue')
    },
    {
        path: '/doctor/analytics',
        name: 'doctor_analytics',
        component: () => import('../views/doctor/AnalyticsView.vue')
    }
]

export default doctorRoutes
import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import CarDetails from '@/views/CarDetails.vue';
import AddCar from '@/views/AddCar.vue';  // Dodanie widoku AddCar

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
  },
  {
    path: '/car/:carId',
    name: 'carDetails',
    component: CarDetails,
  },
  {
    path: '/add-car',  // Dodanie trasy dla formularza AddCar
    name: 'addCar',
    component: AddCar,  // Wskazanie komponentu AddCar
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
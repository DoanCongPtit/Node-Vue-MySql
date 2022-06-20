import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import AddUser from './components/AddUser.vue'
import EditUser from './components/EditUser.vue'
import UserList from './components/UserList.vue'
  
const routes = [
  {
    name: 'Create',
    path: '/create',
    component: AddUser
  },
  {
    name: 'Edit',
    path: '/edit/:id',
    component: EditUser
  },
  {
    name: 'Index',
    path: '/',
    component: UserList
  },
];
  
const router = createRouter({
    history: createWebHistory(),
    routes,
});
  
createApp(App).use(router).mount('#app')
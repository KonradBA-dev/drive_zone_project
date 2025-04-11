<template>
    <v-container>
        <v-app-bar app>
            <v-toolbar-title>CarFever</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn text @click="goToAddCarPage">Add Car</v-btn> <!-- Link do formularza -->
            <v-btn text>Contact</v-btn>
        </v-app-bar>

    <v-navigation-drawer app>
        <v-list>
          <v-list-item link to="/">
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>
          <v-list-item link to="/about">
            <v-list-item-title>About Us</v-list-item-title>
          </v-list-item>
          <v-list-item link to="/contact">
            <v-list-item-title>Contact</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
  
      <v-main>
        <v-container>
          <h1>Collection</h1>
          <CarList />  <!-- Komponent wyświetlający listę samochodów -->
        </v-container>
      </v-main>
    </v-container>
  </template>
  
  <script>
  import CarList from '@/components/CarList.vue';
  
  export default {
    components: {
      CarList,
    },
    methods: {
    goToAddCarPage() {
      this.$router.push('/add-car'); // Przekierowanie do formularza dodawania samochodu
    },
  },
};
  </script>
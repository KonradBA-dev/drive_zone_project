<template>
    <v-row>
      <v-col v-for="car in cars" :key="car.id" cols="12" sm="6" md="4">
        <v-card>
          <!-- Wyświetlanie obrazu samochodu -->
          <v-img :src="car.image" height="200px"></v-img>  
          <v-card-title>{{ car.make }} {{ car.model }}</v-card-title>
          <v-card-subtitle>{{ car.year }}</v-card-subtitle>
          <v-card-text>
            Price: ${{ car.price }}
          </v-card-text>
          <v-card-actions>
            <v-btn @click="viewCarDetails(car.id)">View Details</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </template>
  
  <script>
  import { mapGetters } from 'vuex';
  
  export default {
    computed: {
      ...mapGetters(['cars']),  // Mapowanie getterów z Vuex
    },
    mounted() {
      // Ładowanie samochodów, jeśli jeszcze nie zostały załadowane
      if (this.cars.length === 0) {
        this.$store.dispatch('fetchCars');
      }
    },
    methods: {
      viewCarDetails(carId) {
        this.$router.push({ name: 'carDetails', params: { carId } });  // Przekierowanie do szczegółów samochodu
      },
    },
  };
  </script>
  
  <style scoped>
  .v-card {
    margin-bottom: 20px;
  }
  </style>
  
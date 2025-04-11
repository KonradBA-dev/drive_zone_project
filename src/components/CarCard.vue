<template>
    <v-card>
      <v-img :src="car.image" height="200px"></v-img> <!-- Wyświetlanie obrazu samochodu -->
      <v-card-title>{{ car.make }} {{ car.model }}</v-card-title>
      <v-card-subtitle>{{ car.year }}</v-card-subtitle>
      <v-card-text>
        Price: ${{ car.price }}
      </v-card-text>
      <v-card-actions>
        <v-btn @click="viewCarDetails(car.id)">View Details</v-btn>
      </v-card-actions>
    </v-card>
  </template>
  
  <script>
  export default {
    props: {
      car: Object,  // Obiekt samochodu z danych
    },
    methods: {
      viewCarDetails(carId) {
        this.$router.push({ name: 'carDetails', params: { carId } });
      },
    },
  };
  </script>
  
  <style scoped>
  .v-card {
    margin-bottom: 20px;
  }
  </style>
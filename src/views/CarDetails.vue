<template>
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-card v-if="car">
            <!-- Wyświetlanie danych tylko, jeśli car jest dostępne -->
            <v-card-title>{{ car.make }} {{ car.model }}</v-card-title>
            <v-card-subtitle>{{ car.year }}</v-card-subtitle>
            <v-card-text>
              <p><strong>Description:</strong> {{ car.description }}</p>
              <p><strong>Location:</strong> {{ car.location }}</p>
              <p><strong>Mileage:</strong> {{ car.technical_details.mileage }}</p>
              <p><strong>Transmission:</strong> {{ car.technical_details.transmission }}</p>
              <p><strong>Drive:</strong> {{ car.technical_details.drive }}</p>
              <p><strong>Engine:</strong> {{ car.technical_details.engine }}</p>
              <p><strong>Fuel Type:</strong> {{ car.technical_details.fuel_type }}</p>
              <p><strong>Color:</strong> {{ car.technical_details.color }}</p>
            </v-card-text>
            <v-btn @click="goBack">Go Back</v-btn>
          </v-card>
          <v-alert v-else type="error">Car details are not available!</v-alert>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  import { mapGetters } from 'vuex';
  import { useRoute } from 'vue-router';
  
  export default {
    computed: {
      ...mapGetters(['cars']),
      car() {
        const route = useRoute();
        const carId = parseInt(route.params.carId);
        return this.cars.find(car => car.id === carId);
      },
    },
    methods: {
      goBack() {
        this.$router.push('/');  // Powrót do strony głównej
      },
    },
    created() {
      if (this.cars.length === 0) {
        this.$store.dispatch('fetchCars');  // Ładowanie samochodów, jeśli jeszcze nie są załadowane
      }
    },
  };
  </script>
  
  <style scoped>
  .v-card {
    margin-top: 20px;
  }
  </style>
  
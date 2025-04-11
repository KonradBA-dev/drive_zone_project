<template>
    <v-container>
      <v-form @submit.prevent="submitForm">
        <v-text-field v-model="newCar.make" label="Make" required />
        <v-text-field v-model="newCar.model" label="Model" required />
        <v-text-field v-model="newCar.year" label="Year" required />
        <v-text-field v-model="newCar.price" label="Price" required />
        <v-text-field v-model="newCar.image" label="Image URL" required />
        <v-btn type="submit" color="primary">Add Car</v-btn>
      </v-form>
    </v-container>
  </template>
  
  <script>
  export default {
    data() {
      return {
        newCar: {
          make: '',
          model: '',
          year: '',
          price: '',
          image: '',
        },
      };
    },
    methods: {
      submitForm() {
        this.$store.dispatch('addCar', this.newCar); // Dodanie samochodu do Vuex store
        this.$router.push('/'); // Po dodaniu samochodu przekierowanie na stronę główną
      },
    },
  };
  </script>
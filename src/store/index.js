import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
    state: {
        cars: [],
      },
    mutations: {
        setCars(state, cars) {
          state.cars = cars;  // Przypisanie listy samochodów do stanu
        },
      
    addCar(state, car) {
      state.cars.push(car);  // Dodanie samochodu do listy
    },
  },
  actions: {
    async fetchCars({ commit }) {
      try {
        // Ładowanie danych z pliku JSON
        const response = await axios.get('/cars.json');  // Upewnij się, że ścieżka do pliku JSON jest poprawna
        commit('setCars', response.data);  // Zapisanie danych w Vuex
      } catch (error) {
        console.error('Error fetching cars:', error);
      }
    },
    async addCar({ commit }, car) {
      try {
        commit('addCar', car);  // Dodanie samochodu do listy w Vuex
      } catch (error) {
        console.error('Error adding car:', error);
      }
    },
  },
  getters: {
    cars: (state) => state.cars,  // Getter do zwrócenia listy samochodów
  },
});
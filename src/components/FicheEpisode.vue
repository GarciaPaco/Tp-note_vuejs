<script setup>
import {useRoute} from "vue-router";
import {onMounted, ref} from "vue";

const route = useRoute();
const episode = ref();
const id = route.params.id
const personnages = ref();
const perso1 = ref();


onMounted(async () => {
    const response = await fetch(`https://rickandmortyapi.com/api/episode/${id}`);
    episode.value = await response.json();
    personnages.value = episode.value.characters;
    personnages.value = await personnages.value.map((personnage) => {
            let fin = personnage.split('/').pop()
            return personnage.replace(personnage, fin)
        })


    // for (let i = 0; i < personnages.value.length; i++) {
        const response2 = await fetch(`https://rickandmortyapi.com/api/character/${personnages.value[0]} `);
        perso1.value = await response2.json();
    // }

});


</script>

<template>
  <main>
      <div v-if="episode != null">
          Nom : {{episode.name}} <br>
          Episode : {{episode.episode}} <br>
          Sortie : {{episode.air_date}} <br>
          <template v-if="perso1 != null" v-for="personnage in personnages">
              Perso :  <router-link :to="{ name: 'fichePerso', params: { id: personnage }}">{{perso1.name}}</router-link>
              <img :src="perso1.image" alt="portait d'un des personnages"> <br>


              <br>
          </template>

      </div>
      <div v-else>
          Chargement en cours ...
      </div>
      <router-link to="/">Retour aux épisodes</router-link>

  </main>
</template>

<style scoped>
</style>
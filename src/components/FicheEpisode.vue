<script setup>
import {useRoute} from "vue-router";
import {onMounted, ref} from "vue";
const route = useRoute();
const episode = ref();
const id = route.params.id
const personnage = ref();
const infosperso = ref();

onMounted(async () => {
    const response = await fetch(`https://rickandmortyapi.com/api/episode/${id}`);
    episode.value = await response.json();


    // Affichage de l'url des personnages
    // personnage.value = episode.value.characters;
    // personnage.value = await episode.value.map((personnage) => {
    //     let fin = personnage.split('/').pop()
    //     return personnage.replace(personnage, fin)
    // })
})
</script>

<template>
  <main>
      <pre>
        {{personnage}}
    </pre>
      <div v-if="episode != null">
          Nom : {{episode.name}} <br>
          Episode : {{episode.episode}} <br>
          Sortie : {{episode.air_date}} <br>
<!--          <template v-for="personnage in personnages">-->
<!--              <router-link :to="{ name: 'fichePerso', params: { id: personnage }}">Personnage {{personnage}}</router-link>-->
<!--              <br>-->
<!--          </template>-->


      </div>
      <div v-else>
          Chargement en cours ...
      </div>
      <router-link to="/">Retour aux épisodes</router-link>

  </main>
</template>

<style scoped>

</style>
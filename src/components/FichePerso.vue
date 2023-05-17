<script setup>
import {useRoute} from "vue-router";
import {onMounted, ref} from "vue";
const route = useRoute();
const personnage = ref();
const episodes = ref();
const id = route.params.id

onMounted(async () => {
    const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
    personnage.value = await response.json();
    episodes.value = personnage.value.episode;
    episodes.value = episodes.value.map((episode) => {
        let last = episode.split('/').pop()
        return episode.replace(episode, last)
    })
})
</script>



<template>

    <div class ="ficheperso" v-if="personnage != null">
        <div class="cardPerso">
        <p>Nom : {{personnage.name}} </p><br>
        <p>Espece : {{personnage.species}}</p> <br>

        <img :src="personnage.image" alt="portait d'un personnage"> <br>
        <template class="flex" v-for="episode in episodes">
            <router-link :to="{ name: 'ficheEpisode', params: { id: episode }}">Episode {{episode}}</router-link>
            <br>
        </template>
        </div>
    </div>
    <div v-else>
        Chargement en cours !
    </div>
    <router-link to="/">Retour aux épisodes</router-link>
</template>

<style scoped>
.ficheperso{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-align: center;
}
</style>
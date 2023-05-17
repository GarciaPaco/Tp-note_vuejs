<script setup>
import  {onMounted, ref } from 'vue';


const episodes = ref([]);
const pagineSuivante = ref('');
const paginePrecedente = ref('');
const filtreDate = ref('');
const filtreNumero = ref('');

onMounted(async () => {
    const response = await fetch('https://rickandmortyapi.com/api/episode');
    episodes.value = await response.json();
    pagineSuivante.value = await episodes.value.info.next;
    paginePrecedente.value = await episodes.value.info.prev;

});

async function nextPage(){
    const response = await fetch(pagineSuivante.value);
    episodes.value = await response.json();
    pagineSuivante.value = await episodes.value.info.next;
    paginePrecedente.value = await episodes.value.info.prev;
}

async function previousPage(){
    const response = await fetch(paginePrecedente.value);
    episodes.value = await response.json();
    pagineSuivante.value = await episodes.value.info.next;
    paginePrecedente.value = await episodes.value.info.prev;
}
async function filterByDate(){
  const response = await fetch('https://rickandmortyapi.com/api/episode?air_date');
  episodes.value = await response.json();
  pagineSuivante.value = await episodes.value.info.next;
  paginePrecedente.value = await episodes.value.info.prev;
}
async function filterByNumber(){
  const response = await fetch('https://rickandmortyapi.com/api/episode?episode');
  episodes.value = await response.json();
  pagineSuivante.value = await episodes.value.info.next;
  paginePrecedente.value = await episodes.value.info.prev;

}



</script>



<template>

<!--<pre>-->
<!--    {{episodes}}-->
<!--</pre>-->

    <template class="flex">
        <div class="filtrage">
            <p>Filtrer par : </p>
            <button @click="filtreByDate">Date</button>
            <button @click="filtreByNumber">Numéro</button>
        </div>
        <div class="flex">
            <div v-for="episode in episodes.results">
                <div class="card">
                    <p> Nom : {{episode.name}}</p> <br>
               <p> Date de sortie : {{episode.air_date}}</p> <br>
               <p> Numéro : {{episode.episode}}</p>
                <router-link :to="{ name: 'ficheEpisode', params: { id: episode.id }}">Voir plus</router-link>
                 </div>
            </div>
        </div>
    </template>

  <button v-if="paginePrecedente != null" @click="previousPage()">Precedent</button>
  <button v-if="pagineSuivante != null" @click="nextPage()">Suivant</button>

</template>

<style>
.flex{
    display: flex;
    flex-wrap: wrap;
}
.card {
    border: 1px solid black;
    border-radius: 5px;
    padding: 10px;
    margin: 10px;
    width: 250px;
    height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background-color: slategrey;
}
p {
    margin: 10px;
    color: goldenrod;
}
a {
    text-decoration: none;
    font-weight: bold;
}

a:hover {
    color: red;
}

</style>

<script setup>
import  {onMounted, ref } from 'vue';
const location = ref([]);
const pagineSuivante = ref('');
const paginePrecedente = ref('');
const listing = ref([]);
const recherche = ref('');

onMounted(async () => {
    const response = await fetch('https://rickandmortyapi.com/api/location');
    location.value = await response.json();
    pagineSuivante.value = await location.value.info.next;
    paginePrecedente.value = await location.value.info.prev;
    listing.value = await location.value.results;

});
async function nextPage(){
    const response = await fetch(pagineSuivante.value);
    location.value = await response.json();
    pagineSuivante.value = await location.value.info.next;
    paginePrecedente.value = await location.value.info.prev;
    listing.value = await location.value.results;
}
async function previousPage(){
    const response = await fetch(paginePrecedente.value);
    location.value = await response.json();
    pagineSuivante.value = await location.value.info.next;
    paginePrecedente.value = await location.value.info.prev;
    listing.value = await location.value.results;
}
function rechercher(){
    setTimeout(() => {
        location.value.results = listing.value.filter((loca) => {
            return loca.name.toLowerCase().includes(recherche.value.toLowerCase())
        })
    }, 100)
}
</script>



<template>

    <input type="text" v-model="recherche" @keyup="rechercher" placeholder="Recherche par nom" class="recherche">
    <template class="flex">
        <div v-for="location in location.results">
            <div class="card">
             <p>   Nom : {{location.name}} <br></p>
             <p>  Type : {{location.type}}</p> <br>
              <p> Dimension : {{location.dimension}}</p>

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
.card{
    border: 1px solid black;
    border-radius: 5px;
    padding: 10px;
    margin: 10px;
    width: 250px;
    height: 150px;
    align-items: center;
    background-color: slategrey;
}
.recherche{
    margin: 10px;
}

</style>

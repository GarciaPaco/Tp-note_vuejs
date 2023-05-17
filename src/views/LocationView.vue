<script setup>
import  {onMounted, ref } from 'vue';


const location = ref([]);
const pagineSuivante = ref('');
const paginePrecedente = ref('');

onMounted(async () => {
    const response = await fetch('https://rickandmortyapi.com/api/location');
    location.value = await response.json();
    pagineSuivante.value = await location.value.info.next;
    paginePrecedente.value = await location.value.info.prev;

});

async function nextPage(){
    const response = await fetch(pagineSuivante.value);
    location.value = await response.json();
    pagineSuivante.value = await location.value.info.next;
    paginePrecedente.value = await location.value.info.prev;
}

async function previousPage(){
    const response = await fetch(paginePrecedente.value);
    location.value = await response.json();
    pagineSuivante.value = await location.value.info.next;
    paginePrecedente.value = await location.value.info.prev;
}
</script>



<template>

<!--  <pre>-->
<!--      {{location}}-->
<!--  </pre>-->

    <template class="flex">
        <div v-for="location in location.results">
            <div class="card">
                Nom : {{location.name}} <br>
                Type : {{location.type}} <br>
                Dimension : {{location.dimension}}

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
    margin: 10px;
    padding: 10px;
    background-color: gray;
}
</style>

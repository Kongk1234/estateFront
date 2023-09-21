<template>
    <p>Made this with getters</p>
    <!-- Looping through what is returned in getUsers -->
    <div v-for="user in getUsers" :key="user.id">
        <ul>
            <li> id: {{ user.id }}</li>
            <li> name: {{ user.name }}</li>
            <li> age: {{ user.age }}</li>
        </ul>
    </div>

    <p>Made this with actions</p>
    <!-- Looping through what is returned in Users -->
    <div v-for="user in users" :key="user.id">
        {{ user.id }} {{ user.name }} {{ user.address }}
    </div>
    <p>Made this json online</p>
    <ul>
        <li> id: {{ onlineJson.id }}</li>
        <li> name: {{ onlineJson.title  }}</li>
        <li> age: {{ onlineJson.price }}</li>
    </ul>
</template>

<script setup>

//Importing the nessesary stuff to make theproject work
import { onMounted, computed } from "vue";
import { UserStore } from "../store/index";
const store = UserStore();

//Returning the GetUsers function that is getting what is in my state
const getUsers = computed(() => {
    return store.getUsers;
});

//This is returning my state
const users = computed(() => {
    return store.users;
});

const onlineJson = computed(() => {
    return store.onlineJson;
})
//When the page is loaded it runs my fetchUsers function
onMounted(() => {
    store.fetchUsers();
    store.fetchJson();
});



</script>
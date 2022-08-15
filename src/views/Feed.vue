<template>
    <h1> Feed </h1>
    <h3> This page is for users only </h3>
</template>

<script setup>
import { getAuth,onAuthStateChanged } from 'firebase/auth'
import { useRouter } from 'vue-router'
import { onBeforeUnmount } from 'vue'

const router = useRouter()
const authListener = onAuthStateChanged(getAuth(),function(user) {
    if (!user) { // not logged in
        alert('you must be logged in to view this. redirecting to the home page')
        router.push('/')
    }
});

onBeforeUnmount(() => {
    // clear up listener
    authListener()
})
  
</script>
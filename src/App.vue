<script setup lang="ts">
import { useColorMode } from '@vueuse/core'

const mode = useColorMode()
</script>

<template>
  <div class="h-screen w-screen h-dvh dark:text-white">
    <div class="flex flex-col items-start">
      <button @click="mode = mode === 'dark' ? 'light' : 'dark'">
        toggle mode: {{ mode }}
      </button>
    </div>
    <router-view />
  </div>
</template>

<style>
/* dark mode */
.dark {
  background-color: black;
  color: white;
}
.light {
  background-color: white;
  color: black;
}
</style>

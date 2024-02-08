<script setup lang="ts">
import { useColorMode } from "@vueuse/core";

const mode = useColorMode();
</script>

<template>
  <div class="dark:text-red w-screen h-screen h-dvh">
    <button @click="mode = mode === 'dark' ? 'light' : 'dark'">
      toggle mode: {{ mode }}
    </button>
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

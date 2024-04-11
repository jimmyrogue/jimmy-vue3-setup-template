<script lang="ts" setup>
import VueSVG from "@/assets/vue.svg";

const { title } = defineProps<{ title: string }>();

const subtitle = ref();
</script>
<template>
  <div>hello {{ title }} {{ subtitle }}</div>
  <img :src="VueSVG" alt="" />
</template>

<style lang="less" scoped></style>

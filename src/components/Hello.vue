<script lang="ts" setup>
const { title } = defineProps<{ title: string }>();

const subtitle = ref();
</script>
<template>
  <div>hello {{ title }} {{ subtitle }}</div>
</template>

<style lang="less" scoped></style>

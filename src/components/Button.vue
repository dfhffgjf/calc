<script setup lang="ts">

  const { data } = defineProps(['data']);

</script>

<template>

  <div
      class="button df aic jcc"
      @click="$emit('clickButton', data)"
  >
    {{data.key}}
  </div>

</template>

<style lang="scss" scoped>

  .button {
    width: 100%;
    height: 100%;
    font-size: 24px;
    font-weight: 700;
    color: white;
    border: 1px solid white;
    transition: .3s;
    cursor: pointer;
    opacity: .8;
    background: #434343;

    &:hover {
      opacity: 1;
      background: #2D2D2D;
    }
  }

</style>

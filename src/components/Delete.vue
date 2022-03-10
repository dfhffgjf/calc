<script setup lang="ts">

</script>

<template>

  <div class="button" @click="$emit('clear')">
    Delete
  </div>

</template>

<style lang="scss" scoped>

  .button {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    cursor: pointer;
    background: #434343;
    transition: .3s;
    border: 1px solid white;
    color: white;

    &:hover {
      opacity: 1;
      background: #2D2D2D;
    }
  }

</style>
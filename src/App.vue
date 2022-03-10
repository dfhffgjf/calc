<script setup lang="ts">

  import { onMounted, ref } from "vue";

  import { keydown } from "@utils/keydown";
  import config from "@config";

  import Calc from "./components/Calc.vue";

</script>

<template>


  <div class="wrapper df aic jcc">
    <Calc />
  </div>

</template>

<style lang="scss">

  .wrapper {
    width: 100%;
    height: 100vh;
  }


</style>

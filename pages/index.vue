<script setup lang="ts">
// const { x, y } = useMouse();
// const color = useColorMode();

// function toggleDark() {
//   color.value = color.value === 'dark'
//     ? 'light'
//     : 'dark';
// }
</script>

<template>
  <div class="grid grid-cols-2 h-full">
    <div class="border-r border-base">
      Col 1
    </div>
    <div>Col 2</div>
  </div>

  <!-- <div class="text-red">
    hello world {{ x }}, {{ y }} <br>

    <button @click="toggleDark">
      {{ color.value }}
    </button>
  </div> -->
</template>

<style scoped>

</style>

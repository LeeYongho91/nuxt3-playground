<script setup lang="ts">
const { x, y } = useMouse();
const color = useColorMode();

function toggleDark() {
  color.value = color.value === 'dark'
    ? 'light'
    : 'dark';
}
</script>

<template>
  <div class="grid grid-cols-[1fr_2fr] h-full">
    <div class="border-r border-base p4">
      Col 1
      <div class="text-red">
        hello world {{ x }}, {{ y }} <br>

        <button @click="toggleDark">
          {{ color.value }}
        </button>
      </div>
    </div>
    <div h-full>
      <ThePlayGround />
    </div>
  </div>
</template>

<style scoped>

</style>

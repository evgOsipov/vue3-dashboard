<template>
  <div class="min-h-20 bg-sky-200 flex justify-around items-center">
    <div class="w-10">
      <i>Иконка</i>
    </div>
    <div>
      <ul class="flex gap-24 justify-center">
        <li v-for="item in menuButtons" :key="item.title">
          <button class="p-4 block cursor-pointer">
            {{ item.title }}
          </button>
        </li>
      </ul>
    </div>
    <div class="w-10">
      <i></i>
      Github
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const menuButtons = ref([{
  title: 'Главная',
  href: '/',
}, {
  title: 'Документы',
  href: '/docs',
}, {
  title: 'Гайды',
  href: '/guides',
}, {
  title: 'FAQ',
  href: '/faq',
}]);

</script>

<style scoped>

</style>
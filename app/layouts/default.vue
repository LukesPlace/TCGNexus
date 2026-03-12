<script setup lang="ts"></script>

<template>
  <div>
    <UContainer class="pt-10">
      <div class="absolute inset-0 -z-10 holo-bg opacity-40"></div>
      <AppHeader :links="navLinks" />
      <slot />
      <AppFooter />
    </UContainer>
  </div>
</template>

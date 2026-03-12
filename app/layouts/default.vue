<script setup lang="ts"></script>

<template>
  <div>
    <UContainer class="pt-10">
      <div class="absolute inset-0 -z-10 holo-bg opacity-40"></div>
      <NuxtLink
        to="/"
        class="hidden lg:block pt-14 absolute left-4 -translate-y-1/2 rounded-full"
      >
        <UColorModeImage
          light="/icons/TrimmedNexusIcon.png"
          dark="/icons/TrimmedNexusIconWhite.png"
          alt="TCG Nexus Logo"
        />
      </NuxtLink>
      <AppHeader :links="navLinks" />
      <slot />
      <AppFooter />
    </UContainer>
  </div>
</template>

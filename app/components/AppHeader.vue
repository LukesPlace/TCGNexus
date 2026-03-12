<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

defineProps<{
  links: NavigationMenuItem[];
}>();
</script>

<template>
  <div
    class="p-[2px] rounded-full bg-[linear-gradient(90deg,yellow,red,blue,green,purple)] bg-[length:200%_200%] animate-[gradient_6s_linear_infinite]"
  >
    <UNavigationMenu
      :items="links"
      variant="link"
      color="neutral"
      class="bg-muted/80 backdrop-blur-sm rounded-full px-2 sm:px-4 border border-muted/50 shadow-lg shadow-neutral-950/5"
      :ui="{
        link: 'px-3 py-1 text-xl font-semibold tracking-wide transition-all duration-200 hover:scale-105 hover:drop-shadow-[0_0_6px_rgba(250,204,21,0.6)] data-[active=true]:text-yellow-400 data-[active=true]:drop-shadow-[0_0_6px_rgba(250,204,21,0.7)] hover:text-black dark:hover:text-white',
        linkLeadingIcon:
          'sm:hidden size-6 mr-1 transition-transform group-hover:scale-110',
        linkLabel: 'hidden sm:inline',
      }"
    >
      <template #list-trailing>
        <ColorModeButton />
      </template>
    </UNavigationMenu>
  </div>
</template>

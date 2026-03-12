<script setup lang="ts">
import type { IndexCollectionItem } from "@nuxt/content";

defineProps<{
  page: IndexCollectionItem;
}>();
</script>

<template>
  <UPageHero
    :ui="{
      headline: 'font-heading flex items-center justify-center',
      title: 'text-shadow-md max-w-2xl mx-auto',
      description: 'max-w-xl mx-auto',
      links: 'mt-6 flex-wrap justify-center gap-3',
    }"
  >
    <!-- Logo -->
    <template #headline>
      <Motion
        :initial="{ scale: 0.9, opacity: 0, y: 20 }"
        :animate="{ scale: 1, opacity: 1, y: 0 }"
        :transition="{ duration: 0.5 }"
      >
        <div class="relative">
          <!-- subtle glow -->
          <div class="absolute inset-0 rounded-full blur-2xl opacity-300" />
        </div>
      </Motion>
    </template>

    <!-- Title -->
    <template #title>
      <Motion
        :initial="{ opacity: 0, y: 20 }"
        :animate="{ opacity: 1, y: 0 }"
        :transition="{ delay: 0.1, duration: 0.5 }"
      >
        {{ page.title }}
      </Motion>
    </template>

    <!-- Description -->
    <template #description>
      <Motion
        :initial="{ opacity: 0, y: 20 }"
        :animate="{ opacity: 1, y: 0 }"
        :transition="{ delay: 0.2, duration: 0.5 }"
      >
        {{ page.description }}
      </Motion>
    </template>

    <!-- Primary Actions -->
    <template #links>
      <Motion
        :initial="{ opacity: 0, y: 20 }"
        :animate="{ opacity: 1, y: 0 }"
        :transition="{ delay: 0.35, duration: 0.5 }"
      >
        <div class="flex flex-wrap justify-center gap-3">
          <UButton
            to="/sets"
            size="lg"
            color="primary"
            icon="i-lucide-layers"
            label="Explore Sets"
          />

          <UButton
            to="/comparisons"
            size="lg"
            variant="outline"
            icon="i-lucide-git-compare"
            label="Compare Sets"
          />

          <UButton
            to="/price-movers"
            size="lg"
            variant="ghost"
            icon="i-lucide-trending-up"
            label="Price Movers"
          />
        </div>
      </Motion>
    </template>

    <!-- Card marquee -->
    <UMarquee
      pause-on-hover
      class="py-6 -mx-8 sm:-mx-12 lg:-mx-16 bg-transparent [--duration:40s]"
      :overlay="false"
    >
      <Motion
        v-for="(img, index) in page.hero.images"
        :key="index"
        :initial="{ opacity: 0, scale: 0.9 }"
        :animate="{ opacity: 1, scale: 1 }"
        :transition="{ delay: index * 0.1, duration: 0.4 }"
      >
        <NuxtImg
          width="234"
          class="rounded-lg object-cover shadow-xl hover:scale-105 transition-transform"
          :class="index % 2 === 0 ? '-rotate-2' : 'rotate-2'"
          v-bind="img"
        />
      </Motion>
    </UMarquee>
  </UPageHero>
</template>

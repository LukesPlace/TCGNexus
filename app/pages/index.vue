<script setup lang="ts">
import NewestSet from "~/components/landing/NewestSet.vue";
import PriceChange from "~/components/landing/PriceChange.vue";

const { data: page } = await useAsyncData("index", () => {
  const result = queryCollection("index").first();
  return result || {};
});
if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Page not found",
    fatal: true,
  });
}

useSeoMeta({
  title: page.value?.seo.title || page.value?.title,
  ogTitle: page.value?.seo.title || page.value?.title,
  description: page.value?.seo.description || page.value?.description,
  ogDescription: page.value?.seo.description || page.value?.description,
});
</script>

<template>
  <UPage v-if="page">
    <LandingHero :page="page" />
    <UPageSection
      :ui="{
        container: '!pt-0 lg:grid lg:grid-cols-2 lg:gap-8',
      }"
    >
      <NewestSet></NewestSet>
      <PriceChange></PriceChange>
    </UPageSection>
    <LandingBlog :page="page" />
    <LandingTestimonials :page="page" />
    <LandingFAQ :page="page" />
  </UPage>
</template>

<template>
  <div class="flex flex-col gap-4">
    <h2 class="text-2xl font-bold">New Pokémon TCG Set</h2>
    <NuxtLink to="/sets">
      <div
        class="flex flex-col gap-2 bg-surface rounded-lg p-4 shadow dark:hover:bg-elevated/50 light:hover:bg-gray-100"
      >
        <img
          src="/sets/SV02.png"
          alt="New Pokémon Set"
          class="w-full rounded-lg"
        />
        <div>
          <h3 class="font-semibold text-lg">
            Scarlet & Violet: Paldea Evolved
          </h3>
          <p class="text-sm text-muted-foreground">
            Release Date: March 17, 2026 | 200 cards
          </p>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
//Pull Data down properly
const biggestPriceChange = [
  {
    id: 1,
    name: "Mega Charizard",
    image: "hero/Mega-charizard.png",
    oldPrice: "$300",
    newPrice: "$350",
    change: 16.7,
  },
  {
    id: 2,
    name: "Pikachu",
    image: "hero/Pikachu.png",
    oldPrice: "$50",
    newPrice: "$40",
    change: -20,
  },
  {
    id: 3,
    name: "Squirtle",
    image: "hero/Squirtle.png",
    oldPrice: "$120",
    newPrice: "$150",
    change: 25,
  },
];
</script>

<template>
  <div class="flex flex-col gap-4">
    <h2 class="text-2xl font-bold">Biggest Price Change Today</h2>
    <div class="flex flex-col gap-2">
      <NuxtLink
        to="/price-movers"
        v-for="card in biggestPriceChange"
        :key="card.id"
        class="flex items-center gap-4 bg-surface rounded-lg p-3 shadow dark:hover:bg-elevated/50 light:hover:bg-gray-100 transition"
      >
        <img
          :src="card.image"
          :alt="card.name"
          class="w-16 h-24 object-cover rounded"
        />
        <div class="flex flex-col">
          <span class="font-semibold">{{ card.name }}</span>
          <span class="text-sm">
            {{ card.oldPrice }} → {{ card.newPrice }}
            <span
              :class="{
                'text-green-600': card.change > 0,
                'text-red-600': card.change < 0,
              }"
            >
              ({{ card.change }}%)
            </span>
          </span>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

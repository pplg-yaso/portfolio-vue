<template>
  <section class="menu">
    <h1 class="title">MENÚ</h1>

    <div class="menu-wrapper">

      <!-- LEFT SIDE -->
      <div class="menu-column">

        <div class="menu-group">
          <h2>LATTE’S</h2>
          <div class="line"></div>

          <div class="item" v-for="item in lattes" :key="item.name">
            <span>{{ item.name }}</span>
            <span>{{ item.price }}</span>
          </div>
        </div>

        <div class="menu-group">
          <h2>SANDWICH</h2>
          <div class="line"></div>

          <div class="item" v-for="item in sandwich" :key="item.name">
            <span>{{ item.name }}</span>
            <span>{{ item.price }}</span>
          </div>
        </div>

      </div>

      <!-- RIGHT SIDE -->
      <div class="menu-column">

        <div class="menu-group">
          <h2>COFFEE’S</h2>
          <div class="line"></div>

          <div class="item" v-for="item in coffees" :key="item.name">
            <span>{{ item.name }}</span>
            <span>{{ item.price }}</span>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
const lattes = [
  { name: "Matcha Latte", price: "Rp 25K" },
  { name: "Matcha Espresso", price: "Rp 28K" },
  { name: "Passion Fruit Matcha", price: "Rp 30K" },
  { name: "Strawberry Matcha", price: "Rp 30K" },
  { name: "Classic Spanish Latte", price: "Rp 27K" },
  { name: "Dark Mocha", price: "Rp 28K" },
]

const coffees = [
  { name: "Americano", price: "Rp 22K" },
  { name: "Cappuccino", price: "Rp 25K" },
  { name: "Latte", price: "Rp 25K" },
  { name: "Macchiato", price: "Rp 24K" },
]

const sandwich = [
  { name: "Double Queso", price: "Rp 28K" },
  { name: "Ham & Cheese", price: "Rp 30K" },
  { name: "Original Pizza", price: "Rp 32K" },
  { name: "Strawberry Cream", price: "Rp 27K" },
]
</script>

<style scoped>
.menu {
  background: #f5f1eb;
  padding: 80px 100px;
  min-height: 100vh;
}

.title {
  text-align: center;
  font-size: 48px;
  margin-bottom: 60px;
  letter-spacing: 4px;
}

.menu-wrapper {
  display: flex;
  justify-content: space-between;
  gap: 60px;
}

.menu-column {
  flex: 1;
}

.menu-group {
  margin-bottom: 60px;
}

.menu-group h2 {
  font-size: 22px;
  margin-bottom: 10px;
}

.line {
  width: 120px;
  height: 2px;
  background: black;
  margin-bottom: 20px;
}

.item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
  font-size: 15px;
}
</style>

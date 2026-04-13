<template>
  <div class="card" style="width: 18rem;">
  <img src="https://statik.tempo.co/data/2023/02/04/id_1178497/1178497_720.jpg" class="card-img-top" alt="...">
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
  </div>
</div>
</template>

<script>
export default {
  name: "SimpleCard"
}
</script>

<style scoped>
.card {
  width: 280px;
  background: #ffffff;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 25px rgba(0, 0, 0, 0.12);
}

.card-title {
  margin: 0 0 10px;
  font-size: 18px;
  color: #333;
}

.card-text {
  font-size: 14px;
  color: #666;
  margin-bottom: 15px;
}

.card-btn {
  background: #0d6efd;
  color: white;
  border: none;
  padding: 8px 14px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 13px;
  transition: background 0.3s ease;
}

.card-btn:hover {
  background: #0b5ed7;
}
</style>

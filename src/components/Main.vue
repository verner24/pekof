<template>
  <div class="product">
    <div class="container" v-for="product in products">
      <div>{{ product.img }}</div>
      <div><strong>Название: </strong>{{ product.title }}</div>
      <div><strong>Описание: </strong>{{ product.body }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [
        { id: 1, img:"#", title: "Женская сумка 1", body: "Описание 1" },
        { id: 2, img:"#", title: "Женская сумка 2", body: "Описание 2" },
        { id: 3, img:"#", title: "Женская сумка 3", body: "Описание 3" },
      ]
    }
  },
  methods: {

  }
}
</script>

<style scoped>

.product {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
}

.container {
  width: 418px;
  height: 320px;
  padding: 15px;
  margin: 40px;
  border: 2px solid black;
}
</style>
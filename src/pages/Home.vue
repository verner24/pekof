<template>
  <div class="section">
		<div v-if="allProducts === null">
      <loader />
		</div>
    <div v-else class="wrapper">
      <router-link v-for="product in allProducts" :key="product.id" :to="`/product/${product.id}`">
        <product-preview :product="product" />
      </router-link>
    </div>
  </div>
</template>

<script>
import ProductPreview from '@/components/ProductPreview';
import { mapGetters } from 'vuex';
import Loader from '@/components/common/Loader';

export default {
  components: { ProductPreview, Loader },
  computed: mapGetters(['allProducts']),
}
</script>

<style>

.section {
  display: flex;
  justify-content: flex-start;
  padding: 79px 250px 112px 250px;
}

.wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  max-width: 1400px;
}
</style>
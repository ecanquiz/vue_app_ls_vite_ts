<template>
  <div class="home">
    <ItemsListComponent 
      :items="items"
      :loading="loading" />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, onMounted } from 'vue'
import ItemsListComponent from '@/components/items/ItemsList.component.vue'
import store from '@/store'

export default defineComponent({
  name: 'MyHome',
  components: {
    ItemsListComponent
  },
  setup() {

    onMounted(() => {
      store.dispatch('loadItems')
    })

    const items = computed(() => {
      return store.state.items
    })

    const loading = computed(() => {
      return store.state.loading
    })

    return {
      items,
      loading
    }
  }
})
</script>

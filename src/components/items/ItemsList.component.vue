<template>
  <div>
    <h3>Items:</h3>
    <ul class="list-disc">
      <li v-for="item in items" :key="item.id">{{ item.name }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { ItemInterface } from '@/models/items/Item.interface'

export default defineComponent({
  props: {
    items: {
      type: Array as PropType<ItemInterface[]>,
      default: () => []
    }
  }
})
</script>

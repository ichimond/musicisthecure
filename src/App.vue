<template>
  <pvMenubar :model="items" >
    <template #start>
      Start
    </template>
    <template #item="{item}">
      <router-link :to="item.to" custom v-slot="{href, navigate, isActive, isExactActive}">
            <a :href="href" @click="navigate" :class="{'active-link': isActive, 'active-link-exact': isExactActive}">{{item.label}}</a>
        </router-link>
    </template>
    <template #end>
      After
    </template>
  </pvMenubar>
  <router-view />
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      items: [
        {
          label: 'Build',
          to: '/build'
        },
        {
          label: 'Take On',
          to: '/take-on'
        },
        {
          label: 'Cure',
          to: '/cure'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>

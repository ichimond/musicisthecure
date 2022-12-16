<template>
  <pvMenubar :model="items" >
    <template #start>
      <router-link to="/">
        <img src="./assets/images/music_is_the_cure_logo.max-165x165.png" alt="Music is the Cure" class="logo">
      </router-link>
    </template>
    <template #item="{item}">
      <router-link :to="item.to" custom v-slot="{href, navigate, isActive, isExactActive}">
          <a :href="href" @click="navigate" :class="{'active-link': isActive, 'active-link-exact': isExactActive}">{{item.label}} </a>
      </router-link>
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
.logo {
  max-width: 50px;

}



</style>

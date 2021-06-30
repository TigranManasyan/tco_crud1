<template>
  <div>
    <b-container>
      <h2>All Posts</h2>
            <b-table :items="posts"></b-table>
    </b-container>
  </div>
</template>

<script>
export default {
  name:'Posts',
  data() {
    return {
      a:[1,2,5]
    }
  },
  computed: {
    posts() {
      return this.$store.getters['Posts/posts']
    }
  },
  mounted() {
    this.$store.dispatch('Posts/setPosts');
  }
}
</script>

<style scoped>

</style>

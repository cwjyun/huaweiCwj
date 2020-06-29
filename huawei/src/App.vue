<template>
  <div id="app">
    <blog_head></blog_head>
      <router-view/>
    <blog_foot></blog_foot>
  </div>
</template>

<script>
  import blog_head from './components/common/header.vue'
  import blog_foot from './components/common/foot.vue'
  export default {
    name: 'app',
    components: {blog_head, blog_foot}

  }
</script>

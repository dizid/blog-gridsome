<template>
  <Layout>
     <header class="header"> 
      <h1>Gridsome Blog</h1>
      <p>A simple blog debugged with Gridsome</p>
    </header> 
    <section class="posts">
  <PostList v-for="edge in $page.allPost.edges" :key="edge.node.id" :post="edge.node" />
   </section>
  </Layout>
</template>
 
<script>
import PostList from '../components/PostList.vue'
export default { 
  components: {PostList},
    metaInfo: {title: 'Blog'}
}
</script>

<page-query>
query {
 allPost {
    totalCount
    edges {
      node {
        id
        title
        timeToRead
        description
        date (format: "YYYY MM DD")
        path
      }
    }
  }
}
</page-query>
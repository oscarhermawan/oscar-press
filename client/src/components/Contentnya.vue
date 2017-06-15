<template>
  <div>
    <article class="media" v-for="article in articles_list">
      <figure class="media-left">
        <p class="image is-64x64">
          <img src="http://bulma.io/images/placeholders/128x128.png">
        </p>
      </figure>
      <div class="media-content">
        <div class="content">
          <p>
            <strong>{{article.author.username}}</strong>
            <br>
            {{article.title}}
            </p>
          <a class="button is-warning">Edit</a>
          <a class="button is-danger" @click="deleteArticle(article)">Delete</a>
        </div>
        <nav class="level is-mobile">
          <div class="level-left">
            <a class="level-item">
              <span class="icon is-small"><i class="fa fa-reply"></i></span>
            </a>
            <a class="level-item">
              <span class="icon is-small"><i class="fa fa-retweet"></i></span>
            </a>
            <a class="level-item">
              <span class="icon is-small"><i class="fa fa-heart"></i></span>
            </a>
          </div>
        </nav>
      </div>
    </article>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import axios from 'axios'
export default{
  computed:mapState([
    'articles_list'
  ]),
  methods:{
    deleteArticle(article){
      let deleteArticle = {
          id:article._id,
          author:article.author._id
        }
        this.$store.dispatch('DELETE_ARTICLE', { deleteArticle })
    }
  }
}
</script>

<style scoped>
</style>

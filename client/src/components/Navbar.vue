<template>
  <nav class="nav has-shadow">
    <div class="container">
      <div class="nav-left">
        <a class="nav-item">
          <img src="http://bulma.io/images/bulma-logo.png" alt="Bulma logo">
        </a>
        <a class="nav-item is-tab is-hidden-mobile is-active">Home</a>
        <a class="nav-item is-tab is-hidden-mobile" @click="aktifinModalAdd">Add Article</a>
      </div>
      <span class="nav-toggle">
        <span></span>
        <span></span>
        <span></span>
      </span>
      <div class="nav-right nav-menu">
        <a class="nav-item is-tab">
          <figure class="image is-16x16" style="margin-right: 8px;">
            <img src="http://bulma.io/images/jgthms.png">
          </figure>
          Profile
        </a>
        <a class="nav-item is-tab" @click="emitLogout">Log out</a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
    methods: {
      emitLogout () {
        this.$emit('keluarDariAnak')
      },
      aktifinModalAdd(){
        this.$emit('aktifinModal')
      }
    }
  }

</script>

<style scoped>
</style>

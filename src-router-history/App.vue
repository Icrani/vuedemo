<template>
  <div>
    <Header></Header>
    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
          <router-link class="list-group-item" active-class="active" replace to="/about">About</router-link>
          <router-link class="list-group-item" active-class="active" replace  to="/home">Home</router-link>
        </div>
      </div>
      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
            <router-view></router-view>
<!--            <router-view name="h1"> </router-view>-->
<!--            <router-view name="h2"></router-view>-->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import Header from './components/Header'
import About from './views/About'
import Home from './views/Home'

export default {
  name: 'App',
  components: {
    Header,
    About,
    Home
  }
}
</script>

<style scoped>

</style>

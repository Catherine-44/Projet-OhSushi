<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <div class="container">
      <h1>Menu</h1>
      <nav class="navbar navbar-expand navbar-dark bg-dark">
          <a class="navbar-brand" href="D:\wamp64\www\Site OhSushi\index.php">Oh Sushi</a>
          <ul class="navbar-nav">
              <li class="nav-item"><a class="nav-link " href="entrees">Entrées</a></li>
              <li class="nav-item"><a class="nav-link " href="brochettes">Brochettes</a></li>
              <li class="nav-item"><a class="nav-link " href="menus">Menus</a></li>
              <li class="nav-item"><a class="nav-link " href="desserts">Desserts</a></li>
              <li class="nav-item"><a class="nav-link " href="vueCommande">Cuisine</a></li>
              <a href="javascript:window.location = vueCommande.html.reload()">Recharger la page</a>
          </ul>
      </nav>
  <router-view/>    
  </div>
  
</template>

<script>
// import HelloWorld from './components/entete.vue'

export default {
  name: 'App',
}
</script>
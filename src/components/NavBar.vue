<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <img class="img-fluid w-25" src="https://i.ibb.co/6DG4wtn/gymkini-text.png" alt="logo2">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <!-- <div>
        <img class="img-fluid w-25" src="https://i.ibb.co/dKTfNz2/theoneeeeeebro.png" alt="logo1">
    </div> -->
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
            <router-link to="/" class="nav-link active">
                Home |
            </router-link>
        </li>
        <li class="nav-item">
            <router-link to="/about" class="nav-link active">
                About |
            </router-link>
        </li>
        <li class="nav-item">
            <router-link to="/products" class="nav-link active">
                Products |
            </router-link>
        </li>
        <li class="nav-item">
            <router-link to="/checkout" class="nav-link active">
                Checkout |
            </router-link>
        </li>
        <li class="nav-item">
            <router-link to="/contact" class="nav-link active">
                Contact |
            </router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
    export default {
        name: 'NavBarComp'
    }
</script>

<style scoped>

</style>
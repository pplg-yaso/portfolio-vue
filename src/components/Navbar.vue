<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow-sm">
    <div class="container">
      
      <router-link class="navbar-brand fw-bold d-flex align-items-center" to="/">
        <span class="logo"></span>
        <span class="ms-2">MOVIE R</span>
      </router-link>

    
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navMenu"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navMenu">
       
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/" exact-active-class="active">
              Home
            </router-link>
          </li>

          <li class="nav-item">
            <router-link class="nav-link" to="/about" exact-active-class="active">
              About
            </router-link>
          </li>

          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
            >
              Services
            </a>
            <ul class="dropdown-menu dropdown-menu-dark">
              <li><router-link class="dropdown-item" to="/contact">Contact</router-link></li>
            
            </ul>
          </li>
        </ul>

        
        <form class="d-flex me-3" role="search">
          <input
            class="form-control form-control-sm me-2"
            type="search"
            placeholder="Search..."
          />
        </form>

       
        <ul class="navbar-nav">
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle d-flex align-items-center"
              href="#"
              data-bs-toggle="dropdown"
            >
             
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK34MxN9zmM-SK-lqrczeX2RiEuDjCUNYpQA&s"
                class="rounded-circle me-2 avatar"
                alt="user"
              />
              Admin
            </a>
            <ul class="dropdown-menu dropdown-menu-end dropdown-menu-dark">
             <li><a class="dropdown-item text-danger" href="http://127.0.0.1:5500/p.html">profile</a></li>
               <li><a class="dropdown-item text-danger" href="http://127.0.0.1:5500/j.html">login</a></li>
              <li><hr class="dropdown-divider" /></li>
              <li><a class="dropdown-item text-danger" href="http://127.0.0.1:5500/login.html">logout</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.avatar {
  width: 32px;
  height: 32px;
  object-fit: cover;
}
</style>

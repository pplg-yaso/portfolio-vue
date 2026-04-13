<template>
  <nav class="navbar navbar-expand-lg navbar-light fixed-top pink-navbar">
    <div class="container-fluid">

      
      <a class="navbar-brand" href="#">Sweetie Dessert🧁</a>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">

        <ul class="navbar-nav mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link">Services</a>
          </li>
          <li class="nav-item">
            <a class="nav-link">Portofolio</a>
          </li>
          <li class="nav-item">
            <a class="nav-link">Contact</a>
          </li>
        </ul>

        <form class="d-flex mx-auto search-box">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
          />
          <button class="btn btn-outline-light">Search</button>
        </form>

        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              role="button"
              data-bs-toggle="dropdown"
            >
              Dropdown
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item">Action</a></li>
              <li><a class="dropdown-item">Another action</a></li>
            </ul>
          </li>
        </ul>

      </div>
    </div>
  </nav>
</template>

<style scoped>
.pink-navbar {
  background-color: #ecbde4; 
}

.pink-navbar .nav-link,
.pink-navbar .navbar-brand {
  color: white;
}

.pink-navbar .nav-link:hover {
  color: #ffe4f1;
}

.search-box input {
  border-radius: 20px;
}

.search-box button {
  border-radius: 20px;
}
</style>

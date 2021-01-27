<template>
  <header class="navbar">
    <h3>Freelance</h3>

    <ul class="navbar-menu">
      <li>
        <router-link
          to="/"
          active-class="active"
        >
          Все задачи
        </router-link>
      </li>
      <li>
        <router-link
          to="/new"
          active-class="active"
        >
          Создать
        </router-link>
      </li>
    </ul>
  </header>
</template>

<script>
export default {
}
</script>

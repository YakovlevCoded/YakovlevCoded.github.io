<template>
  <nav class="navigation">
    <div class="container navigation__container">
      <a href="#">
        <div class="logo" :style="{
    backgroundImage: 'url(' + require('@/assets/images/logo.png') + ')'
    }"></div>
      </a>

      <div class="nav-links">
        <ul>
          <li><a class="nav-links__link" href="#">Home</a></li>
          <li><a class="nav-links__link" href="#">Jobs</a></li>
          <li><a class="nav-links__link" href="#">Contacts</a></li>
          <li><a class="nav-links__link nav-links__phone" href="tel:8352624245" type="phone">(8352) 62-42-45</a></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
    name: 'navigation',
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .navigation {
    position: fixed;
    width: 100%;
    height: 85px;
    top: 0;
    left: 0;
    right: 0;
    background: $dark;

    &__container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 100%;
    }
  }

  .logo {
    background-size: cover;
    background-position: 50%;
    width: 100px;
    height: 70px;
  }

  .nav-links {
    width: 45%;

    ul {
      display: flex;
      justify-content: space-between;
    }

    li {
      list-style: none;
    }

    &__link {
      position: relative;
      text-transform: uppercase;
      text-decoration: none;
      color: $light;
      font-size: 15px;
      padding: 10px 0;
      &:hover {
        &::after {
          transform: scaleX(1);
        }
      }

      &::after {
        content: '';
        display: block;
        position: absolute;
        width: 100%;
        bottom: 5px;
        background-color: $red;
        height: 1px;
        transform: scaleX(0);
        transform-origin: left center;
        transition: transform 0.3s;
      }
    }
    &__phone {
      font-size: 17px;
      &::after {
        transform: scaleX(1);
        background-color: $light;
        transition: background-color 0.3s
      }
      &:hover {
        &::after {
          background-color: $red;
        }
      }
    }
  }

</style>

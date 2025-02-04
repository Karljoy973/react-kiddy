<template>
  <header class="">
    <div class="wrapper">
      <h1 class="text-header"><v-icon icon="$navbarHeadset" />React-Kiddy</h1>
      <nav>
        <RouterLink to="/"><p>Home</p></RouterLink>
        <RouterLink to="/about"><p>About</p></RouterLink>
        <RouterLink to="/gallery"><p>Gallery</p></RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>
<style lang="css" scoped>
@import '../assets/base.css';
.wrapper {
  display: flex;
  flex-direction: row;
  margin-left: 1.5em;
  margin-right: 1.5em;
}
header {
  position: absolute;
  right: 0;
  top: 0;
  height: max-content;
  max-height: 100vh;
}
.text-header {
  background-color: transparent;
  width: max-content;
  position: absolute;
  height: inherit;
  top: 0;
  right: 80vh;
  font-family: 'Roboto', Tahoma, Geneva, Verdana, sans-serif;
  color: var(--mt-blue-15);
}
p {
  font-size: x-large;
  margin: 10% 15px;
  color : var(--mt-blue-15); 
}
a{
  text-decoration: none;

}
a:hover {
  background-color: transparent; 
}
p:hover {
  color: var(--st-blue-11);
  
}

nav {
  display: flex;
  flex-direction: row;
  width: max-content;
}
</style>

<template>
  <div class="topnav">
    <button>
      Home
    </button>
    <button>
      Asc
    </button>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.topnav {
  overflow: hidden;
  background-color: blue;
  padding: 5px;
  margin-bottom: -16px;
}

.topnav button {
  background-color: chocolate;
  /* Green */
  color: black;
  border-style: solid;
  border-color: #c4580b;
  border-radius: 5px;
  padding: 10px 10px;
  width: 150px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  
}
.topnav button:hover {
  background-color: #4499a8;
}

.topnav button:active {
  background-color: black;
}
</style>
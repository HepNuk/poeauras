<template>
  <div class="topnav">
    <button>
      Home
    </button>
    <div class="divider" />
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
  position: relative;
  z-index: 2;
  overflow: hidden;
  padding: 5px;
  margin-bottom: -13px;
  margin-left: 10px;
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
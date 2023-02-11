<template>
  <div class="header">

  </div>
  <div class="content">
    <Main></Main>
  </div>
  <div class="footer">

  </div>
</template>

<script>

import Main from "@/components/Main";

export default {

  components: {
    Main
  },
  data() {
    return {

    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.header {
  height: 75px;
  border-bottom: 1px solid black;
  background: #ffffff;
}

.footer {
  bottom: 0;
  left: 0;
  width: 100%;
  position: fixed;
  display: flex;
  height: 96px;
  background: #0A1E32;
  margin-top: 20px;
}
</style>
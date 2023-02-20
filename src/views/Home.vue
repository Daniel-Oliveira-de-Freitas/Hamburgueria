
<template>
  <Banner />
  <div class="main-container">
    <h1>Monte seu pedido:</h1>
    <Form />
  </div>
</template>

<script>
import Banner from "../components/Banner.vue";
import Form from "../components/Form.vue";
export default {
  name: "Home",
  components: {
    Banner,
    Form
  }
}
</script>

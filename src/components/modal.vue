<template>
  <modal name="modal"
         :width="450"
         :height="550"
         :transition="'fade'">
    <form>
      <h3>Оставьте заявку и мы с вами свяжемся</h3>
      <div class="form-group">
        <label>Email</label>
        <input type="text" class="form-control">
      </div>
      <div class="form-group">
        <label>Имя</label>
        <input type="text" class="form-control">
      </div>
      <div class="form-group">
        <label>Фамилия</label>
        <input type="text" class="form-control">
      </div>
      <div class="form-group">
        <label>Телефон</label>
        <input type="text" class="form-control">
      </div>
      <hr>
      <button type="submit" class="btn outline-grad-btn">Отправить заявку</button></form>


  </modal>
</template>

<script>

  export default {
    name: 'mymodal',
    components: {
    },
    data() {
      return {
      }
    },
    methods: {
      hideModal () {
        this.$modal.hide('modal');
      }
    },

  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .form-group {
    display: flex;
    flex-direction: column;
    padding: 10px 0;
  }
  .form-group:last-of-type {
    margin-bottom: 20px;
  }
  form {
    padding: 25px;
  }
  input {
    height: 34px;
    margin-top: 10px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    border: 1px solid rgba(0,0,0, 0.4);
    font-size: 18px;
    padding: 0 15px;
    outline: transparent;
  }
  input:focus {
    border: 1px solid #000;
  }
</style>

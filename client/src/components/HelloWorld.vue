<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    
    <form @submit.prevent="submit">
        <input type="text" v-model="formdata.num1"> 
        <input type="text" v-model="formdata.num2"> 
         <button type="submit">
            Сложить два числа и записать результат в базу данных
        </button>
    </form>

    <div>Результат сложения</div>
    <div>Список вычислений из БД</div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Посчитать и записать',
  props: {
    msg: String
  },
  data () {
    return {
       formdata:{ num1: '', num2: '' }
    }
  },
  methods: {
    submit(){
      axios.post('/calc', { this.formdata })
      .then(res => {
        console.log('Все ок!');
        //console.log(this);
      })
      .catch(err => { 
         console.log('Ошибка!');
      })
  },
  mounted () {},
  components: {}
}
</script>

<style scoped>
h1 {
  margin: 0;
}
</style>

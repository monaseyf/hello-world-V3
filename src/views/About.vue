<template>
  <div class="about">
    <!-- <h1>This is an about page</h1>
    <button @click="increase(5)">increase</button>
    <button @click="decrease()">decrease</button>
    <p>{{counter}}</p>
    <p v-once>{{counter}}</p>

    <input type="text"
     v-on:input="this.setName"
     v-on:keyup.enter="ConfirmInput"/><br/>

     <input type="text" v-model="name"/>
    <p>your name: {{ ConfirmName }}</p>

    <button @click="Reset()"> Rest Value </button>
    
    <form v-on:submit.prevent>
      <input type="text"/>
      <button :style="{borderColor : 'red'}">submit </button>
    </form> -->

    <div class="demo" :class="{active : boxASelected}" @click="boxSelected('A')">Hello this is a test </div>
    
    <div class="demo" :class="selectBox" @click="boxSelected('B')">Hello this is a test</div>

    <div class="demo" :class="{active : boxASelected}" @click="boxSelected('C')">Hello this is a test</div>

  </div>
</template>

<script>
export default {
  data (){
    return {
      counter: 0,
      name: '',
      ConfirmName:'',
      boxASelected: false,
      boxBSelected: false,
      boxCSelected: false,
    }
  },
  computed: {
    selectBox(){
      return {
        active : this.boxASelected
      };
    }
  },
  
  methods: {
    boxSelected(box){
      if (box === 'A'){
        this.boxASelected = !this.boxASelected;
      } else if (box === 'B'){
        this.boxBSelected = !this.boxBSelected;
      }else if (box === 'C'){
        this.boxCSelected = !this.boxCSelected;
      }

    },

    Reset(){
      this.name = ''
    },

    ConfirmInput(){
      this.ConfirmName = this.name
    },

    setName (event){
      this.name = event.target.value;
    },

    increase (num){
      this.counter = this.counter + num
    },
    decrease (){
      this.counter--
    }
  },
  watch: {
    counter(value){
      if (value > 50) {
        const that = this;
        setTimeout(function (){
          that.counter = 0
        },2000);
        
      }
    }
  }
}
</script>
<style scoped>
.demo {
    width: calc(100% 32px);
    height: 100px;
    margin: 2px dashed #ccc;
}

.active {
    border-color: rebeccapurple;
    background-color: rgb(169, 169, 243);
}
</style>
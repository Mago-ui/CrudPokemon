<template>
    <div>
      <div id="app">
  <v-container>
    <v-layout row class="text-xs-center">
    
      <v-flex xs4 class="grey lighten-4 cardResponsive">
        <v-container style="position: relative;top: 13%;" class="text-xs-center">
          <v-card flat style="border-radius: 12px;padding: 12px;">
            <v-card-title primary-title>
              <h4 >Crear Pokemon</h4>
            </v-card-title>
            <v-form>
            <v-text-field  name="Nombre" label="Nombre" v-model="name"></v-text-field>
            <v-text-field  name="Categoria" label="Categoria" v-model="categoria" ></v-text-field>
            <v-text-field  name="Habilidad" label="Habilidad" v-model="habilidad" ></v-text-field>
            <v-text-field  name="Debilidad" label="Debilidad" v-model="debilidad" ></v-text-field>


            <v-card-actions>
              <v-btn primary large block @click="crearPokemon">Crear</v-btn>
              <br/>
              
            <v-btn class="ChangeColor" primary large block @click="backHome" >Cancelar</v-btn>

            </v-card-actions>
            </v-form>
          </v-card>
        </v-container>
      </v-flex>
    </v-layout>
  </v-container>
</div>
    </div>
</template>
<script>
import axios from "axios";

export default {
  data(){
    return{
        name:"",
        categoria:'',
        habilidad:'',
        debilidad:''
    }
  },

  methods:{
      crearPokemon(){
      const vm = this;
      axios.post('https://crudcrud.com/api/78eadd7edfa14cbbbc7a0bf0d98a6628/pokemon', {
        name:this.name,
        categoria:this.categoria,
        habilidad:this.habilidad,
        debilidad:this.debilidad
  })
  .then(function (response) {
    console.log(response);
      vm.$router.push({name:'Home'})

    


  })

  .catch(function (error) {
    console.log(error);
  });
},
backHome(){
  this.$router.push({name:'Home'})
}
    
  }
    
}
</script>
<style >
.v-card__actions{
    flex-direction: column;
}
.ChangeColor{
    background-color: #b82323 !important;
    color:white !important;
}
@media (max-width: 780px) {
  .flex.xs4 {
    max-width: 97%;
    width: 92%;
    flex-grow: inherit;
  }
}
</style>
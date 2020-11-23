

<template> 
<div id="app">
        <v-toolbar
          flat
        >
          <v-spacer></v-spacer>
            <router-link to="/cardCreate">
              <v-btn
                color="primary"
                dark
              >

               Nuevo Pokemon 
                
              </v-btn>
              </router-link>
              
              <faceComponent/>
        </v-toolbar>
  
<table>
  <tr>
    <th>Nombre</th>
    <th>categoria</th>
    <th>habilidad</th>
    <th>debilidad</th>

    <th>Accion</th>

  </tr>
  <tr  v-for="(pokemon, index) in pokemons"
          :key="index"
          :value="pokemon._id">
    <td>  {{ pokemon.name }}</td>
    <td>{{ pokemon.categoria }}</td>
    <td>{{ pokemon.habilidad }}</td>
    <td>{{ pokemon.debilidad }}</td>

    <th> 
       <v-icon
        small
        class="mr-2 select"
        @click="editPokemon(pokemon._id)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        small
        class="select"
          @click="removePokemon(pokemon._id)"
      >
        mdi-delete
      </v-icon>
    </th>
  </tr>

</table>

   
</div>

</template>
<script>
import axios from "axios";

import { mapState } from "vuex";
import Swal from "sweetalert2";

import faceComponent from '@/components/faceComponent.vue'
import cardCreate from '@/components/cardCreate.vue'
  export default {
    name:'Home',
    components:{
      faceComponent,
      cardCreate
    },
    data: () => ({
   
     
    }),
  mounted() {
     this.$store.dispatch("getPokemons");
  },
  computed: {
    ...mapState(["pokemons"])
  },

    created () {
    },

    methods: {
         removePokemon(_id) {
             this.$store.dispatch("deletePokemon", _id);
    },
    
  /*   
    removeComentario(_id){
      axios.delete('https://crudcrud.com/api/78eadd7edfa14cbbbc7a0bf0d98a6628/pokemon/'+ _id, {
        _id:_id
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
        console.log(id)

  });
},
  */
  editPokemon(_id){
    this.$router.push({ path: `/cardEdit/${_id}` }) 
   },
  },
}
</script>
<style >

table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: center;
  padding: 8px;
  color:white
}

tr:nth-child(even) {
    background-color: #aba7a7;}
.select{
  cursor: pointer;
}
body{
    background-image: url(https://cdn.atomix.vg/wp-content/uploads/2016/02/pokemon-wallpaper-hd.jpg);
    background-size: cover;
    background-repeat:no-repeat ;
    height: 100vh;
    
    }
</style>
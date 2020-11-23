<template>
    <div>
      <div id="app">
  <v-container>
    <v-layout row class="text-xs-center">
    
      <v-flex xs4 class="grey lighten-4 cardResponsive">
        <v-container style="position: relative;top: 13%;" class="text-xs-center">
          <v-card flat style="border-radius: 12px;padding: 12px;">
            <v-card-title primary-title>
              <h4 >Editar Pokemon</h4>
            </v-card-title>

              <form action="">
                <input type="text" >
              </form>
            <v-form>
            <v-text-field  name="Nombre" label="Nombre" > </v-text-field>
            <v-text-field  name="Categoria" label="Categoria"  ></v-text-field>
            <v-text-field  name="Habilidad" label="Habilidad"  ></v-text-field>
            <v-text-field  name="Debilidad" label="Debilidad"  ></v-text-field>


            <v-card-actions>
              <v-btn primary large block  >Actualizar</v-btn>
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
import { mapState } from "vuex";
import Swal from "sweetalert2";


export default {
  data(){
    return{
        name:'',
        categoria:'',
        habilidad:'',
        debilidad:''
    }
  },

    mounted() {
  },
   computed: {
  },

  created(){

    
  },

  methods:{

   


/*
   async editarPokemon(_id) {
      try {
        const response = await this.$http.post('https://crudcrud.com/api/78eadd7edfa14cbbbc7a0bf0d98a6628/pokemon/'+ _id, {
          id: this.pokemon._id,
          name: this.pokemon.name,
        });

        if (response.status) {
          // this.$store.dispatch("getPublications");
          await Swal.fire({
            icon: "success",
            title: "Finalizado",
            text: "Comentario actualizado correctamente."
          });

        }
      } catch (e) {
        Swal.fire({
          icon: "error",
          title: "Hubo un problema",
          text: "No se actualizo el comentario correctamente"
        });
      }
    },
*/


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
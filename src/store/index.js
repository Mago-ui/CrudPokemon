import Vue from "vue";
import Vuex from "vuex";
import Swal from "sweetalert2";


Vue.use(Vuex);
import axios from "axios";
export default new Vuex.Store({
  state: {
    pokemons:'',

  },
  actions: {
    getPokemons({commit}){
      axios
        .get('https://crudcrud.com/api/78eadd7edfa14cbbbc7a0bf0d98a6628/pokemon')
        .then(response=>{
          this.pokemons = response.data
          commit('getPokemons', this.pokemons)
        })
        .catch(error=>{
          console.log(error)
        })
    },


  
    deletePokemon({ context, dispatch }, _id) {
      Swal.fire({
        title: "Eliminar Pokemon",
        text: "¡No podrás revertir esto!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Eliminar"
      }).then(async function(result) {
        if (result.value == true) {
          axios.delete('https://crudcrud.com/api/78eadd7edfa14cbbbc7a0bf0d98a6628/pokemon/'+ _id, {
            _id:_id
            })

            .then(response => {
              if (response.data.success) {
                Swal.fire({
                  icon: "success",
                  title: "Eliminado Correctamente",
                  text: "Se eliminó correctamente"
                });
              }
              dispatch("getPokemons");
            });
        }
      });
    }


  },
  mutations: {
    getPokemons(state, pokemons){
      state.pokemons = pokemons
    },
  
    deletePokemon(state, _id) {
      const index = state.pokemons.findIndex(item => item._id == _id);
      state.pokemons.splice(index, 1);
    },


  },
 
  modules: {}
});

<template>
       <v-dialog  max-width="500px">
            <v-card>
              <v-card-title class="headline">Are you sure you want to delete this item?</v-card-title>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text >Cancel</v-btn>
                <v-btn color="blue darken-1" text >OK</v-btn>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
</template>
<script>
export default {
    name:'faceComponent'
}
</script>
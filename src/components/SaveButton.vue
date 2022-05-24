<template>
  <v-container>
    <v-row class="">
      <v-col class="mb-4 text-center">
        <router-link to="/add" class="text-decoration-none c-p">
            <v-btn
                :disabled="!formIsValid"
                class="add-btn"
                fab
                dark
                color="blue"
                >
                <v-icon dark>
                    mdi-content-save-outline
                </v-icon>
            </v-btn>
        </router-link>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'saveBtn',
    data: () => ({
  
    }),
    computed: {

    },
    methods: {

    }
  }
</script>
<style scoped>
.save-btn{
    position: fixed;
    bottom: 20px;
    right: 42%;
}
</style>

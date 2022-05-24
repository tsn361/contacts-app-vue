<template>
  <v-container>
    <v-row class="">
      <v-col class="mb-4">
          <a class="font-weight-light text-left text-uppercase">
            <span v-if="isHome" class="" >MY CONTACT</span>
            
            <span v-else @click.prevent="goToHome()" class="d-flex" >
              <svg xmlns="http://www.w3.org/2000/svg" class="back-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              Back
            </span>
          </a>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'TopNav',
    data: () => ({
  
    }),
    computed: {
      isHome(){
        return this.$route.name === 'Home'
      }
    },
    methods: {
      goToHome(){
        this.$router.push('/')
      }
    }
  }
</script>
<style scoped>
.back-icon{
  height: 20px;
  width: 20px;
}
</style>

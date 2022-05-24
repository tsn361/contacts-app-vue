<template>
  <v-container>
    <v-row class="">
        <v-col class="">
            <v-card v-for="(contact, i) in contactList" :key="i" class="mx-auto mt-4" min-width="100%">
                <router-link to="/detail/1" class="text-decoration-none c-p">
                    <div class="d-flex">
                        <div class="">
                            <v-img
                                class="white--text img"
                                src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                            ></v-img>
                        </div>
                        <div class="">
                            <a class="text-sm-body-2 pt-sm-2">{{contact.name}}</a><br>
                            <span class="text-sm-body-2 black--text">{{contact.mobile_number}}</span>
                        </div>
                    </div>
                </router-link>
            </v-card>
        </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
    name: 'Search',
    data: () => ({
    }),
    computed: {
        contactList(){
            return this.$store.getters.getContactList
        }
    },
    methods: {

    },
    mounted() {
    },
  }
</script>
<style scoped>

.img{
    width: 52px;
    height: 52px;
    margin-right: 12px;
    border-radius: 4px 0 0 4px;
}
</style>

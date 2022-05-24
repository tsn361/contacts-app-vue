<template>
  <v-container>
    <v-row class="">
        <v-col class="">

            <v-text-field
                outlined
                height="26"
                v-model="searchKey"
                @input="search"
                :flat="false"
                class=""
                label="Type name or number"
                append-icon="mdi-magnify"
            ></v-text-field>
            <v-card v-for="(contact, i) in contacts" :key="i" class="mx-auto mt-4" min-width="100%">
                <router-link :to="`/detail/${contact.id}`" class="text-decoration-none c-p">
                    <div class="d-flex">
                        <div class="">
                            <v-img
                                class="white--text img"
                                src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                            ></v-img>
                        </div>
                        <div class="">
                            <a class="text-sm-body-2 pt-sm-2">{{contact.first_name}} {{contact.last_name}}</a><br>
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
    name: 'contactList',
    data: () => ({
        searchKey: '',
        contacts: []
    }),
    computed: {
        contactList(){
            return this.$store.getters.getContactList
        }
    },
    methods: {
        search(e){
            this.contacts = this.contactList.filter((contact) => {
                return (contact.first_name.match(e) || contact.last_name.match(e) || contact.mobile_number.match(e));
            });
        }
    },
    mounted() {
        setTimeout(() => {
            this.contacts = this.contactList
        }, 100);
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

<template>
  <v-container>
    <v-row class="">
        <v-col class="mb-4 text-center">
            <top-nav></top-nav>

            <v-avatar
                color="white"
                size="96"
                class="avatar"
            >
               <span class="blue--text text-h5 text-uppercase">{{avatar}}</span>
            </v-avatar>

            <v-form
                ref="form"
                @submit.prevent="submit"
                >
                <v-text-field
                    v-model="contact.first_name"
                    :validate-on-blur="true"
                    color="blue darken-2"
                    label="First name"
                    :rules="rules.first_name"
                    required
                ></v-text-field>

                <v-text-field
                    v-model="contact.last_name"
                    color="blue darken-2"
                    label="Last name"
                    :rules="rules.first_name"
                    required
                ></v-text-field>

                <v-text-field
                    v-model="contact.phone"
                    color="blue darken-2"
                    label="Phone Number"
                    :rules="rules.phone"
                    required
                ></v-text-field>

                <v-text-field
                    v-model="contact.email"
                    color="blue darken-2"
                    label="Email Address"
                    :rules="rules.email"
                    required
                ></v-text-field>
                <!-- <save-button></save-button> -->
                <v-btn
                    class="save-btn"
                    fab
                    dark
                    color="blue"
                    type="submit"
                    >
                    <v-icon dark>
                        mdi-content-save-outline
                    </v-icon>
                </v-btn>
                </v-form>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import TopNav from '@/components/TopNav.vue'

export default {
    name: 'App',
    components: {
        TopNav
    },
    data: () => ({
        contact: {
            first_name: '',
            last_name: '',
            phone: '',
            email: ''
        },
        rules: {
          first_name: [val => (val || '').length > 0 || 'This field is required'],
          last_name: [val => (val || '').length > 0 || 'This field is required'],
          email: [val => (val || '').length > 0 || 'This field is required'],
          phone: [val => (val || '').length > 0 || 'This field is required'],
        },
    }),
    computed: {
        avatar() {
            return this.contact.first_name.charAt(0) + this.contact.last_name.charAt(0)
        },
        formIsValid () {
            return (this.contact.first_name !== '' && this.contact.last_name !== ''&& this.contact.email !== '' && this.contact.phone !== '')
        }
    },
    methods: {
        submit() {
            console.log('submit', this.formIsValid)
        }  
    }
};
</script>

<style>
.avatar{
    box-shadow: 0px 0px 2px 2px rgba(0,0,0,0.2);
    font-size: 23px;
}
.save-btn{
    position: fixed;
    bottom: 20px;
    right: 42%;
}
</style>
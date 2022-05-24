<template>
  <div class="home">
    <top-nav></top-nav>
    <search></search>
    <contact-list></contact-list>
    <add-button></add-button>
  </div>
</template>

<script>
// @ is an alias to /src
import TopNav from '@/components/TopNav.vue'
import Search from '@/components/Search.vue'
import ContactList from '@/components/ContactList.vue'
import AddButton from '@/components/AddButton.vue'

export default {
  name: 'Home',
  data: () => ({
    contacts: [
          {
            id: 1,
            name: "Shakhawat Hossain",
            mobile_number: "+8801684-960560"
          },
          {
            id: 2,
            name: "Sadat Hossain",
            mobile_number: "+88019156085354"
          },
          {
            id: 3,
            name: "Nabil Hossain",
            mobile_number: "+8801724800786"
          }
      ]
  }),
  components: {
    TopNav,
    Search,
    ContactList,
    AddButton
  },
  mounted() {
    this.$store.dispatch('setContact', this.contacts)
  },
}
</script>


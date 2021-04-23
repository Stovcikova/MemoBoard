<template>
  <v-footer
  color='secondary lighten-3'
    padless
  >
    <v-row
      justify="center"
      no-gutters
    >
      <v-btn
        v-for="link in links"
        :key="link"
        color="white"
        text
        rounded
        class="my-2 memo"
      >
        {{ link }}
      </v-btn>
      <v-col
        class="pink lighten-1 py-4 text-center white--text"
        cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
    data: () => ({
      links: [
        'Imprint',
        'contact',
        'FAQ',
        'Diclainer',
        
      ],
    }),
}
</script>


<style scoped>
    
    .memo{
        background-color:orange;
        padding: 10px;
        text-align: center;
    }
    

</style>

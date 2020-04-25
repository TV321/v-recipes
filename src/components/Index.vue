<template>
<v-container>
  <v-row align="start" justify="start" >
    <v-col v-for="recipe in recipes" :key="recipe.id" cols="12" md="4" sm="12">
      <Card :recipes="recipes" :recipe="recipe" @deleteRecipe="deleteRec"/>
    </v-col>
  </v-row>
  
</v-container>

</template>

<script>
import Card from './Card'
import db from '@/firebase/init'

export default {
  name: 'Index',
  components: {
    Card
  },
  data() {
    return {
      recipes: []
    }
  },
  methods: {
    deleteRec(payload) {
      this.recipes = this.recipes.filter(rec => rec.id !== payload.id)
    }
  },
  created() {
    db.collection('recipes').get()
      .then(snapshot => {
        snapshot.docs.forEach(doc => {
          let recipe = doc.data()
          recipe.id = doc.id
          this.recipes.push(recipe)
        })
      })
  }

}
</script>


<style scoped lang="sass">
#app > div.home > div.container
  width: 50% !important
    

</style>

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
export default {
  name: 'Index',
  components: {
    Card
  },
  data() {
    return {
      recipes: [
        { title: 'Cherry Cheesecake', slug: 'cherry-cheesecake', ingredients: ['cream cheese', 'cherry pie filling', 'lemon juice'], id: 1},
        { title: 'Apple Pie', slug: 'apple-pie', ingredients: ['pastry', 'butter', 'flour', 'brown sugar', 'apples'], id: 2},
        { title: 'Apple Pie', slug: 'apple-pie', ingredients: ['pastry', 'butter', 'flour', 'brown sugar', 'apples'], id: 3},
        { title: 'Apple Pie', slug: 'apple-pie', ingredients: ['pastry', 'butter', 'flour', 'brown sugar', 'apples'], id: 4}
      ]
    }
  },
  methods: {
    deleteRec(payload) {
      this.recipes = this.recipes.filter(rec => rec.id !== payload.id)
    }
  }

}
</script>


<style scoped lang="sass">
#app > div.home > div.container
  width: 50% !important
    

</style>

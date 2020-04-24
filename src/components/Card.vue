<template>
    <div>
     <v-card
    class="mx-auto"
    max-width="350"
    outlined
    tile
    
  >
    <div class="text-right">
        <v-icon class="delete" @click="deleteRecipe(recipe.id)">mdi-delete</v-icon>
    </div>
    
    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title class="headline mb-4 text-center">{{ recipe.title }}</v-list-item-title>
        <div>
          <span>
            <v-chip
              v-for="ing in recipe.ingredients" :key="ing"
              class="ma-2"
          >
              {{ ing }}
            </v-chip>
          </span>
          </div>
      </v-list-item-content>
    </v-list-item>

  </v-card>
  </div>
</template>

<script>
export default {
    name: 'Card',
    props: ['recipe'],
    methods: {
        deleteRecipe(id){
            this.$emit('deleteRecipe', { id })
        }
    }
}
</script>

<style lang="sass" scoped>
    .delete
        cursor: pointer
</style>
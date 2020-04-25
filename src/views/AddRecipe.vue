<template>
<v-card
    max-width="500"
    color="blue lighten-3"
    style="margin: 20px auto"
    tile
>
     
    <v-list-item>
    <v-list-item-content>
        <v-list-item-title class="headline mb-1">Add Recipe:</v-list-item-title>
        <v-form @submit.prevent="onSubmit">
            <v-text-field
            v-model="name"
            :counter="20"
            label="Name"
            required
            ></v-text-field>

            <v-text-field
            v-model="ingredient"
            label="Ingredient"
            required
            ></v-text-field>

            <v-card-actions style="justify-content: center">
                <v-btn color="light-blue darken-4" dark tile class="mr-4" type="submit" right>submit</v-btn>
            </v-card-actions>
            
        </v-form>
  </v-list-item-content>
  </v-list-item>
  </v-card>
</template>

<script>
export default {
    name: 'AddRecipe',
    data() {
        return {
            name: '',
            ingredient: '',
        }
    },
    methods: {
        onSubmit() {
            console.log(this.name)
        }
    }
}
</script>
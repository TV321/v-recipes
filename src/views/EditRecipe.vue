<template>
    <div v-if="recipeInfo">
       
    <v-card
        max-width="700"
        color="blue lighten-3"
        style="margin: 20px auto"
        tile
    >
     
        <v-list-item>
        <v-list-item-content>
        <v-list-item-title class="headline mb-1">Edit Recipe for {{ recipeInfo.title }}</v-list-item-title>
         <v-form @submit.prevent="onEdit">
            <v-text-field
                v-model="recipeInfo.title"
                :counter="20"
                label="Name"

            ></v-text-field>

            <v-text-field
                v-for="(ing, index) in recipeInfo.ingredients" :key="index"
                v-model="recipeInfo.ingredients[index]"
                label="Ingredient"
                :append-icon="'mdi-delete'"
                @click:append="removeIng(ing)"
  
            ></v-text-field>

            <v-text-field
                v-model="ingredient"
                label="Add an Ingredient"
                @keydown.tab.prevent="addIng"
       
            ></v-text-field>

            <div class="text-center">
                <p v-if="warningMsg" class="red--text text--darken-4">{{ warningMsg }}</p>
            </div>
            <v-card-actions style="justify-content: center">

                
                <v-btn color="light-blue darken-4" dark tile class="mr-4" type="submit" right>submit</v-btn>
            </v-card-actions>
            
        </v-form>
        </v-list-item-content>
        </v-list-item>
    </v-card>
    </div>
</template>

<script>
import db from '@/firebase/init'
export default {
    name: 'EditRecipe',
    props: ['recipe_slug'],
    data() {
        return {
            recipeInfo: null,
            ingredient: '',
            warningMsg: ''
        }
    },
    created(){
        db.collection('recipes').where('slug', '==', this.recipe_slug)
            .get().then(resp => {
                this.recipeInfo = resp.docs[0].data()
                this.recipeInfo.id = resp.docs[0].id
                console.log(this.recipeInfo)
                console.log(this.recipeInfo.id)
            })
    },
    methods: {
        removeIng(ing) {
            this.recipeInfo.ingredients = this.recipeInfo.ingredients.filter(ingredient => ingredient !== ing)
        },
        addIng() {
            if(this.ingredient) {
                this.recipeInfo.ingredients.push(this.ingredient)
                this.ingredient = ''
                this.warningMsg = ''
            } else {
                this.warningMsg = 'Enter a value to add an ingredient'
            }
        }
    }
}
</script>
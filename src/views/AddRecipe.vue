<template>
<v-card
    max-width="500"
    color="blue lighten-3"
    style="margin: 20px auto"
    tile
>
     
    <v-list-item>
    <v-list-item-content>
        <v-list-item-title class="headline mb-1">Add New Recipe:</v-list-item-title>
        <v-form @submit.prevent="onSubmit">
            <v-text-field
                v-model="name"
                :counter="20"
                label="Name"

            ></v-text-field>

            <v-text-field
                v-for="(ing, index) in ingredients" :key="index"
                v-model="ingredients[index]"
                label="Ingredient"
  
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
</template>

<script>
import db from '@/firebase/init'
import slugify from 'slugify'

export default {
    name: 'AddRecipe',
    data() {
        return {
            name: '',
            ingredient: '',
            ingredients: [],
            warningMsg: '',
            slug: ''
        }
    },
    methods: {
        onSubmit() {
            if(this.name) {
                this.warningMsg = ''
                this.slug = slugify(this.name, {
                    replacement: '-',
                    lower: true,
                    remove: /[*+~.()'"!:@]/g
                })
                db.collection('recipes').add({
                    title: this.name,
                    ingredients: this.ingredients,
                    slug: this.slug
                }).then(() => {
                    this.$router.push({ name: 'Home'})
                }).catch(err => console.log(err))
            } else {
                this.warningMsg = 'Enter a name of recipe'
            }
            console.log(this.name, this.ingredients)
        },
        addIng() {
            if(this.ingredient) {
                this.ingredients.push(this.ingredient)
                this.ingredient = ''
                this.warningMsg = ''
            } else {
                this.warningMsg = 'Enter a value to add an ingredient'
            }
        }
    }
}
</script>
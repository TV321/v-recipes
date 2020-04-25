<template>
  <div>
    <v-app-bar
      color="light-blue darken-3"
      light
    >
    <router-link :to="{ name: 'Home' }">
        <v-btn icon>
            <v-icon>mdi-heart</v-icon>
        </v-btn>
    </router-link>
    <v-toolbar-title>Recipes</v-toolbar-title>
    <v-spacer></v-spacer>

    <router-link :to="{ name: 'AddRecipe' }">
        <v-btn
            absolute
            light
            fab
            bottom
            right
            color="pink darken-1"
        >
            

            
            <v-icon>mdi-plus</v-icon>
        </v-btn>
    </router-link>
     
    </v-app-bar>
  </div>
</template>
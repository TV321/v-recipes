<template>
    <div>
        <h2>Edit recipe {{ recipe_slug }}</h2>
    </div>
</template>

<script>
export default {
    name: 'EditRecipe',
    props: ['recipe_slug'],
    data() {
        return {

        }
    }
}
</script>
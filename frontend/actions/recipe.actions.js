

// Helper function to normalize recipe title
function normalizeTitle(title) {
  return title
    .trim()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}



export async function getRecipesByPantryIngredients() {

}

async function fetchRecipeImage(recipeName) {}

export async function getOrGenerateRecipe(formData) {}

// Save recipe to user's collection (bookmark)
export async function saveRecipeToCollection(formData) {}

// Remove recipe from user's collection (unbookmark)
export async function removeRecipeFromCollection(formData) {}

export async function getRecipesByPantryIngredients() {}

// Get user's saved recipes
export async function getSavedRecipes(){}
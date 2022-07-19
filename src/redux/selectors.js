// Recipes
export const getRecipesList = store => store.recipes.list;
export const getSelectedRecipe = store => store.recipes.selectedRecipe;

// task list

export const getTasks = store => store.tasksList;
export const getCompletedTasks = store => store.tasksList.filter(task => task.isCompleted);
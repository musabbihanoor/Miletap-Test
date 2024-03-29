import {
  ADD_MEAL_TO_FAVORITES,
  GET_MEAL_BY_CATEGORY,
  GET_MEAL_BY_ID,
  GET_RANDOM_MEAL,
  REMOVE_MEAL_FROM_FAVORITES,
} from "./types";

export const getMealByCategory = (category) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}/filter.php?c=${category}`
      );
      const data = await response.json();
      dispatch({ type: GET_MEAL_BY_CATEGORY, payload: data.meals });
    } catch (error) {
      console.error("Error fetching meals by category:", error);
    }
  };
};

export const getMealById = (id) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}/lookup.php?i=${id}`
      );
      const data = await response.json();
      dispatch({ type: GET_MEAL_BY_ID, payload: data.meals });
    } catch (error) {
      console.error("Error fetching meal by ID:", error);
    }
  };
};

export const getRandomMeal = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}/random.php`
      );
      const data = await response.json();
      dispatch({ type: GET_RANDOM_MEAL, payload: data.meals });
    } catch (error) {
      console.error("Error fetching random meal:", error);
    }
  };
};

export const addMealToFavorites = (meal) => {
  return { type: ADD_MEAL_TO_FAVORITES, payload: meal };
};

export const removeMealFromFavorites = (mealId) => {
  return { type: REMOVE_MEAL_FROM_FAVORITES, payload: mealId };
};

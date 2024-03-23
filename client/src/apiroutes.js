// for local backend routes endpoints

export const BASE_URL = "http://localhost:5050";
// export const BASE_URL = "https://build-week-africanmarketplace.herokuapp.com/api/v1"

/**
 * @module API Routes
 */

export const TODO = `${BASE_URL}/todos`;

export const GET_ALL_TODOS = `${TODO}`;
export const ADD_NEW_TODO = `${TODO}`;
export const UPDATE_TODO = `${TODO}/:id`;
export const DELETE_TODO = `${TODO}/:id`;
export const GET_TODO = `${TODO}/:id`;

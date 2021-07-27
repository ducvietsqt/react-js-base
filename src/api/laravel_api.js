import $laravel_api from "../plugins/laravel_api";

export async function logIn(username, password){
  return await $laravel_api.post('/logIn',{username, password});
}
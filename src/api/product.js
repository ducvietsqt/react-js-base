import $api from "../plugins/https";
export async function fetchProducts() {
   return await $api.get('/api/products')
}
export async function fetchColors() {
   return await $api.get('/api/colors')
}
export async function updateProduct(productId, data) {
   return await $api.patch(`/api/products/${productId}`, data)
}



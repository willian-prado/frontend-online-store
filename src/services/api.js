export async function getCategories() {
  // Implemente aqui
  const fetchURL = 'https://api.mercadolibre.com/sites/MLB/categories';
  const response = await fetch(fetchURL);
  return response.json();
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  // Implemente aqui! Quando o fizer, descomente os parâmetros que essa função recebe
  const fetchURL = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
  const response = await fetch(fetchURL);
  return response.json();
}

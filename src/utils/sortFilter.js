const sortByPriceAscending = (products) => products.sort((a, b) => a.price - b.price);

const sortByPriceDescending = (products) => products.sort((a, b) => b.price - a.price);


const filterProducts = (products, searchTerm) =>
    products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

export { sortByPriceAscending, sortByPriceDescending, filterProducts };
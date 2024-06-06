const fetchProducts = async () => {
  try {
    const response = await fetch("https://v2.api.noroff.dev/online-shop");
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();

    return data.data;
  } catch (error) {
    return [];
  }
};

const fetchProductById = async (id) => {
  try {
    const response = await fetch(`https://v2.api.noroff.dev/online-shop/${id}`);
    if (!response.ok) {
      throw new Error("Failed to fetch product data");
    }
    const data = await response.json();

    return data;
  } catch (error) {
    return null;
  }
};

export { fetchProducts, fetchProductById };

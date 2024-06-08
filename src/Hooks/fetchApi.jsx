import { API_BASE_URL } from "../Constants/api";
/**
 *  The functions fetchProducts and fetchProductById,
 *  Use the API_BASE_URL constant to make API requests.
 */

const fetchProducts = async () => {
  try {
    const response = await fetch(API_BASE_URL);
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
    const response = await fetch(`${API_BASE_URL}/${id}`);
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

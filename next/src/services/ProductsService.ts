import $api from "../http/index";

export default class ProductsService {
  static async getAllProducts() {
    return $api.get("/products");
  }
  static async getProduct(id: number) {
    return $api.get(`/products${id}`);
  }
  static async createProduct(
    name: string,
    quantity: number,
    price: string,
    image: string,
    manufacturerId: number
  ) {
    return $api.post("/products", {
      name,
      quantity,
      price,
      image,
      manufacturerId,
    });
  }
  static async deleteProduct(id: number) {
    return $api.delete(`/products${id}`);
  }
}

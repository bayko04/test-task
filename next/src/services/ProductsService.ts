import $api from "../http/index";
import { ICreateUpdate } from "@/types/ICreateUpdate";

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
    image: File,
    manufacturerId: number
  ) {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("quantity", quantity.toString());
    formData.append("price", price);
    formData.append("image", image); // Передаем файл
    formData.append("manufacturerId", manufacturerId.toString());
    return $api.post("/products", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }
  static async updateProduct(
    name: string,
    quantity: number,
    price: string,
    image: File,
    manufacturerId: number,
    id: number
  ) {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("quantity", quantity.toString());
    formData.append("price", price);
    formData.append("image", image); // Передаем файл
    formData.append("manufacturerId", manufacturerId.toString());
    return $api.patch(`/products/${id}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }

  static async deleteProduct(id: number) {
    return $api.delete(`/products/${id}`);
  }
  static async searchProducts(name: string) {
    return $api.get(`/products/?q=${name}`);
  }
}

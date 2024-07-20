import $api from "../http/index";

export default class ProductsService {
  static async getAllProducts() {
    return $api.get("/products?_limit=-1");
  }
  static async getLimitProducts(page: number) {
    return $api.get(`/products?_limit=10&_page=${page}`);
  }
  static async getManufacturers() {
    return $api.get(`/manufacturers`);
  }
  static async getProduct(id: number) {
    return $api.get(`/products${id}`);
  }
  static async createProduct(
    // name: string,
    // quantity: number,
    // price: string,
    // image: File,
    // manufacturerId: number,
    // id?: number
    formData: any
  ) {
    // const formData = new FormData();
    // formData.append("name", name);
    // formData.append("quantity", quantity.toString());
    // formData.append("price", price);
    // formData.append("image", image); // Передаем файл
    // formData.append("manufacturerId", manufacturerId.toString());
    return $api.post("/products", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }
  static async updateProduct(formData: any, id: number) {
    return $api.patch(`/products/${id}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }

  static async deleteProduct(id: number) {
    console.log(`deleteing ${id}`);
    return $api.delete(`/products/${id}`);
  }
  static async searchProducts(name: string) {
    return $api.get(`/products/?q=${name}`);
  }
}

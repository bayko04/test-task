import $api from "../http/index";

export default class AuthService {
  static async login(email: string, password: string) {
    return $api.post("/login", { email, password });
  }

  static async checkMe() {
    return $api.get("/me");
  }
}
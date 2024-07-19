import $api from "../http/index";

export default class AlgorithmsService {
  static async breadcrumbs() {
    return $api.get("/breadcrumbs");
  }
  static async randomBreadcrumb() {
    return $api.get("/random_breadcrumb");
  }
}

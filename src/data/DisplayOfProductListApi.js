import axios from "axios";
export default class DisplayOfProductListApi {
  static getListOfAllProducts() {
    return  axios
      .get("http://localhost:4000/products")
      .then((response) => response.data )
      .catch((error) => console.log(error));
  }

  static postProductDetails(data) {
   return  axios
      .post("http://localhost:4000/products", data)
      .then((response) => {return response.data})
      .catch((error) => console.log(error));
  }

  static deleteProduct(id){
    return axios.delete(`http://localhost:4000/products/${id}`).then(response=>response.data);
  }
}




import axios from "axios";

export function deleteAll() {
  // console.log("server delete firing");
  return axios
    .delete("/api/customers")
    .then(response => console.log("RESPONSE", response))
    .catch(error => console.log("ERROR IN SERVER"));
}

export function getAll() {
  console.log("server client firing");
  return axios
    .get("/api/customers")
    .then(response => {
      // console.log("RESPONSE", response);
      return response;
    })
    .catch(error => {
      console.log("There was an error!");
    });
}

export function post(payload) {
  return axios.post("/api/customers", payload);
}

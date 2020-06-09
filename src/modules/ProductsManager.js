const remoteURL = "http://localhost:4000"

export default {
  get(id) {
    return fetch(`${remoteURL}/products/${id}`).then(result => result.json())
  },
  getAll() {
    return fetch(`${remoteURL}/products`).then(result => result.json())
  },
  post(newProduct) {
    return fetch(`${remoteURL}/products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newProduct)
    }).then(resp => resp.json())
  },
  delete(id) {
    return fetch(`${remoteURL}/products/${id}`, {
      method: "DELETE"
    }).then(resp => resp.json())
  },
}
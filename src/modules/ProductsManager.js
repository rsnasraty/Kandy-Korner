const remoteURL = "http://localhost:4000"

export default {
  get(id) {
    return fetch(`${remoteURL}/products/${id}`).then(result => result.json())
  },
  getAll() {
    return fetch(`${remoteURL}/products`).then(result => result.json())
  }
}
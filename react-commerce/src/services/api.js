// Return as JSON list of api products
export async function getProductsList() {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };
    let resp = []

    await fetch("http://localhost:3001/products", requestOptions)
        .then(response => response.text())
        .then(result => {
            resp = result;
        })
        .catch(error => console.log('error', error));
    return resp;
}
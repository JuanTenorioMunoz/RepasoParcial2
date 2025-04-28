const apiURL = "https://api.le-systeme-solaire.net/rest/bodies/"

const fetchAll = () => {
    return fetch(apiURL)
    .then(response => {
        if(!response.ok){
            throw new Error("No fetch all")
        }
        return response.json()
    })
    .then (data => data.bodies)
}

export default fetchAll;

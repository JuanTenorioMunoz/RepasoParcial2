const apiURL = "https://api.le-systeme-solaire.net/rest/bodies/"

export const fetchAll = () => {
    return fetch(apiURL)
    .then(response => {
        if(!response.ok){
            throw new Error("No fetch all")
        }
        return response.json()
    })
    .then (data => data.bodies)
}

export const fetchById = (id) => {
    return fetch(`${apiURL}${id}`)
    .then(response => {
        if(!response.ok){
            throw new Error("no id fetch")
        }
        return response.json()
    })
    .then(data => data)
}



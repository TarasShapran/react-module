let url = 'http://91.201.233.14//api/v1/cars'

const getCars = () => {
    return fetch(url)
        .then(value => value.json())
}


const getCarById = (id) => {
    return fetch(url + "/" + id)
        .then(value => value.json())
}
const deleteCar = (id) => {
    return fetch(url + '/' + id, {
        method: 'DELETE',
    });
}
const createCar = (car) => {
    return fetch(url, {
        method: 'POST',
        body: JSON.stringify(car),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())

}

export {getCars, getCarById, createCar, deleteCar}
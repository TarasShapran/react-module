const url='http://91.201.233.14/api/v1/cars'


const getAllCars = () => {
    return fetch(url).then(value => value.json())
}

const saveCar = (car) => {
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(car),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json));
}

const deleteCarById = (id) => {
    return  fetch(url+'/'+id, {
        method: 'DELETE',
    });
}
const editCar = (id,car ) => {
    fetch(url+'/'+id, {
        method: 'PUT',
        body: JSON.stringify(car),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json));
}

export {getAllCars, saveCar, deleteCarById,editCar}
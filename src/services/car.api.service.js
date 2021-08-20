const saveCar = (car) => {
    fetch(' http://195.72.146.25/api/v1/cars', {
        method: 'POST',
        body: JSON.stringify(car),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json));
}
const editCar = (id,car ) => {
    fetch('http://195.72.146.25/api/v1/cars/'+id, {
        method: 'PUT',
        body: JSON.stringify(car),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json));
}


const getAllCars = () => {
    return fetch("http://195.72.146.25/api/v1/cars").then(value => value.json())
}
const deleteCarById = (id) => {
    return  fetch('http://195.72.146.25/api/v1/cars/'+id, {
        method: 'DELETE',
    });
}


export {saveCar, getAllCars,editCar ,deleteCarById}
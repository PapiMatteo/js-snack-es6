const bikeArray = [
    {
        name: "bici 1",
        weight: 58
    },
    {
        name: "bici 2",
        weight: 47
    },
    {
        name: "bici 3",
        weight: 35
    }
]

let lightBike = bikeArray[0];

bikeArray.forEach((curBike) => {
    if (curBike.weight < lightBike.weight){
        lightBike = curBike;
    }
})

const {name, weight} = lightBike;

const textElem = document.querySelector("h1");

textElem.innerHTML = `La bici piu' leggera e' ${lightBike.name} con peso di ${lightBike.weight}kg`
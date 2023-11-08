const bikeArray = [
    {
        name: "bmx",
        weight: 40
    },
    {
        name: "dh",
        weight: 50
    },
    {
        name: "triciclo",
        weight: 10
    }
]

const [mid, heavy, light] = bikeArray;

const textElem = document.querySelector("h1");

textElem.innerHTML = `La bici piu' leggera e' ${light.name} con peso di ${light.weight}kg`
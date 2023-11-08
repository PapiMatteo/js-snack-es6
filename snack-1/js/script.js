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

const [mid, heavy, light] = bikeArray;

const textElem = document.querySelector("h1");

textElem.innerHTML = `La bici piu' leggera e' ${light.name} con peso di ${light.weight}kg`
var _a;
var tourists = [
    {
        id: 1,
        firstName: "John",
        languages: ["en", "no"],
        goals: [1, 7],
        family: [5],
        gender: 'm'
    },
    {
        id: 2,
        firstName: "Angelina",
        languages: ["rus"],
        goals: [1, 2, 3, 4],
        family: [],
        gender: 'f'
    },
    {
        id: 3,
        firstName: "Robert",
        languages: ["esp"],
        goals: [1, 2, 3, 5, 8],
        family: [],
        gender: 'm'
    },
    {
        id: 4,
        firstName: "James",
        languages: ["eng", "lv"],
        goals: [4, 8],
        family: [],
        gender: 'm'
    },
    {
        id: 5,
        firstName: "Linda",
        languages: ["lt", "rus", "eng", "fr"],
        goals: [2, 3, 4, 5, 6, 7],
        family: [1],
        gender: 'f'
    },
    {
        id: 6,
        firstName: "Susan",
        languages: ["fr"],
        goals: [2, 3, 4, 5, 6],
        family: [7],
        gender: 'f'
    },
    {
        id: 7,
        firstName: "Thomas",
        languages: ["fr"],
        goals: [2, 3, 4, 5, 6],
        family: [6],
        gender: 'm'
    },
];
var tourGuides = [
    {
        firstName: "Ineta",
        company: "Novaturas",
        languages: ["en", "fr", "esp"],
        places: [1, 3, 5, 8],
        gender: 'f'
    },
    {
        firstName: "Skirmantas",
        company: "Tez Tour",
        languages: ["lt", "rus"],
        places: [1, 3, 4],
        gender: 'm'
    },
    {
        firstName: "Agnė",
        company: "AirGuru",
        languages: ["lt", "en", "lv"],
        places: [2, 6],
        gender: 'f'
    },
    {
        firstName: "Ernestas",
        company: "AirGuru",
        languages: ["lt", "lv"],
        places: [1, 2, 6],
        gender: 'm'
    }
];
var VisitedPlaces = [
    {
        id: 1,
        title: "Trakų pilis"
    },
    {
        id: 2,
        title: "Gedimino pilis"
    },
    {
        id: 3,
        title: "Lajų takas"
    },
    {
        id: 4,
        title: "Kirkilų apžvalgos bokštas"
    },
    {
        id: 5,
        title: "ilzenbergo dvaras"
    },
    {
        id: 6,
        title: "Etnokosmologijos muziejus"
    },
    {
        id: 7,
        title: "Baterija,,Memel Nord``"
    },
    {
        id: 8,
        title: "Klinčių karjerai"
    },
];
function getAllLanguages(people) {
    var langs = [];
    people.forEach(function (person) {
        person.languages.forEach(function (lang) {
            if (!langs.includes(lang))
                langs.push(lang);
        });
    });
    return langs;
}
var guideLng = getAllLanguages(tourGuides);
function reSort(langs) {
    return langs.sort();
}
guideLng = reSort(guideLng);
var gidai = "";
guideLng.forEach(function (langs) {
    gidai += "".concat(langs, "<br>");
});
var guidesElement = document.getElementById("guides");
if (guidesElement) {
    guidesElement.innerHTML = gidai;
}
var tourLng = getAllLanguages(tourists);
tourLng = reSort(tourLng);
(_a = document.getElementById("tourists")) === null || _a === void 0 ? void 0 : _a.append("Gidu kalbos ", tourLng.join(", "));
var turistai = "";
tourLng.forEach(function (langs) {
    turistai += "".concat(langs, "<br>");
});
var touristElement = document.getElementById("turistai");
if (touristElement) {
    touristElement.innerHTML = turistai;
}
// function getClients(tourGuide: Guide, tourists: Array<Tourist>): Array<Tourist>{
//     // Filter the tourists based on the matching languages and places
//     const matchingTourists = tourists.filter(
//       (tourist) =>
//         tourist.languages.some((lang) => tourGuide.languages.includes(lang)) &&
//         tourist.goals.some((place) => tourGuide.places.includes(place))
//     );
//     // Return the resulting array of matching tourists
//     return matchingTourists;
//   }
//   const ineta = getClients(tourGuides[0], tourists);
//   const Skirmantas = getClients(tourGuides[1], tourists);
//   const Agne = getClients(tourGuides[2], tourists);
//   const Ernestas = getClients(tourGuides[3], tourists);
//   let clientai : string =" ";
function getClients(tourGuides, tourists) {
    // Create an object to store the resulting array for each tour guide
    var clients = {};
    // Loop through each tour guide
    tourGuides.forEach(function (guide) {
        // Filter the tourists based on the matching languages and places
        var matchingTourists = tourists.filter(function (tourist) {
            return tourist.languages.some(function (lang) { return guide.languages.includes(lang); }) &&
                tourist.goals.some(function (place) { return guide.places.includes(place); });
        });
        // If there are any matching tourists, add their first names to the clients object
        if (matchingTourists.length > 0) {
            clients[guide.firstName] = matchingTourists.map(function (tourist) { return tourist.firstName; });
        }
    });
    // Convert the clients object to a string using JSON.stringify()
    return JSON.stringify(clients);
}
var clients = getClients(tourGuides, tourists);
var klientaiElement = document.getElementById("klientai");
if (klientaiElement) {
    klientaiElement.innerHTML = clients;
}

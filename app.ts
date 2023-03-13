type Tourism = string[];

type TourismObj = {
  id: number;
  title: string;
  crossedOut?: boolean;
};

const tourism: Tourism = [
  "1",
  "Traku_pilis",
  "Malborko_pilis",
  "Laju_takas",
  "Krekenavos_turizmo_centras",
  "Rundales_pilis",
  "Smetonos_dvaras",
];

const idsToCrossOut: number[] = [1, 3, 5];

function toObject(tourism: Tourism): TourismObj[] {
  return tourism.reduce((acc: TourismObj[], curr: string, index: number) => {
    const id = parseInt(curr);
    if (isNaN(id)) {
      return acc; // Skip non-numeric elements
    }
    const title = curr.replace(/_/g, ' ');
    const tourismObject: TourismObj = {
      id,
      title,
      crossedOut: idsToCrossOut.includes(id),
    };
    acc.push(tourismObject);
    return acc;
  }, []);
}

const obj = toObject(tourism);

let htmlResult: string = "";
obj.forEach((item: TourismObj) => {
  let isCrossedOut = idsToCrossOut.includes(item.id);
  htmlResult += `<span class="${isCrossedOut ? "crossed-out" : ""}">id: ${item.id}, title: ${item.title}</span><br>`;
});
const el = document.getElementById("app");
if (el) el.innerHTML = htmlResult;


// const template: Tourism = [
//   "Traku_pilis",
//   "Laju_takas",
//   "Krekenavos_turizmo_centras",
//   "Smetonos_dvaras",
// ];

// function filterTourismByTemplate(tourism: Tourism, template: Tourism): Tourism {
//   return tourism.filter((item) => template.includes(item));
// }

// function filterNonNumericStrings(tourism: Tourism): Tourism {
//     return tourism.filter((item) => !/^[0-9]+$/.test(item));
//   }

// function filterPilis(tourism: Tourism): Tourism {
//     const filteredTourism: Tourism = [];
//     tourism.forEach((item) => {
//       if (item.endsWith("_pilis")) {
//         const newItem = item.split("_pilis")[0];
//         filteredTourism.push(newItem);
//       }
//     });
//     return filteredTourism;
//   }

  


// const filteredTourism: Tourism = filterTourismByTemplate(tourism, template);
// console.log(filteredTourism);
// document.getElementById("app")?.append("Tourismas Lietuvoje ",filteredTourism.join(", "));

// const numericFiltering: Tourism = filterNonNumericStrings(tourism);
// document.getElementById("app")?.append(" Tourismo be skaičiu ", numericFiltering.join(", "));

// const filteredcastles: Tourism = filterPilis(tourism);
// document.getElementById("app")?.append(" Tourismo tik pilis be _pilis: ", filteredcastles.join(", "));

// const resultIlgis = tourism.map((item) => `${item} (${item.length})`);
// document.getElementById("app")?.append(" Tourismo detales: ", resultIlgis.join(", "));


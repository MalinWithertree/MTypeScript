interface Tourist{
    id: number;
    firstName:string;
    languages: Array<string>;
    goals: Array<number>;
    family: Array<number>;
}
interface GenParams {
    languages: Array<string>;
}
interface Guide{
    firstName: string;
    company: string;
    languages: Array<string>;
    places: Array<number>;
}
interface VisitedPlace {
    id: number;
    title: string;
}
const tourists: Array<Tourist>=[
    {
        id:1,
        firstName:"John",
        languages:["en","no"],
        goals:[1,7],
        family:[5],
    },
    {
        id:2,
        firstName:"Angelina",
        languages:["rus"],
        goals:[1,2,3,4],
        family:[],
    },
    {
        id:3,
        firstName:"Robert",
        languages:["esp"],
        goals:[1,2,3,5,8],
        family:[],
    },
    {
        id:4,
        firstName:"James",
        languages:["eng","lv"],
        goals:[4,8],
        family:[],
    },
    {
        id:5,
        firstName:"Linda",
        languages:["lt","rus","eng","fr"],
        goals:[2,3,4,5,6,7],
        family:[1],
    },
    {
        id:6,
        firstName:"Susan",
        languages:["fr"],
        goals:[2,3,4,5,6],
        family:[7],
    },
    {
        id:7,
        firstName:"Thomas",
        languages:["fr"],
        goals:[2,3,4,5,6],
        family:[6],
    },
    
];
const tourGuides: Array<Guide>=[
    {
        firstName: "Ineta",
        company: "Novaturas",
        languages:["en","fr","esp"],
        places:[1,3,5,8],
    },
    {
        firstName: "Skirmantas",
        company: "Tez Tour",
        languages:["lt","rus"],
        places:[1,3,4],
    },
    {
        firstName: "Agnė",
        company: "AirGuru",
        languages:["lt","en","lv"],
        places:[2,6],
    },
    {
        firstName: "Ernestas",
        company: "AirGuru",
        languages:["lt","lv"],
        places:[1,2,6],
    }
];

    const VisitedPlaces: Array<VisitedPlace>=[
        {
            id:1,
            title:"Trakų pilis",
        },
        {
            id:2,
            title:"Gedimino pilis",
        },
        {
            id:3,
            title:"Lajų takas",
        },
        {
            id:4,
            title:"Kirkilų apžvalgos bokštas",
        },
        {
            id:5,
            title:"ilzenbergo dvaras",
        },
        {
            id:6,
            title:"Etnokosmologijos muziejus",
        },
        {
            id:7,
            title:"Baterija,,Memel Nord``",
        },
        {
            id:8,
            title:"Klinčių karjerai",
        },
    ];

function getAllLanguages<T extends GenParams>(people: Array<T>): Array<string>{
    const langs: Array<string>=[];
    people.forEach((person) => {
        person.languages.forEach((lang)=>{
            if(!langs.includes(lang))langs.push(lang);
        })
    });
    return langs;
}
const guideLng = getAllLanguages(tourGuides);

let gidai: string="";
guideLng.forEach((langs)=>{
    gidai +=`${langs}<br>`;
});
const guidesElement = document.getElementById("guides");
if (guidesElement) {
  guidesElement.innerHTML = gidai;
}
const tourLng = getAllLanguages(tourists);
document.getElementById("tourists")?.append("Gidu kalbos ",tourLng.join(", "));
let turistai: string="";
tourLng.forEach((langs)=>{
    turistai +=`${langs}<br>`;
});
const touristElement = document.getElementById("turistai");
if (touristElement) {
  touristElement.innerHTML = turistai;
}
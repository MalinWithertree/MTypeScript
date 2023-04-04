interface Tourist{
    id: number;
    firstName:string;
    languages: Array<string>;
    goals: Array<number>;
    family: Array<number>;
    gender:string;
}
interface GenParams {
    languages: Array<string>;
}

interface VisitedPlace {
    id: number;
    title: string;
}
interface result{
    firstName: string;
    gender:string;
}
const tourists: Array<Tourist>=[
    {
        id:1,
        firstName:"John",
        languages:["en","no"],
        goals:[1,7],
        family:[5],
        gender:'m'
    },
    {
        id:2,
        firstName:"Angelina",
        languages:["rus"],
        goals:[1,2,3,4],
        family:[],
        gender:'f'
    },
    {
        id:3,
        firstName:"Robert",
        languages:["esp"],
        goals:[1,2,3,5,8],
        family:[],
        gender:'m'
    },
    {
        id:4,
        firstName:"James",
        languages:["eng","lv"],
        goals:[4,8],
        family:[],
        gender:'m'
    },
    {
        id:5,
        firstName:"Linda",
        languages:["lt","rus","eng","fr"],
        goals:[2,3,4,5,6,7],
        family:[1],
        gender:'f'
    },
    {
        id:6,
        firstName:"Susan",
        languages:["fr"],
        goals:[2,3,4,5,6],
        family:[7],
        gender:'f'
    },
    {
        id:7,
        firstName:"Thomas",
        languages:["fr"],
        goals:[2,3,4,5,6],
        family:[6],
        gender:'m'
    },
    
];
interface Guide{
    firstName: string;
    company: string;
    languages: Array<string>;
    places: Array<number>;
    gender:string;
}
const tourGuides: Array<Guide>=[
    {
        firstName: "Ineta",
        company: "Novaturas",
        languages:["en","fr","esp"],
        places:[1,3,5,8],
        gender:'f'
    },
    {
        firstName: "Skirmantas",
        company: "Tez Tour",
        languages:["lt","rus"],
        places:[1,3,4],
        gender:'m'
    },
    {
        firstName: "Agnė",
        company: "AirGuru",
        languages:["lt","en","lv"],
        places:[2,6],
        gender:'f'
    },
    {
        firstName: "Ernestas",
        company: "AirGuru",
        languages:["lt","lv"],
        places:[1,2,6],
        gender:'m'
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
let guideLng = getAllLanguages(tourGuides);
function reSort(langs:string[]):string[]{
    return langs.sort();
}
guideLng = reSort(guideLng);
let gidai: string="";
guideLng.forEach((langs)=>{
    gidai +=`${langs}<br>`;
});
const guidesElement = document.getElementById("guides");
if (guidesElement) {
  guidesElement.innerHTML = gidai;
}
let tourLng = getAllLanguages(tourists);
tourLng=reSort(tourLng);
document.getElementById("tourists")?.append("Gidu kalbos ",tourLng.join(", "));
let turistai: string="";
tourLng.forEach((langs)=>{
    turistai +=`${langs}<br>`;
});
const touristElement = document.getElementById("turistai");
if (touristElement) {
  touristElement.innerHTML = turistai;
}


 // užduotis 3 

function getClients(tourGuides: Guide[], tourists: Tourist[]): string {
    const clients: Record<string, string[]> = {};
    tourGuides.forEach((guide) => {
      const matchingTourists = tourists.filter(
        (tourist) =>
          tourist.languages.some((lang) => guide.languages.includes(lang)) &&
          tourist.goals.some((place) => guide.places.includes(place))
      );
      if (matchingTourists.length > 0) {
        clients[guide.firstName] = matchingTourists.map((tourist) => tourist.firstName);
      }
    });
    return JSON.stringify(clients);
  }
 
  const clients = getClients(tourGuides, tourists);
  const klientaiElement= document.getElementById("klientai");
  if (klientaiElement){
    klientaiElement.innerHTML= clients;
  }

  const allPlaces: Array<number> = [];
  tourGuides.forEach((guide: Guide) => {
    guide.places.forEach((place: number) => {
      if (!allPlaces.includes(place)) {
        allPlaces.push(place);
      }
    });
  });
  function unsatisfiedTourist(tourists: Array<Tourist>, allPlaces: Array<number>): Array<string> {
    const result: Array<string> = [];
    tourists.forEach((tourist: Tourist) => {
      const hasNonexistentGoals = tourist.goals.some((goal: number) => !allPlaces.includes(goal));
      if (hasNonexistentGoals) {
        const firstName = tourist.firstName;
        const goals = tourist.goals.join(", ");
        result.push(`${firstName} - ${goals}`);
      }
    });
    return result;
  }
  
  const unTour = unsatisfiedTourist(tourists,allPlaces)
  const unTourElement= document.getElementById("unTour");
  if (unTourElement){
    unTourElement.innerHTML= unTour.join("<br>");
  }
  function guideCompanies(tourGuides: Array<Guide>): Array<string> {
    const result: Array<string> = [];
    const companies: { [key: string]: string[] } = {};
    tourGuides.forEach((guide: Guide) => {
      const companyName = guide.company;
      const firstName = guide.firstName;
      if (!companies[companyName]) {
        companies[companyName] = [firstName];
      } else {
        companies[companyName].push(firstName);
      }
    });
    for (const companyName in companies) {
      if (Object.prototype.hasOwnProperty.call(companies, companyName)) {
        const tourGuides = companies[companyName];
        const tourGuidesStr = tourGuides.join(", ");
        result.push(`${companyName}: ${tourGuidesStr}`);
      }
    }
    return result;
  }
  const cGuide=guideCompanies(tourGuides)
  const cGuideElement=document.getElementById("cGuide");
  if(cGuideElement){
    cGuideElement.innerHTML=cGuide.join("<br>")
  }

  
 
  function getByGender(tourists: Array<Tourist>, tourGuides: Array<Guide>): Array<string> {
    const men: Array<string> = [];
    const women: Array<string> = [];
  
    for (const tourist of tourists) {
      const fullName = tourist.firstName + " (tourist)";
      if (tourist.gender === "m") {
        men.push(fullName);
      } else if (tourist.gender === "f") {
        women.push(fullName);
      }
    }
  
    for (const tourGuide of tourGuides) {
      const fullName = tourGuide.firstName + " (tour guide)";
      if (tourGuide.gender === "m") {
        men.push(fullName);
      } else if (tourGuide.gender === "f") {
        women.push(fullName);
      }
    }
  
    const output: Array<string> = [];
    output.push(`Men: ${men.join(", ")}`);
    output.push(`Women: ${women.join(", ")}`);
    return output;
  }
  const genderList = getByGender(tourists, tourGuides);

  
  const genderString = genderList.join("<br>")
  const genderListElement = document.getElementById("gTour");
if (genderListElement) {
  genderListElement.innerHTML = genderString;
}

//1 (3 BODA)
//Napisi funkciju koja ispisuje neparne brojeve od 0 do 100

function ispisNeparnih() {
    for (let i = 0; i < 101; i++) {
        if (i%2 != 0) {
            console.log(i);
        }
    }
}
// ispisNeparnih();

//2 (3 BODA)
//Napisi funkciju koja koristi switch selekciju za pretvaranje numerickog unosa u godisnje u doba. Za neispravan unos ispisi prikladnu poruku.
//INPUT: 1; OUTPUT: "Jesen";
//INPUT: 3; OUTPUT: "Ljeto"; 
console.log("Upisi broj 1-4 za godisnje doba: ");

function godisnjadoba(x) {
switch (x) {
    case 1:
        console.log("Jesen");
        break;
    case 2:
        console.log("Proljeće");
        break;
    case 3:
        console.log("Ljeto");
         break;
    case 4:
        console.log("Zima");
        break; 
        
    default:
        console.log("Niste upisali broj 1-4.")
        break;
}
}
// godisnjadoba(3);
//3 (4 BODA)
//Napisi funkciju koja okrece uneseni string i broji charactere uzimajuci u obzir prazna mjesta (eng. whitespaces)
//INPUT: "Pisanje zadataka nije jednostavan posao"
//OUTPUT: ("oasop navatsondej ejin akatadaz ejnasiP", 39)
let uneseniString = "Bla bla uneseni string";

function okreni_broji(uneseniString) {
    let duljina = uneseniString.length;
    console.log(duljina);
}

okreni_broji(uneseniString);

//4 (4 BODA)
//Napisi funkciju koja odreduje najdulju vrijednostu u danom objektu
const peopleYouShouldKnow = {
    Donald: "Knuth",
    Bjarne: "Stroustrup",
    Ada: "Lovelace",
    Kent: "Beck",
    Martin: "Fowler",
    Erich: "Gamma"
}
//INPUT: somePeople
//OUTPUT: "Stroustrup"

function najduljaVrijednost(somePeople) {
    let duljinaTop = 0;
    let topime = "";
    for (const x of peopleYouShouldKnow) {
        let duljina = peopleYouShouldKnow[x].length;
        if (duljinaTop<duljina) {
            duljinaTop = duljina;   
            topime = peopleYouShouldKnow[x];
        }
    }
    console.log(topime);
}

//5 (4 BODA)
//Napisi funkciju u obliku function expressiona koja vraca neproste brojeve
//INPUT: [3, 4, 5, 8, 11]
//OUTPUT: [4, 5, 8]

//ZAMJENA ZA 5 (4 BODA)
//Napisi funkciju u obliku arrow functiona koja pretvara mala slova danih inputa u velika slova
//INPUT: ["aa", "b1", "", null, "AAA"]
//OUTPUT: ["AA","B1", "", null, "AAA"]

array.forEach(element => {
    
});

//6 (4 BODA)
//Napisi funkciju koja vraca sve drzave koji su imali manju temperaturu od one iz ulaznog parametra
const someEvents = [
    {
        stateName: "SAD",
        measuredTemperature: 56.7,
    },
    {
        stateName: "Tunis",
        measuredTemperature: 55,
    },
    {
        stateName: "Irak",
        measuredTemperature: 53.9,
    },
    {
        stateName: "Argentina",
        measuredTemperature: 48.9,
    },
    {
        stateName: "Grcka",
        measuredTemperature: 48.0,
    },
];
//INPUT: (someStates, 48.5)
//OUTPUT: [{stateName: "Grcka", measuredTemperature: 48.0}]



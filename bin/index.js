const fs = require('fs');

if(process.argv.length <= 2) {
  console.error("Error: Please specify the file name!");
  process.exit(0);
}

console.log(process.argv);

const fileName = process.argv[2];
const file = fs.readFileSync(fileName);

const stringData = file.toLocaleString();
const countryData = stringData.split('\r\n');

const countryCodes = [];


countryData.forEach((country) => {
  const cData = country.split("\t");
  if(cData[0] == undefined || cData[0] == '') return;

  let country_data = {
    name: cData[0],
    code: cData[1],
    iso: cData[2],
    population: cData[3],
    area: cData[4],
    gdp: cData[5] ?? "N/A"
  };

  countryCodes.push(country_data);
});


let generatedCode = `

interface CountryData {
    name: string,
    code: string,
    iso: string,
    population: string,
    area: string,
    gdp: string
}

const countryCodes : CountryData[] = ${
    JSON.stringify(countryCodes)
};

export { CountryData, countryCodes };

`;


fs.writeFileSync("data/codes.ts", generatedCode);

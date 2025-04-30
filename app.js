const nameArr = ["aun", "faizan", "kashan", "rizwan", "ayaan", "abbas"];
let nameArray = [];
for (let i = 0; i < nameArr.length; i++) {
  let nameInString = nameArr[i];
  // console.log(nameInString);

  let nameFirstLetter = nameInString.substring(0, 1).toLocaleUpperCase();
  // console.log(nameFirstLetter);

  let nameSecLetter = nameInString.substring(1);
  // console.log(nameSecLetter);

  let fullName = "";
  fullName += nameFirstLetter + nameSecLetter;
  // console.log(fullName);

  nameArray.push(fullName);
  console.log(fullName);
  // document.write(`${fullName} <br>`);
} //[ 'Aun', 'Faizan', 'Kashan' ]

console.log(nameArray);

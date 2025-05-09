const nameArr = ["aun", "faizan", "kashan", "rizwan", "ayaan", "abbas"];
let nameArray = [];
for (let i = 0; i < nameArr.length; i++) {
  let nameInString = nameArr[i];
  // console.log(nameInString);

  let nameFirstLetter = nameInString.slice(0, 1).toLocaleUpperCase();
  // console.log(nameFirstLetter);

  let nameSecLetter = nameInString.slice(1)
  // console.log(nameSecLetter);

  let fullName = "";
  fullName += nameFirstLetter + nameSecLetter;
  // console.log(fullName);

  nameArray.push(fullName);
  // console.log(fullName);
}

console.log(nameArray);

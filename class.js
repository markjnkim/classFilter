const tas = ["John", "Mark", "Clark"];
const levelArray = ["ex", "new", ""];
const classMembers = [
  {
    name: "Andres",
    level: "",
    flag: "",
    unsubmitted: [],
    absences: 0
  }, {
    name: "Ashley",
    level: "",
    flag: "",
    unsubmitted: [],
    absences: 0
  }, {
    name: "Brandon",
    level: "",
    flag: "",
    unsubmitted: [],
    absences: 0
  }, {
    name: "Brian",
    level: "ex",
    flag: "",
    unsubmitted: [],
    absences: 0
  }, {
    name: "Cara",
    level: "ex",
    flag: "",
    unsubmitted: [],
    absences: 0
  }, {
    name: "Carson",
    level: "ex",
    flag: "",
    unsubmitted: [],
    absences: 0
  }, {
    name: "Cezar",
    level: "ex",
    flag: "",
    unsubmitted: [],
    absences: 0
  }, {
    name: "Hannah",
    level: "ex",
    flag: "",
    unsubmitted: [],
    absences: 0
  }, {
    name: "Isaiah",
    level: "new",
    flag: "X",
    unsubmitted: [""],
    absences: 0
  }, {
    name: "Ivan",
    level: "",
    flag: "",
    unsubmitted: [],
    absences: 3
  }, {
    name: "Jay",
    level: "new",
    flag: "",
    unsubmitted: [],
    absences: 0
  }, {
    name: "Kevin",
    level: "ex",
    flag: "",
    unsubmitted: [],
    absences: 0
  }, {
    name: "Lucas",
    level: "",
    flag: "",
    unsubmitted: [],
    absences: 0
  }, {
    name: "Luke",
    level: "",
    flag: "",
    unsubmitted: [],
    absences: 0
  }, {
    name: "Manuel",
    level: "",
    flag: "",
    unsubmitted: [],
    absences: 0
  }, {
    name: "Matthew",
    level: "ex",
    flag: "",
    unsubmitted: [],
    absences: 0
  }, {
    name: "Michael",
    level: "new",
    flag: "X",
    unsubmitted: [],
    absences: 0
  }, {
    name: "Natalie",
    level: "ex",
    flag: "",
    unsubmitted: [],
    absences: 0
  }, {
    name: "Olga",
    level: "new",
    flag: "X",
    unsubmitted: [],
    absences: 0
  }, {
    name: "Omid",
    level: "ex",
    flag: "",
    unsubmitted: [],
    absences: 0
  }, {
    name: "Ollie",
    level: "",
    flag: "",
    unsubmitted: [],
    absences: 0
  }, {
    name: "Chardo",
    level: "new",
    flag: "",
    unsubmitted: [],
    absences: 0
  }, {
    name: "Richard",
    level: "ex",
    flag: "",
    unsubmitted: [],
    absences: 0
  }, {
    name: "Shannon",
    level: "",
    flag: "",
    unsubmitted: [],
    absences: 0
  }, {
    name: "Steven",
    level: "",
    flag: "",
    unsubmitted: [],
    absences: 0
  }, {
    name: "Tony",
    level: "new",
    flag: "",
    unsubmitted: [],
    absences: 0
  }, {
    name: "Trixie",
    level: "",
    flag: "",
    unsubmitted: [],
    absences: 0
  }, {
    name: "William",
    level: "ex",
    flag: "",
    unsubmitted: [],
    absences: 0
  }
];
const week = process.argv[2];
console.log("type of: ", typeof week);
function subArray(array, start, end) {
  let _array = [];
  for (let i = start; i < end; i++) {
    _array.push(array[i])
  }
  return _array;
}

function arraySplit(array, divisor) {
  let _nestArray = [];
  for (let i = 0; i < divisor; i++)
    _nestArray.push(subArray(array, Math.floor(array.length * i / divisor), Math.floor(array.length * (i + 1) / divisor)));
  return _nestArray;
}

function levelFilter(array, level) {
  const _array = array.filter(student => student.level == level)
  return _array;
}

function createLevelGroups(classArray,levelArray) {
  const _obj = {};
  for(let i = 0; i < levelArray.length; i++) {
  _obj[levelArray[i]] = levelFilter(classArray, levelArray[i]);
  }
  console.log(_obj);
  // return _nestAry;
}

function createLevelObject(nestArray, levelArray){
  const _obj = {};
  for(let i = 0; i < 3; i++) {
    _obj[levelArray[i]] = nestArray;
  }
  return _obj;
}
function assignGroup(group_array, ta_array, week) {
  let _obj = {};
  for (let i = 0; i < group_array.length; i++) {
    let j = (i + parseInt(week)) % ta_array.length;
    _obj[ta_array[j]] = group_array[i];
  }
  console.log(_obj);
  // return _obj;
}
if(week === 'level'){
  createLevelGroups(classMembers, levelArray);
  // createLevelObject(nestedArray, levelArray);
}
else if (typeof parseInt(week) === 'number') {
  const groups = arraySplit(classMembers, tas.length);
  assignGroup(groups, tas, week);
}
else {
  console.log("whuuuuuuuuut!!!")
}

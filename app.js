//!step1: manage schedules
//!step2: investigation of the api's
//!step3: make a template
//!step4: make a fetch
//!step5: make a array of objects (and save as in local storage)
//!step6: make a relevant function:
//! a) function that sort all the element
//
//! b) function a search
//! c) function that change the information(add or delete)
//! d)

// save information into a localStorage
//!localStorage.setItem("bob", "marly");
//! let a = localStorage.getItem("bob");
//! console.log(a);

//https://capsules7.herokuapp.com/api/group/one
//https://capsules7.herokuapp.com/api/group/two
//https://capsules7.herokuapp.com/api/user/020

const fetchCapAndTransform = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};

fetchCapAndTransform(`https://capsules7.herokuapp.com/api/group/one`);

const indexCap = async () => {
  const response = await fetchCapAndTransform(
    `https://capsules7.herokuapp.com/api/group/one`
  );
  const response2 = await fetchCapAndTransform(
    `https://capsules7.herokuapp.com/api/group/two`
  );
  let arrPromises = [];
  for (const i of response) {
    let { id } = i;
    arrPromises.push(id);
  }
  for (const i of response2) {
    let { id } = i;
    arrPromises.push(id);
  }
  //   console.log(arrPromises);
  return arrPromises;
};
indexCap();

const buildRow = (jsonRow, htmlRow) => {
  htmlRow.insertCell(0).innerHTML = jsonRow.id;
  htmlRow.insertCell(1).innerHTML = jsonRow.firstName;
  htmlRow.insertCell(2).innerHTML = jsonRow.lastName;
  htmlRow.insertCell(3).innerHTML = jsonRow.capsule;
  htmlRow.insertCell(4).innerHTML = jsonRow.age;
  htmlRow.insertCell(5).innerHTML = jsonRow.city;
  htmlRow.insertCell(6).innerHTML = jsonRow.gender;
  htmlRow.insertCell(7).innerHTML = jsonRow.hobby;
};

const infoCap = async () => {
  let arr = await indexCap();
  for (let i = 0; i < arr.length; i++) {
    const response = await fetch(
      `https://capsules7.herokuapp.com/api/user/${arr[i]}`
    );
    const data = await response.json();
    console.log(data);
    const table = document.querySelector("table");

    r = table.insertRow();
    buildRow(data, r);
  }
};
infoCap();

const row = document.createElement("row");
const cell = document.createElement("cell");

//id,firstName,lastName,capsule,age,city,gender,hobby

const allInfoStudents = [
  {
    id: "011",
    gender: "female",
    firstName: "מירי",
    lastName: "פורמן",
    hobby: "ציור",
    age: 26,
    city: "באר שבע",
    capsule: 2,
  },
  {
    id: "012",
    gender: "male",
    firstName: "מיכאל",
    lastName: "קונין",
    hobby: "טיולים",
    age: 38,
    city: "קדומים",
    capsule: 3,
  },
  {
    id: "013",
    gender: "male",
    firstName: "מוחמד",
    lastName: "נאטשה",
    hobby: "פתרון בעיות",
    age: 22,
    city: "ירושלים",
    capsule: 4,
  },
  {
    id: "014",
    gender: "male",
    firstName: "מאיר",
    lastName: "יוסף כהן",
    hobby: "מוסיקה",
    age: 37,
    city: "כרמיאל",
    capsule: 2,
  },
  {
    id: "015",
    gender: "male",
    firstName: "לידור",
    lastName: "אשוש",
    hobby: "ציד מדוזות",
    age: 29,
    city: "נתיבות",
    capsule: 1,
  },
  {
    id: "016",
    gender: "female",
    firstName: "יעל",
    lastName: "לניר",
    hobby: "השקמות בלילה",
    age: 23,
    city: "ראשון לציון",
    capsule: 3,
  },
  {
    id: "017",
    gender: "male",
    firstName: "יוסף",
    lastName: "פדול",
    hobby: "תכנות",
    age: 26,
    city: "פקיעין",
    capsule: 2,
  },
  {
    id: "018",
    gender: "male",
    firstName: "בן",
    lastName: "גרינולד",
    hobby: "כדורגל",
    age: 29,
    city: "באר שבע",
    capsule: 4,
  },
  {
    id: "019",
    gender: "male",
    firstName: "באשיר",
    lastName: "טאריף",
    hobby: "סריגה",
    age: 24,
    city: "ג'וליס",
    capsule: 1,
  },
  {
    id: "020",
    gender: "male",
    firstName: "אראל",
    lastName: "חגאג",
    hobby: "בישול",
    age: 30,
    city: "נתיבות",
    capsule: 1,
  },
  {
    id: "021",
    gender: "female",
    firstName: "אדוה",
    lastName: "מוזס",
    hobby: "גלישה",
    age: 31,
    city: "פתח תקווה",
    capsule: 4,
  },
  {
    id: "001",
    gender: "female",
    firstName: "רעות",
    lastName: "גולדין",
    hobby: "guitars",
    age: 39,
    city: "עראמשה",
    capsule: 2,
  },
  {
    id: "002",
    gender: "male",
    firstName: "ראני",
    lastName: "עלי",
    hobby: "אנימה",
    age: 32,
    city: "עראמשה",
    capsule: 2,
  },
  {
    id: "003",
    gender: "male",
    firstName: "פרג",
    lastName: "פדול",
    hobby: "תכנות משחקים",
    age: 26,
    city: "קרית שמונה",
    capsule: 4,
  },
  {
    id: "004",
    gender: "male",
    firstName: "עמירם",
    lastName: "אברג'ל",
    hobby: "לבשל",
    age: 30,
    city: "נתניה",
    capsule: 3,
  },
  {
    id: "005",
    gender: "male",
    firstName: "עמאר",
    lastName: "אלעמור",
    hobby: "משחקי מחשב",
    age: 21,
    city: "כסיפה",
    capsule: 2,
  },
  {
    id: "006",
    gender: "male",
    firstName: "עלא",
    lastName: "שעלאן",
    hobby: "עיצוב",
    age: 38,
    city: "עין קנייא",
    capsule: 4,
  },
  {
    id: "007",
    gender: "male",
    firstName: "עומר",
    lastName: "עברון",
    hobby: "גלישה",
    age: 23,
    city: "טבריה",
    capsule: 1,
  },
  {
    id: "008",
    gender: "female",
    firstName: "סחר",
    lastName: "סאבק באדר",
    hobby: "ריקודים סלונים",
    age: 21,
    city: "חורפש",
    capsule: 4,
  },
  {
    id: "009",
    gender: "male",
    firstName: "נתנאל",
    lastName: "בדוק",
    hobby: "שחייה",
    age: 21,
    city: "אשדוד",
    capsule: 3,
  },
  {
    id: "010",
    gender: "female",
    firstName: "נופר",
    lastName: "מימון",
    hobby: "לישון",
    age: 28,
    city: "נתיבות",
    capsule: 4,
  },
  {
    id: "022",
    gender: "male",
    firstName: "אחמד",
    lastName: "מוחטאסב",
    hobby: "אוהב לטוס במחשבות",
    age: 18,
    city: "ירושלים",
    capsule: 1,
  },
  {
    id: "023",
    gender: "female",
    firstName: "איה",
    lastName: "יוסף",
    hobby: "לטייל",
    age: 26,
    city: "עכו",
    capsule: 3,
  },
  {
    id: "024",
    gender: "female",
    firstName: "אמל",
    lastName: "מדלג",
    hobby: "ספורט",
    age: 28,
    city: "כפר קרע",
    capsule: 3,
  },
  {
    id: "025",
    gender: "female",
    firstName: "אנדרה",
    lastName: "קאטוב",
    hobby: "טיפוס הרים",
    age: 32,
    city: "חדרה",
    capsule: 1,
  },
];

// const paintHead = () => {
//     const heading = document.createElement("div");
//     //   const subtitles = document.createElement("div");
//     //   const subtitle = document.createElement("div");
//     heading.textContent = "text";
//     heading.classList.add("title");
//     table.appendChild(heading);
//   };
//   paintHead();

//
// const getArrOfCharacters = async () => {
//   const { results } = await fetchData(
//     `https://capsules7.herokuapp.com/api/user/${arr[i]}`
//   );

//   const arrPromises = [];
//   for (let i = 0; i < results.length; i++) {
//     const planet = fetchData(results[i].homeworld);
//     arrPromises.push(planet);
//   }
//   //* Good practice
//   const arrOfWorlds = await Promise.all(arrPromises);
//   const structureData = structureCharObj(results, arrOfWorlds);
//   return structureData;
// };
// getArrOfCharacters()

//display the data
// const titles = ["id", "name", "Capsule", "age", "city", "gender", "hobby"];

// const paintRow = (arrOfData) => {
//   const row = document.createElement("div");
//   row.classList.add("row");

//   arrOfData.forEach((e) => {
//     const cell = document.createElement("div");
//     cell.classList.add("cell");
//     cell.textContent = e;
//     row.appendChild(cell);
//   });

//   table.appendChild(row);
// };
// paintRow();

// const paintRow = () => {
//   const row = document.createElement("div");
//   row.classList.add("row");

//   arrOfData.forEach((e) => {
//     const cell = document.createElement("div");
//     cell.classList.add("cell");
//     cell.textContent = e;
//     row.appendChild(cell);
//   });

//   table.appendChild(row);
// };
// paintRow();

//!step1: manage schedules
//!step2: investigation of the api's
//!step3: make a template
//!step4: make a fetch
//!step5: make a array of objects (and save as in local storage)
//!step6: make a relevant function:
//! a) function that sort all the element
//! b) function a search
//! c) function that change the information(add or delete)
//! d)

//https://capsules7.herokuapp.com/api/group/one
//https://capsules7.herokuapp.com/api/group/two

// const fetchData = async (url) => {
//   try {
//     const response = await fetch(
//       `https://capsules7.herokuapp.com/api/group/one`
//     );
//     const data = await response.json();
//     return data;
//   } catch (e) {
//     console.log(e);
//   }
// };
// fetchData();

const fetchCapAndTransform1 = async () => {
  const response = await fetch(`https://capsules7.herokuapp.com/api/group/one`);
  const data = await response.json();
  console.log(data);
  //   const transformedData1 = { id: data.id };
  //   return transformedData1;
};
fetchCapAndTransform1();

const fetchCapAndTransform2 = async () => {
  const response = await fetch(`https://capsules7.herokuapp.com/api/group/two`);
  const data = await response.json();
  console.log(data);
  //   const transformedData2 = { id: data.id };
  //   return transformedData2;
};
fetchCapAndTransform2();

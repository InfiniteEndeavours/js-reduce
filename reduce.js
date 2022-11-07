  
/**
 * To run this file in Gitpod, use the 
 * command node reduce.js in the terminal
 */


// Summing an array of numbers:
const nums = [0, 1, 2, 3, 4]


// Adding a number after the reduce function (which sets the accumulator), changes the output of the method.
// Setting this to 10 would give an output of 20, as the program starts with 10 + 0 = 10, 10+1 = 11, 11 + 2 = 13 etc.
let sum = nums.reduce((acc, curr) => acc + curr, 0);

console.log(sum);

const teamMembers = [
  {
    name: 'Andrew',
    profession: 'Developer',
    yrsExperience: 5,
    skills: ['html', 'css', 'javascript']
  },
  {
    name: 'Ariel',
    profession: 'Developer',
    yrsExperience: 7,
    skills: ['html', 'css', 'javascript']
  },
  {
    name: 'Michael',
    profession: 'Designer',
    yrsExperience: 1,
    skills: ['3d design', 'animation']
  },
  {
    name: 'Kelly',
    profession: 'Designer',
    yrsExperience: 3,
    skills: ['2d design', 'animation']
  },
  {
    name: 'Jacob',
    profession: 'Manager',
    yrsExperience: 10
  }
];

// Totaling a specific object property
let totalExperience = teamMembers.reduce((acc, curr)=> acc + curr.yrsExperience, 0);
console.log(totalExperience);

// Grouping by a property, and totaling it too
// First set of curly braces is the callback function, the second is the initial value - an empty object
let experienceByProfession = teamMembers.reduce((acc, curr)=> {
  let key = curr.profession;
  // If a profession hasn't been created in the object, create a key using the new profession
  if (!acc[key]){
    acc[key] = curr.yrsExperience
  } else {
    acc[key] += curr.yrsExperience
  }

  return acc;
}, {})

console.log(experienceByProfession);

let skillPeopleCounts = teamMembers.reduce((skillCounts, curr) => {

  // If curr.skills exists in object
  if (curr.skills) {
    // For each skill in skills array
    for (let skill of curr.skills) {
      // If skill is not in skills array, set object key to skill name and set count to 0
      if (!(skill in skillCounts)) {
          skillCounts[skill] = 0;
      }
      // increment skill by 1 if found
      skillCounts[skill]++;
    }
  }

  return skillCounts;
}, {})

console.log(skillPeopleCounts);
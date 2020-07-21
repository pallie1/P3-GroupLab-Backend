const mongoose = require("./connection.js");
const db = mongoose.connection;
const Student = require("../models/student");
const Teacher = require("../models/teacher");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
  await Student.deleteMany({});
  await Teacher.deleteMany({});
    
  await Student.insertMany([
      {
        firstName: "Tamika",
        lastName: "Robinson",
        email: "tamikar1242@gmail.com",
        location: "Omaha, NE",
        idiom: "Violin",
        language: "English",
        other: "Allergic to peanuts",
        myTeachers: [],
        online: true,
        student: true,
        teacher: false,
      },
      {
        firstName: "Aleksandra",
        lastName: "Dubrov",
        email: "adubrov1248@gmail.com",
        location: "Peoria, IL",
        idiom: "Flute",
        language: "Russian",
        other: "",
        myTeachers: [],
        online: true,
        student: true,
        teacher: false,
      }
    ]);
  
  await Teacher.insertMany([
    {
      firstName: "Beth",
      lastName: "Adebayoer",
      email: "b.adebayo@yahoo.com",
      location: "New York, NY",
      idiom1: "Guitar",
      idiom2: "Banjo",
      idiom3: "Ukelele",
      rate: 50,
      language: "English",
      teachingStyle: "Suzuki",
      online: true,
      studentRoster: [],
      student: false,
      teacher: true,
    },
    {
      firstName: "Bill",
      lastName: "Ferguson",
      email: "b.furgiefurg@yahoo.com",
      location: "Chicago, IL",
      idiom1: "Clarinet",
      idiom2: "Saxophone",
      idiom3: "",
      rate: 48,
      language: "English",
      teachingStyle: "Authoritarian",
      online: true,
      studentRoster: [{_id: '5f16ea423dcff51d4e6cf220'}],
      student: false,
      teacher: true,
    },
    {
      firstName: "Ebi",
      lastName: "Adebayo",
      email: "e.adebayo@yahoo.com",
      location: "New York, NY",
      idiom1: "Guitar",
      idiom2: "Banjo",
      idiom3: "Ukelele",
      rate: 50,
      language: "English",
      teachingStyle: "Suzuki",
      online: true,
      studentRoster: [],
      student: false,
      teacher: true,
    },
    {
      firstName: "Sarah",
      lastName: "Fergusoner",
      email: "s.furgiefurg@yahoo.com",
      location: "Chicago, IL",
      idiom1: "Clarinet",
      idiom2: "Saxophone",
      idiom3: "",
      rate: 48,
      language: "English",
      teachingStyle: "Authoritarian",
      online: true,
      studentRoster: [],
      student: false,
      teacher: true,
    }
  ])

};

console.log("Created Teachers and Students!")

const run = async () => {
  await main();
  db.close();
};

run();
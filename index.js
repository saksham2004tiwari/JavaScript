// // console.log("Additya");
// // var {variableName}={datatype value}
// // var a="a";
// var array = ["Software Engineering", "Smart Data Discovery", "Advance Java","Database" ]
// var object = {
// Software_Engineering: 100,
// Smart_Data_Discovery: 90,
// Advance_Java: 88,
// Database: 90

// }
// // console.log(array)
// // console.log(object)
// // console.log(1)
// // let cv= ["Saksham", "Tiwari", "Ghanalal Tiwari", "",]
let cv ={
    firstname: "Saksham",
    lastname: "Tiwari",
    fathername: "Ghanalal Tiwari",
    subjects:{
        icp:{
            wrl:{
                supervisor:"Sandip Gurung"
            }
        }
    },
    education:{
        SEE:{
            schoolName:"DBS",
            year:2076,
            grade:3.55 ,
        },
        College:{
            collegeName:"CHHS",
            year:2079,
            grade:3.01,
        },
        University:{
            uniName:"CHHS",
            year:200,
            grad:3.5 ,
        }
    },
    workExperience: "3 years",
    address:{
        Country: "Nepal",
        State: "Gandaki",
        District: "KAski"
    },
    // skill:[
    //     teacher:{
    //         teacher: "Bipin"
    //     },
    //     field: "Web Development",
    //     time: "4 years",
    //     company: "Able"
    // ],
    skill: [
        {
         teacher: "Bipin"
          
        },
        {field: "Web Development",},
        {time: "4 years",},
        {company: "Able"}
      ],
       

    Langauges:{
        English:"A+",
        Nepali:"A",
        Hindi:"B"
        
    }


}
// console.log(cv)
console.log(cv.education.SEE);
console.log( cv.skill[0].teacher);
console.log(cv.subjects.icp.wrl.supervisor);
console.log(cv.Langauges)


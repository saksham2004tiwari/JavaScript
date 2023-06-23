// // // // console.log("Additya");
// // // // var {variableName}={datatype value}
// // // // var a="a";
// // // var array = ["Software Engineering", "Smart Data Discovery", "Advance Java","Database" ]
// // // var object = {
// // // Software_Engineering: 100,
// // // Smart_Data_Discovery: 90,
// // // Advance_Java: 88,
// // // Database: 90

// // // }
// // // // console.log(array)
// // // // console.log(object)
// // // // console.log(1)
// // // // let cv= ["Saksham", "Tiwari", "Ghanalal Tiwari", "",]

    // workExperience: "3 years",
    // address:{
    //     Country: "Nepal",
    //     State: "Gandaki",
    //     District: "KAski"
    // },
    
    // skill: [
    //     {
    //      teacher: "Bipin"
          
    //     },
    //     {field: "Web Development",},
    //     {time: "4 years",},
    //     {company: "Able"}
    //   ],
       

    // Langauges:{
    //     English:"A+",
    //     Nepali:"A",
    //     Hindi:"B"
        
    // }
let cv ={
    name: "Saksham Tiwari",
    class:  "class 12",
    School:"DBS",
    education:{
        College:{
        Science:{
            gpa:4  ,
            marks:98,
        },
        English:{
            gpa:3.9,
            marks:92,
        },
        Maths:{
            gpa:4,
            marks:100, // 
        }
    }
    },



}
console.log(cv.name);
console.log(cv.class);
// To print the total marks
console.log(cv.education.College.Science.marks + cv.education.College.English.marks + cv.education.College.Maths.marks );
// to print percentage
console.log(((cv.education.College.Science.marks + cv.education.College.English.marks + cv.education.College.Maths.marks)/300)*100 + "%" )
//to print the gpa
console.log((cv.education.College.Science.gpa + cv.education.College.English.gpa + cv.education.College.Maths.gpa)/3 + "gpa")
// to print the grade
if (((cv.education.College.Science.marks + cv.education.College.English.marks + cv.education.College.Maths.marks )/3) >= 90){
    console.log("Grade A+")
}
else if (((cv.education.College.Science.marks + cv.education.College.English.marks + cv.education.College.Maths.marks )/3) >= 80 ){
    console.log("Grade A")
}



// function helloWorld (language) {
//     if (language == "en"){
//         return "Hello World"
//     } else if (language == "br") {
//         return "Oi Mundo"
//     } else  (language == "it") {
//         return "Ciao Mondo"
//     }

// }

// console.log(helloWorld("en"))
// console.log(helloWorld("br"))
// console.log(helloWorld("it"))

function helloWorld(language) {
    let greeting = ""
    
    switch(language) {
        case "en":
            greeting = "howdee"
            break;
        case "es":
            greeting = "hola";
            break;
         case "cz":
             greeting = "ni hao"
             break;

        default     
        


    }

}


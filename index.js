// Define a function that uses 1 parameter

function introduction(name) {
    return `Hi, my name is ${name}.`
}

console.log(introduction);



// Define a function that uses 2 parameters

function introductionWithLanguage(name, language) {
    return (`Hi, my name is ${name} and I am learning to program in ${language}.`)
}

console.log(introductionWithLanguage);



// Define a function that uses an optional parameter

function introductionWithLanguageOptional(name, language = "JavaScript") {
    return (`Hi, my name is ${name} and I am learning to program in ${language}.`)
}

console.log(introductionWithLanguageOptional);




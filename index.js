function introduction(name){
    var phrase = "Hi, my name is "
    return phrase + name + "."
}
console.log(introduction("Aki"))
console.log(introduction("Samip"))

function introductionWithLanguage(name, language){
    return "Hi, my name is " + name + " and I am learning to program in " + language + "."
}
console.log(introductionWithLanguage("Aki", "Ember.js"))
console.log(introductionWithLanguage("Samip", "React"))

function introductionWithLanguageOptional(name, language = "JavaScript"){
    return "Hi, my name is " + name +  " and I am learning to program in " + language + "." 
}
console.log(introductionWithLanguageOptional("Gracie"))
console.log(introductionWithLanguageOptional("Gracie", "Python"))
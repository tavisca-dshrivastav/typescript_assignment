import { fuchsia } from "color-name";

let multiString: string = `coronaviruses are a group of related RNA viruses that cause diseases in mammals and birds. In humans, these viruses cause respiratory tract infections that can range from mild to lethal. mild illnesses include some cases of the common cold (which is also caused by other viruses, predominantly rhinoviruses), while more lethal varieties can cause SARS, MERS, and COVID-19. Symptoms in other species vary: in chickens, they cause an upper respiratory tract disease, while in cows and pigs they cause diarrhea. There are as yet no vaccines or antiviral drugs to prevent or treat human coronavirus infections coronaviruses constitute the subfamily Orthocoronavirinae, in the family Coronaviridae, order Nidovirales, and realm Riboviria. they are enveloped viruses with a positive-sense single-stranded RNA genome and a nucleocapsid of helical symmetry. The genome size of coronaviruses ranges from approximately 26 to 32 kilobases, one of the largest among RNA viruses. they have characteristic club-shaped spikes that project from their surface, which in electron micrographs create an image reminiscent of the solar corona, from which their name derives`;


function getStringCount(str: string):number{
    return str.split(' ').filter((x: string)=> x!= '').length;
}

function toStatementCase(str: string): string {
    let pattern = /(\.\s+)([a-z])/g;
    return str.toLowerCase().replace(pattern, x => x.toUpperCase());
}
function getStringHavingRequestChar(str: string): string[]{
    return multiString.split(' ').filter((x : string)=> x.match(str));
}
function getMatchingWordCount(str: string, wordToMatch: string): number{
    return str.search(wordToMatch);
}

console.log("==============================================");
console.log("Q1: statement case  string");
console.log(toStatementCase(multiString));
console.log("==============================================");
console.log();


console.log("==============================================");
console.log("Q2: string count");
console.log(getStringCount(multiString));
console.log("==============================================");
console.log();


console.log("==============================================");
console.log("Q3: string with a character");
for(let word of getStringHavingRequestChar('a')){
    console.log(word);
};
console.log("==============================================");
console.log();


console.log("==============================================");
console.log("Q4: matching word");
console.log("the occured: "+getMatchingWordCount(multiString, "the")+" times");
console.log("==============================================");
console.log();

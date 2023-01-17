function wordsToNumber(words){

    let result=0,uat=0; //uat means units and tens holder

    const units={one:1,two:2,three:3,four:4,five:5,six:6,seven:7,eight:8,nine:9,ten:10,
                eleven:11,twelve:12,thirteen:13,fourteen:14,fifteen:15,sixteen:16,seventeen:17,eighteen:18,nineteen:19}
    const tens={twenty:20,thirty:30,forty:40,fifty:50,sixty:60,seventy:70,eighty:80,ninety:90}
    const multi={thousand:1000,million:1000000,billion:1000000000,trillion:1000000000000}
    
    const wordsArr=words.split(" ")//split words into array
    
    for(const k of wordsArr){//for each word in the array

        (k in units) && (uat +=units[k]);//if the word is in the units object, add it to uat

        (k in tens) && (uat +=tens[k]);//if the word is in the tens object, add it to uat

        if(k==="hundred"){//if the word is hundred
            result +=uat*100//multiply the uat value by 100 and add it to the result variable
            uat=0//reset uat to zero
        }

        if(k in multi){//if the word is in the multi object
            result +=uat//add current uat value to result
            result *=multi[k]//multiply the current result value by the multi value
            uat=0//reset uat to zero
        }
          
    }
    result +=uat//after looping through the array, add whatever is found in uat to the final result value

    return result.toLocaleString();//insert commas where necessary in the final result

}

console.log(wordsToNumber("seven hundred million four hundred and seventy seven thousand"));//700,000,477,000
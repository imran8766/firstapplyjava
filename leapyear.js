var year = 2024;
console.log(year % 4);
//

        const year2 = 2027;
        let reman = year2 % 4;
        console.log(reman == 0);
//

const year3 = 2030;
let result = year3 % 4;
if(result == 0){
    console.log('leap year');
}
else{
    console.log('Not leap year');
}
//

function noe(leyear){
    const result4 = leyear % 4;
    if(result4 == 0){
        return true;
    }
    else{
        return false;
    }
}
    const answer = noe(1800);
    console.log(answer);

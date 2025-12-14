let votes=['A','B','C','A'];
let counta=0;
let countb=0;
let countc=0;
for(let i=0;i<votes.length;i++){
    if(votes[i]=='A'){
        counta++;
    }else if(votes[i]=='B'){
        countb++;
    }else if(votes[i]=='C'){
        countc++;
    }
}

if(counta>countb&&counta>countc){
    console.log("A is the winner")
}else if(countb>counta&&countb>countc){
    console.log("B is the winner")

}else if(countc>counta&&countc>countb){
    console.log("C is the winner")
}
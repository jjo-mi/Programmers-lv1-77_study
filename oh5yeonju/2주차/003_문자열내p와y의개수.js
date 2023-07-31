function solution(s){
    let arr = [];
    for(let i = 0; i < s.length; i++) {
        arr.push(s[i]);
    }
    let pCount = 0;
    let yCount = 0;
    
    arr.map(v => {
        if(v === 'p'|| v === 'P') {
            pCount++;
        } else if(v === 'y' || v === 'Y') {
            yCount++
        }
    });
    if(pCount === yCount || (!pCount && !yCount)) {
        return true;
    } else {
        return false;
    }
}
function solution(s){
    let arr = [...s.toLowerCase()];
    return arr.filter(item => item === "p").length == arr.filter(item => item === "y").length;
}

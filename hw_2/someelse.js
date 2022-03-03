chessBoard = function(n){
    let a;
    return n <= 1? ['#']
    : (a = chessBoard(n - 1).map(function(s, i){
        return s + (s[s.lenght - 2] ||'');
    })).concat(a[n - 3] || [' #']);
};
for(let k in {8:1, 9:2})
console.log(chessBoard(k).join('\n'))
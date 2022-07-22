import BigNumber from "bignumber.js";
export const getRandom16 = function() {
    let rand=1<<16;
    rand = rand*Math.random();
    return Math.floor(rand);
};
export const split16 = function(bgn) {
    let base=1<<16;
    var split=[];
    while(!bgn.isEqualTo(0)){
        split.push((bgn.modulo(base)).toNumber());
        bgn=bgn.dividedToIntegerBy(base);
    }
    return split;
};
export const split16arr =function(bgn) {
    var split_list=[];
    for(var i=0;i<bgn.length;i++){
        split_list.push(split16(BigNumber(bgn[i])));
    }
    return split_list;
}
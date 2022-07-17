exports.getRandom = function() {
    let rand=1<<16;
    console.log(rand);
    rand = rand*Math.random();
    console.log(rand);
    return Math.floor(rand);
}
/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
 var mergeAlternately = function(word1, word2) {
    var arr = []
    if(word1.length > word2.length || word1.length === word2.length ){
        for (let i=0; i < word1.length; i++){
            arr.push(word1[i]);
            arr.push(word2[i]);
        }
    } else {
        for (let i=0; i < word2.length; i++){
            arr.push(word1[i]);
            arr.push(word2[i]);
        }
    }
    return arr.join('');
}
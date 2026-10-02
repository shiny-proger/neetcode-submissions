class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const mapStrs = new Map();
        for (let i=0; i<strs.length;i++){
            let alf= strs[i].split("").sort().join("");
            if(mapStrs.has(alf)){
                const arr = mapStrs.get(alf);
                arr.push(strs[i]);
                mapStrs.set(alf, arr);
            }
            else{
                mapStrs.set(alf, [strs[i]]);
            }   
        }
        const arr = [];
        for (const [key, val] of mapStrs){
            arr.push(val);
        }
        return arr
    }
}

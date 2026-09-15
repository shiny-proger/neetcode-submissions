class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let mapS = new Map();
        let mapT = new Map();
        if(s.length!==t.length){
            return false;
        }
        let newS=s.split('').sort().join('');
        let newT=t.split('').sort().join(''); 
        for(let i=0; i<s.length; i++){
            if(newS[i]!==newT[i]){
                return false;
            }
        }
        return true;
    }
}
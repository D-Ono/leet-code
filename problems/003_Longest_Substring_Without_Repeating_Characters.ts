function lengthOfLongestSubstring(s: string): number {
    let lengthMax = 0;
    let currentLength = 0;
    let substring = []
    for(let i=0; i< s.length; i++) {
        for(let j=i; j< s.length; j++) {
            const find = substring.find(sub => sub === s[j])
            if(!find) {
                substring.push(s[j])
                currentLength++
            } else {
                if (currentLength > lengthMax) {
                    lengthMax = currentLength    
                }
                currentLength = 0
                substring = []
                break;
            }
        }
        if (currentLength > lengthMax) {
            lengthMax = currentLength
            currentLength = 0
            substring = []
        }
    }

    return lengthMax;
};
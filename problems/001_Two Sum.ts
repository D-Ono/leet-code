function twoSumRecursive(nums: number[], target: number, index: number): number[] {
    let result: number[] = [];
    let findResult = false; 
    const nextIndex = index + 1;

    for (let i = nextIndex; i < nums.length; i++) {
        if (nums[index] + nums[i] === target) {
            result = [index, i]
            findResult = true;
            break;
        }
    }

    if (!findResult) {
        return twoSumRecursive(nums, target, nextIndex);
    }

    return result;
};

function twoSum(nums: number[], target: number): number[] {
    return twoSumRecursive(nums, target, 0);
};
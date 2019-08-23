/*
Constraints:
Length will be <= nums.length
No duplicate values in candidiate
No duplicate permutations in result


[1, 2, 3]

[] // is
[1]
[1, 2]
[1, 2, 3]


*/

function helper(nums, results, candidate, idx) {
	results.push([...candidate]);
	for (let i = idx; i < nums.length; i += 1) {
		candidate.push(nums[i])
		helper(nums, results, candidate, i + 1);
		candidate.pop();
	}
}

function subsets(nums) {
	let results = [];
	helper(nums, results, [], 0);
	return results;
}

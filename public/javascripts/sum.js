function isPalindrome(str) {
    let rev = str.split("").reverse().join("");

    if (rev == str) {
        return true
    }
    return false
}

function whichhigher(x1, x2)
{
	return Math.max(x1, x2);
}

function palidrome(str)
{
	return isPalindrome(str);
}

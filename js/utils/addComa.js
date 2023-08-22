const addComa = (arg) => {
	try {
		let num = Number.parseFloat(arg);

		if (num === NaN) return 0;

		let str = num.toString();

		let str1 = str.split(".")[0] || 0;
		let str2 = str.split(".")[1] === undefined ? "" : str.split(".")[1];

		let res = "";

		let count = 0;

		/*
if count is divisible by 3 and i is not the last number

*/

		for (let i = str1.length - 1; i >= 0; i--) {
			count++;

			res += str1[i];
			if (count % 3 == 0 && i !== str1.length - 1 && i !== 0) {
				res += `,`;
			}
		}

		// for (let i = str.length - 1; i >= 0; i--) {
		// 	// console.log(i)

		// 	if (count % 3 == 0) {
		// 		res += ",";
		// 	}
		// 	res += str[i];

		// 	count++;
		// }
		let b = res.split("");
		b = b.reverse();
		res = b.join("");
		if (str2) {
			res += "." + str2;
		}

		return res;
	} catch (err) {
		console.error(`${arg} is not a number!`);
	}
};

export default addComa;

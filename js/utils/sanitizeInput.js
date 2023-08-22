const sanitizeInput = (val) => {
	const div = document.createElement("div");
	div.innerHTML = val;
	return div.textContent;
};

export default sanitizeInput;

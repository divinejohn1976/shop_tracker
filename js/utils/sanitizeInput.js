const sanitizeInput = (val) => {
	const div = document.createElement("div");
	div.textContent = val;
	return div.innerHTML;
};

export default sanitizeInput;

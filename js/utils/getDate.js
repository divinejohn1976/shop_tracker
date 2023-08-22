const getDate = () => {
	const date = new Date();
	return `${date.getHours()}:${date.getMinutes()}&nbsp; &nbsp;${date.getDate()}/${
		date.getMonth() + 1
	}/${date.getFullYear()}`;
};

export default getDate;

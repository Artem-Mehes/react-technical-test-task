export const formatMonth = (date) => {
	return new Date(date).toLocaleDateString('en-US', {
		month: 'long',
	});
};

export const formatDate = (date) => {
	const formattedDate = new Date(date).toLocaleDateString('en-US', {
		day: 'numeric',
		month: 'long',
		year: 'numeric',
	});

	return formattedDate !== 'Invalid Date'
		? formattedDate + ' year'
		: formattedDate;
};

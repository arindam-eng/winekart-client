const localStorageManager = {
	setValue(key: any, value: any) {
		localStorage.setItem(key, value);
		const event = new CustomEvent('localStorageChange', {
			detail: { key, value },
		});
		window.dispatchEvent(event);
	},
};

export default localStorageManager;

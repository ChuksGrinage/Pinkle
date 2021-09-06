class MemoryStorage {
	store: {};
	constructor() {
		this.store = {};
	}

	getItem(key) {
		if (key in this.store) {
			return this.store[key];
		} else {
			return null;
		}
	}

	removeItem(key) {
		delete this.store[key];
	}

	setItem(key, item) {
		this.store[key] = String(item);
		return this.store[key];
	}
}

function dispatchEvent(eventName, payload) {
	let event;

	if (typeof CustomEvent === 'function') {
		event = new CustomEvent(eventName, payload);
	} else {
		event = document.createEvent('CustomEvent');
		event.initCustomEvent(eventName, false, false, payload);
	}

	window?.dispatchEvent(event);
}

function createStorage(storage = new MemoryStorage()) {
	return function store(key, val) {
		if (arguments.length > 1) {
			if (val === void 0) {
				dispatchEvent('removeStorageItem', { detail: { key } });
				storage.removeItem(key);
			} else {
				// set
				try {
					const item = JSON.stringify(val);
					dispatchEvent('setStorageItem', { detail: { key, item } });
					storage.setItem(key, item);
				} catch (e) {
					console.error(
						`Couldn't stringify ${val} to ${storage.constructor.name}#${key}`,
						e
					);
				}
			}
		} else {
			// get
			try {
				const item = JSON.parse(storage.getItem(key));
				dispatchEvent('getStorageItem', { detail: { key, item } });
				return JSON.parse(storage.getItem(key));
			} catch (e) {
				console.error(`Couldn't parse ${storage.constructor.name}#${key}`, e);
			}
		}
	};
}

function getWindowStorage(storageName) {
	if (typeof window !== "undefined") {
		try {
			window[storageName].setItem('TESTING_STORAGE', 'true');
			window[storageName].removeItem('TESTING_STORAGE');
			return window[storageName];
		} catch (e) {
			console.error(`window.${storageName} isn't available: `, e);
			return void 0;
		}
	}
}

export const localStorage = createStorage(getWindowStorage('localStorage'));

export const sessionStorage = createStorage(getWindowStorage('sessionStorage'));

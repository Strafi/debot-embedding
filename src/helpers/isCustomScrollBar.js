function isCustomScrollBar() {
	return !navigator.platform.toLowerCase().includes('mac');
}

export default isCustomScrollBar;

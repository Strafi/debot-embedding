function isCustomScrollBar(): boolean {
	return !navigator.platform.toLowerCase().includes('mac');
}

export default isCustomScrollBar;

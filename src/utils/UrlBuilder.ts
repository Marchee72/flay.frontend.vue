export function UrlBuilder(
	path: string,
	params: Map<string, string> | null
): string {
	if (!params || params.size == 0) return path;
	for (let [key, value] of params) {
		path = path.replace(key, value);
	}
	return path;
}

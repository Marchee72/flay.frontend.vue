import { AxiosRequestConfig, Method } from "axios";
import { ServerURl } from "../constants/URL";
import { useAuthSrote } from "../stores/AuthStore";
import { UrlBuilder } from "../utils/UrlBuilder";

const bodylessMethods = ["GET", "DELETE", "TRACE", "OPTIONS", "HEAD"];
export function NewAxiosConfig<T>(
	url: string,
	params: Map<string, string> | null,
	httpMethod: Method,
	body: T | null = null,
	needAuth: boolean = true
) {
	url = UrlBuilder(url, params);
	var config: AxiosRequestConfig<T> = {
		method: httpMethod,
		baseURL: ServerURl,
		url: url,
	};
	if (needAuth) {
		const auth = useAuthSrote();
		var authToken = auth.token;
		config.headers = {
			Authorization: authToken,
		};
	}
	if (!bodylessMethods.includes(httpMethod) && body) {
		config.data = body;
	}
	return config;
}

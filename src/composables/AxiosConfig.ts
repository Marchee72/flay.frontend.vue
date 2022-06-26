import { AxiosRequestConfig, Method } from "axios";
import { ServerURl } from "../constants/URL";
import { useAuthSrote } from "../stores/AuthStore";

const unbodyMethods = ["GET", "DELETE", "TRACE", "OPTIONS", "HEAD"];
export function NewAxiosConfig<T>(
	url: string,
	httpMethod: Method,
	body: T | null = null,
	needAuth: boolean = true
) {
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
	if (!unbodyMethods.includes(httpMethod) && body) {
		config.data = body;
	}
	return config;
}

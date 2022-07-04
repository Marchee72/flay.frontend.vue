import axios, { AxiosError, Method } from "axios";
import { Ref, ref } from "vue";
import { NewAxiosConfig } from "./AxiosConfig";

export function useFetch<T, R>(
	path: string,
	httpMethod: Method,
	needAuth: boolean = true
) {
	const data: Ref<R | null> = ref(null);
	const error: Ref<Error | null> = ref(null);

	const fetch = async (body: T | null = null) => {
		data.value = null;
		error.value = null;
		var config = NewAxiosConfig<T>(path, httpMethod, body, needAuth);
		await axios(config)
			.then((res) => {
				data.value = res.data;
				console.log(JSON.stringify(res.data));
			})
			.catch((e: AxiosError) => {
				console.log("API Error: " + e);
				error.value = e;
				if (e.response?.status === 401) window.location.replace("/signin");
			});
	};
	return { data, error, fetch };
}

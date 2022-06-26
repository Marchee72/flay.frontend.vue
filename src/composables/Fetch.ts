import axios, { Method } from "axios";
import { Ref, ref } from "vue";
import { NewAxiosConfig } from "./AxiosConfig";

export function useFetch<T, R>(
	path: string,
	httpMethod: Method,
	needAuth: boolean = true
) {
	const data: Ref<R | null> = ref(null);
	const error: Ref<Error | null> = ref(null);

	var fetch = (body: T | null = null) => {
		data.value = null;
		error.value = null;
		var config = NewAxiosConfig<T>(path, httpMethod, body, needAuth);
		axios(config)
			.then((res) => {
				data.value = res.data;
			})
			.catch((e) => {
				console.log("API Error: " + e);
				error.value = e;
			});
	};
	return { data, error, fetch };
}

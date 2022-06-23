import axios from "axios";
import { Ref, ref } from "vue";
import { NewAxiosConfig } from "./AxiosConfig";

export function usePost<T, R>(path: string, needAuth: boolean = true) {
	const data: Ref<R | null> = ref(null);
	const error: Ref<Error | null> = ref(null);

	var post = async (body: T) => {
		data.value = null;
		error.value = null;
		var config = NewAxiosConfig<T>(path, "POST", body, needAuth);
		await axios(config)
			// .post<T, AxiosResponse<R>>(path, config)
			.then((res) => {
				data.value = res.data;
			})
			.catch((e) => {
				console.log("API Error: " + e);
				error.value = e;
			});
	};
	return { data, error, post };
}

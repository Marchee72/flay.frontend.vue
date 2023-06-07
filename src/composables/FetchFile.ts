import { Ref, ref } from "vue";
import { NewAxiosConfig } from "./AxiosConfig";
import axios, { AxiosError, ResponseType } from "axios";

export function useFileFetch(path: string, contentType: ResponseType){
    const fileData: Ref<any | null> = ref(null);
	const error: Ref<Error | null> = ref(null);

	const fileFetch = async (
		params: Map<string, string> | null = null
	) => {
		fileData.value = null;
		error.value = null;
		var config = NewAxiosConfig<null>(path, params, "GET", null, true);
		config.responseType= contentType;
        await axios(config)
			.then((res) => {
				fileData.value = res.data;
			})
			.catch((e: AxiosError) => {
				console.log("API Error: " + e);
				error.value = e;
				if (e.response?.status === 401) window.location.replace("/signin");
			});
	};
	return { fileData, error, fileFetch };
}
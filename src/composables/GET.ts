import axios, { AxiosResponse } from "axios";
import { NewAxiosConfig } from "./AxiosConfig";

export async function useGet<_, R>(path: string) {
	var config = NewAxiosConfig<_>(path, "GET");
	var response: Awaited<R | Error> = await axios
		.get<_, AxiosResponse<R>>(path, config)
		.catch((e) => {
			console.log("API Error: " + e);
			return e;
		});
	return response;
}

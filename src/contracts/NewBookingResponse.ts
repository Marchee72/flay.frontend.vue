import { Shift } from "../constants/Shifts";

export default class NewBookingResponse {
	booking!: booking;
	has_active_penalties!: boolean;
	penalty!: penalty;
	is_abailable!: boolean;
}

class booking {
	common_space_name!: string;
	date!: Date;
	shift!: Shift;
}

class penalty {
	type!: string;
	cause!: string;
	end_date!: string;
}

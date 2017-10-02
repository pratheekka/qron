const FIELDPROPS = {
	s: {
		regex: new RegExp('.+')
	},
	m: {
		regex: new RegExp('.+')
	},
	h: {
		regex: new RegExp('.+')
	},
	d: {
		regex: new RegExp('.+')
	},
	M: {
		regex: new RegExp('.+')
	},
	w: {
		regex: new RegExp('.+')
	},
	y: {
		regex: new RegExp('.+')
	}
},
validate = (field, value) => {
	const fieldProp = FIELDPROPS[field];

	return fieldProp.regex.test(value);

};

export const FIELDS_ENUM = {
	SECONDS: "s",
	MINUTES: "m",
	HOURS: "h",
	DAYS: "d",
	MONTHS: "M",
	WEEKDAYS: "w",
	YEAR: "y"
};

export default class cronField {
	constructor(field, fieldValue) {
		this.value = fieldValue;
		this.isValid = validate(field, fieldValue);
	}
}
export default class {
	constructor(expression, options = {}) {
		this.expression = expression && expression.trim().replace(/\s\s+/, " ");
		this.options = options;
	}
}
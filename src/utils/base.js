class Base {
	constructor(){
		this.list = {}
	}
	set(key, value){
		this.list[key] = value;
	}
	get(key, value){
		return this.list[key];
	}
	clear(){
		this.list = {}
	}
}

export {Base}
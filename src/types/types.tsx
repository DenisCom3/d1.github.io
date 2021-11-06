export interface ToDo{
	id: number 
	title: string
	completed: boolean 
}


export interface IUser {
	id:  number
	name: string
	email: string
	adress: IAddress
}

export interface IAddress {
	street: string
	city: string
}

export enum Variable {
	any = 'any',
	great = 'great',
	fail = 'fail'
}


 export interface Item{
	id: number
	title:string
}

 export interface Board{
	id:number
	title: string
	items: Item[]
}



export function* generateCardId(startId: number  ) {



	for (let i = startId+1; i < 10000; i++) {
		yield i;
			
	}
	return 0
}
export interface Customer{
	id: string,
	firstName: string,
	lastName: string,
	email: Email,
	address: {
	  streetName: string,
	  houseNumber: string,
	  postalCode: string,
	  country: string
	},
	phoneNumber: {
	  number: string,
	  countryCallingCode: string
	}
}

export interface Email {
	localPart: string,
	domain: string,
	complete: string
}
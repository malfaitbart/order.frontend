export interface Customer{
	id: string,
	firstName: string,
	lastName: string,
	email: {
	  localPart: string,
	  domain: string,
	  complete: string
	},
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
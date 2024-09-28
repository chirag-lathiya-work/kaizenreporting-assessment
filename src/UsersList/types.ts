type Coordinates = {
    lat: number;
    lng: number;
}

type Address = {
    address: string;
    city: string;
    state: string;
    stateCode: string;
    postalCode: string;
    coordinates: Coordinates,
    country: string;
}

type Company = {
    name: string;
    title: string;
    department: string;
    address: Address;
}

export type User = {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    company: Company;
}

export type Users = null | [User]
export interface Passenger {
    name: string;
    children?: String[];
}

const passenger: Passenger = {
    name: 'Felipe',
    children: ['Juan Manuel', 'Isabela']
};

const returnChildrenNumber = ( passenger: Passenger ) => {
    const {name, children} = passenger;
    const howManyChildren = children!.length;

    console.log( "The passenger: ", name, "have: ", howManyChildren, " children." );
    return howManyChildren;
}

returnChildrenNumber( passenger );
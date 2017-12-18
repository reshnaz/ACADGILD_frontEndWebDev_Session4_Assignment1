namespace IphoneNameSpace { //namespace
    export interface Iphone { //defining interface
    model: string;
    releaseYear: number;
    color: string;
    }
    export function iphoneDetail(mobile: Iphone) { //function prints message in console
    console.log(`I currently own a ${mobile.color} colored iPhone ${mobile.model} which released in the year ${mobile.releaseYear}.`);
    }; 
}
// below line provides refernce to our ts file containing interface
/// <reference path="interface.ts"/>

//We provide property values here and call the function that displays output in console.
let mobilePhone: IphoneNameSpace.Iphone = { model: "X", releaseYear: 2017, color: "black" }
IphoneNameSpace.iphoneDetail(mobilePhone);
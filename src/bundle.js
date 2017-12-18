var IphoneNameSpace;
(function (IphoneNameSpace) {
    function iphoneDetail(mobile) {
        console.log("I currently own a " + mobile.color + " colored iPhone " + mobile.model + " which released in the year " + mobile.releaseYear + ".");
    }
    IphoneNameSpace.iphoneDetail = iphoneDetail;
    ;
})(IphoneNameSpace || (IphoneNameSpace = {}));
// below line provides refernce to our ts file containing interface
/// <reference path="interface.ts"/>
//We provide property values here and call the function that displays output in console.
var mobilePhone = { model: "X", releaseYear: 2017, color: "black" };
IphoneNameSpace.iphoneDetail(mobilePhone);

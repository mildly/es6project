import  { square as mysquare } from "./libs/lib";
import LameMachine from './machines/lamemachine';
import SuperSimpleMachine from './machines/supersimplemachine';

function square(n){
    console.log("ignore :"+n);
}

console.log( mysquare(5) );
let _lame=new LameMachine();
let _supersimple=new SuperSimpleMachine();
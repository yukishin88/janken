const GU =0;
const choki =1;
const pa =2;
let anser;


//チョキ大好きマンに対するアクション
function artionAgainstOmoteira(){
console.log
return 0;
}

function action(oppornent){
  console.log(oppornent);
  if(oppornent=="fighter::choki-lover"){
   anser = artionAgainstOmoteira()
  }
  return anser
}

//帰ってきた表か裏かマンに対するアクション
function actionAgainstOmoterUra2 (){
  conat isEven = matches % 3 == 0;
  let result = GU;
  if (isEven){
    result=choki;
  }
  return result;
}

function action(oppornent){
console.log(oppornent);
let result = GU;
countup();
if (oppornent =="fighter::choki-lover"){
  result = actionAgainstChokiDaisukiman();
}else{
  result = actionAgainstOmoterUra2();

}
return result;
}

/*
対戦相手なまえまとめ

チョキ大好きマン： fighter::choki-lover
表か裏かマン：　fighter::odd-even
帰ってきた表か裏かマン：fighter::on-third
*/

function action(oppornent){
console.log(oppornent);
let result = GU;
countup();
if (oppornent =="fighter::choki-lover"){
  result = actionAgainstChokiDaisukiman();
}else{
  if(opponent == "figther;;rotation"){
    result = actionAgainstChokiDaisukiman();
    }else{
      result = actionAgainstOmoterUra2();
   }
 }

return result;


}


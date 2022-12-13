let ema = document.querySelector('#email');
let mdp = document.querySelector('#mdp');
const con = true;
document.querySelector('#btnVa').addEventListener('click', Clcl)

function Clcl(){

  console.log(ema.value)
  coco = ema.value.split('@')
  console.log(coco[0])
  console.log(coco[1])
  if(coco[1] == ('gmail.com') && mdp.value.length > 6){
    console.log('connecter')
  }else if(coco[1] == ('hotmail.fr') && mdp.value.length > 6){
    console.log('connecter')
  }else if(coco[1] == ('icloud.com') && mdp.value.length > 6){
    console.log('connecter')
  }else{
    console.log('identifaint ou mot de passe manquant, veuillez saisir correctement les valeurs.')
    alert('veuillez re-essayer');
    con = false;
    return con
  }

  if(con == true){
    alert('vous etes bien connecter')
  }
}


//DOM
const touches = [... document.querySelectorAll('.buttons')];
const listkeycode = touches.map (touche => touche.dataset.key);
const ecran = document.querySelector ('.ecran');

document.addEventListener('keydown',  (e) =>{
    const valeur = e.keycode.toString();
     calculer(valeur)
} )

document.addEventListener('click', (e) => {
    const valeur = e.target.dataset.key;
     calculer(valeur)
} )

const calculer = (valeur) => {
    if(listkeycode.includes(valeur)) {
        switch(valeur)
        {
        case'67':
              ecran.textContent = "";
            break;
        case '187':
              const calcul = eval(ecran.textContent);
              ecran.textContent = calcul;
            break;
        default:
            const indexkeycode = listkeycode.indexOf(valeur);
            const touche = touches[indexkeycode];
            ecran.textContent += touche.innerHTML;
        }
    }
}

window.addEventListener('error', (e) => {
   alert ('une erreur survenue dans votre calcaul : ' + e.message )
})
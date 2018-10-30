export function main(){
    console.log("Gestiono el formulario porque ya tengo cargado el dom");
    document.querySelector('#form').addEventListener('submit',function(evt)
{
        evt.defaultPrevented();

        console.log("enviando");
  });
};
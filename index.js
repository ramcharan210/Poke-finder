
async function start()
{
  
  try
  {

      let pokemon=document.getElementById("pokemonname").value.toLowerCase();
      let responce=await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
      if(responce.ok)
      {
        let usable=await responce.json();
        let image=document.getElementById("image");
        image.src=usable.sprites.front_default;
        image.style.display="block";
        console.log(usable);
      }
      else
      {
        throw new Error("POKEMON NOT FOUND");
      }
  }
  catch(error)
  {
      console.error(error);
  }
}

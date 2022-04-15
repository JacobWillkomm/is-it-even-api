//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)


function getFetch(){
  const choice = document.querySelector('input').value
  const url = "https://api.isevenapi.xyz/api/iseven/"+choice

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data.iseven)
        if(data.iseven){
          document.querySelector('h3').innerText = "Yes"
        }else{
          document.querySelector('h3').innerText = "No"
        }

      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}


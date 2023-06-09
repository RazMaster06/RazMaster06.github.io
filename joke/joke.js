class JokeHandlerRequest {

    constructor(adress) {
        this.adress = adress;
    }
    async getJoke() {
        let joke_string = "This is not a joke :((";

        await fetch(
            this.adress,
            {
                method: "GET",
                headers: new Headers({
                    Accept: "application/json"
                })
            }
        )
        .then(res => res.json())
        .then(response => {
            joke_string = response.joke;

        })
        .catch(error => { console.log(error); joke_string += error });

        return joke_string;
    }
}
//End of Class

//Starta Program
const jokebutt = document.getElementById("jokebutton");
jokebutt.addEventListener("click", getJoke);
const p_joke = document.getElementById("pjoke");

async function getJoke(e) {
    const request_adress = 
    `https://v2.jokeapi.dev/joke/Any&type=singlehttps://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single`;
    let joke_object = new JokeHandlerRequest(request_adress)

    let t_var = await joke_object.getJoke()
    console.log(`t_var = ${t_var}`)
    p_joke.innerHTML = t_var;
}
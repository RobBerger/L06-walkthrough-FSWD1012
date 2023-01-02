function getJoke(){
    $.ajax(
        'https://backend-omega-seven.vercel.app/api/getjoke',
        {
            success: function (APIResponse) {
                console.log(APIResponse)
                let joke = JSON.parse(APIResponse);
                console.log(joke)
                let myJokeDiv = document.createElement('div');
                myJokeDiv.innerHTML = joke[0].question;
                let myButton = document.createElement('button');
                myButton.innerHTML = "Get Punchline";
            }
        })
}
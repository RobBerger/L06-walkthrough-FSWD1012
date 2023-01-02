

function getJoke(){
    $.ajax(
        'https://backend-omega-seven.vercel.app/api/getjoke',
        {
            success: function (APIResponse) {
                console.log(APIResponse);
                let joke = JSON.parse(APIResponse);
                console.log(joke);

                let bodyElementLength = document.body.children.length;
                console.log(bodyElementLength);

                let myJokeDiv = document.createElement('div');
                myJokeDiv.innerHTML = joke[0].question;
                let myButton = document.createElement('button');
                myButton.innerHTML = "Get Punchline"
                myButton.onclick = function(){
                    myJokeDiv.innerHTML += " " + joke[0].punchline
                }
                document.body.appendChild(myJokeDiv);
                document.body.appendChild(myButton);
            }
        })
}

let bodyArray = document.body.children;
console.log(bodyArray);
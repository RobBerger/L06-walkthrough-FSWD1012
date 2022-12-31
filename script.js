function getJoke(){
    $.ajax(
        'https://backend-omega-seven.vercel.app/api/getjoke',
        {
            success: function (APIResponse) {
                console.log(APIResponse)
            }
        })
  }
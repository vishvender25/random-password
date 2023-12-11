const btn = document.getElementById('generate')
const passValue = document.getElementById('password-value')
const toggleBtn = document.getElementById('toggle')

characters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
0,1,2,3,4,5,6,7,8,9,'!','@','#','$','%','&','a','b','c','d','e','f','g','h','i',
'j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'
]

const passLength = 16

var randomPassword = ''
toggleBtn.addEventListener('click' , ()=>{
  var type = passValue.type;
  
  (type == 'password') ? passValue.type='text' : passValue.type='password';
}
)


btn.addEventListener('click' , ()=>{
  for(var i = 0 ; i<passLength ; i++){
    var randomNumber = Math.random()*characters.length;
    var randomIndex = Math.floor(randomNumber)
    randomPassword += characters[randomIndex]
  }
    passValue.value = randomPassword;
    randomPassword = '';

}
)


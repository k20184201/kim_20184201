<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content= "width=device-width">
<title>Example</title>
<style>
    .success{
        background-color: green;
    }
    .failure{
        background-color: red;
    }
</style>
<script>
    fuction validate(){
        var input=document.getElementByld('password');

        input.className='';
        if(input.value==='0000'){
            input.className='success';
        }else{
            input.className='failure';
        }
    }
</script>
    </head>
    <body>
        <input type="password" id="password"></input>
        <button onclick="validate()">Validate</button>
    </body>
</html>
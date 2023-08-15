function enviar(){
    mensagem = document.querySelector('#mensagem');
    mensagem1 = mensagem.value;
    var a = 0;
    var b = 0;
    const email1 = document.querySelector('#email')
    ve = email1.value.substring(0, email1.value.indexOf("@"));
    ve2 = email1.value.substring(email1.value.indexOf("@") + 1, email1.value.length);

    if(mensagem1 == ''){
        alert('Você precisa preencher o campo mensagem!');
        a = a + 0;
    }
    else if(mensagem1.length < 20 || mensagem1.length > 300){
        alert('A mensagem deve conter no mínimo 20 caracteres e no máximo 300, nos conte porque deveríamos aceitar você, mas sem exagerar!');
        a = a +0;
    }
    else{
        a = a + 1;
    }

    if ((ve.length >=1) &&
    (ve2.length >=3) &&
    (ve.search("@")==-1) &&
    (ve2.search("@")==-1) &&
    (ve.search(" ")==-1) &&
    (ve2.search(" ")==-1) &&
    (ve2.search(".")!=-1) &&
    (ve2.indexOf(".") >=1)&&
    (ve2.lastIndexOf(".") < ve2.length - 1)) {
        b = b + 1
    }
    else{
        alert("E-mail invalido, não pode estar em branco, deve conter o arroba e o ponto, e tudo o que vai antes e depois de ambos!");
        b = b
    }

    if((a == 1) && (b == 1)){
        alert("Mensagem enviada com sucesso, caso seja aceito, enviaremos o link do nosso Discord via email para você, você deve entrar na call 'Novos membros', e nos informar o email que registrou.")
    }
    else{}
    













}
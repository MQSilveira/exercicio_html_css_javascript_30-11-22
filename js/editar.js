function carregastore(){
    return JSON.parse(localStorage.getItem('Funcionarios'));
}

function limpar(event){
    event.preventDefault();
    document.querySelector('form').reset();
    console.log('Limpando');
}

function editar(event){
    event.preventDefault();
    console.log('Salvo');
    
    var id = document.getElementsByName('id')[0].value;
    var nome_completo = document.getElementsByName('nome_completo')[0].value;
    var cargo = document.getElementsByName('cargo')[0].value;
    var salario = document.getElementsByName('salario')[0].value;

    var Funcionario = {
        'id': id,
        'nome_completo': nome_completo,
        'cargo': cargo,
        'salario': salario
};

var lista = carregastore();
var novalista = [];

lista.forEach(e => {
    if (e['id'] != id){
        novalista.push(e);
    }
    else {
        novalista.push(Funcionario);
    }
});

localStorage.setItem('Funcionarios', JSON.stringify(novalista));

alert('Funcionário editado com sucesso!')

//limpar(event);

window.location.href = "/listar.html"; // redireciona

};

function carregaCampos(dado){
    document.getElementsByName('id')[0].value = dado['id'];
    document.getElementsByName('nome_completo')[0].value = dado['nome_completo'];
    document.getElementsByName('cargo')[0].value = dado['cargo'];
    document.getElementsByName('salario')[0].value = dado['salario'];
};

function carregadados(){
    var urlParametros = new URLSearchParams(window.location.search);
    var id = parseInt = (urlParametros.get('id'));
    var funcionarios = JSON.parse(localStorage.getItem('Funcionarios'));

    funcionarios.forEach(e =>{
        if(e['id'] == id){
            carregaCampos(e);
        }
    });
};

window.onload = carregadados();

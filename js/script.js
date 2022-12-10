function limpar(event){
    event.preventDefault();
    document.querySelector('form').reset();
    console.log('Limpando');
};

function salvar(event){
    
    event.preventDefault();
    console.log('Salvo');

    var nome_completo = document.getElementsByName('nome_completo')[0].value;
    var cargo = document.getElementsByName('cargo')[0].value;
    var salario = document.getElementsByName('salario')[0].value;
    
    var listaFuncionarios = JSON.parse(localStorage.getItem('Funcionarios'));
    if (listaFuncionarios == null){
        listaFuncionarios = [];
    }

    var id = JSON.parse(localStorage.getItem('IdFuncionario'));
    if (listaFuncionarios == null){
        id = 0;
    }

    id = id + 1;

    var Funcionario = {
                        'id': id,
                        'nome_completo': nome_completo,
                        'cargo': cargo,
                        'salario': salario
    };

    listaFuncionarios.push(Funcionario);

    localStorage.setItem('IdFuncionario', JSON.stringify(id));
    localStorage.setItem('Funcionarios', JSON.stringify(listaFuncionarios));
    limpar(event);
}

document.getElementById('salvar').addEventListener('click', salvar)

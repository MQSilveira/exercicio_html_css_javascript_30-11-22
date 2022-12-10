function carregastore(){
    return JSON.parse(localStorage.getItem('Funcionarios'));
}

function carregarEditar(event, id){
    console.log('Evento de click', event);
    event.preventdefault();
    carregarEditar(id);
}

function carregar(){
    console.log('Carregando Janela');
    var tbory = document.querySelector('tbody');
    tbory.innerHTML = ''

    var funcionarios = localStorage.getItem('Funcionarios');

    funcionarios = JSON.parse(funcionarios);

    funcionarios.forEach((e) =>{
        var tr = `<tr>
                        <td>${e['id']}</td>
                        <td>${e['nome_completo']}</td>
                        <td>${e['cargo']}</td>
                        <td>${e['salario']}</td>
                        <td>
                        <a href="editar.html?id=${e['id']}">Editar</a>
                        <button href="" onclick="deletar(${e['id']})">Deletar</button>
                        </td>
                    </tr>`
            tbory.innerHTML += tr
    });
}

function deletar(id){
    var lista = carregastore();
    var novalista = [];
    lista.forEach(e => {
        if (e['id'] != id){
            novalista.push(e)
        }
    });
    localStorage.setItem('Funcionarios', JSON.stringify(novalista));
    carregar();
}

window.onload = carregar

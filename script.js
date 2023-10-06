const form = document.getElementById('form-contatos');
let contatos = "";
let arrTelefones = [];

form.addEventListener('submit', function (e) {
    e.preventDefault();
    adicionaContato();
    
});

function adicionaContato() {
    const nomeContato = document.getElementById('inputNome');
    const telefoneContato = document.getElementById('inputTelefone');

    if(arrTelefones.includes(telefoneContato.value)) {
        alert('Esse telefone já existe');
    } else {
        arrTelefones.push(telefoneContato.value);
        let novoContato = `
            <tr>
                <td>${nomeContato.value}</td>
                <td>${telefoneContato.value}</td>
            </tr>
        `
        contatos += novoContato;

        let table = document.querySelector('tbody');
        table.innerHTML = contatos;
    }

    nomeContato.value = '';
    telefoneContato.value = '';
}
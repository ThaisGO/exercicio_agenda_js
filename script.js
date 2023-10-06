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

const handlePhone = (event) => {
    let input = event.target
    input.value = phoneMask(input.value);
}

const phoneMask = (value) => {
    if (!value) return ""
    value = value.replace(/\D/g,'');
    value = value.replace(/(\d{2})(\d)/,"($1) $2");
    value = value.replace(/(\d)(\d{4})$/,"$1-$2");
    return value
}
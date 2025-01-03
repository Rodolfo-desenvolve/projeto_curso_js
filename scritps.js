let input = document.getElementById('inputTarefa');
let btnadd = document.getElementById('btn-add');
let main = document.getElementById('areaLista')
let contado = 0

function addTarefa(){
    // pegar valor digitado no input //

    let valorInput = input.value;
    
    // verificação do input //

    if ((valorInput !== "") && (valorInput !== null) && (valorInput !== undefined)){

        ++contado;

        let novoItem = `<div id="${contado}" class="item" onclick="marcarTarefa(${contado})">
            <div class="item-icon" onclick="marcarTarefa(${contado})">
                <i id="icone_${contado}" class="mdi mdi-checkbox-blank-circle-outline" onclick="marcarTarefa(${contado})"></i>
            </div>
            <div class="item-nome"  onclick="marcarTarefa(${contado})">
                <p onclick="marcarTarefa(${contado})">${valorInput}</p>
            </div>
            <div class="item-botao">
                <button class="delete" onclick="deletar(${contado})"><i class="fa-solid fa-trash"></i>Deletar</button>
            </div>
        </div>`
        // adicionar novos itens//
        main.innerHTML += novoItem;

        input.value = '';
        input.focus();

    }

}

function deletar(id){
    var tarefa = document.getElementById(id);
    tarefa.remove();
}

function marcarTarefa(id){
    var item = document.getElementById(id);
    var classe = item.getAttribute('class');
    
    if (classe == "item"){
        item.classList.add('clicado');

        var icone = document.getElementById('icone_' + id);
        console.log(icone)

        icone.classList.remove('mdi-checkbox-blank-circle-outline');
        icone.classList.add("mdi-check-circle-outline");

        item.parentNode.append(item);

    } else{
        item.classList.remove('clicado');

        var icone = document.getElementById('icone_' + id);
        icone.classList.remove("mdi-check-circle-outline");
        icone.classList.add("mdi-checkbox-blank-circle-outline");
    }

}

input.addEventListener("keyup" , function(event){
    if(event.keyCode === 13){
        event.preventDefault();
        btnadd.click();
    }
})
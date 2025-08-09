let lista = [];

function produto() {

    let produto = document.getElementById("produto").value;

        if (produto == "") {

            alert("Digite o produto");

        } else {

            lista.push(produto);
            document.getElementById("produto").value = "";

        }

}

function salvar() {

    produto();

    imprimir();

}

function imprimir() {

    let imprimir = document.getElementById("itens");

    imprimir.innerHTML = "";

        for (let i = 0; i < lista.length; i++) {

            let p = document.createElement("p");
            
            p.textContent = lista[i];

            imprimir.append(p);

        }

}
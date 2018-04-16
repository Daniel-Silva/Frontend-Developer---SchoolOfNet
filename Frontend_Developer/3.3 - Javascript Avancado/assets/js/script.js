var list = [
    {
        desc: 'rice',
        quant: 1,
        valor: 5.40,
        action: 'Edit | Delete'
    },
    {
        desc: 'beer',
        quant: 12,
        valor: 1.99,
        action: 'Edit | Delete'
    },
    {
        desc: 'meat',
        quant: 1,
        valor: 15.00,
        action: 'Edit | Delete'
    }
]


/* ACESSANDO DOM */

var getDom = (function(){
    var table = document.getElementById('listBody'),
        desc = document.getElementById('desc'),
        quant = document.getElementById('quant'),
        valor = document.getElementById('valor'),
        btn = document.getElementById('btn-add')
    
    return {
        table: table,
        desc: desc,
        quant: quant,
        valor: valor,
        btn: btn
    }
})(); 

/* RETORNANDO VALOR TOTAL */

function getTotal (list){
    var total = 0;
    
    for (var key in list){
        total += list[key].valor * list[key].quant;
    }
    
    return total;
}


/* CRIANDO LISTA NO DOM */

function setList (dom){
    var table = dom.table;
    
    // For que cria a <tr>
    for (var tr = 0; tr < 1; tr++){
        var newTr = document.createElement('tr');

        // For que cria a <td>
        for(var td = 0; td <= 4; td++){
            var newTd = document.createElement('td');

            // Switch que valida a posição da tabela
            switch(td){
                case 1: 
                    var line = document.createTextNode(dom.desc.value);
                    newTd.appendChild(line);
                    newTr.appendChild(newTd);
                    break;
                case 2: 
                    var line = document.createTextNode(dom.quant.value);
                    newTd.appendChild(line);
                    newTr.appendChild(newTd);
                    break;
                case 3: 
                    var line = document.createTextNode(dom.valor.value);
                    newTd.appendChild(line);
                    newTr.appendChild(newTd);
                    break;
                case 4: 
                    var line = document.createTextNode('Edit | Delete');
                    newTd.appendChild(line);
                    newTr.appendChild(newTd);
                    break;
            }

            table.appendChild(newTr);
        }
    }
}


/* ADD EVENT BTN */

var eventBtn = (function(dom){
    var btn = dom.btn;
    btn.addEventListener('click', function(event){
        event.preventDefault;
        setList(getDom)
    })
    
})(getDom)

















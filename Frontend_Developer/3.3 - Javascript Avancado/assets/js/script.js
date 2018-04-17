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


/* RETORNANDO VALOR TOTAL */

function getTotal (list){
    var total = 0;
    
    for (var key in list){
        total += list[key].valor * list[key].quant;
    }
    
    return total;
}


/* ADD DADOS DOS INPUTs NA LIST */

(function(){
    var btn = document.getElementById('btn-add')
    
    btn.addEventListener('click', function(event){
        event.preventDefault()
        
        list.unshift(
            {
                desc: document.getElementById('desc').value,
                quant: document.getElementById('quant').value,
                valor: document.getElementById('valor').value,
                action: 'Edit | Delete'
            }
        )
        console.log(list)
        return list;
    }); 
    setList(list)
})()

/* CRIANDO LISTA NO DOM */

function setList (list){
    var table = document.getElementById('listBody');
        
    // For que interagem com a list
    for (index in list){
        var val = list[index]
        
        //Formatando Caracteres
        var str = val.desc.toLowerCase();
        str = str.charAt(0).toUpperCase() + str.slice(1);
        var valIten = 'R$ '+ parseFloat(val.valor).toFixed(2)
        
        // For que cria a <tr>
        for (var tr = 0; tr < 1; tr++){
            var newTr = document.createElement('tr');
            
            // For que cria a <td>
            for(var td = 0; td <= 4; td++){
                var newTd = document.createElement('td');
                
                // Switch que valida a posição da tabela
                switch(td){
                    case 1: 
                        var line = document.createTextNode(str);
                        newTd.appendChild(line);
                        newTr.appendChild(newTd);
                        break;
                    case 2: 
                        var line = document.createTextNode(val.quant);
                        newTd.appendChild(line);
                        newTr.appendChild(newTd);
                        break;
                    case 3: 
                        var line = document.createTextNode(valIten);
                        newTd.appendChild(line);
                        newTr.appendChild(newTd);
                        break;
                    case 4: 
                        var line = document.createTextNode(val.action);
                        newTd.appendChild(line);
                        newTr.appendChild(newTd);
                        break;
                }
                
                table.appendChild(newTr);
            }
        }
    }
}










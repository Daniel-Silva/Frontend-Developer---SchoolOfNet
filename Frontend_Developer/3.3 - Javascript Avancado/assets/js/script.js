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


/* CRIANDO LISTA NO DOM */

function setList (list){
    var table = '<thead><tr><td>Description</td><td>Amount</td><td>Value</td><td>Action</td></tr></thead><tbody>';
        
    // For que interagem com a list
    for (index in list){
        var val = list[index]
        
        //Formatando Caracteres
        var str = val.desc.toLowerCase();
        str = str.charAt(0).toUpperCase() + str.slice(1);
        var valIten = 'R$ '+ parseFloat(val.valor).toFixed(2);
        
        table += '<tr><td>'+str+'</td><td>'+val.quant+'</td><td>'+valIten+'</td><td>'+val.action+'</td></tr>';
    }
    
    table += '</tbody>';
    document.getElementById('listTable').innerHTML = table;
}

/* ADD DADOS DOS INPUTs NA LIST */

function addDataList(){
    list.unshift(
        {
            desc: document.getElementById('desc').value,
            quant: document.getElementById('quant').value,
            valor: document.getElementById('valor').value,
            action: 'Edit | Delete'
        }
    )
    
    setList(list)
}

setList(list)








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
        
        table += '<tr><td>'+str+'</td><td>'+val.quant+'</td><td>'+valIten+'</td><td><button class="btn btn-default" onclick="setUpDate('+index+')">Edit</button> <button class="btn btn-default" onclick="deleteUpDate('+index+')">Delete</button></td></tr></td></tr>';
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
            action: '<button onclick="setUpDate()">Edit</button>'
        }
    )    
    setList(list)
}

/* EDITAR CAMPO DA TABELA */

function setUpDate (id){
    var obj = list[id];
    document.getElementById('desc').value = obj.desc;
    document.getElementById('quant').value = obj.quant;
    document.getElementById('valor').value = obj.valor
    document.getElementById('btnUpDate').style.display = 'inline-block';
    document.getElementById('btnAdd').style.display = 'none';
    
    document.getElementById('inputIdUpdate').innerHTML = '<input type="hidden" id="idUpDate" value="'+id+'">';
}


/* CANCELAR EDIÇÃO DE CAMPO */

function resetForm (){
    document.getElementById('desc').value = '';
    document.getElementById('quant').value = '';
    document.getElementById('valor').value = ''
    document.getElementById('btnUpDate').style.display = 'none';
    document.getElementById('btnAdd').style.display = 'inline-block';
    document.getElementById('inputIdUpdate').innerHTML = ''
}


/* SALVANDO ALTERAÇÕES DA TABELA */

function upDateData(){
    var id = document.getElementById('idUpDate').value;
    var desc = document.getElementById('desc').value;
    var quant = document.getElementById('quant').value;
    var valor = document.getElementById('valor').value;
    
    list[id] = {
        'desc': desc,
        'quant': quant,
        'valor': valor
    }
    resetForm();
    setList(list)
}

/* DELETANDO DADOS DA LISTA */

function deleteUpDate(id){
    if(confirm('Deseja deletar o item?')){
        if(id === list.length - 1){
            list.pop();
        }else if(id === 0){
            list.shift();
        }else{
            var arrAuxIni = list.slice(0, id);
            var arrAuxEnd = list.slice(id + 1);
            list = arrAuxIni.concat(arrAuxEnd)
        }
        setList(list)
    }
}


setList(list)








async function iceandfire(){

    try{
      url = "https://www.anapioficeandfire.com/api/books?page&pageSize=12"
      const data=await fetch(url)
      const data1= await data.json()
      // console.log(data1)
      createTableAndPopulate(data1)
    }
    catch (error){
      console.log(error)
    }
  }
  
  async function createTableAndPopulate(data1){
    table = document.getElementById("table")
    for (i=1; i<data1.length; i++){
      row = table.insertRow(i)
      for (j=0; j<7; j++){
        cell = row.insertCell(j)
        switch (j){
        case 0: table.rows[i].cells[j].innerText =  data1[i-1].name; break;
        case 1: table.rows[i].cells[j].innerText =  data1[i-1].isbn; break;
        case 2: table.rows[i].cells[j].innerText =  data1[i-1].numberOfPages; break;
        case 3: table.rows[i].cells[j].innerText =  data1[i-1].authors; break;
        case 4: table.rows[i].cells[j].innerText =  data1[i-1].publisher; break;
        case 5: table.rows[i].cells[j].innerText =  data1[i-1].released; break;
        case 6:
          temp = ''
          for(k=0; k<5; k++){
            var dataTemp = await fetch(data1[i-1].characters[k])
            var dataTemp2 = await dataTemp.json()
            temp = temp + dataTemp2['name']+("\n") 
          }
            table.rows[i].cells[j].innerText = temp; break;
        }
      }
    }
  }
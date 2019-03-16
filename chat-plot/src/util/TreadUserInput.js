// This function return an array of string Json 
function createJsonString(str)
{   
    let str1 = str.trim();
    let array = str1.split('\n');
    
    for(let i=0; i<array.length;i++)
    {
        array[i] = eval("("+(array[i])+")");
    }

    return array;
}

function verifyTimestamp(tInterval, tCurrent)
{
  return ((tCurrent >= tInterval[0]) && (tCurrent <= tInterval[1]));
}

// This function return index of lattest start type event 
function startIndex(array)
{
  for(let i=array.length-1;i>=0;i--)
  {
    if (array[i].type === 'start')
    {
      return i;
    }
  }

  return -1;
}

function updateDatas(newInterval, chartData1)
{
  for(let i=0; i<chartData1.length; i++)
  {
    

    if(!verifyTimestamp(newInterval,chartData1[i][0]))
    {
      alert("timestamp local: "+chartData1[i][0]);
      alert("tam vector"+ chartData1.length);
      chartData1.splice(i,1);
      alert("tam vector"+ chartData1.length);
    }
  }
}

// This function generate a dictionary that have datas e categories for chart plot
function createLabelCategorie(sJson, group1, select1, timestamp1, chartData1)
{
  let label = ""; // variable for concatenation between strings of group
  let labelgroup = []; // list for concatenation between strings of group and strings of select

  for (let i=0; i< group1.length; i++)
  {
    label = label + " " + sJson[group1[i]];
  }


  for (let i=0; i< select1.length; i++)
  {
    labelgroup[i] = label + " " + select1[i];
    labelgroup[i] = labelgroup[i].replace(/_/g, " ");
    //dic[labelgroup[i]] = sJson[select1[i]];
    //alert(timestamp1+"_"+labelgroup[i]+"_"+sJson[select1[i]]);
    chartData1.push([timestamp1, labelgroup[i], sJson[select1[i]]]); 
  }

  
}

// This function return the essencial datas for plot chart
function preparDataChart(str)
{
  let array = createJsonString(str);
  let index = startIndex(array);
  
  //alert(index);

  if (index < 0)
  {
    // no event start
    return false;
  }

  let chartData = [];
  let select = array[index].select;
  let group = array[index].group;
  
  let tGlobal = [];
  let dict = {"span": false,"data": false};
  
  for(let i=index+1; i < array.length; i++)
  {
    switch (array[i].type)
    {
    
      case 'span':
               
        // update timestamp
        tGlobal = [array[i].begin , array[i].end];

        if(dict['span'])
        {
          // update data
          if(chartData.length > 0)
          {
            updateDatas(tGlobal,chartData);
          }
  
        }else
        {
          dict['span'] = true;
          alert(dict['span']);
        }
        
        break;

      case 'data':
        
        if((dict['span']) && (verifyTimestamp(tGlobal, array[i].timestamp)))
        {
          createLabelCategorie(array[i], group, select, array[i].timestamp, chartData);
        }

        break;

      case 'stop':
        
        alert(chartData.length);
        
        let data = [];
        let categorie = [];

        for (let i=0; i<chartData.length; i++)
        {
          //alert(chartData[i]);
          categorie[i] = chartData[i][1];
          data[i] = chartData[i][2];
        }
      
        return {
          categorie: categorie,
          data:  data
        };

      default:
        alert(array[i].type);

    }
  }
  
}
export {preparDataChart}
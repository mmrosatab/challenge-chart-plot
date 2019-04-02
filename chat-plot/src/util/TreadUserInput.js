// This function return an array of string Json. 
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

// This function checks whether a timestamp passed as an argument is within a valid range.
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

/* This function is used when an span event is called for 
update list of datas removing index that timestamp is out new interval. */
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

// This function generate a dictionary that have datas e categories for chart plot.
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

// This function return a timestamp in format of minutes
function minInterval(timestamp)
{
  let date = new Date(timestamp);
  let timeString = date.toISOString().substr(11, 5);
  return timeString;
  
}

// This function return the essencial datas for plot chart
function preparDataChart(str)
{
  let array = createJsonString(str);
  let index = startIndex(array);

  if (index < 0)
  {
    // no event start
    alert("No start event was found");
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
          //alert(dict['span']);
        }
        
        break;

      case 'data':
        
        if((dict['span']) && (verifyTimestamp(tGlobal, array[i].timestamp)))
        {
          createLabelCategorie(array[i], group, select, array[i].timestamp, chartData);
        }

        break;

      case 'stop':
        
        let aux1 = {};
        let aux2 = {};
        let list = []

        for(let i=0;i<chartData.length;i++)
        {
          try
          {
            aux1[chartData[i][1]].push(chartData[i][2]);

          }catch
          {
            aux1[chartData[i][1]] = [chartData[i][2]];
          }

        }
        
        // transform datas in js object
        for(let i in aux1)
        {
          try
          {
            aux2[i].data = aux1[i];

          }catch
          {
            aux2[i] = {name: i, data: []};
            aux2[i].data = aux1[i];
            list.push(aux2[i]);

          }
          
        }

        // get format minutes of timestamp
        let t1 = minInterval(tGlobal[0]);
        let t2 = minInterval(tGlobal[1]);
        
        return{
          categories: [t1,t2],
          series: list
        };

      default:
        //alert(array[i].type);
        alert("Invalid event");
        return false;

    }
  }
  
}

// This function print data of series and categories of chartplot for verification
function printerData(aux)
{
  for(let i in aux)
  {
    alert("Key: "+i+" Value: "+aux[i]);
  }
}

export {preparDataChart}
function createJsonString(str) {
  let str1 = str.trim();
  let array = str1.split("\n");

  for (let i = 0; i < array.length; i++) {
    array[i] = eval("(" + array[i] + ")");
  }

  return array;
}

function verifyTimestamp(tInterval, tCurrent) {
  return tCurrent >= tInterval[0] && tCurrent <= tInterval[1];
}

function startIndex(array) {
  for (let i = array.length - 1; i >= 0; i--) {
    if (array[i].type === "start") {
      return i;
    }
  }
  return -1;
}

function updateDatas(newInterval, chartData1) {
  for (let i = 0; i < chartData1.length; i++) {
    if (!verifyTimestamp(newInterval, chartData1[i][0])) {
      chartData1.splice(i, 1);
    }
  }
}

function createLabelCategorie(sJson, group1, select1, timestamp1, chartData1) {
  let label = "";
  let labelgroup = [];

  for (let i = 0; i < group1.length; i++) {
    label = label + " " + sJson[group1[i]];
  }

  for (let i = 0; i < select1.length; i++) {
    labelgroup[i] = label + " " + select1[i];
    labelgroup[i] = labelgroup[i].replace(/_/g, " ");
    chartData1.push([timestamp1, labelgroup[i], sJson[select1[i]]]);
  }
}

function minInterval(timestamp) {
  let date = new Date(timestamp);
  let timeString = date.toISOString().substr(11, 5);
  return timeString;
}

function preparDataChart(str) {
  let array = createJsonString(str);
  let index = startIndex(array);

  if (index < 0) {
    return false;
  }

  let chartData = [];
  let select = array[index].select;
  let group = array[index].group;
  let tGlobal = [];
  let dict = { span: false, data: false };

  for (let i = index + 1; i < array.length; i++) {
    switch (array[i].type) {
      case "span":
        tGlobal = [array[i].begin, array[i].end];

        if (dict["span"]) {
          if (chartData.length > 0) {
            updateDatas(tGlobal, chartData);
          }
        } else {
          dict["span"] = true;
        }

        break;

      case "data":
        if (dict["span"] && verifyTimestamp(tGlobal, array[i].timestamp)) {
          createLabelCategorie(
            array[i],
            group,
            select,
            array[i].timestamp,
            chartData
          );
        }

        break;

      case "stop":
        if (chartData.length === 0) {
          return false;
        }

        let aux1 = {};
        let aux2 = {};
        let list = [];

        for (let i = 0; i < chartData.length; i++) {
          try {
            aux1[chartData[i][1]].push(chartData[i][2]);
          } catch {
            aux1[chartData[i][1]] = [chartData[i][2]];
          }
        }

        for (let i in aux1) {
          try {
            aux2[i].data = aux1[i];
          } catch {
            aux2[i] = { name: i, data: [] };
            aux2[i].data = aux1[i];
            list.push(aux2[i]);
          }
        }

        let t1 = minInterval(tGlobal[0]);
        let t2 = minInterval(tGlobal[1]);

        return {
          categories: [t1, t2],
          series: list,
        };

      default:
        return false;
    }
  }
}

export { preparDataChart };

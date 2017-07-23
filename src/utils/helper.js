export function decodeToken(token) {
  try {
    if (token !== null && token !== undefined && token !== "")
      return token;
    else
      return null;
  }
  catch (e) {
    return null;
  }
}

export function Create2DArray(rows) {
  var arr = [];

  for (var i=0;i<rows;i++) {
     arr[i] = [];
  }

  return arr;
}

export function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function createGuid(){  
   function S4() {  
      return (((1+Math.random())*0x10000)|0).toString(16).substring(1);  
   }  
   return (S4() + S4() + "-" + S4() + "-4" + S4().substr(0,3) + "-" + S4() + "-" + S4() + S4() + S4()).toLowerCase();  
} 

export function isNumberKey(evt){
    var charCode = evt.value.charCodeAt(0)
    if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;
    return true;
}

export function getMonths(startDate, endDate) {
  var Months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  var start = startDate.split('/');
  var end = endDate.split('/');
  var startYear = parseInt(start[2], 0);
  var endYear = parseInt(end[2], 0);
  var dates = [];

  for (var i = startYear; i <= endYear; i++) {
    var endMonth = i !== endYear ? 11 : parseInt(end[1], 0) - 1;
    var startMon = i === startYear ? parseInt(start[1], 0) - 1 : 0;
    console.log(endMonth);
    for (var j = startMon; j <= endMonth; j = j > 12 ? j % 12 || 11 : j + 1) {
      //var month = j + 1;
      //var displayMonth = month < 10 ? '0' + month : month;
      dates.push([Months[j], i].join('-'));
    }
  }
  return dates;
}
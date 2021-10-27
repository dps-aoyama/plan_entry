window.onload = function () {
   var now =dateToFormatString(new Date(), '%YYYY%%MM%%DD%%HH%%mm%%ss%');
    var spread = new GC.Spread.Sheets.Workbook(document.getElementById("ss"), {calcOnDemand: true});
    GC.Spread.Common.CultureManager.culture("ja-jp");       
    spread.fromJSON(gessho);
    document.getElementById('saveExcel').onclick = function () {

    var fileName = "gessho"+now+".xlsx";
    var password = "";
    if (fileName.substr(-5, 5) !== '.xlsx') {
        fileName += '.xlsx';
    }

    var json = spread.toJSON();
	var excelIo = new GC.Spread.Excel.IO();
    excelIo.save(json, function (blob) {
        saveAs(blob, fileName);
    }, function (e) {
        // process error
        console.log(e);
    }, {password: password});

    };
}
function Event(action){
		if(action == "update") {
			document.getElementById("check-modal").style.visibility = "visible";
			document.getElementById("mask").style.visibility  = "visible";
		} 
}

function MainEvent(check){
		if(check == "do") {
			document.getElementById("check-modal").style.visibility = "hidden";
			document.getElementById("end-modal").style.visibility = "visible";
		
	} else if (check == "cancel") {
		document.getElementById("check-modal").style.visibility = "hidden";
		document.getElementById("mask").style.visibility  = "hidden";
	} else if (check == "end") {
		document.getElementById("end-modal").style.visibility = "hidden";
		document.getElementById("mask").style.visibility  = "hidden";
	}
}

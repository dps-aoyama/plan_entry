		$(document).ready(function () {                    
			var spread = new GC.Spread.Sheets.Workbook(document.getElementById("ss"),{sheetCount:3});
			$.ajax({
				type: "GET",
				url: "C:\\Users\\user074-dps\\Documents\\spreadjs_json_formatload_sample\\flask\\TestFile.ssjson",
				datatype: "json",
				success: function (data) {
					// ここでssjsonファイルをロードします。
					spread.suspendPaint();
					spread.fromJSON(JSON.parse(data));
					spread.resumePaint();
				},
				error: function (ex) {
					console.log(ex);
				}
			});
		});
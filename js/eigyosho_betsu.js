     window.onload = function() {
        // スプレッドシートを生成する処理
        
        
   	  var now =dateToFormatString(new Date(), '%YYYY%%MM%%DD%%HH%%mm%%ss%');
      var spread = new GC.Spread.Sheets.Workbook(document.getElementById("ss"), { sheetCount: 2 });
      //描画を無効にする
      spread.suspendPaint();
      //新規シート作成のボタンを消す
      spread.options.newTabVisible = false;
      GC.Spread.Common.CultureManager.culture("ja-jp");          			
	  var lockStyle = new GC.Spread.Sheets.Style();
	  lockStyle.locked = true; 
	  var UnLockStyle = new GC.Spread.Sheets.Style();
	  UnLockStyle.locked = false; 
	  UnLockStyle.backColor = '#FFFF66';
	var option = {
		allowSelectLockedCells:true,
		allowSelectUnlockedCells:true,
		allowFilter: true,
		allowSort: false,
		allowResizeRows: true,
		allowResizeColumns: false,
		allowEditObjects: false,
		allowDragInsertRows: false,
		allowDragInsertColumns: false,
		allowInsertRows: false,
		allowInsertColumns: false,
		allowDeleteRows: false,
		allowDeleteColumns: false,
		allowOutlineColumns: false,
		allowOutlineRows: false
	};
for (let si = 0; si < 2; si++) {
        var sheet = spread.getSheet(si);
        sheet.name("帳票"+(si+1));

		// ビューポート（＝左上セルから右下セルまでの領域）で表示する行・列の数を指定
		sheet.setRowCount(200, GC.Spread.Sheets.SheetArea.viewport);
		sheet.setColumnCount(100, GC.Spread.Sheets.SheetArea.viewport); // 上の第2引数はデフォルト値なので指定不要

		// 行／列のヘッダーを表示する（true）／しない（false）
		sheet.options.rowHeaderVisible = true;
		sheet.options.colHeaderVisible = true;
		// ヘッダーテキストの種類を指定(blank,letters,numbers)
		sheet.options.rowHeaderAutoText = GC.Spread.Sheets.HeaderAutoText.numbers;
		sheet.options.colHeaderAutoText = GC.Spread.Sheets.HeaderAutoText.letters;
		
		sheet.frozenRowCount(4);
    	sheet.frozenColumnCount(6);


//****************************
//支店名
//****************************
//名称設定
sheet.setValue(0, 3, "関東中央支店");
//幅自動調整
sheet.autoFitColumn(3);

//****************************
//支店名
//****************************
//名称設定
if(si==0){
	sheet.setValue(0, 4, "川口");
}
if(si==1){
	sheet.setValue(0, 4, "東京");
}
//セル結合
sheet.addSpan(0, 4, 1, 2);
//表示位置指定（行：右寄せ、列：下位置）
sheet.getCell(0, 4).hAlign(GC.Spread.Sheets.HorizontalAlign.right).vAlign(GC.Spread.Sheets.VerticalAlign.bottom);

//****************************
//集計
//****************************
//名称設定
sheet.setValue(0, 6, "営業所");

//****************************
//期
//****************************
//名称設定
sheet.setValue(0, 20, "2022年3月期");
sheet.autoFitColumn(20);

//****************************
//単位
//****************************
//名称設定
sheet.setValue(2, 19, "単位：金額/千円");
sheet.autoFitColumn(19);

//****************************
//項目
//****************************
//名称設定
sheet.setValue(3, 0, "項目");
sheet.getCell(3, 0).foreColor("white");
//セル結合
sheet.addSpan(3, 0, 1, 6);
//セル背景色(シルバー)
sheet.getCell(3, 0).backColor("#0D2B26");
sheet.getCell(3, 0).hAlign(GC.Spread.Sheets.HorizontalAlign.center).vAlign(GC.Spread.Sheets.VerticalAlign.center);

//実線
var lineStyle = GC.Spread.Sheets.LineStyle.thin;
var lineBorder = new GC.Spread.Sheets.LineBorder("black", lineStyle);
sheet.getRange(3, 0, 1, 6).setBorder(lineBorder, { left: true, right: true, top: true, bottom: true });

//****************************
//上期
//****************************
//表示データ
var month_kamiki =['4月', '5月', '6月','7月', '8月', '9月','上期計'];
//表示位置設定
var len_month_kamiki = 6;
for (let i = 0; i < month_kamiki.length; i++) {
	sheet.setValue(3, len_month_kamiki+i, month_kamiki[i]);
	sheet.getCell(3, len_month_kamiki+i).backColor("#0D2B26");
	sheet.getCell(3, len_month_kamiki+i).foreColor("white");
	sheet.getCell(3, len_month_kamiki+i).hAlign(GC.Spread.Sheets.HorizontalAlign.center).vAlign(GC.Spread.Sheets.VerticalAlign.bottom);
	var lineStyle = GC.Spread.Sheets.LineStyle.thin;
	var lineBorder = new GC.Spread.Sheets.LineBorder("black", lineStyle);
	sheet.getRange(3, len_month_kamiki+i, 1, 1).setBorder(lineBorder, { all: true });
}

//****************************
//下期
//****************************
//表示データ
var month_shimoki =['10月', '11月', '12月','1月', '2月', '3月','下期計'];
var len_month_shimoki = 13;
for (let i = 0; i < month_shimoki.length; i++) {
	sheet.setValue(3, len_month_shimoki+i, month_shimoki[i]);
	sheet.getCell(3, len_month_shimoki+i).backColor("#0D2B26");
	sheet.getCell(3, len_month_shimoki+i).foreColor("white");
	sheet.getCell(3, len_month_shimoki+i).hAlign(GC.Spread.Sheets.HorizontalAlign.center).vAlign(GC.Spread.Sheets.VerticalAlign.bottom);
	var lineStyle = GC.Spread.Sheets.LineStyle.thin;
	var lineBorder = new GC.Spread.Sheets.LineBorder("black", lineStyle);
	sheet.getRange(3, len_month_shimoki+i, 1, 1).setBorder(lineBorder,  { all: true });
}

//****************************
//年計
//****************************
//表示データ
var nenkei =['年計', '伸び率'];

var len_nenkei = 20;
for (let i = 0; i < nenkei.length; i++) {
	sheet.setValue(3, len_nenkei+i, nenkei[i]);
	sheet.getCell(3, len_nenkei+i).backColor("#0D2B26");
	sheet.getCell(3, len_nenkei+i).foreColor("white");
	sheet.getCell(3, len_nenkei+i).hAlign(GC.Spread.Sheets.HorizontalAlign.center).vAlign(GC.Spread.Sheets.VerticalAlign.bottom);
	var lineStyle = GC.Spread.Sheets.LineStyle.thin;
	var lineBorder = new GC.Spread.Sheets.LineBorder("black", lineStyle);
	sheet.getRange(3, len_nenkei+i, 1, 1).setBorder(lineBorder, { all: true });
}

//****************************
//区分
//****************************
//名称設定(新規)
var len_item_new = 4;
sheet.getCell(len_item_new, 0).value("新\n\n規").wordWrap(true);
//セル結合
sheet.addSpan(len_item_new, 0, 56, 1);
sheet.autoFitColumn(0);
sheet.autoFitRow(len_item_new);
//セル背景色(シルバー)
sheet.getCell(len_item_new, 0).backColor("#86C2C0");
sheet.getCell(len_item_new, 0).foreColor("#0D2B26");
sheet.getCell(len_item_new, 0).hAlign(GC.Spread.Sheets.HorizontalAlign.center).vAlign(GC.Spread.Sheets.VerticalAlign.center);
//セル罫線
var lineStyle = GC.Spread.Sheets.LineStyle.thin;
var lineBorder = new GC.Spread.Sheets.LineBorder("black", lineStyle);
sheet.getRange(len_item_new, 0, 24, 1).setBorder(lineBorder, { left: true, right: true, top: true, bottom: true });

//名称設定(販売量)
var len_item_sales = 60;
sheet.getCell(len_item_sales, 0).value("販\n売\n量").wordWrap(true);
//セル結合
sheet.addSpan(len_item_sales, 0, 50, 1);
//セル背景色(シルバー)
sheet.getCell(len_item_sales, 0).backColor("#86C2C0");
sheet.getCell(len_item_sales, 0).foreColor("#0D2B26");
sheet.getCell(len_item_sales, 0).hAlign(GC.Spread.Sheets.HorizontalAlign.center).vAlign(GC.Spread.Sheets.VerticalAlign.center);
//セル罫線
var lineStyle = GC.Spread.Sheets.LineStyle.thin;
var lineBorder = new GC.Spread.Sheets.LineBorder("black", lineStyle);
sheet.getRange(len_item_sales, 0, 96, 1).setBorder(lineBorder, { left: true, right: true, top: true, bottom: true });


//表示データ
var category_new =['液石\n(件)', '簡易ガス\n(件)', '自社導管\n(旧都市ガス)\n(件)','他社導管\n(新都市ガス)\n(件)', '合計\n(件)', '電気(件)'];
var len_category_new = 4;

//表示データ(項目)
var patten_select =['家庭用', '商業用', '工業用','その他', '合計'];
var len_patten = 4;

//表示データ(電気)
var patten_Electricity =['低圧', '高圧', '合計'];
var len_patten = 4;


//表示データ
var patten_plan =['計画', '前年実績'];
var len_patten = 4;


for (let i = 0; i < category_new.length; i++) {

	if(category_new[i] != '電気(件)'){
		//表示データ
		sheet.getCell(len_category_new +  i * 10 , 1).value(category_new[i]).wordWrap(true);
		//セル結合
		sheet.addSpan(len_category_new + i * 10 , 1, 10, 3);
		sheet.autoFitColumn(0);
		sheet.autoFitRow(len_category_new * (i+1));
		//セル背景色(シルバー)
		sheet.getCell(len_category_new + i * 10, 1).backColor("#86C2C0");
		sheet.getCell(len_category_new + i * 10, 1).foreColor("#0D2B26");
		sheet.getCell(len_category_new + i * 10, 1).hAlign(GC.Spread.Sheets.HorizontalAlign.center).vAlign(GC.Spread.Sheets.VerticalAlign.center);
		//セル罫線
		var lineStyle = GC.Spread.Sheets.LineStyle.thin;
		var lineBorder = new GC.Spread.Sheets.LineBorder("black", lineStyle);
		sheet.getRange(len_category_new + i * 10,1,10, 3).setBorder(lineBorder, { left: true, right: true, top: true, bottom: true });
	}else{
		//表示データ
		sheet.getCell(len_category_new +  i * 10 , 1).value(category_new[i]).wordWrap(true);
		//セル結合
		sheet.addSpan(len_category_new + i * 10 , 1, 6, 3);
		sheet.autoFitColumn(0);
		sheet.autoFitRow(len_category_new * (i+1));
		//セル背景色(シルバー)
		sheet.getCell(len_category_new + i * 10, 1).backColor("#86C2C0");
		sheet.getCell(len_category_new + i * 10, 1).foreColor("#0D2B26");
		sheet.getCell(len_category_new + i * 10, 1).hAlign(GC.Spread.Sheets.HorizontalAlign.center).vAlign(GC.Spread.Sheets.VerticalAlign.center);
		//セル罫線
		var lineStyle = GC.Spread.Sheets.LineStyle.thin;
		var lineBorder = new GC.Spread.Sheets.LineBorder("black", lineStyle);
		sheet.getRange(len_category_new + i * 10,1,10, 3).setBorder(lineBorder, { left: true, right: true, top: true, bottom: true });

	}
	
	if(category_new[i] != '電気(件)'){
	
		for (let j = 0; j < patten_select.length; j++) {
			//表示データ
			sheet.getCell((i * 10) + (len_patten +  j * 2) , 4).value(patten_select[j]).wordWrap(true);
			//セル結合
			sheet.addSpan((i * 10) + len_patten + j * 2 , 4, 2, 1);
			sheet.autoFitColumn(0);
			sheet.autoFitRow(len_patten * (j+1));
			//セル背景色(シルバー)
			sheet.getCell((i * 10) + len_patten + j * 2, 4).backColor("#86C2C0");
			sheet.getCell((i * 10) + len_patten + j * 2, 4).foreColor("#0D2B26");
			sheet.getCell((i * 10) + len_patten + j * 2, 4).hAlign(GC.Spread.Sheets.HorizontalAlign.center).vAlign(GC.Spread.Sheets.VerticalAlign.center);
			//セル罫線
			var lineStyle = GC.Spread.Sheets.LineStyle.thin;
			var lineBorder = new GC.Spread.Sheets.LineBorder("black", lineStyle);
			sheet.getRange((i * 10) + len_patten + j * 2,4,2, 1).setBorder(lineBorder, { left: true, right: true, top: true, bottom: true });
			
			
			for (let k = 0; k < patten_plan.length; k++) {
				//表示データ
				sheet.getCell((i * 10) + (j * 2) + (len_patten +  k), 5).value(patten_plan[k]).wordWrap(true);
				//セル背景色(シルバー)
				sheet.getCell((i * 10) + (j * 2) + (len_patten +  k), 5).backColor("#86C2C0");
				sheet.getCell((i * 10) + (j * 2) + (len_patten +  k), 5).foreColor("#0D2B26");
				sheet.getCell((i * 10) + (j * 2) + (len_patten +  k), 5).hAlign(GC.Spread.Sheets.HorizontalAlign.center).vAlign(GC.Spread.Sheets.VerticalAlign.center);
				//セル罫線
				var lineStyle = GC.Spread.Sheets.LineStyle.thin;
				var lineBorder = new GC.Spread.Sheets.LineBorder("black", lineStyle);
				sheet.getRange((i * 10) + (j * 2) + (len_patten +  k),5,1, 1).setBorder(lineBorder, { left: true, right: true, top: true, bottom: true });
			}
			
		}
	}else{
	
		for (let j = 0; j < patten_Electricity.length; j++) {
			//表示データ
			sheet.getCell((i * 10) + (len_patten +  j * 2) , 4).value(patten_Electricity[j]).wordWrap(true);
			//セル結合
			sheet.addSpan((i * 10) + len_patten + j * 2 , 4, 2, 1);
			sheet.autoFitColumn(0);
			sheet.autoFitRow(len_patten * (j+1));
			//セル背景色(シルバー)
			sheet.getCell((i * 10) + len_patten + j * 2, 4).backColor("#86C2C0");
			sheet.getCell((i * 10) + len_patten + j * 2, 4).foreColor("#0D2B26");
			sheet.getCell((i * 10) + len_patten + j * 2, 4).hAlign(GC.Spread.Sheets.HorizontalAlign.center).vAlign(GC.Spread.Sheets.VerticalAlign.center);
			//セル罫線
			var lineStyle = GC.Spread.Sheets.LineStyle.thin;
			var lineBorder = new GC.Spread.Sheets.LineBorder("black", lineStyle);
			sheet.getRange((i * 10) + len_patten + j * 2,4,2, 1).setBorder(lineBorder, { left: true, right: true, top: true, bottom: true });
			
			
			for (let k = 0; k < patten_plan.length; k++) {
				//表示データ
				sheet.getCell((i * 10) + (j * 2) + (len_patten +  k), 5).value(patten_plan[k]).wordWrap(true);
				//セル背景色(シルバー)
				sheet.getCell((i * 10) + (j * 2) + (len_patten +  k), 5).backColor("#86C2C0");
				sheet.getCell((i * 10) + (j * 2) + (len_patten +  k), 5).hAlign(GC.Spread.Sheets.HorizontalAlign.center).vAlign(GC.Spread.Sheets.VerticalAlign.center);
				//セル罫線
				var lineStyle = GC.Spread.Sheets.LineStyle.thin;
				var lineBorder = new GC.Spread.Sheets.LineBorder("black", lineStyle);
				sheet.getRange((i * 10) + (j * 2) + (len_patten +  k),5,1, 1).setBorder(lineBorder, { left: true, right: true, top: true, bottom: true });
			}
			
			
		}
	
	}

	//データ(上期)
	var kamiki_data_1 =['24', '10', '3', '9', '15', '11'];
	var kamiki_data_2 =['15', '7', '8', '12', '4', '2'];
	var kamiki_data_3 =['0', '0', '1', '2', '0', '0'];
	var kamiki_data_4 =['1', '0', '0', '3', '0', '1'];
	var kamiki_data_5 =['0', '0', '1', '2', '1', '3'];
	var kamiki_data_6 =['0', '3', '2', '1', '0', '0'];
	var kamiki_data_7 =['0', '0', '1', '2', '0', '0'];
	var kamiki_data_8 =['1', '0', '2', '1', '0', '1'];
	var kamiki_data = [kamiki_data_1, kamiki_data_2,kamiki_data_3,kamiki_data_4,kamiki_data_5, kamiki_data_6,kamiki_data_7,kamiki_data_8];

	//データ(下期)
	var shimoki_data_1 =['23', '17', '3', '12', '15', '18'];
	var shimoki_data_2 =['11', '1', '3', '6', '5', '4'];
	var shimoki_data_3 =['9', '3', '2', '7', '8', '4'];
	var shimoki_data_4 =['1', '1', '5', '4', '6', '1'];
	var shimoki_data_5 =['2', '1', '0', '1', '1', '1'];
	var shimoki_data_6 =['11', '1', '3', '0', '0', '0'];
	var shimoki_data_7 =['1', '3', '2', '1', '8', '4'];
	var shimoki_data_8 =['1', '1', '5', '4', '6', '1'];
	var shimoki_data = [shimoki_data_1, shimoki_data_2,shimoki_data_3,shimoki_data_4,shimoki_data_5, shimoki_data_6,shimoki_data_7,shimoki_data_8];

	//下期計
	var formulas_shimoki = [
	        ["=SUM(N5:S5)"],
	        ["=SUM(N6:S6)"],
	        ["=SUM(N7:S7)"],
	        ["=SUM(N8:S8)"],
	        ["=SUM(N9:S9)"],
	        ["=SUM(N10:S10)"],
	        ["=SUM(N11:S11)"],
	        ["=SUM(N12:S12)"],
	        ["=SUM(N13:S13)"],
	        ["=SUM(N14:S14)"]
	    ];

	//年計
	var formulas_nenkei = [
	        ["=SUM(M5,T5)"],
	        ["=SUM(M6,T6)"],
	        ["=SUM(M7,T7)"],
	        ["=SUM(M8,T8)"],
	        ["=SUM(M9,T9)"],
	        ["=SUM(M10,T10)"],
	        ["=SUM(M11,T11)"],
	        ["=SUM(M12,T12)"],
	        ["=SUM(M13,T13)"],
	        ["=SUM(M14,T14)"]
	    ];

	//上期_合計
	var formulas_kamiki_total1 = [
	        ["=SUM(G5,G7,G9,G11)"],
	        ["=SUM(H5,H7,H9,H11)"],
	        ["=SUM(I5,I7,I9,I11)"],
	        ["=SUM(J5,J7,J9,J11)"],
	        ["=SUM(K5,K7,K9,K11)"],
	        ["=SUM(L5,L7,L9,L11)"],
	    ];
	    
	var formulas_kamiki_total2 = [
	        ["=SUM(G6,G8,G10,G12)"],
	        ["=SUM(H6,H8,H10,H12)"],
	        ["=SUM(I6,I8,I10,I12)"],
	        ["=SUM(J6,J8,J10,J12)"],
	        ["=SUM(K6,K8,K10,K12)"],
	        ["=SUM(L6,L8,L10,L12)"],
	    ];

	var formulas_kamiki_total = [formulas_kamiki_total1, formulas_kamiki_total2];


	//下期_合計
	var formulas_shimoki_total1 = [
	        ["=SUM(N5,N7,N9,N11)"],
	        ["=SUM(O5,O7,O9,O11)"],
	        ["=SUM(P5,P7,P9,P11)"],
	        ["=SUM(Q5,Q7,Q9,Q11)"],
	        ["=SUM(R5,R7,R9,R11)"],
	        ["=SUM(S5,S7,S9,S11)"]
	    ];

	var formulas_shimoki_total2 = [
	        ["=SUM(N6,N8,N10,N12)"],
	        ["=SUM(O6,O8,O10,O12)"],
	        ["=SUM(P6,P8,P10,P12)"],
	        ["=SUM(Q6,Q8,Q10,Q12)"],
	        ["=SUM(R6,R8,R10,R12)"],
	        ["=SUM(S6,S8,S10,S12)"]
	    ];

	var formulas_shimoki_total = [formulas_shimoki_total1, formulas_shimoki_total2];




	var len_data = 4;

	//実データ(上期)
	for (let i_cnt = 0; i_cnt < kamiki_data.length; i_cnt++) {
	
		var ret = kamiki_data[i_cnt];
	
		for(let j_cnt = 0; j_cnt < ret.length; j_cnt++){
			//表示データ

	  
			for(let q=0;q<4;q++){
			sheet.getCell((len_data +  i_cnt +q*10), 6 + j_cnt).value(ret[j_cnt]).wordWrap(true);
			//セル背景色(黄色)
			if(i_cnt%2 == 0){
				sheet.setStyle((len_data +  i_cnt+q*10), 6 + j_cnt,UnLockStyle);
				
			}
			if(i_cnt%2 != 0){
				sheet.setStyle((len_data +  i_cnt+q*10), 6 + j_cnt,lockStyle);
				
			}
			sheet.getCell((len_data +  i_cnt + q*10), 6 + j_cnt).hAlign(GC.Spread.Sheets.HorizontalAlign.right).vAlign(GC.Spread.Sheets.VerticalAlign.center);
			//セル罫線
			var lineStyle = GC.Spread.Sheets.LineStyle.thin;
			var lineBorder = new GC.Spread.Sheets.LineBorder("black", lineStyle);
			sheet.getRange((len_data +  i_cnt+q*10), 6 + j_cnt,1, 1).setBorder(lineBorder, { left: true, right: true, top: true, bottom: true });
			}
		}
	}


	//実データ(下期)
	for (let i_cnt = 0; i_cnt < shimoki_data.length; i_cnt++) {
	
		var ret = shimoki_data[i_cnt];
	
		for(let j_cnt = 0; j_cnt < ret.length; j_cnt++){
			//表示データ
			for(let q=0;q<4;q++){
			sheet.getCell((len_data +  i_cnt+q*10), 13 + j_cnt).value(ret[j_cnt]).wordWrap(true);


			//セル背景色(黄色)
			if(i_cnt%2 == 0){
				sheet.setStyle((len_data +  i_cnt+q*10), 13 + j_cnt,UnLockStyle);
			}
			
			sheet.getCell((len_data +  i_cnt+q*10), 13 + j_cnt).hAlign(GC.Spread.Sheets.HorizontalAlign.right).vAlign(GC.Spread.Sheets.VerticalAlign.center);
			
			//セル罫線
			var lineStyle = GC.Spread.Sheets.LineStyle.thin;
			var lineBorder = new GC.Spread.Sheets.LineBorder("black", lineStyle);
			sheet.getRange((len_data +  i_cnt+q*10), 13 + j_cnt,1, 1).setBorder(lineBorder, { left: true, right: true, top: true, bottom: true });
			
			}

		}

	}


	var len_total_data = 12;

	//上期_合計
	for (let i_cnt = 0; i_cnt < formulas_kamiki_total.length; i_cnt++) {

		var ret = formulas_kamiki_total[i_cnt];
	
		for(let j_cnt = 0; j_cnt < ret.length; j_cnt++){
			//表示データ
			for(let q=0;q<4;q++){
			sheet.setFormula(len_total_data + q*10+  i_cnt, 6 + j_cnt, ret[j_cnt].toString());
			

			//セル表示位置
			
			sheet.getCell((len_total_data +  i_cnt+q*10), 6 + j_cnt).hAlign(GC.Spread.Sheets.HorizontalAlign.right).vAlign(GC.Spread.Sheets.VerticalAlign.center);
			
			
			//セル罫線
			//var lineStyle = GC.Spread.Sheets.LineStyle.medium;
			var lineStyle = GC.Spread.Sheets.LineStyle.thin;
			
			var lineBorder = new GC.Spread.Sheets.LineBorder("black", lineStyle);
			sheet.getRange((len_total_data +  i_cnt+q*10), 6 + j_cnt,1, 1).setBorder(lineBorder,{ all: true });
			
			}

		}

	}

	//下期_合計
	for (let i_cnt = 0; i_cnt < formulas_shimoki_total.length; i_cnt++) {

		var ret = formulas_shimoki_total[i_cnt];
	
		for(let j_cnt = 0; j_cnt < ret.length; j_cnt++){
			//表示データ
			
			for(let q=0;q<4;q++){
			sheet.setFormula(len_total_data +  i_cnt + 10*q, 13 + j_cnt, ret[j_cnt].toString());

			//セル表示位置
			sheet.getCell((len_total_data +  i_cnt + 10*q), 13 + j_cnt).hAlign(GC.Spread.Sheets.HorizontalAlign.right).vAlign(GC.Spread.Sheets.VerticalAlign.center);
			
			//セル罫線
			//var lineStyle = GC.Spread.Sheets.LineStyle.medium;
			var lineStyle = GC.Spread.Sheets.LineStyle.thin;
			
			var lineBorder = new GC.Spread.Sheets.LineBorder("black", lineStyle);
			sheet.getRange((len_total_data +  i_cnt +q*10), 13 + j_cnt,1, 1).setBorder(lineBorder, { left: true, right: true, top: true, bottom: true });
			}
		}

	}



	//上期計
	var formulas_kamikikei = [
	        ["=SUM(G5:L5)"],
	        ["=SUM(G6:L6)"],
	        ["=SUM(G7:L7)"],
	        ["=SUM(G8:L8)"],
	        ["=SUM(G9:L9)"],
	        ["=SUM(G10:L10)"],
	        ["=SUM(G11:L11)"],
	        ["=SUM(G12:L12)"],
	        ["=SUM(G13:L13)"],
	        ["=SUM(G14:L14)"]
	    ];

	//下期計
	var formulas_shimokikei = [
	        ["=SUM(N5:S5)"],
	        ["=SUM(N6:S6)"],
	        ["=SUM(N7:S7)"],
	        ["=SUM(N8:S8)"],
	        ["=SUM(N9:S9)"],
	        ["=SUM(N10:S10)"],
	        ["=SUM(N11:S11)"],
	        ["=SUM(N12:S12)"],
	        ["=SUM(N13:S13)"],
	        ["=SUM(N14:S14)"]
	    ];

	//年計
	var formulas_nenkei = [
	        ["=SUM(M5,T5)"],
	        ["=SUM(M6,T6)"],
	        ["=SUM(M7,T7)"],
	        ["=SUM(M8,T8)"],
	        ["=SUM(M9,T9)"],
	        ["=SUM(M10,T10)"],
	        ["=SUM(M11,T11)"],
	        ["=SUM(M12,T12)"],
	        ["=SUM(M13,T13)"],
	        ["=SUM(M14,T14)"]
	    ];

	//上期計
	for (let i_cnt = 0; i_cnt < formulas_kamikikei.length; i_cnt++) {
		var str =  formulas_kamikikei[i_cnt];

		var blackLine = new GC.Spread.Sheets.LineBorder("black", lineStyle);
		
		for(let q=0;q<4;q++){
		sheet.setFormula(len_data + i_cnt +q*10, 12, str.toString());
		sheet.getRange((len_data +  i_cnt+q*10), 12,1, 1).setBorder(blackLine, { left: true, right: true, top: true, bottom: true });
		sheet.getCell((len_data +  i_cnt+q*10), 12).backColor("#466566");
		sheet.getCell((len_data +  i_cnt+q*10), 12).foreColor("white");
		}
	}

	//下期計
	for (let i_cnt = 0; i_cnt < formulas_shimokikei.length; i_cnt++) {
		var str =  formulas_shimokikei[i_cnt];

		var blackLine = new GC.Spread.Sheets.LineBorder("black", lineStyle);
		for(let q=0;q<4;q++){
		sheet.setFormula(len_data + i_cnt+q*10, 19, str.toString());
		sheet.getRange((len_data +  i_cnt+q*10), 19,1, 1).setBorder(blackLine, { left: true, right: true, top: true, bottom: true });
		sheet.getCell((len_data +  i_cnt+q*10), 19).backColor("#466566");
		sheet.getCell((len_data +  i_cnt+q*10), 19).foreColor("white");
		}
	}

	//年計
	for (let i_cnt = 0; i_cnt < formulas_nenkei.length; i_cnt++) {
		var str =  formulas_nenkei[i_cnt];

		var blackLine = new GC.Spread.Sheets.LineBorder("black", lineStyle);
		for(let q=0;q<4;q++){
		sheet.setFormula(len_data + i_cnt +q*10, 20, str.toString());
		sheet.getRange((len_data +  i_cnt+q*10), 20,1, 1).setBorder(blackLine, { left: true, right: true, top: true, bottom: true });
		sheet.getCell((len_data +  i_cnt+q*10), 20).backColor("#466566");
		sheet.getCell((len_data +  i_cnt+q*10), 20).foreColor("white");
		}
	}


	//伸び率
	var formulas_nobiritsu = [
	        ["=IF(ISERROR(U5/U6),0,U5/U6)"],
	        ["=IF(ISERROR(U7/U8),0,U7/U8)"],
	        ["=IF(ISERROR(U9/U10),0,U9/U10)"],
	        ["=IF(ISERROR(U11/U12),0,U11/U12)"],
	        ["=IF(ISERROR(U13/U14),0,U13/U14)"]
	    ];

	//伸び率
	for (let i_cnt = 0; i_cnt < formulas_nobiritsu.length; i_cnt++) {
		var str =  formulas_nobiritsu[i_cnt];
		for(let q=0;q<4;q++){
		//セル結合
		sheet.addSpan(len_data + i_cnt*2 +q*10, 21, 2, 1);
	
		//セル表示位置
		sheet.getCell(len_data +  i_cnt*2+q*10, 21).hAlign(GC.Spread.Sheets.HorizontalAlign.center).vAlign(GC.Spread.Sheets.VerticalAlign.center);
		
		sheet.setFormula(len_data + i_cnt*2+q*10, 21, str.toString());
		sheet.getRange(len_data +  i_cnt*2+q*10, 21,2, 1).setBorder(lineBorder, { left: true, right: true, top: true, bottom: true });
		
		sheet.setFormatter(len_data + i_cnt*2+q*10, 21, '0%');
		}
	}

}
	var category_sales =['液石\n(t)','簡易ガス\n(t)', '自社導管\n(旧都市ガス)\n(千㎥)','他社導管\n(新都市ガス)\n千㎥','電気\n(ＭＷｈ)'];

	var len_category_sales = 60;

	for (let i = 0; i < category_sales.length; i++) {
		//表示データ
		sheet.getCell(len_category_sales +  i * 10 , 1).value(category_sales[i]).wordWrap(true);
		//セル結合
		sheet.addSpan(len_category_sales + i * 10 , 1, 10, 3);
		//セル背景色(シルバー)
		sheet.getCell(len_category_sales + i * 10, 1).backColor("#86C2C0");
		sheet.getCell(len_category_sales + i * 10, 1).hAlign(GC.Spread.Sheets.HorizontalAlign.center).vAlign(GC.Spread.Sheets.VerticalAlign.center);
		//セル罫線
		var lineStyle = GC.Spread.Sheets.LineStyle.thin;
		var lineBorder = new GC.Spread.Sheets.LineBorder("black", lineStyle);
		sheet.getRange(len_category_sales + i * 10,1,10, 3).setBorder(lineBorder, { left: true, right: true, top: true, bottom: true });
	}
	
	sheet.options.protectionOptions = option;
	sheet.options.isProtected = true;
}
//描画実行
spread.resumePaint();
var excelIo = new GC.Spread.Excel.IO();



    document.getElementById('saveExcel').onclick = function () {

        var fileName = "eigyosho"+now+".xlsx";
        var password = "";
        if (fileName.substr(-5, 5) !== '.xlsx') {
            fileName += '.xlsx';
        }

        var json = spread.toJSON();

        // here is excel IO API
        excelIo.save(json, function (blob) {
            saveAs(blob, fileName);
        }, function (e) {
            // process error
            console.log(e);
        }, {password: password});

    };
};

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

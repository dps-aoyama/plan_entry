var $items;
// 検索ボタン押下イベント
function SearchClick()
{
	document.getElementById("lock-btn").removeAttribute("disabled");
	document.getElementById("un-lock-btn").removeAttribute("disabled");
	document.getElementById("search-result-tbody").style.display = "block";
	$items=	$('.items').pagination({
    itemElement : '> .item' , // アイテムの要素
    pageNumberDisplayNumber: 1,
    displayItemCount:10,
    paginationClassName:'pager',
    firstEndPageBtnMode: true
});
document.getElementById("nowPage").innerText=$items.getStatus().activePageNumber;
document.getElementById("allPage").innerText=$items.getStatus().maxPageNumber;


}

// 検索結果選択時、レコードの色変更
$(document).ready(function(){
	$(".search-result tbody tr").click(function(){
		$(this).addClass('selected').siblings().removeClass('selected');
	});
});

// ロック・ロック解除確認モーダル表示
function LockCheck(check){
	document.getElementById("lock-modal").style.visibility = "visible";
	document.getElementById("mask").style.visibility  = "visible";
		if(check == "on") {
		document.getElementById("end-mes").innerText = "ロックしました。";
		document.getElementById("lock_mes").innerText = "ロックします。よろしいですか？";
	} else if (check == "off") {
		document.getElementById("lock_mes").innerText = "ロック解除します。よろしいですか？";
		document.getElementById("end-mes").innerText = "ロック解除しました。";
	}
}

// ロック・ロック解除確認モーダル－ボタンイベント
function Confirm(action) {
	if(action == "do") {
		document.getElementById("lock-modal").style.visibility = "hidden";
		document.getElementById("mask").style.visibility       = "hidden";
		document.getElementById("end-modal").style.visibility  = "visible";
		document.getElementById("mask").style.visibility       = "visible";
	}else if(action == "cancel") {
		document.getElementById("lock-modal").style.visibility = "hidden";
		document.getElementById("mask").style.visibility       = "hidden";
		document.getElementById("end-modal").style.visibility  = "hidden";
	}
}


function pageEvent(action) {
	if(action=="first"){
	$items.moveFirstPage();
	}else if(action=="prev"){
	$items.movePrevPage();
	}else if(action=="next"){
	$items.moveNextPage();
	}else if(action=="last"){
	$items.moveEndPage();
	}
	document.getElementById("nowPage").innerText=$items.getStatus().activePageNumber;
}
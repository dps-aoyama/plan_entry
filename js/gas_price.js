var $items;
function SearchClick() {
	document.getElementById("register-btn").removeAttribute("disabled");
	document.getElementById("update-btn").removeAttribute("disabled");
	document.getElementById("delete-btn").removeAttribute("disabled");
	document.getElementById("search-result-tbody").style.display = "block";
	
	$items=	$('.items').pagination({
    itemElement : '> .item' , // アイテムの要素
    pageNumberDisplayNumber: 1,
    displayItemCount:15,
    paginationClassName:'pager',
    firstEndPageBtnMode: true
});
document.getElementById("nowPage").innerText=$items.getStatus().activePageNumber;
document.getElementById("allPage").innerText=$items.getStatus().maxPageNumber;

}

function BtnClick(action) {
	document.getElementById("gas_price_modal").style.visibility = "visible";
	document.getElementById("mask").style.visibility  = "visible";
	document.getElementById("gas_price_modal_month").disabled = false;
	document.getElementById("gas_price_modal_achievement").disabled = false;
	document.getElementById("gas_price_modal_for_year").disabled = false;
	document.getElementById("gas_price_modal_program").disabled = false;
	if (action == "register") {
		document.getElementById("modal-register-btn").style.display = "inline";
		document.getElementById("modal-update-btn").style.display   = "none";
		document.getElementById("modal-delete-btn").style.display   = "none";
		document.getElementById("gas_price_modal_month").value       = "";
		document.getElementById("gas_price_modal_achievement").value =  "";
		document.getElementById("gas_price_modal_for_year").value    =  "";
		document.getElementById("gas_price_modal_program").value     =  "";
	} else if (action == "update") {
		document.getElementById("modal-register-btn").style.display = "none";
		document.getElementById("modal-delete-btn").style.display   = "none";
		document.getElementById("modal-update-btn").style.display   = "inline";
		document.getElementById("gas_price_modal_month").value       = "2019-12";
		document.getElementById("gas_price_modal_achievement").value = "80.08";
		document.getElementById("gas_price_modal_for_year").value    = "77.91";
		document.getElementById("gas_price_modal_program").value     = "80.08";
	}else if (action == "delete") {
		document.getElementById("modal-register-btn").style.display = "none";
		document.getElementById("modal-update-btn").style.display   = "none";
		document.getElementById("modal-delete-btn").style.display   = "inline";
		document.getElementById("gas_price_modal_month").disabled = true;
		document.getElementById("gas_price_modal_achievement").disabled = true;
		document.getElementById("gas_price_modal_for_year").disabled = true;
		document.getElementById("gas_price_modal_program").disabled = true;
		document.getElementById("gas_price_modal_month").value       = "2019-12";
		document.getElementById("gas_price_modal_achievement").value = "80.08";
		document.getElementById("gas_price_modal_for_year").value    = "77.91";
		document.getElementById("gas_price_modal_program").value     = "80.08";
	}
}

function LogoutCheck(){
	document.getElementById("modal").style.visibility = "visible";
	document.getElementById("mask").style.visibility  = "visible";
}


function BtnEvent(action) {
	if(action == "yes") {
		window.location.href = "login.html";
	} else if(action == "register") {
		document.getElementById("end-mes").innerText = "登録しました。";
		document.getElementById("confirm_mes").innerText = "登録します。よろしいですか？";
		document.getElementById("confirm-modal").style.visibility = "visible";
		document.getElementById("mask").style.visibility  = "hidden";
		document.getElementById("m-mask").style.visibility  = "visible";
	} else if (action == "update") {
		document.getElementById("end-mes").innerText = "更新しました。";
		document.getElementById("confirm_mes").innerText = "更新します。よろしいですか？";
		document.getElementById("confirm-modal").style.visibility = "visible";
		document.getElementById("mask").style.visibility  = "hidden";
		document.getElementById("m-mask").style.visibility  = "visible";
	} else if (action =="delete"){ 
		document.getElementById("end-mes").innerText = "削除しました。";
		document.getElementById("confirm_mes").innerText = "削除します。よろしいですか？";
		document.getElementById("confirm-modal").style.visibility = "visible";
		document.getElementById("mask").style.visibility  = "hidden";
		document.getElementById("m-mask").style.visibility  = "visible";
	}else{
		document.getElementById("modal").style.visibility = "hidden";
		document.getElementById("gas_price_modal").style.visibility = "hidden";
		document.getElementById("mask").style.visibility  = "hidden";
		document.getElementById("m-mask").style.visibility  = "hidden";
	}	
}

function Confirm(action) {
	if(action == "do") {
		document.getElementById("confirm-modal").style.visibility = "hidden";
		document.getElementById("end-modal").style.visibility = "visible";
		document.getElementById("m-mask").style.visibility  = "hidden";
		document.getElementById("e-mask").style.visibility  = "visible";
	}else if(action == "cancel") {
		document.getElementById("confirm-modal").style.visibility = "hidden";
		document.getElementById("mask").style.visibility  = "hidden";
		document.getElementById("m-mask").style.visibility = "hidden";
		document.getElementById("end-modal").style.visibility = "hidden";
	}else if (action =="end"){
		document.getElementById("gas_price_modal").style.visibility = "hidden";
		document.getElementById("end-modal").style.visibility = "hidden";
		document.getElementById("mask").style.visibility  = "hidden";
		document.getElementById("m-mask").style.visibility = "hidden";
		document.getElementById("e-mask").style.visibility  = "hidden";
	}
}

$(document).ready(function(){
	$(".search-result tbody tr").click(function(){
	   $(this).addClass('selected').siblings().removeClass('selected');   
	});
});

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

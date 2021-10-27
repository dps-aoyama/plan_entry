var $items;
// �����{�^�������C�x���g
function SearchClick()
{
	document.getElementById("lock-btn").removeAttribute("disabled");
	document.getElementById("un-lock-btn").removeAttribute("disabled");
	document.getElementById("search-result-tbody").style.display = "block";
	$items=	$('.items').pagination({
    itemElement : '> .item' , // �A�C�e���̗v�f
    pageNumberDisplayNumber: 1,
    displayItemCount:10,
    paginationClassName:'pager',
    firstEndPageBtnMode: true
});
document.getElementById("nowPage").innerText=$items.getStatus().activePageNumber;
document.getElementById("allPage").innerText=$items.getStatus().maxPageNumber;


}

// �������ʑI�����A���R�[�h�̐F�ύX
$(document).ready(function(){
	$(".search-result tbody tr").click(function(){
		$(this).addClass('selected').siblings().removeClass('selected');
	});
});

// ���b�N�E���b�N�����m�F���[�_���\��
function LockCheck(check){
	document.getElementById("lock-modal").style.visibility = "visible";
	document.getElementById("mask").style.visibility  = "visible";
		if(check == "on") {
		document.getElementById("end-mes").innerText = "���b�N���܂����B";
		document.getElementById("lock_mes").innerText = "���b�N���܂��B��낵���ł����H";
	} else if (check == "off") {
		document.getElementById("lock_mes").innerText = "���b�N�������܂��B��낵���ł����H";
		document.getElementById("end-mes").innerText = "���b�N�������܂����B";
	}
}

// ���b�N�E���b�N�����m�F���[�_���|�{�^���C�x���g
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
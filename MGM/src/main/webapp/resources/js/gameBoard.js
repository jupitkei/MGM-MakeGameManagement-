/**
 * 
 */
var modal = document.getElementById("editGameAccountDiv");

window.onclick = function(event) {
    if ($(event.target).attr("class") == $("#editGameAccountDiv").attr("class")) {
    	closeEditDiv();
	}
}

function closeEditDiv(){	
	$("#editGameAccountDiv").css("display", "none");	
}

function saveEditData(){
    var formData = new FormData($("#editGameAccountForm")[0]);
    
	$.ajax({
		type : 'post',
        url : 'saveGameAccount',
        data : formData,
        processData : false,
        contentType : false,
        success : function(html) {
            alert("저장 완료");
            location.reload();
        },
        error : function(error) {
            alert("fail");
            console.log(error);
            console.log(error.status);
        }
	});
}

$("[name='checkbox1']").bootstrapSwitch({
	  on: 'On',
	  off: 'Off ',
	  onLabel: '&nbsp;&nbsp;&nbsp;',
	  offLabel: '&nbsp;&nbsp;&nbsp;',
	  same: false,//same labels for on/off states
	  size: 'md',
	  onClass: 'primary',
	  offClass: 'default'
});
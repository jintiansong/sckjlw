var ind_flag_arr = new Array();		//	��ѡ������
//var ind_flag_arr = new Array('21','31','37');

var Industry = {
	// ��ҵ�б�
	init : function(){
		var _str='',_id='';
		if (ind_flag_arr.length>0){
			for (var i in ind_flag_arr){
				_str+=','+ind_a[ind_flag_arr[i]];
				_id+=','+ind_flag_arr[i];
			}
			$('#btn_IndustryID').val(_str.substring(1));
			$('#IndustryID').val(_id.substring(1));
		}
	},
	Show : function(){
		var output='',flag,output2='';
		for (var i in ind_a){
			flag=in_array(i,ind_flag_arr)?' chkON':'';
			output+='<li class="Industry' + i + flag + '" onclick="Industry.Chk(\''+i+'\')">'+ind_a[i]+'</li>';
		}
		for (var i in ind_flag_arr){
			output2+='<li class="Industry' + ind_flag_arr[i] + ' chkON" onclick="Industry.Chk(\''+ind_flag_arr[i]+'\')">'+ind_a[ind_flag_arr[i]]+'</li>';
		}
		$('#drag').width('670px');
		$('#IndustryList').html('<ul>'+output+'</ul>');
		$('#IndustrySelected dd').html(output2);

		// �����ͣ��ɫ
		$('#IndustryAlpha li').hover(function(){$(this).addClass('over')},function(){$(this).removeClass('over')});
	},
	Chk : function(id){
		if(!in_array(id,ind_flag_arr)){
			if(ind_flag_arr.length<3){
				ind_flag_arr[ind_flag_arr.length]=id;
				var html='<li class="Industry'+id+'" onclick="Industry.Chk(\''+id+'\')">'+ind_a[id]+'</li>';
				$('#IndustrySelected dd').append(html);
				$('.Industry'+id).addClass('chkON');
				$('#IndustrySelected li').hover(function(){$(this).addClass('over')},function(){$(this).removeClass('over')});
			}else{
				alert('�������ѡ��3��');
				return false;
			}
		}else{
			for (var i in ind_flag_arr){
				if(ind_flag_arr[i]==id) ind_flag_arr.splice(i,1);;
			}
			$('#IndustrySelected .Industry'+id).remove();
			$('.Industry'+id).removeClass('chkON');
		}
	},
	// ȷ��
	confirm : function(){
		var indStr='';
		for(var i in ind_flag_arr){
			indStr+=','+ind_a[ind_flag_arr[i]];
		}
		indStr=indStr.substring(1)?indStr.substring(1):'��ѡ����ҵ';
		$('#btn_IndustryID').val(indStr);
		$('#IndustryID').val(ind_flag_arr);
		boxAlpha();

	},

/* ****************************** ��ѡ ********************************* */
	// ��ѡ���
	Show2 : function(){
		var output='',flag,output2='';
		for (var i in ind_a){
			output+='<li onclick="Industry.Chk2(\''+i+'\')">'+ind_a[i]+'</li>';
		}
		$('#drag').width('670px');
		$('#IndustryList').html('<ul>'+output+'</ul>');
		// �����ͣ��ɫ
		$('#IndustryAlpha li').hover(function(){$(this).addClass('over')},function(){$(this).removeClass('over')});
	},
	Chk2 : function(id){
		$('#btn_IndustryID_2').val(ind_a[id]);
		$('#IndustryID_2').val(id);
		boxAlpha();
	}
}


// ��ѡ
function IndustrySelect(){
	var dragHtml ='<div id="IndustryAlpha">';		//��ҵ
		dragHtml+='		<dl id="IndustrySelected"><dt>��ѡ��ҵ��</dt><dd></dd></dl>';
		dragHtml+='		<div id="IndustryList"></div>';//��ҵ�б�
		dragHtml+='</div>';
	$('#drag_h').html('<b>��ѡ����ҵ���������ѡ��3�</b><span onclick="Industry.confirm()">ȷ��</span>');
	$('#drag_con').html(dragHtml);

	Industry.Show();
	boxAlpha();
	draglayer();
}

// ��ѡ
function IndustrySelect_2(){
	var dragHtml ='<div id="IndustryAlpha">';		//��ҵ
		dragHtml+='		<div id="IndustryList" class="radio"></div>';//��ҵ�б�
		dragHtml+='</div>';
	$('#drag_h').html('<b>��ѡ����ҵ</b><span onclick="boxAlpha()">�ر�</span>');
	$('#drag_con').html(dragHtml);

	Industry.Show2();
	boxAlpha();
	draglayer();
}
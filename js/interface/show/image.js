/*
 * zzllrr Mather
 * zzllrr@gmail
 * Released under MIT License
 */

showThen['Image']=function(){

$('#showGround .ground1').html(
	'<textarea class=editorText placeholder="'+gM('input Image URL')+'"></textarea>'+
	strbtn+'⌫" hotkey="Ctrl + E" tip="Clear" class=Clear />'+
	detail(SCtv('ImageTool','<input type="file" id=ImageFile accept="image/*" multiple="multiple" />'+
	strbtn+gM('Play')+'" id=ImagePlay />'),'')
);
$('#showGround .editorText').val(L.image||'');

$('#showGround .ImageTool').on('click',':button',function(){
	var T=$('#showGround .editorText'),s=T.val(),me=$(this),id=me.attr('id');
	if(id=='ImagePlay'){
		L.image=s;
		open('slide.html?type=image');
	}
	
}).on('change',':file',function(){
	var v=$(this).val();
	if(v){
		var files=this.files, fl=files.length;
		for(var i=0;i<fl;i++){
			var f=files[i], s=f.size, ext=f.type.replace(/text[/]/,'');


			if(/^text[/]/.test(f.type)){
				if(!s){s='?KB'}else{
					s=sizeKB(s)
				}

				var reader=new FileReader();
				reader.onload = function(event){
					var txt = this.result;
					textareaAdd(txt,'#showGround .ground1 .editorText',1);
				};
				reader.readAsDataURL(f);
				

			}
		}
	}
});



};
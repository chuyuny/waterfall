// 为 jq  添加一个 插件
$.fn.extend({
	waterfall:function() {
		var $_this=this;
		var totalWidth = $_this.width();
		var itemWidth =$_this.children('.item').width();
		var colNum = Math.floor(totalWidth/itemWidth);
		var margin = Math.floor(totalWidth -itemWidth*colNum)/(colNum+1);
		// console.log(totalWidth);
		// console.log(itemWidth);
		// console.log(colNum);
		// console.log(margin);
		//准备相应的几个盒子用来存每列的高度，为下次来的item设置top left
		var heightArr=[];
		for (var i=0;i<colNum;i++){
			heightArr[i]= margin;
		}
		$_this.children(".item").each(function (index,element) {
			//将dom 对象转化为jq对象
            var $_item=$(element);

			var minIndex=0;
			var minHeight=heightArr[0];
			for(var i=0;i<heightArr.length;i++){
				var currentHeight=heightArr[i];
				if(currentHeight<minHeight){
					minHeight =currentHeight;
					minIndex=i;
				}
			}
			$_item.css({
				top:minHeight,
				left:margin+(margin+itemWidth)*minIndex
			});

			//修改数组当前的最小高度
			heightArr[minIndex]+=$_item.height();
			heightArr[minIndex]+=margin;


        })

		var maxHeight =heightArr[0];
		for(var i=0;i<heightArr[i];i++){
			var currentH=heightArr[i];
			if(currentH>maxHeight){
				maxHeight=currentH;
			}

		}
		$_this.height(maxHeight);



    }
})
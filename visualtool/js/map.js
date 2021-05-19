/*地图绘制部分*/
	var amap = new AMap.Map('container', {
	    mapStyle: 'amap://styles/midnight',
        resizeEnable: true,
        center: [120.147376,30.266934],
		viewMode: '2D',
        zoom: 10
    });

	var loaded = false;

    function createVisualMap() {

	Lines = new Loca.LineLayer({
        map: amap,
        fitView: false
    });

    Lines.setData(polydata, {
        lnglat: 'poly'
    });

    Lines.setOptions({
        style: {
            opacity: 1,
            color: function(v){
                    var color = v.value.color;
                    console.log(color)
                    return color;
                },
            borderWidth: 2,
            height:1

        }
    });

	Lines.render();

	Points = new Loca.RoundPointLayer({
				map: amap,
				eventSupport:true
	});

    Points.on('mousemove', function (ev) {
    // 事件类型
    var type = ev.type;
    // 当前元素的原始数据
    var rawData = ev.rawData;
    // 原始鼠标事件
    var originalEvent = ev.originalEvent;

    openInfoWin(amap, originalEvent, {
        '名称': rawData.id,
        '位置': rawData.p
    });
	});

	Points.on('mouseleave', function (ev) {
            closeInfoWin();
        });

	Points .setData(data, {
	    lnglat: 'p'
	});
	Points .setOptions({
		style: {
		    radius: 6,
		    color: '#FF00ff',
		    opacity: 0.8,
		    borderColor: '#07E8E4',
            borderWidth: 1.5,
		    },
		selectStyle: {
                radius: 10,
                color: '#FFF684'
            }
		});
	Points.render();



	oints = new Loca.RoundPointLayer({
				map: amap,
				eventSupport:true
	});

    oints.on('mousemove', function (ev) {
    // 事件类型
    var type = ev.type;
    // 当前元素的原始数据
    var rawData = ev.rawData;
    // 原始鼠标事件
    var originalEvent = ev.originalEvent;

    openInfoWin(amap, originalEvent, {
        '名称': rawData.id,
        '位置': rawData.p
    });
	});

	oints.on('mouseleave', function (ev) {
            closeInfoWin();
        });

	oints .setData(pdata, {
	    lnglat: 'p'
	});
	oints .setOptions({
		style: {
		    radius: 6,
		    color: '#2F055f',
		    opacity: 0.8,
		    borderColor: '#07E8E4',
            borderWidth: 1.5,
		    },
		selectStyle: {
                radius: 10,
                color: '#162284'
            }
		});
	// oints.render();
	
}
 
	createVisualMap();

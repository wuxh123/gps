
export default{
    props:{
        // 经度
        longitude:{
          type:Number,
          default:116.404
        },
        // 纬度
        latitude:{
          type:Number,
          default:39.915
        },
        description:{
          type:String,
          default:'天安门'
        },
        defzoom:{
            type:Number,
            default:11
        }
    },
    methods:{
        init(){
            // 百度地图API功能
            var map = new BMap.Map("allmap");    // 创建Map实例
            map.centerAndZoom(new BMap.Point(this.longitude,this.latitude), this.defzoom);  // 初始化地图,设置中心点坐标和地图级别
            //添加地图类型控件
            map.addControl(new BMap.MapTypeControl({
              mapTypes:[
                      BMAP_NORMAL_MAP,
                      BMAP_HYBRID_MAP
                  ]}));   
            map.setCurrentCity("北京");          // 设置地图显示的城市 此项是必须设置的
            map.enableScrollWheelZoom()
            map.enableInertialDragging()
            map.enableDoubleClickZoom();
            var top_left_navigation = new BMap.NavigationControl({anchor: BMAP_ANCHOR_TOP_LEFT, type: BMAP_NAVIGATION_CONTROL_ZOOM});
            map.addControl(top_left_navigation); 
      
            // 添加定位控件
            var geolocationControl = new BMap.GeolocationControl({anchor: BMAP_ANCHOR_BOTTOM_RIGHT})
            geolocationControl.addEventListener('locationSuccess', function (e) {
              // 定位成功事件
              var address = ''
              address += e.addressComponent.province
              address += e.addressComponent.city
              address += e.addressComponent.district
              address += e.addressComponent.street
              address += e.addressComponent.streetNumber
              // alert("当前定位地址为：" + address);
            })
            
            geolocationControl.addEventListener('locationError', function (e) {
              // 定位失败事件
              alert(e.message)
            })
            map.addControl(geolocationControl)
        }
    }
}
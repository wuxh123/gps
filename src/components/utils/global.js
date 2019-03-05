class User{
  constructor() {		//只要触发new实例化操作即执行
    this.name = "";
  }	
}
//GPS=0 WATCH=1 PET=2
class Device{
  constructor(id,dev_type,dev_no){
    this.id="";
    this.dev_type="";
    this.dev_no="";
  }
}
let user=new User();
let device=new Device();

export default {
  user,
  device
}
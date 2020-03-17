new Vue({
    el:'#first',
    data(){
        return{


            previous: null,
      current: '',
      operator: null,
      operatorClicked: false,






    }
},

methods: { 
    clear() {
         return this.current="";
    },

    sign(){
        if(this.current[0]=="-"){
            return this.current=this.current.slice(1,);
        }
        else{
            return this.current;            
        }
    },


percent(){

return this.current=parseInt(this.current)/100;


}
,
append(number){


    if (this.operatorClicked) {
        this.current = '';
        this.operatorClicked = false;
      }

     this.current=this.current+number;
}
,
 point(data){
    if(this.current.indexOf(data)==-1){
        return this.current=this.current+data;
    }
 },


 setPrevious() {
    this.previous = this.current;
    this.operatorClicked = true;
  },





 add() {
    this.operator = (a, b) => a + b;
    this.setPrevious();
  },


  divide() {
    this.operator = (a, b) => a / b;
    this.setPrevious();
  },



  multi() {
    this.operator = (a, b) => a * b;
    this.setPrevious();
  },



  subst() {
    this.operator = (a, b) => a - b;
    this.setPrevious();
  },








equal() {
      this.current = `${this.operator(
        parseFloat(this.current), 
        parseFloat(this.previous)
      )}`;
      this.previous = null;
    }





}

})
var socket=io.connect();

new Vue({
el: 'body',
  data: {

    textarea:'',


  },
  ready:{

    socket.on('flashget',function(data){

      this.textarea=data;


    });



  },
  methods:{
    send: function(event){



      socket.emit('flashsend',this.textarea);



      //console.log(this.textarea);

    },



  }

})

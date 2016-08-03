var socket= io.connect('http://localhost:3000');

var vm =new Vue({
el: 'body',
  data: {

    textarea:'',
    roomname:''


  },
  ready:function(){
    socket.on('flashget' , function(data){

      vm.textarea=data;


    });
},

  methods:{
    send: function(event){

      socket.emit('flashsend',vm.textarea);

     console.log(vm.textarea);

    },

    sendroom: function(event){

      socket.emit('getroom',vm.roomname);


    }



  }

})

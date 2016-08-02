var socket= io.connect('https://collabpad-server.bhuvanmalik007.c9users.io/');
    socket.on('flashget' , function(data){

      this.textarea=data;


    });


new Vue({
el: 'body',
  data: {

    textarea:'',


  },
  ready:{
    




  },
  methods:{
    send: function(event){



      socket.emit('flashsend',this.textarea);



     console.log(this.textarea);

    }



  }

})

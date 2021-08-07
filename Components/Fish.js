// Fish

AFRAME.registerComponent('fish', {

  init:function(){

      for(var i = 1;  i<=10; i++){

          var id = `fish${i}`

          const posX = Math.random()*100+-50;

          const posY = Math.random()*5+5;
          
          const posZ = Math.random()*60+-40;

          const pos = {x:posX,y:posY,z:posZ};

          this.SwimmingFish(id,pos)

        }

  },

  SwimmingFish:(id,pos)=>{

      var fishEl = document.createElement('entity')

      fishEl.setAttribute('scale',{x:500,y:500,z:500})
      
      fishEl.setAttribute('gltf-model','./assets/models/fish/scene.gltf')
      
      fishEl.setAttribute('animation-mixer',{})
      
      fishEl.setAttribute('position',pos)
      
      fishEl.setAttribute('id',id)

      var terrainEl = document.querySelector('#terrain')

      terrainEl.appendChild('fishEl')
      
  }

});
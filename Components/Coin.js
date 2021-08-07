// Coins

AFRAME.registerComponent('target_coin', {

    init:function(){

        for(var i = 1;i<=10; i++){

            const id = `coin${i}`
            
            const posX = Math.random() * 100 + (-50);

            const posY = Math.random() * 5 + (-5);

            const posZ = Math.random() * 60 + (-40);
            
            const pos = { x:posX, y:posY, z:posZ };
            
            this.createCoins(id, position);

        }

    },

    createCoins: function(id, position){

        const treasureEl = document.querySelector('#terrain');

        var coinEl = document.createElement('a-entity');

        coinEl.setAttribute('id', id);
        
        coinEl.setAttribute('position', position);
        
        coinEl.setAttribute('material', 'color', '#ff9100');
        
        coinEl.setAttribute('geometry', { primitive: 'circle', radius :5 });
        
        coinEl.setAttribute('animation', { property: 'rotation', to: '0 360 0', loop: 'true', dur: 1000 });
        
        treasureEl.appendChild(coinEl);    

    }

});
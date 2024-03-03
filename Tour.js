AFRAME.registerComponent("tour", {
  init: function () {
    this.placesContainer = this.el;
    this.createCards()
  },

  createCards: function () {
    const thumbNailsRef = [
      {
        id: "comic1",
        title: "Power Rangers",
        url: "./assets/thumbnails/comic1.jpg",
      },
      {
        id: "comic2",
        title: "Flash",
        url: "./assets/thumbnails/comic2.jpg",
      },

      {
        id: "comic3",
        title: "Big Bang Theory",
        url: "./assets/thumbnails/comic3.jpg",
      },
      {
        id: "comic4",
        title: "Spider Man",
        url: "./assets/thumbnails/comic4.jpg",
      },
    ];
    let prevoiusXPosition = -60;

    for (var item of thumbNailsRef) {
      const posX = prevoiusXPosition + 25;
      const posY = 10;
      const posZ = -40;
      const position = { x: posX, y: posY, z: posZ };
      prevoiusXPosition = posX;

      // Border Element
      const borderEl=this.createBorder(position,item.id)
      
      // Thumbnail 
      const thumbnailEl=this.createThumbnail(item)
      borderEl.appendChild(thumbnailEl)
     
      // Title Text Element
      const titleEl=this.createTitle(position,item)
      borderEl.appendChild(titleEl)
      
      this.placesContainer.appendChild(borderEl);
    }
  },

  // createBorder function
  createBorder: function(position,id){
    const entityEl=document.createElement("a-entity")
    entityEl.setAttribute("id",id)
    entityEl.setAttribute("visible",true)
    entityEl.setAttribute("position",position)
    entityEl.setAttribute("geometry",{
      primitive:"ring",
      radiusInner:9,
      radiusOuter:10,
    })
    entityEl.setAttribute("material",{
      color:"#0077cc",
      opacity:1,
    })
    return entityEl
  },

  // createThumbnail function
  createThumbnail: function(item){
    const entityEl=document.createElement("a-entity")
    entityEl.setAttribute("visible",true)
    entityEl.setAttribute("geometry",{
      primitive:"circle",
      radius:9
    })
    entityEl.setAttribute("material",{
      src:item.url
    })
    return entityEl
  },
  
  // createTitle function
  createTitle: function(position,item){
    const entityEl=document.createElement("a-entity")
    entityEl.setAttribute("visible",true)
    const positionEl=position
    positionEl.y = -20
    entityEl.setAttribute("position",positionEl)
    entityEl.setAttribute("text",{
      font:"exo2bold",
      align:"center",
      width:70,
      color:"#e65100",
      value:item.title
    })
    return entityEl
  }
});

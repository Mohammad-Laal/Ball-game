let canvas =document.querySelector("canvas")
canvas.width = window.innerWidth 
canvas.height = window.innerHeight 


let m = canvas.getContext("2d")

class ball {

   constructor(x , y)  {
   this.baseR = 10     
   this.r = 20
   this.x = x ||Randomlocation(0 + this.r , window.innerWidth-this.r)
   this.y = y || Randomlocation( 0+this.r , window.innerHeight-this.r)
   this.vx = 5  
   this.vy = 5 
   this.drow()
 }

 drow(){
  m.beginPath() ;
  m.arc(this.x,this.y,this.r,0, 2 * Math.PI)
  m.fillStyle = "red"
  m.fill()
  this.update()
       
 }

  update() {

   if(this.x + this.r > window.innerWidth || this.x - this.r < 0 ){
  
        this.vx = -this.vx
   }

   if(this.y + this.r > window.innerHeight || (this.y - this.r)   < 0 ) {

       this.vy = -this.vy

   }

 this.x +=this.vx
 this.y +=this.vy
 


   }
 }

 let balls = []

 for(let i = 0 ; i<10 ; i++) {

   balls.push(new ball)

 }
 


    

    function animate() {

       m.clearRect(0 , 0 , window.innerWidth , window.innerHeight )

       balls.forEach(e=>{ 

        e.drow()

       })
      
       requestAnimationFrame(animate)
  }

  animate()


  window.addEventListener("click" , e=>{
   e.preventDefault()

   balls.push(new ball(e.clientX , e.clientY))
 
 })


window.addEventListener("contextmenu" , e=>{
   e.preventDefault()

   balls.pop(new ball(e.clientX , e.clientY))
 
 })


    
function Randomlocation(min , max) {

return Math.floor(Math.random() * (max - min + 1 ) + min )

}


        window.addEventListener("mousemove" , function(e){
        balls.forEach(l=>{
        let distance = Math.sqrt(Math.pow(e.clientX - l.x , 2 ) + Math.pow(e.clientY - l.y , 2 ))
       if(distance < 100  && l.r < l.baseR * 4 ) {
           l.r +=1
       }
         else if (l.r > l.baseR *2 ) {
           l.r -=1
          }
        })
   }) 
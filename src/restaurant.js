const  createRestaurantHomePage=()=>{
     const content= document.querySelector('#content')
     const pageContent=document.createElement('div');
     pageContent.classList.add('page-content');
      

     const image=document.createElement('img');
     image.src='https://plus.unsplash.com/premium_photo-1661883237884-263e8de8869b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bHV4dXJ5JTIwcmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D'
     image.height='300'
     pageContent.appendChild(image);

     const headline=document.createElement('h1')
     headline.textContent='Welcome to our reataurant!'
     pageContent.appendChild(headline);

     const copy=document.createElement('p')
      copy.textContent='We serve the best food.Welcome for Fresh Delicious meal to reach your optimum health'
      pageContent.appendChild(copy)
      content.appendChild(pageContent) ;

      
}
export  default createRestaurantHomePage ; 
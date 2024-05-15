function addToCart(button) {
    button.innerHTML = "Added";
    button.style.backgroundColor = 'green'; 
    button.style.color = '#ffffff'; 
  
}

function toggleLike(likeId) {
    var likeImg = document.getElementById(likeId);
    
    if (likeImg.src.endsWith('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbvXWanh4K8cnomoOwzkaPWsjXenXIXQCUiw&s')) {
      likeImg.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO1w_7b06WxMEA6OQpjcpJK3TKLBX4VZSrOg&s'; // Change to the liked image
    } else {
      likeImg.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbvXWanh4K8cnomoOwzkaPWsjXenXIXQCUiw&s'; // Change back to the unliked image
    }
  }

  function moveToPage() {
    // Change 'another_page.html' to the URL of the page you want to navigate to

   window.location.href = 'login.html';

    

}
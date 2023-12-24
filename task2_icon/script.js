const btn = document.querySelector('.btn');
btn.addEventListener('click', changeIcon);

  function changeIcon() {
    let btn_icon = document.querySelector('.btn_icon')
    let btn_icon_clicked = document.querySelector('.btn_icon_clicked')

    if (btn_icon_clicked.style.display === '' || btn_icon_clicked.style.display === 'none'){
      btn_icon_clicked.style.display = 'block';
      btn_icon.style.display = 'none';
    } 
    else {
      btn_icon_clicked.style.display = 'none';
      btn_icon.style.display = 'block';
    }
  };  


    let toggleShareMenu = document.querySelector('.share-icon-ctn')
    
    toggleShareMenu.addEventListener("click", ()=>{
        document.querySelector('.share-to-ctn').classList.toggle("share-to-ctn-active");
        document.querySelector('.share-icon-ctn').classList.toggle("share-icon-ctn-active")

        let bgShare = document.querySelector('.share-btn').style.backgroundImage;
        
        if(bgShare === 'url("images/icon-share-active.svg")') {
            bgShare = 'url("images/icon-share.svg")';
        }
        else {
            bgShare = 'url("images/icon-share-active.svg")';
        }
    })

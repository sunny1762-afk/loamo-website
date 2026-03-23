document.addEventListener("DOMContentLoaded",()=>{
    // 이벤트 위임을 사용하여 동적으로 생성된 요소도 처리
    document.addEventListener('click',(e)=>{
        const btnHeart = e.target.closest('.btn-heart')
        if(btnHeart){
            e.preventDefault()
            // 클릭을 할 때 기본 기능을 차단한다.(a태그를 클릭하면 기본기능으로 스크롤이 위로 이동 됨)
            let imgtag = btnHeart.children[0]
            let originSrc = imgtag.getAttribute("src")
            if(originSrc=='./img/heart-empty.svg'){
                // 현재 빈 하트 상태라면
                imgtag.setAttribute("src",'./img/heart-filled.svg')
            }else{
                // 채워진 하트 상태라면
                imgtag.setAttribute("src",'./img/heart-empty.svg')
            }
        }
    })
})
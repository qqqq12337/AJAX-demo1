let n=1
console.log('js')

getCSS.onclick =()=>{
    const request=new XMLHttpRequest()
    request.open('get','/style.css')
    request.send()
    request.onreadystatechange =()=>{
        if(request.readyState===4 )
           if(request.status >=200){
            const style =document.createElement('style')
        style.innerHTML =request.response;
        document.head.appendChild(style)
    }else
        {
       alert('加载CSS失败')     
    }
    }
}

getJS.onclick =()=>{
    const request=new XMLHttpRequest()
    request.open('get','/2.js')
    request.send()
    request.onload =()=>{
        const script =document.createElement('script')
        script.innerHTML =request.response
        document.head.appendChild(script)
    }
    request.onerror =()=>{
        console.log('失败了')
    }
}

getHTML.onclick =()=>{
    const request= new XMLHttpRequest()
    request.open('get','3.html')
    request.send()
    request.onload =()=>{
        const div= document.createElement('div')
        div.innerHTML=request.response
        document.body.appendChild(div)
    }
}

getXML.onclick =()=>{
    const request = new XMLHttpRequest()
    request.open('get','/4.xml')
    request.send()
    request.onreadystatechange =()=>{
        if(request.readyState===4 && request.status ===200){
            const dom =request.responseXML
            const text=dom.getElementsByTagName('warning')[0].textContent     
            console.log(text.trim())
        }
    }
}

getJSON.onclick =()=>{
    const request =new XMLHttpRequest()
    request.open('get','/5.json')
    request.send()
    request.onreadystatechange =()=>{
        if(request.readyState===4 &&request.status===200){
            const object =JSON.parse(request.response)
            myName.textContent = object.name
        }
    }
}

getPage.onclick =()=>{
    const request =new XMLHttpRequest()
    request.open('get',`/page${n+1}`)
    request.send()
    request.onreadystatechange=()=>{
        if(request.readyState===4 && request.status===200){
            const array = JSON.parse(request.response)
            array.forEach(item => {
                const li=document.createElement('li')
                li.textContent=item.id
                xxx.appendChild(li)
            });
            n +=1;
        }
    }
}
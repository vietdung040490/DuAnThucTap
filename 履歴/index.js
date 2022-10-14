let eventArray = [
    {
        time: "2022/08/26 23:00:00",
        kind: "種別",
        device: "PC",
        content: "ログイン" 
    },{
        time: "2022/08/26 23:00:00",
        kind: "種別",
        device: "PC",
        content: "ログイン" 
    },{
        time: "2022/08/26 23:00:00",
        kind: "種別",
        device: "PC",
        content: "ログイン" 
    },{
        time: "2022/08/26 23:00:00",
        kind: "種別",
        device: "PC",
        content: "ログイン" 
    },{
        time: "2022/08/26 23:00:00",
        kind: "種別",
        device: "PC",
        content: "ログイン" 
    },{
        time: "2022/08/26 23:00:00",
        kind: "種別",
        device: "PC",
        content: "ログイン" 
    },{
        time: "2022/08/26 23:00:00",
        kind: "種別",
        device: "PC",
        content: "ログイン" 
    },{
        time: "2022/08/26 23:00:00",
        kind: "種別",
        device: "PC",
        content: "ログイン" 
    },{
        time: "2022/08/26 23:00:00",
        kind: "種別",
        device: "PC",
        content: "ログイン" 
    },{
        time: "2022/08/26 23:00:00",
        kind: "種別",
        device: "PC",
        content: "ログイン" 
    },{
        time: "2022/08/26 23:00:00",
        kind: "種別",
        device: "PC",
        content: "ログイン" 
    },{
        time: "2022/08/26 23:00:00",
        kind: "種別",
        device: "PC",
        content: "ログイン" 
    },{
        time: "2022/08/26 23:00:00",
        kind: "種別",
        device: "PC",
        content: "ログイン" 
    },{
        time: "2022/08/26 23:00:00",
        kind: "種別",
        device: "PC",
        content: "ログイン" 
    },{
        time: "2022/08/26 23:00:00",
        kind: "種別",
        device: "PC",
        content: "ログイン" 
    },{
        time: "2022/08/26 23:00:00",
        kind: "種別",
        device: "PC",
        content: "ログイン" 
    },{
        time: "2022/08/26 23:00:00",
        kind: "種別",
        device: "PC",
        content: "ログイン" 
    },{
        time: "2022/08/26 23:00:00",
        kind: "種別",
        device: "PC",
        content: "ログイン" 
    },{
        time: "2022/08/26 23:00:00",
        kind: "種別",
        device: "PC",
        content: "ログイン" 
    },{
        time: "2022/08/26 23:00:00",
        kind: "種別",
        device: "PC",
        content: "ログイン" 
    },{
        time: "2022/08/26 23:00:00",
        kind: "種別",
        device: "PC",
        content: "ログイン" 
    },{
        time: "2022/08/26 23:00:00",
        kind: "種別",
        device: "PC",
        content: "ログイン" 
    },{
        time: "2022/08/26 23:00:00",
        kind: "種別",
        device: "PC",
        content: "ログイン" 
    },{
        time: "2022/08/26 23:00:00",
        kind: "種別",
        device: "PC",
        content: "ログイン" 
    },{
        time: "2022/08/26 23:00:00",
        kind: "種別",
        device: "PC",
        content: "ログイン" 
    },{
        time: "2022/08/26 23:00:00",
        kind: "種別",
        device: "PC",
        content: "ログイン" 
    },{
        time: "2022/08/26 23:00:00",
        kind: "種別",
        device: "PC",
        content: "ログイン" 
    },{
        time: "2022/08/26 23:00:00",
        kind: "種別",
        device: "PC",
        content: "ログイン" 
    },{
        time: "2022/08/26 23:00:00",
        kind: "種別",
        device: "PC",
        content: "ログイン" 
    },{
        time: "2022/08/26 23:00:00",
        kind: "種別",
        device: "PC",
        content: "ログイン" 
    },{
        time: "2022/08/26 23:00:00",
        kind: "種別",
        device: "PC",
        content: "ログイン" 
    },{
        time: "2022/08/26 23:00:00",
        kind: "種別",
        device: "PC",
        content: "ログイン" 
    },{
        time: "2022/08/26 23:00:00",
        kind: "種別",
        device: "PC",
        content: "ログイン" 
    },{
        time: "2022/08/26 23:00:00",
        kind: "種別",
        device: "PC",
        content: "ログイン" 
    },{
        time: "2022/08/26 23:00:00",
        kind: "種別",
        device: "PC",
        content: "ログイン" 
    },{
        time: "2022/08/26 23:00:00",
        kind: "種別",
        device: "PC",
        content: "ログイン" 
    },{
        time: "2022/08/26 23:00:00",
        kind: "種別",
        device: "PC",
        content: "ログイン" 
    },{
        time: "2022/08/26 23:00:00",
        kind: "種別",
        device: "PC",
        content: "ログイン" 
    },{
        time: "2022/08/26 23:00:00",
        kind: "種別",
        device: "PC",
        content: "ログイン" 
    },{
        time: "2022/08/26 23:00:00",
        kind: "種別",
        device: "PC",
        content: "ログイン" 
    },
];
// let html = '';
// for(let i = 0; i < eventArray.length; i++){
//     html += `<tr><td>${eventArray[i].time}</td><td>${eventArray[i].kind}</td><td>${eventArray[i].device}</td><td>${eventArray[i].content}</td></tr>`;
// }
let htmls = eventArray.map(html =>`<tr><td>${html.time}</td><td>${html.kind}</td><td>${html.device}</td><td>${html.content}</td></tr>`).join('')
document.getElementById('getData').innerHTML = htmls;



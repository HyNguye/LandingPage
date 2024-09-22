let userName = ["Hung Pham","Linh Chi","Đăng Khôi", "Steve Nguyen","Phạm Thư","Khói"];
let avatars = [
    "./img/avatar04.jpg",
    "./img/avatar05.jpg",
    "./img/avatar06.jpg",
    "./img/avatar07.jpg",
    "./img/avatar08.jpg",
    "./img/avatar09.jpg"
]
let userMessage = ["vừa đặt mua 2 máy","Mình đặt combo 2 máy massage"," Vừa đặt 4 máy", "freeship luôn",'Máy tốt',"massage quá đã"];
let userTime= ['Vừa xong', '5 phút trước', '1 phút trước', '4 phút trước' ,'3 phút trước','2 phút trước']

function showToast() {
    const toast = new bootstrap.Toast(document.getElementById('customToast'));
    let fistIndex = getRandomNumber();
    document.getElementById("user-name").textContent = userName[fistIndex];
    document.getElementById("user-img").src = avatars[fistIndex];
    document.getElementById("user-message").textContent = userMessage[getRandomNumber()];
    document.getElementById("user-time").textContent = userTime[getRandomNumber()];
    toast.show();
  }
function getRandomNumber() {
  return Math.floor(Math.random() * 6); 
}

  setInterval(showToast, 2000);
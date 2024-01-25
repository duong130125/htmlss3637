let input = document.getElementById("input");
let button = document.getElementById("click");

button.onclick = function(){
    let item = input.value;
    if (item.length > 10) {
        alert("Không hợp lệ");
    } else {
        alert("Thành công");
    }
}


const themSanPhamBtn = document.getElementById('addProductBtn');
const productTable = document.getElementById('productTable');
const productName = document.getElementById('productName');
const productPrice = document.getElementById('productPrice');
function laySoNguyenNgauNhien(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  // Công thức: Math.floor(Math.random() * (max - min + 1)) + min
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
// thêm
themSanPhamBtn.addEventListener('click', () => {
    const newRow = document.createElement('tr');    
    if(themSanPhamBtn.textContent === "Thêm Sản phẩm"){
        if((productName.value !== "" && productPrice.value !== "")){
            newRow.innerHTML = `
                <td>${laySoNguyenNgauNhien(1,99)    }</td>
                <td>${productName.value}</td>
                <td>${productPrice.value}</td>
                <td>
                    <button class="editBtn">Sửa</button>
                    <button class="cancelBtn">Hủy</button>
                </td>`;
            productTable.appendChild(newRow);
            productName.value = '';
            productPrice.value = '';
        }
        // hiện thông báo lỗi
        else if(((productName.value !== "" && productPrice.value === "") || (productName.value === "" && productPrice.value !== ""))){
            productName.style.border = "1px solid red";
            productPrice.style.border = "1px solid red";
        }
        else if((productName.value === "" && productPrice.value === "") ){
            productName.style.border = "1px solid red";
            productPrice.style.border = "1px solid red";
        }
    }
    else if(productName.value !== "" && productPrice.value !== ""){
        itemNutSua.cells[1].textContent = productName.value;
        itemNutSua.cells[2].textContent = productPrice.value;
        themSanPhamBtn.textContent = "Thêm Sản phẩm";
        productName.value = '';
        productPrice.value = '';
    }

});
// sửa
productTable.addEventListener('click', (event) => {
    nutSua = event.target;
    itemNutSua = nutSua.closest('tr');
    if(nutSua.textContent === "Sửa"){
        productName.value = itemNutSua.cells[1].textContent;
        productPrice.value = itemNutSua.cells[2].textContent;
        themSanPhamBtn.textContent = "Lưu";
        productName.focus();
    }
});

// Hủy
productTable.addEventListener('click', (event) => {
    nutXoa = event.target;
    itemNutXoa = nutSua.closest('tr');
    if(nutXoa.textContent === "Hủy"){
        productTable.removeChild(itemNutXoa);
        --dem;  
    }
});
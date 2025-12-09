
const themSanPhamBtn = document.getElementById('addProductBtn');
const productTable = document.getElementById('productTable');
const productName = document.getElementById('productName');
const productPrice = document.getElementById('productPrice');
let dem = 0;
// thêm
themSanPhamBtn.addEventListener('click', () => {
    const newRow = document.createElement('tr');    
    newRow.innerHTML = `
        <td>${++dem}</td>
        <td>${productName.value}</td>
        <td>${productPrice.value}</td>
        <td>
            <button class="editBtn">Sửa</button>
            <button class="cancelBtn">Hủy</button>
        </td>`;
    productTable.appendChild(newRow);
    productName.value = '';
    productPrice.value = '';
});
// sửa
productTable.addEventListener('click', (event) => {
    nutSua = event.target;
    itemNutSua = nutSua.closest('tr');
    // console.log(nutSua.closest('tr'));
    productName.focus();
    productName.value = itemNutSua.cells[1].textContent;
    productPrice.value = itemNutSua.cells[2].textContent;
});
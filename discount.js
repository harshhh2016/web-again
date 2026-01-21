<p>Subtotal: ₹<span id="subtotal">0</span></p>
<p>Discount (10%): ₹<span id="discount">0</span></p>
<p><strong>Total Payable: ₹<span id="final">0</span></strong></p>



let total = 2000;

let discount = total * 0.10;
let finalAmount = total - discount;

document.getElementById("subtotal").innerText = total;
document.getElementById("discount").innerText = discount;
document.getElementById("final").innerText = finalAmount;

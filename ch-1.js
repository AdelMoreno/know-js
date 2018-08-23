let balance = 300;
const phone = 50;
const acc = 10;
const tax = .07;

function taxRate() {
	amount = phone +( phone * tax);

	return amount;
}

purchase = taxRate();

console.log( purchase.toFixed(2));

function buyPhone() {
	if (purchase < balance) {
		console.log("getting this phone!");
		purchase = purchase + acc;
	} else {
		console.log(":(");
	}
}


buyPhone();


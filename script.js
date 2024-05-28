function calculateShares() {
    const currentPrice = parseFloat(document.getElementById('currentPrice').value);
    const desiredProfit = parseFloat(document.getElementById('desiredProfit').value);
    const totalShares = parseFloat(document.getElementById('totalShares').value);

    if (isNaN(currentPrice) || isNaN(desiredProfit) || isNaN(totalShares)) {
        alert('يرجى إدخال قيم صحيحة.');
        return;
    }

    let sharesToSell = desiredProfit / currentPrice;

    if (sharesToSell > totalShares) {
        sharesToSell = totalShares;
    }

    document.getElementById('result').innerText = `عدد الأسهم المراد بيعها لتحقيق الربح المطلوب هو: ${sharesToSell.toFixed(6)}`;
}

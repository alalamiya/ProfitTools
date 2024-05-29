function calculateTotalShares() {
    const totalInvestment = parseFloat(document.getElementById('totalInvestment').value);
    const currentPrice = parseFloat(document.getElementById('currentPrice').value);

    if (isNaN(totalInvestment) || isNaN(currentPrice)) {
        alert('يرجى إدخال قيم صحيحة.');
        return;
    }

    const totalShares = totalInvestment / currentPrice;
    
    document.getElementById('result').innerText = `عدد الأسهم الكلي هو: ${totalShares.toFixed(6)}`;
}

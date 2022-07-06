function Show(){
    var money = Number(document.getElementById("money").value)
    var month = Number(document.getElementById("month").value)
    var percent = Number(document.getElementById("percent").value)

    console.log(percent)

    var monthlyPercent=percent/12*month
    var totalprice=money*monthlyPercent/100+money


    document.getElementById('TotalAmount').innerHTML = totalprice.toFixed(2) + 'Azn'
    document.getElementById('MonthAmount').innerHTML = (totalprice/month).toFixed(2) + 'Azn'
}

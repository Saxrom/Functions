function Click(){
    var money = Number(document.getElementById("money").value)
    var month = Number(document.getElementById("month").value)
    var percent = Number(document.getElementById("percent").value)

    var mothlyPercent=percent/12*month
    var totalprice=amount*mothlyPercent/100+money


    document.getElementById('TotalAmount').innerHTML = totalprice.toFixed(2) + 'Azn'
    document.getElementById('MonthAmount').innerHTML = (totalprice/month).toFixed(2) + 'Azn'
}

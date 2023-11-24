let tabs = [
    {
        // Speed
        "fields": ["м/с", "км/ч"],
        "equasion": ["comboInput0 * 3.6", "(comboInput0 * 5 / 18)"] // trq da addna ToFixed(2)
    },
    {
        // Distance
        "fields": ["см", "м"],
        "equasion": ["comboInput1 / 100", "comboInput1 / 1000"]
    },
    {
        // Kondenzator
        "fields": ["Милифарад", "Микрофарад", "Нанофарад", "Пикофарад"],
        "equasion": ["comboInput2 * 0.001", "comboInput2 * 0.000001", "comboInput2 * 0.000000001", "comboInput2 * 0.000000000001"]
    }
]

$(function(){
    ChangeTextValue();
    function Convert(){// ne sme niendartalci da izpolzvame let. Tva sa DOM elementi i se izpolva const

        const comboInput0 = Number($("#comboInput0").val());
        const comboInput1 = Number($("#comboInput1").val());
        const comboInput2 = Number($("#comboInput2").val());

        for (let i = 0; i <= 3; i++){
            if (combo0.value == i && tabsID == 0){
                alert(eval(tabs[tabsID].equasion[i])); break;
            }
            else if (combo1.value == i && tabsID == 1){
                alert(eval(tabs[tabsID].equasion[i])); break;
            }
            else if (combo2.value == i && tabsID == 2){
                alert(eval(tabs[tabsID].equasion[i])); break;
            }
        }
    }

    function ChangeTextValue(){
        for (let i = 0; i <= 2; i++){
            $("#comboInput"+i).attr("placeholder", "Въведи")
        }
    }

    let tabsID;

    $("#combo0").on("change", function(){ChangeTextValue()});
    $("#combo1").on("change", function(){ChangeTextValue()});
    $("#combo2").on("change", function(){ChangeTextValue()});

    $("#Comboconvert0").on('click', function() {tabsID = 0; Convert()});
    $("#Comboconvert1").on('click', function() {tabsID = 1; Convert()});
    $("#Comboconvert2").on('click', function() {tabsID = 2; Convert()});
});
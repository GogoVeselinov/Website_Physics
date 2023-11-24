//wassup krisi this is your work from now on you black nigerian man from a wealthy family
let lesson = [
    {
        //"name": "Закон на Кулон",
        "fields": ["k", "q1", "q2", "r"],
        "equasion": "inp0 * ((inp1 * inp2) / Math.pow(inp3, 2));"
    },
    {
        //"name": "Интензитет",
        "fields": ["F", "q0"],
        "equasion": "inp0 / inp1"
    },
    {
        //"name": "Интензитет чрез напрежение",
        "fields": ["U", "l"],
        "equasion": "inp0 / inp1"
    },
    {
        //"name": "Интензитет (точков заряд)",
        "fields": ["k", "q", "r"],
        "equasion": "inp0 * (inp1 / Math.pow(inp2, 2))"
    },
    {
        //"name": "Потенциал",
        "fields": ["W", "q"],
        "equasion":  "inp0 / inp1"
    },
    {
        //"name": "Напрежение чрез интензитет",
        "fields": ["E", "l"],
        "equasion": "inp0 / inp1"
    },
    {
        //"name": "Напрежение чрез потенциал",
        "fields": ["ф1", "ф2"],
        "equasion": "inp0 - inp1"
    },
    {
        //"name": "Работа",
        "fields": ["q", "U"],
        "equasion":  "inp0 * inp1"
    },
    {
        //"name": "Капацитет на кондензатор",
        "fields": ["q","U"],
        "equasion": "inp0 / inp1"
    }
]

$(function(){
    for (let i = 0; i <= 3; i++){
        $("#inp"+i).attr("placeholder", "Въведи");
    }
    
    function Calculations(){

        let inp0 = Number($("#inp0").val());
        let inp1 = Number($("#inp1").val());
        let inp2 = Number($("#inp2").val()); 
        let inp3 = Number($("#inp3").val());

        for (let i = 0; i <= 8; i++){
            if (dropdownMenu.value == i){
                alert(eval(lesson[dropdownMenu.value].equasion)); break;
            }
        }
    }

    let lessonID = 0;

    function ChangeAndHide(){
        for(let i = 0; i < lesson[lessonID].fields.length; i++) {
            $("#inp" + i).show();
            $("#inp" + i).attr("placeholder", lesson[lessonID].fields[i]);
        }
        for(let i = lesson[lessonID].fields.length; i <= 3; i++){ // Hides uselles fields for different lessons
            $("#inp" + i).hide();
        }
    }

    $("#dropdownMenu").on("change", function() { lessonID = dropdownMenu.value, ChangeAndHide()})
    $("#solve").on('click', function(){Calculations()});
});
function convertLength(){
    var lengthInput = parseFloat(document.getElementById("lengthInput").value);
    var unitSelector = document.getElementById("unitSelector");
    var selectedUnit = unitSelector.options[unitSelector.selectedIndex].value;

    var convertLength;
    switch(selectedUnit){
        case "meters":
            convertLength = lengthInput*100;
            break;
            case "kilometers":
                convertLength = lengthInput*100000;
                break;
                case "millimeters":
                    convertLength = lengthInput;
                    break;
    }
    document.getElementById("result").innerHTML ="Converted to Centimeters:" + convertLength + " centimeters";
}
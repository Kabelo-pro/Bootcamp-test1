function countAllPaarl(string) {
    var reg_numbers = string.split(', ');
    var paarl_reg_numbers = [];
    for (var i = 0; i < reg_numbers.length; i++) {
        if (reg_numbers[i].startsWith("CJ")) {
            paarl_reg_numbers.push(reg_numbers[i]);
        }
    }
    return paarl_reg_numbers;
}

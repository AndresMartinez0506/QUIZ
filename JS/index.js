var motor;
    motor = prompt ('por favor introduce el tipo de motor');
    motor = Number(motor);
    switch (motor) {default: alert ("no existe un valor valido para tipo de bomba"); break;
    case 0: alert ("no hay establecido un valor definido para el tipo de bomba"); break;
    case 1: alert ("la bomba es una bomba de agua"); break; case 2: alert ("la bomba es una bomba de gasolina"); break;
    case 3: alert ("la bomba es una bomba de hormigon"); break;case 4: alert ("la bomba es una bomba de pasta alimenticia"); break;}
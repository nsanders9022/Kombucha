import {Pipe, PipeTransform } from '@angular/core';
import { Kombucha } from './kombucha.model';

@Pipe({
  name: "flavorness",
  pure: false
})

export class FlavornessPipe implements PipeTransform {
  transform(input: Kombucha[], desiredFlavor) {
    var output: Kombucha[] = [];
    if(desiredFlavor === "strawberry") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].flavor === "strawberry") {
          output.push(input[i]);
        }

    }
    return output;
  } else if (desiredFlavor === "ginger") {
    for (var i = 0; i < input.length; i++) {
      if (input[i].flavor === "ginger") {
        output.push(input[i]);
      }
    }
    return output;
  } else if (desiredFlavor === "lemon") {
    for (var i = 0; i < input.length; i++) {
      if (input[i].flavor === "lemon") {
        output.push(input[i]);
      }
    }
    return output;
  } else {
  return input;
}
}
}

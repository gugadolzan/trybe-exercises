enum Color {
  Black = "black",
  White = "white",
  Red = "red",
  Silver = "silver",
}

enum Door {
  FrontLeft = "front left",
  FrontRight = "front right",
  BackLeft = "back left",
  BackRight = "back right",
}

enum Turn {
  Left = "left",
  Right = "right",
}

class Car {
  brand: string;
  color: Color;
  doors: number;
  doorsOpen: {
    [key in Door]: boolean;
  };

  constructor(brand: string, color: Color, doors: number) {
    this.brand = brand;
    this.color = color;
    this.doors = doors;
    this.doorsOpen = {
      "front left": false,
      "front right": false,
      "back left": false,
      "back right": false,
    };
  }

  honk(): void {
    console.log("beep");
  }

  openTheDoor(door: Door): void {
    if (this.doorsOpen[door]) {
      console.log(`the ${door} door is already open`);
      return;
    }
    console.log(`opening the ${door} door`);
    this.doorsOpen[door] = true;
  }

  closeTheDoor(door: Door): void {
    if (!this.doorsOpen[door]) {
      console.log(`the ${door} door is already closed`);
      return;
    }
    console.log(`closing the ${door} door`);
    this.doorsOpen[door] = false;
  }

  turnOn(): void {
    console.log("turning on");
  }

  turnOff(): void {
    console.log("turning off");
  }

  speedUp(): void {
    console.log("speed up");
  }

  speedDown(): void {
    console.log("speed down");
  }

  stop(): void {
    console.log("stop");
  }

  turn(turn: Turn): void {
    console.log(`turning ${turn}`);
  }
}

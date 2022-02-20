import Colors from "./Colors";
import Doors from "./Doors";
import Directions from "./Directions";

class Car {
  brand: string;
  color: Colors;
  doors: number;
  doorsOpen: {
    [key in Doors]: boolean;
  };

  constructor(brand: string, color: Colors, doors: number) {
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

  openTheDoor(door: Doors): void {
    if (this.doorsOpen[door]) {
      console.log(`the ${door} door is already open`);
      return;
    }
    console.log(`opening the ${door} door`);
    this.doorsOpen[door] = true;
  }

  closeTheDoor(door: Doors): void {
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

  turn(turn: Directions): void {
    console.log(`turning ${turn}`);
  }
}

export default Car;

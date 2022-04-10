/*
* This program is a vehicle class.
*
* @author  Abdul Basit Butt
* @version 1.0
* @since   2022-0
*/

export class Vehicle {
  // this is a  class.
  private _speed: number
  private _maxSpeed: number
  private _doorNum: number
  private _colour: string
  private _licensePlate: string

  constructor (initialColour: string, initialPlate: string,
    initialDoor: number, topspeed: number) {
    this._colour = initialColour
    this._licensePlate = initialPlate
    this._doorNum = initialDoor
    this._maxSpeed = topspeed
    this._speed = 0
  }

  public get speed () {
    return this._speed
  }

  public get maxSpeed () {
    return this._maxSpeed
  }

  public get doorNum () {
    return this._doorNum
  }

  public get colour () {
    return this._colour
  }

  public set colour (param: string) {
    this._colour = param
  }

  public get licensePlate () {
    return this._licensePlate
  }

  public set licensePlate (param: string) {
    this._licensePlate = param
  }

  public status () {
    console.log('Speed: ' + this._speed + '\nMaxSpeed: ' + this._maxSpeed +
                    '\nNumber of doors: ' + this._doorNum +
                    '\nLicense Plate: ' + this._licensePlate + '\nColour: ' +
                    this._colour)
  }

  public accelerate (accPow: number, accTime: number) {
    this._speed = (accPow * accTime) + this._speed
    if (this._speed > this._maxSpeed) {
      this._speed = this._maxSpeed
    }
  }

  public break (breakPow: number, breakTime: number) {
    this._speed = this._speed - (breakPow * breakTime)
    if (this._speed < 0) {
      this._speed = 0
    }
  }
}

/*
* This program is a vehicle class.
*
* @author  Abdul Basit
* @version 1.0
* @since   2022-02-02
*/

import { Vehicle } from "./index"
const nissanSentra = new Vehicle('white', 'B40-C4RR0', 4, 200)

console.log('Created Nissan Sentra\nStatus:\n')
nissanSentra.status()

console.log('\nAccelerating, 10 of power for 10 sec.')
nissanSentra.accelerate(10, 10)
console.log('New speed: ' + nissanSentra.speed)

console.log('\nChanging colour to black:')
nissanSentra.colour = 'black'
console.log('New colour:' + nissanSentra.colour)

const ferrari = new Vehicle('red', 'VHD-35HU', 2, 400)

console.log('Created a Ferrari\nStatus:\n')
ferrari.status()

console.log('\nAccelerating, 100 of power for 4 sec.')
ferrari.accelerate(100, 4)
console.log('New speed: ' + ferrari.speed)

console.log('\nBreaking, 10 of power for 10 sec.')
ferrari.break(10, 10)
console.log('New speed: ' + ferrari.speed)

console.log('\nChanging license plate:')
ferrari.licensePlate = 'CVKC 123'
console.log('New License Plate: ' + ferrari.licensePlate)

console.log('\nDone.')


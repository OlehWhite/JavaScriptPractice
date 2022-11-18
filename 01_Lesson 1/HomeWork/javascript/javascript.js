let x = 6;
let y = 14;
let z = 4;

document.writeln("x += y - x++ * z: ", x += y - x++ * z, "<br>");
// x += 14 - 6 * 4
// x += 14 - 24
// 6 += -10
// -4

x = 6;
y = 14;
z = 4;

document.writeln("z = --x - y * 5: ", z = --x - y * 5, "<br>");
// z = 5 - 14 * 5
// z = 5 - 70
// z = -65

x = 6;
y = 14;
z = 4;

document.writeln("y /= x + 5 % z: ", y /= x + 5 % z, "<br>");
// y /= 6 + 5 % 4
// y /= 6 + 1
// y /= 7
// 14 / 7
// 2

x = 6;
y = 14;
z = 4;

document.writeln("z - x++ + y * 5: ", z - x++ + y * 5, "<br>");
// 4 - 6 + 14 * 5
// 4 - 6 + 70
// -2 + 70
// 68


x = 6;
y = 14;
z = 4;

document.writeln("x = y - x++ * z: ", x = y - x++ * z, "<br>");
// x = 14 - 6 * 4
// x = 14 - 24
// x = -10



var item_1; //1

item_1 = 5; //2

console.log(item_1); //3

var item_2; //4

item_2 = 3; //5

console.log(item_2); //6

var item_3; //7

item_3 = item_1 + item_2; //8

console.log(item_3); //9

var item_4; //10

item_4 = "Yolochka"; //11

console.log(item_4); //12

console.log(item_3 + item_4); //13

console.log(item_3 * item_4); //14

var item_5; //15

item_5 = item_3; //16

var item_6; //17

var item_6_type; //18

item_6 = 15; //19

item_6_type = typeof(item_6); //20

console.log("item_6 ==", item_6,  ", item_6_type ==", item_6_type); //21

var item_7 = String(item_6); //22

var item_7_type; //23

item_7_type = typeof(item_7); //24

console.log("item_7 ==", item_7,  ", item_7_type ==", item_7_type); //25

var age_1 = 10; //26

var age_2 = 18; //27

var age_3 = 60; //28

if (age_1 < age_2) { //29-33
    console.log("You don’t have access cause your age is " + age_1 + " It’s less then");
} else if (age_1 >=  age_2 && age_1 <  age_3) {
    console.log("Welcome!");
} else if (age_1  > age_3) {
    console.log("Keep calm and look Culture channel");
} else {
    console.log("Technical work");
}
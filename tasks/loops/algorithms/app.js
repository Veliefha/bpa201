// task1
// Daxil edilən yaşa əsasən istifadəçinin pensiya yaşına çatıb-çatmadığını tapan proqram yazın.
//  Ədəd müsbət olmalı və 125-dən kiçik olmalıdır.
// let age=Number(prompt("What is your age?"))
// if (age>=60 && age<125) {
//     alert("your age is approprieate for pension");
    
// }
// else if(age>0 && age<60) {
//     alert("your age is not approprieate for pension");
    
// }
// else{
//     alert("enter valid number")
// }

// task2
// Daxil edilən 3 ədədə əsasən üçbucağın tərəflərinə görə hansı növ olduğunu müəyyən edən proqram yazın.
//  Hər üç ədəd müsbət olmalıdır.
// Bütün tərəflər bərabərdirsə → “Bərabəryanlı üçbucaq”
// İki tərəf bərabərdirsə → “Bərabəryanlı üçbucaq”
// Heç biri bərabər deyilsə → “Müxtəliftərəfli üçbucaq”
// let a=Number(prompt("enter 1st side of a triangle"))
// let b=Number(prompt("enter 2nd side of a triangle"))
// let c=Number(prompt("enter 3rd side of a triangle"))
// if (a <= 0 || b <= 0 || c <= 0) {
//     alert("Bütün tərəflər müsbət olmalıdır!");
// } else {
//     if (a === b && b === c) {
//         alert("Bərabəryanlı üçbucaq");
//     } else if (a === b || b === c || a === c) {
//         alert("Bərabəryanlı üçbucaq");
//     } else {
//         alert("Müxtəlif tərəfli üçbucaq");
//     }
// }


// task3
// Daxil edilən ədədin cüt və ya tək olduğunu tapan proqram yazın.
//  Ədəd müsbət olmalıdır.
// let num=Number(prompt("enter a positive number"))
// if (num<0) {
//     alert("number is not positive");
    
// }
// else if(num%2==0){
//     alert("the number is odd");
    
// }
// else if(num%2==1){
// alert("the number is even");

// }
// else{
//     alert("enter a valid number");
    
// }

// task4
// Daxil edilən 1–12 arası ədədə uyğun ay adını yazan proqram yazın.
// Ədəd 1–12 aralığında olmalıdır.
// switch operatoru ilə yazılmalıdır.
// Məsələn: 2 daxil edildikdə → “Fevral”.
// let month=Number(prompt("enter a number"))
// switch (month) {
//     case 1:
//         alert("january");
        
//         break;
//         case 2:
//         alert("february");
        
//         break;
//         case 3:
//         alert("march");
        
//         break;
//         case 4:
//         alert("april");
        
//         break;
//         case 5:
//         alert("may");
        
//         break;
//         case 6:
//         alert("june");
        
//         break;
//         case 7:
//         alert("july");
        
//         break;
//         case 8:
//         alert("august");
        
//         break;
//         case 9:
//         alert("september");
        
//         break;
//         case 10:
//         alert("october");
        
//         break;
//         case 11:
//         alert("nowember");
        
//         break;
//         case 12:
//         alert("december");
        
//         break;
        

//     default:
//         alert("enter a number between 1-12, please");
        
//         break;
// }


// task5
// Daxil edilən ədədin kvadratını tapan proqram yazın.
// Ədəd müsbət olmalıdır.
// let num=Number(prompt("enter a positive number"))
// if (num<0) {
//     alert("number is not positive, try again");
    
// }
// else{
//     console.log(alert(num**2));
    
// }


// task6
// Daxil edilən ədədin 5-ə bölünüb-bölünmədiyini tapan proqram yazın.
// Əgər tam bölünürsə → “Bölündü” yazılsın.
// Əgər tam bölünmürsə → qalıq hesablanıb göstərilsin.
// Ədəd müsbət olmalıdır.
// let num=Number(prompt("enter a positive number"))
// if (num<0) {
//     alert("number is not positive");
    
// }
// else if(num%5==0){
// alert("bolundu");

// }
// else{
//     alert(num%5);
    
// }


// task7
//  Daxil edilən 2 ədədin hasilinin cüt və ya tək olduğunu göstərən proqram yazın.
// Hər iki ədəd müsbət olmalıdır.
// let a=Number(prompt("enter first number"))
// let b=Number(prompt("enter second number"))

// if (a<0 || b<0) {
//     alert("it is not positive");
    
// }
// else if(a*b%2==0){
//     alert("product of a and b is odd");
    
// }
// else{
//     alert("product of a and b is even");
    
// }



// task8
// Daxil edilən  ədədin 3-ə bölünüb-bölünmədiyini tapan proqram yazın.
// Ədəd müsbət olmalıdır.
// let a=Number(prompt("enter a positive number"))
// if (a<0) {
//     alert("number is not positive");
    
// }
// else if(a%3==0){
//    alert("bolunur");
    
// }
// else if(a%3!=0){
//     alert("bolunmur");
    
// }



// task9
// Daxil edilən 3 müsbət ədədin ortalamasını tapan proqram yazın.
// Bütün ədədlər müsbət olmalıdır.
// let a=Number(prompt("enter 1st positive number"))
// let b=Number(prompt("enter 2nd positive number"))
// let c=Number(prompt("enter 3rd positive number"))
// let av=(a+b+c)/3
// if (a<0 || b<0 || c<0) {
//     alert("number must be positive");
    

// }
// else{
//     alert(av);
    
// }


// task10
// Tələbənin balına görə qiymətini təyin edən proqram yazın.
// Bal 0-dan böyük və 100-dən kiçik olmalıdır.
// Qiymətləndirmə:
// 90 və yuxarı → “A”
// 80–89 → “B”
// 70–79 → “C”
// 60–69 → “D”
// 59 və aşağı → “F”
// let a=Number(prompt("enter your exam point"))
// if (a<0 || a>100) {
//     alert("point is not correct");
    
// }
// else if (a>=90) {
//     alert("your grade is A");
// }
    
//     else if (a>=80 && a<90) {
//     alert("your grade is B");
    
// }

// else if (a>=70 && a<80) {
//     alert("your grade is C");
    
// }

// else if (a>=60 && a<70) {
//     alert("your grade is D");
    
// }

// else if (a>=0 && a<60) {
//     alert("your grade is F");
    
// }


// task11
// Yaşa görə insanın kateqoriyasını müəyyən edən proqram yazın.
// Ədəd müsbət olmalıdır.
// 18-dən az → “Yeniyetmə”
// 18–64 arası → “Yetkin”
// 65 və yuxarı → “Yaşlı”
// let a=Number(prompt("enter your age"))
// if (a>0 && a<18) {
//      alert("yeniyetme");
// }
// else if(a>=18 && a<64){
//     alert("yetkin");
    
// }
// else if(a>=65){
//     alert("yasli");
    
// }
// else{alert("enter positive number");
// }


// task12
// Daxil edilən saata uyğun salamlaşma çıxaran proqram yazın.
// Ədəd müsbət olmalı və 0–24 aralığında olmalıdır.
// 0–11 → “Sabahınız xeyir”
// 12–17 → “Günortanız xeyir”
// 18–24 → “Axşamınız xeyir”
// let a= Number(prompt("enter the clock"))
// if (a<0 || a>24) {
//     alert("you entered clock wrong");
    
// }
// else if(a>=0 && a<=11){
// alert("sabahiniz xeyir");

// }
// else if(a>=12 && a<=17){
// alert("gunortaniz xeyir");

// }
// else if(a>=18 && a<=24){
// alert("axsaminiz xeyir");

// }


// task13
//  Daxil edilən x və y ədədlərinə görə nəticə hesablayan proqram yazın.
// Əgər x > 0 və y < 0 → 4x + 2y + 4 hesablayın
// Əgər x > 0 və y == 0 → 2x - y + 3 hesablayın
// Əgər x < 0 və y > 0 → 3x + 4y + 3 hesablayın
// let x= Number(prompt("enter first number"))
// let y= Number(prompt("enter second number"))
// if(x>0 && y<0){
//     alert(4x+2y+4);
    
// }
// else if(x>0 && y==0){
//     alert(2x-y+3);
    
// }
// else if(x<0 && y>0){
//     alert(3x+4y+3);
    
// }




// task14
//  1-dən 100-ə qədər ədədlər üçün FizzBuzz proqramı yazın.
// 3-ə bölünəndə → “Fizz”
// 5-ə bölünəndə → “Buzz”
// Hər ikisinə bölünəndə → “FizzBuzz”
// let a= Number(prompt("enter a number"))
// if (a<1 || a>100) {
//     alert("enter a number between 1-100");
    
// }
// else if(a%15==0){
// alert("FizzBuzz");
// }
// else if(a%3==0){
//     alert("Fizz");
// }
// else if(a%5==0){
//     alert("Buzz");
    
// } 
// else{
//     alert("3e ve 5e bolunmur");
    
// }


// task15
// Verilmiş sözün palindrom olub-olmadığını yoxlayan proqram
// Verilmiş söz tərsinə oxunduqda da eyni olmalıdır.
// let word = prompt("enter a word");
// let lowerCaseWord = word.toLowerCase();
// let len = lowerCaseWord.length;
// let isPalindrome = true;

// for (let i = 0; i < len / 2; i++) {
//   if (lowerCaseWord[i] !== lowerCaseWord[len - 1 - i]) {
//     isPalindrome = false;
//     break;
//   }
// }

// if (isPalindrome) {
//   alert("palindromdur.");
// } else {
//   alert("palindrom deyil");
// }



// task16
// Verilmiş ədədin faktorialını tapan proqram yazın.
// Ədəd müsbət olmalıdır.

// let a = Number(prompt("enter a positive number"));

// if (a<0) {
//     alert("number must be positive");
// } else {
//     let faktorial = 1;
//     for (let i = 2; i <= a; i++) {
//         faktorial *= i;
//     }
//     alert(faktorial);
// }


// task17
// Verilmiş bir array-dəki ən böyük ədədi tapan proqram yazın.
// Array-də yalnız ədədlər olmalıdır.
// let a=[2,5,3,4,6,4,9,33,78,65,99]
// let max=a[0]
// for (let i = 0; i < a.length; i++) {
//     if (max<a[i]) {
//         max=a[i]
//     }
    
// }
// alert(max)


// task18
// Verilmiş bir array-dəki ən kiçik ədədi tapan proqram yazın.
// Array-də yalnız ədədlər olmalıdır.
// let a=[2,5,3,4,6,4,9,33,78,65,99]
// let min=a[0]
// for (let i = 0; i < a.length; i++) {
//     if (min>a[i]) {
//         min=a[i]
//     }
    
// }
// alert(min)


// task19
// Verilmiş bir array-in elementlərinin cəmini tapan proqram yazın.
// Array-də yalnız ədədlər olmalıdır.
// let a=[2,5,3,4,6,4,9,33,78,65,99]
// let sum=0
// for (let i = 0; i < a.length; i++) {
//     sum+=a[i]
    
// }
// alert(sum)


// task20
// Sözlərdən ibarət bir array-də ən uzun sözü tapan proqram yazın.
// Array-də yalnız sözlər olmalıdır.
// let a=["faxriyya", "tamella", "fidan", "xedice", "selcan"]
// let name=a[0]
// for (let i= 0; i < a.length; i++) {
//     if(a.length> name.length){
// name=a[i]
//     }
    
// }
// alert(name)


// task21
//  Size bir massiv verilir ve bu massive elave olunmaq ucun bir eded, eded massivde tekrar olmamalidir.
//   Eger sertleri odeyirse ededi massive elave edib massivi ekrana cap edin.

// let a = [2, 5, 7, 9, 12];
// let num = Number(prompt("enter a number"));
// let exist = 0;

// for (let i = 0; i < a.length; i++) {
//   if (a[i] === num) exist = 1;
// }

// if (num == num && exist == 0) {
//   a[a.length] = num;
// }

// alert(a);



// task22
// Size bir massiv verilir, bu massivde ededler sirali sekilde olmalidir(artan sira ile),
//  yeni bir eded verilir massive elave olunmasi ucun. bu eded massivin uygun indexine elave olunmalidir ki, artan sira pozulmasin


// let a = [2, 4, 7, 10, 15]; 
// let num = Number(prompt("Əlavə etmək istədiyiniz ədədi daxil edin:"));

// let i = 0;

// while (i < a.length && a[i] < num) {
//     i++;
// }

// for (let j = a.length; j > i; j--) {
//     a[j] = a[j - 1];
// }
// a[i] = num;

// alert(a);



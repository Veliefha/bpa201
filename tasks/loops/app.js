// Bir tam ədədlər massivi verilib. Bu massivdə yalnız bir dəfə təkrarlanan elementləri çap edən funksiya yazın. 
// let array=[3,4,5,3,6,7,5,8,3];
// for (let i = 0; i < array.length; i++) {
//    let count=0;
    

// for (let j =0; j < array.length; j++) {
//     if (array[i]===array[j]) {
//     count++
//     } 
    
// }
// if (count===1) {
//     console.log(array[i]);
    
// }
// }


// Sizə bir tam ədədlər massivi və silinəcək ədəd verilir. Əgər ədəd massivdə yoxdursa, **"Not found"* yazılsın. Əks halda, həmin ədəd silinsin və massivin sonuna 0 əlavə edilsin ki, ölçü dəyişməsin.
let array=[1,2,3,4,5,6,7,8];
let num=3;
let found=false;
for (let i = 0; i < array.length; i++) {
    if (array[i]===num) {
        found=true;
        for (let j = i; j < array.length-1; j++) {
            array[j]=array[j+1];
            
        }
        array[array.length-1]=0;
        break;
    }
    
}
if (found===false) {
    console.log("not found");
    
}
else{
    console.log(array);
    
}


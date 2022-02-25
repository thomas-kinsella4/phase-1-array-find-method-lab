// code your solution here

//function superbowlWin(array) {
//    array.find((didWin) => {
//        if (didWin.result === "W") {
//            console.log(didWin.year);
//        } else {
//            return (undefined);
//        }
//    })
//}

//superbowlWin(record);


//function superbowlWin(recordsArray) {
//    recordsArray.find((record) => {
 //       if (win.result === "W") {
//            return win.year
//        } else {
//            return undefined;
//        }
 //   })
//};

//superbowlWin(record);


//myArray.find((element) => {
//    console.log(element > 3);
//});

function superbowlWin(recordsArray) {
    const foundRecord =  recordsArray.find(record => record.result === "W");
    if (foundRecord) {
        return foundRecord.year;
    } else {
        return undefined;
    }
}


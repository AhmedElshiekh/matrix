function searchMatrix(searchString, matrix, rangeList) {
    var letter = searchString[0]
    var potentialPaths = []

    for (var x = 0; x <= 3; x++) {
        for (var y = 0; y <= 3; y++) {
            if (letter == matrix[x][y]) {
                if (searchString[1] == undefined) {
                    return true
                } else {
                    // console.log(searchString.slice(-1));
                    potentialPaths.push(searchMatrix(searchString.slice(-1), matrix))
                }
            }
        }
    }
    // console.log(potentialPaths)
    for (var i = potentialPaths.length - 1; i >= 0; i--) {
        if (potentialPaths[i]) {
            return true
        }
    }
}

function MatrixChallenge(strArr) {

        var errorList = []
        var matrisStrings = strArr[0].split(",")
        var strings = strArr[1].split(",")

        for (var i = strings.length - 1; i >= 0; i--) {

            // return strings[i];

            if (!searchMatrix(strings[i], matrisStrings)) {
                errorList.push(strings[i])
            }
        }

        // console.log("done and the result is: ")
        if (errorList.length > 0) {
            return errorList.join(",")
        } else {
            return "true"
        }
}

/*
 a a e y
 r r u m 
 t g m n
 b a l l 
---------
 a a e y r r u m t g m n b a l l 
*/
/* all,ball,mur,[raeymnl],tall,true,trum */
/* rumk,yes */

console.log(MatrixChallenge(["aaey, rrum, tgmn, ball", "all,ball,mur,raeymnl,rumk,tall,true,trum,yes"]));
console.log(MatrixChallenge(["aaey, rrum, tgmn, ball", "all,ball,mur,tall,true,trum"]));
// console.log(MatrixChallenge(["aaey, rrum, tgmn, ball", "all,yes"]));
// console.log(MatrixChallenge(["aaey, rrum, tgmn, ball", "raeymnl,mumnlg"]));
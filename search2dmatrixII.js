//Dynammic Progamming

//Time complexity: O(1)
//Space complexity: O(1)


var searchMatrix = function(matrix, target) {
     //start from last column of first row.
        let row = 0;
        let col_max = matrix[0].length-1;
        
        //move down or left to find the element
        while(row < matrix.length && col_max >= 0){
            if(matrix[row][col_max] == target) return true;
            else if(matrix[row][col_max] > target) col_max--;
            else row++;
        }
        
        return false;
    };


/*
Success
Details 
Runtime: 340 ms, faster than 83.31% of JavaScript online submissions for Search a 2D Matrix II.
Memory Usage: 42.3 MB, less than 43.48% of JavaScript online submissions for Search a 2D Matrix II.
*/

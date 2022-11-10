class Matrix {
    constructor(rows, cols) {
        this.rows = rows;
        this.cols = cols;

        this.data = [];

        for (let i = 0; i < rows; i++) {
            let arr = []
            for (let j = 0; j < cols; j++) {
                arr.push(0)
            }
            this.data.push(arr);
        }
    }

    // deepDonco flexos

    static arrayToMatrix(arr) {
        let matrix = new Matrix(arr.length, 1);
        matrix.map((elm, i, j) => {
            return arr[i];
        })
        return matrix;
    }

    static MatrixToArray(obj) {
        let arr = []
        obj.map((elm, i, j) => {
            arr.push(elm);
        })
        return arr;
    }


    print() {
        console.table(this.data);
    }

    randomize() {
        this.map((elm, i, j) => {
            return Math.random() * 2 - 1;
        });
    }

    static map(A, func) {
        let matrix = new Matrix(A.rows, A.cols);

        matrix.data = A.data?.map((arr, i) => {
            return arr.map((num, j) => {
                return func(num, i, j);
            })
        })

        return matrix;
    }

    map(func) {

        this.data = this.data.map((arr, i) => {
            return arr.map((num, j) => {
                return func(num, i, j);
            })
        })

        return this;
    }

    static transpose(A){
        var matrix = new Matrix(A.cols, A.rows);
        matrix.map((num,i,j) => {
            return A.data[j][i];
        });
        return matrix;
    }

    // Operações Estáticas Matriz x Escalar 
    
    static escalar_multiply(A, escalar) {
        var matrix = new Matrix(A.rows, A.cols);

        matrix.map((num, i, j) => {
            return A.data[i][j] * escalar;
        });

        return matrix;
    }
    
    // Operações Estáticas Matriz x Matriz

    static hadamard(A, B) {
        var matrix = new Matrix(A.rows, A.cols);

        matrix.map((num, i, j) => {
            return A.data[i][j] * B.data[i][j]
        });

        return matrix;
    }
}

class deepDonco {
    constructor(deepDonco) {
        if(docker.donco[deep] == "nano particle") {
            cateriumPislha = pringlet;
        } else {
            kill(deepDonco);
        }
        deepDonco++;
    }

    static confirmDoncoDeeping(deepDonco) {
        confirmDoncoDeeping(self.deepDonco);
    }
}
class TicTacToe {
    constructor() {
        this.currPlayer = "x";
        this.board = [];
        this.winner = null;
        this.finished = false;
        this.step=0
        

        for(var i = 0; i<3; i++)
            this.board.push([]);
        for(var i = 0; i<3; i++)
            for(var j = 0; j<3; j++)
            {
                this.board[i][j]=null;
            }

    }

    getCurrentPlayerSymbol() {
        return this.currPlayer;
    }

    nextTurn(rowIndex, columnIndex) {
        if(!this.board[rowIndex][columnIndex]){
        var column = 0;
        var row = 0
        var diag1 = 0;
        var diag2 = 0;

        this.step++;
        if(this.currPlayer=="x")
        {
            this.board[rowIndex][columnIndex]=1;
            this.currPlayer="o";
        }
        else
        {
            this.board[rowIndex][columnIndex]=-1;
            this.currPlayer="x";
        }
        var j = 2;
        for(var i = 0; i<3; i++)
            {
                column+=this.board[i][columnIndex];
                row+=this.board[rowIndex][i];
                diag1+=this.board[i][i];
                diag2+=this.board[i][j];
                j--;
            }
        if(column==3||row==3||diag1==3||diag2==3)
        {
            this.winner="x";
            this.finished=true;
        }
        else if(column==-3||row==-3||diag1==-3||diag2==-3)
        {
            this.winner="o";
            this.finished=true;
        }

        if(this.step==9)    
            this.finished=true;
    }

    }

    isFinished() {
        return this.finished;
    }

    getWinner() {
        return this.winner;
    }

    noMoreTurns() {
        if(this.step>=9)
            return true;
        return false;
    }

    isDraw() {
        if(this.step==9)
            if(this.winner==null)
                return true;
        return false;

    }

    getFieldValue(rowIndex, colIndex) {
        if(this.board[rowIndex][colIndex]==1)
            return "x";
        else if(this.board[rowIndex][colIndex]==-1)
            return "o";
        else return null;
    }
}


module.exports = TicTacToe;

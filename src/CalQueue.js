/***
 * @description Bowling Game
 * @author Jeffer Chen
 */

export const EMPTY = -1
export const MAX = 10

const DEBUG = false

export class CalQueue{
    constructor(){
        this.queue = []
        this.sum = 0
        this.allowGrow = true
    }

    stopGrow(){
        this.allowGrow = false
    }

    push(item){
        if(this.allowGrow)
            this.queue.push(item)
    }

    feedFirst(newNum){
        // debug
        if(DEBUG) this.printStack("before insert " + newNum)
        
        if(newNum===MAX){
            // STRIKE
            this.fill(MAX)
            this.push([MAX, EMPTY, EMPTY])
        }else{ 
            this.fill(newNum)
            this.push([newNum, EMPTY])
        }

        // debug
        if(DEBUG) this.printStack("after insert " + newNum)
    }

    feedSecond(newNum){
        // debug
        if(DEBUG) this.printStack("before insert " + newNum)

        this.fill(newNum)

        // debug
        if(DEBUG) this.printStack("after insert " + newNum)
    }

    getFirstNum(){
        if(this.queue.length>0){
            const lastItem = this.queue[this.queue.length-1]
            if(lastItem.length>0)
                return lastItem[0]
        }
        return EMPTY
    }


    fill(newNum){
        for(let i=0; i<this.queue.length; i++){
            const lastIndex = this.queue[i].indexOf(EMPTY)
            if(lastIndex>0){
                this.queue[i][lastIndex] = newNum
            }
        }
        this.clear()
    }

    clear(){
        while(this.queue.length>0){
            let firstItem = this.queue[0]

            if(!firstItem.includes(EMPTY)){
                const firstSum = firstItem.reduce((a, b)=>a+b)
                this.queue.shift()

                if(firstItem.length===2 && firstSum===MAX) // SPARE
                    this.push([MAX, EMPTY])
                else{
                    this.sum += firstSum
                }
            }else
                break
        }
    }

    allClear(){
        return (this.queue.length===0)
    }

    currentSum(){
        return this.sum
    }

    printStack(desc){
        let log = desc + "========SUM " + this.currentSum() + " CLEAR " + this.allClear() +  "\r\n"
        for(let i=0; i<this.queue.length; i++){
            log += "|"
            for(let j=0; j<this.queue[i].length; j++){
                let sep = (j===0) ? "" : ", "
                log += sep + ((this.queue[i][j]===EMPTY) ? "E" : this.queue[i][j].toString())
            }
        }
        console.log(log)
    }
}
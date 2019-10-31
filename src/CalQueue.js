export const EMPTY = -1
export const MAX = 10

export class CalQueue{
    constructor(){
        this.queue = []
        this.sum = 0
    }

    feedFirst(newNum){     
        if(newNum===MAX){
            // STRIKE
            this.fill(MAX)
            this.queue.push([MAX, EMPTY, EMPTY])
        }else{ 
            this.fill(newNum)
            this.queue.push([newNum, EMPTY])
        }
    }

    feedSecond(newNum){
        this.fill(newNum)
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
                this.queue.pop()

                if(firstItem.length===2 && firstSum===MAX) // SPARE
                    this.queue.push([MAX, EMPTY])
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
}
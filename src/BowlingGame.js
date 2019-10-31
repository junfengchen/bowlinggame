/***
 * @description Bowling Game
 * @author Jeffer Chen
 */

import { CalQueue, MAX } from "./CalQueue"

export class BowlingGame{
    constructor(){
        this.newStart = true
        this.frame = 0
        this.queue = new CalQueue()
        this.switchFrame()
    }

    roll(noOfPins){
        if(noOfPins>10 || noOfPins<0)
            return false

        if(this.frame<10){
            if(this.newStart){
                this.queue.feedFirst(noOfPins)
                if(noOfPins === MAX)
                    this.switchFrame()
                else
                    this.newStart = false
            }else{
                this.queue.feedSecond(noOfPins)
                this.switchFrame()
            }
        }else{
            if(this.newStart){
                this.queue.feedFirst(noOfPins)
                if(noOfPins === MAX){
                    this.switchFrame()
                    this.queue.stopGrow()
                }else
                    this.newStart = false
            }else{
                this.queue.feedSecond(noOfPins)
                this.switchFrame()
                this.queue.stopGrow()
            }
        }

        return true
    }

    switchFrame(){
        this.frame++
        this.newStart = true
    }

    newFrame(){
        return this.newStart
    }

    scoreFinalized(){
        return this.queue.allClear()
    }

    score(){
        return this.queue.currentSum()
    }
}
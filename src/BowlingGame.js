/***
 * @description Bowling Game
 * @author Jeffer Chen
 */

export const FRAME_NOT_STARTED = -1

export class BowlingGame{
    constructor(){
        this.nScore = 0
        this.nPrePins = FRAME_NOT_STARTED
    }

    roll(noOfPins){
        let bValid = false;
        if(noOfPins>=0 && noOfPins<=10)
            bValid = true;

        if(this.newFrame()){
            this.nPrePins = noOfPins
            if(noOfPins===10)
                this.nPrePins = FRAME_NOT_STARTED
        }else{
            const pinsThisFrame = this.nPrePins + noOfPins
            this.nPrePins = FRAME_NOT_STARTED
            if(pinsThisFrame>=0 && pinsThisFrame<=10){
                bValid = true
            }else{
                bValid = false
            }
        }
        return bValid
    }

    newFrame(){
        return (this.nPrePins === FRAME_NOT_STARTED)
    }

    score(){
        return this.nScore
    }
}
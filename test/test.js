/***
 * @description Bowling Game
 * @author Jeffer Chen
 */

import { BowlingGame } from '../src/BowlingGame'
import { expect, assert } from 'chai'


describe("Roll", () => {
    it("should allow bowler knocking down certain number(between 0 and 10) of pins", ()=>{
        const bowlingGame = new BowlingGame()
        assert.equal(bowlingGame.roll(5), true)
    })

    it("should return false if number of pins is not in the range", ()=>{
        const bowlingGame = new BowlingGame()
        assert.equal(bowlingGame.roll(11), false)

        const bowlingGame2 = new BowlingGame()
        assert.equal(bowlingGame2.roll(-1), false)
    })

    it("should switch frame after maximum 2 tries", ()=>{
        const bowlingGame = new BowlingGame()
        assert.equal(bowlingGame.newFrame(), true)
        assert.equal(bowlingGame.roll(3), true)

        assert.equal(bowlingGame.newFrame(), false)
        assert.equal(bowlingGame.roll(4), true)

        assert.equal(bowlingGame.newFrame(), true)
        assert.equal(bowlingGame.roll(3), true)
    })

    it("should switch frame when no pins left", ()=>{
        const bowlingGame = new BowlingGame()

        assert.equal(bowlingGame.newFrame(), true)
        assert.equal(bowlingGame.roll(10), true)

        assert.equal(bowlingGame.newFrame(), true)
    })
})

describe("Score", () => {
    it("should return no score at the beginning", ()=>{
        const bowlingGame = new BowlingGame()
        const score = bowlingGame.score()
        expect(score).to.be.equals(0);
    })


    it("should be sum of number of pins knocked down in 2 tries if not all pins get knocked down", ()=>{
        const bowlingGame = new BowlingGame()
        
        // first attempt
        assert.equal(bowlingGame.roll(4), true)
        // second attempt
        assert.equal(bowlingGame.roll(4), true)

        const score = bowlingGame.score()
        expect(score).to.equal(8)
    })
})


describe("Score SPARE", () => {
    it("should be the sum of the number of pins knocked down plus the number of pins knocked down in the next bowl", ()=>{
        const bowlingGame = new BowlingGame()
        // 1st attempt
        bowlingGame.roll(4)
        // 2nd attempt
        bowlingGame.roll(6)
        // 1st attempt
        bowlingGame.roll(5)
        // 2nd attempt
        bowlingGame.roll(0)
        // check no pending calculations

        assert.equal(bowlingGame.scoreFinalized(), true)

        const score = bowlingGame.score()
        
        //  (4 + 6 + 5) + (5 + 0) = 20
        expect(score).to.equal(20)
    })
})


describe("Score STRIKE", () => {
    it("should be the sum of the number of pins knocked down plus the number of pins knocked down in the next two bowls", ()=>{
        const bowlingGame = new BowlingGame()
        // 1st attempt
        bowlingGame.roll(10)
        // 1st attempt
        bowlingGame.roll(5)
        // 2nd attempt
        bowlingGame.roll(4)

        // check no pending calculations
        assert.equal(bowlingGame.scoreFinalized(), true)

        const score = bowlingGame.score()
        //  (10 + 5 + 4) + ( 5 + 4) = 28
        expect(score).to.equal(28) 
    })
})
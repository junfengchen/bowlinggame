/***
 * @description Bowling Game
 * @author Jeffer Chen
 */

import { BowlingGame } from '../src/BowlingGame'
import { expect, assert } from 'chai'


describe("init", () => {
    it("should return no score at the beginning", ()=>{
        const bowlingGame = new BowlingGame()
        const score = bowlingGame.score()
        expect(score).to.be.equals(0);
    })
})


describe("roll", () => {
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

    it("should allow max 10 pins in each frame (2 tries)", ()=>{
        const bowlingGame = new BowlingGame()
        assert.equal(bowlingGame.roll(3), true)
        assert.equal(bowlingGame.roll(7), true)

        const bowlingGame2 = new BowlingGame()
        assert.equal(bowlingGame2.roll(7), true)
        // try to go over 10 pins in the 2nd try
        assert.equal(bowlingGame2.roll(7), false)
    })
})
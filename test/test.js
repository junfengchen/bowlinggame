/***
 * @description Bowling Game
 * @author Jeffer Chen
 */

import { BowlingGame } from '../src/BowlingGame'
import { expect } from 'chai'


describe("init", () => {
    it("should return no score at the beginning", ()=>{
        const bowlingGame = new BowlingGame()
        const score = bowlingGame.score()
        expect(score).to.be.equals(0);
    })
})
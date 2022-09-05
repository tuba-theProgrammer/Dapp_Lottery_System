const { assert } = require("chai");

require('chai').use(require('chai-as-promised')).should()


const Lottery = artifacts.require('./Lottery.sol');
contract('Lottery',([manager,person])=>{
    let lottery;
    before(async()=>{
        lottery= await Lottery.deployed();
    })
   
    describe('deployment',async()=>{
        it('deploys successfully',async()=>{
            const address = await lottery.address
            assert.notEqual(address,0x0)
            assert.notEqual(address,'')
            assert.notEqual(address,null)
            assert.notEqual(address,undefined)
        })

        it('has a name',async()=>{
            const name = await lottery.name();
            assert.equal(name,'Lottery Dapp Project');
        })
    })
   

    describe('person add in lottery',async()=>{
        let result;
        before(async()=>{
           result= await lottery.sendTransaction({from:person,value:web3.utils.toWei('1','Ether')})
        })
        
        it('transaction recieve',async()=>{
            console.log(result)
            const event = result.logs[0].args
            assert.equal(event.price,'1000000000000000000','price is correct');

        })
    })





})
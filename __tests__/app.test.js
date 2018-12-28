const event=require('../event-logger');
// const util = require("util");
const {saved, error} = require('../events');


describe('event handling tests', ()=>{

    it('should log when a file is saved', () => {

        const spy = jest.spyOn(console, 'log');
        event.savedLog('test.txt');

        saved.emit('saved', 'test.txt');

        expect(spy).toHaveBeenCalled();
        
      
        spy.mockRestore();
      });

      it('should log when an error is called', () => {

        const spy = jest.spyOn(console, 'log');
        event.errorLog('test.txt');
        
        error.emit('error');

        expect(spy).toHaveBeenCalled();
        
      
        spy.mockRestore();
      });
})

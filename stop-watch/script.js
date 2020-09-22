function StopWatch(){

    let startTime, endTime, duration = 0, running;

    this.start = function(){

        if(running){
            throw new Error("Stop watch is already started.");
        }

        running = true;
        startTime = new Date();

    }

    this.stop = function(){

        if(!running){
            throw new Error("Stop watch is not started.");
        }

        running = false;
        endTime = new Date();
        duration += (endTime.getTime() - startTime.getTime()) / 1000;

    }

    this.reset = function(){

        startTime = null;
        endTime = null;
        duration = 0;
        running = false;

    }

    Object.defineProperty(this, 'duration', {
        get: function(){
            return duration;
        }
    })

}
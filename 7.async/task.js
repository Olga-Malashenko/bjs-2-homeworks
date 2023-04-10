class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.intervalId = null;
    }

    addClock(formattedTime, func) {
        
        if(!formattedTime || !func) {        // проверка, есть ли параметры (выбросить ошибку, если нет)
            throw new Error('Отсутствуют обязательные аргументы');
            return;
        }

        if(this.alarmCollection.find(sound => sound.time === formattedTime)) {    // проверка времени на повтор
            console.warn('Уже присутствует звоок на это же время');
            return; 
        }
        
        const sound = {        // добавляем в массив объект (новый звонок в коллекцию)
            callback: func,
            time: formattedTime,
            canCall: true
        }
        this.alarmCollection.push(sound);
    }

    removeClock(time) {
        return this.alarmCollection.filter(sound => sound.time !== time);    //удаляет звонок по свойству time
    }

    getCurrentFormattedTime() {
        const currentDate = new Date();
        return currentDate.getHours() + ":" + currentDate.getMinutes();
    }

    start() {
        if(this.intervalId) return;   // завершаем, если есть значение id
        this.intervalId = setInterval(() => {
            let currentTime = getCurrentFormattedTime();
            if(this.alarmCollection.forEach(sound => sound.time === currentTime)) {
                this.canCall = false;
                this.callback();
            }
        }, 1000);
    }

    stop() {
        clearInterval(this.intervalId);
        this.intervalId = null;
    }

    resetAllCalls() {
        this.alarmCollection.forEach(sound => sound.canCall = true);
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }

}
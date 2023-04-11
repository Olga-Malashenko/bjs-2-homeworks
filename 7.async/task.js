class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.intervalId = null;
    }

    addClock(formattedTime, func) {
        
        if(!formattedTime || !func) {        // проверка, есть ли параметры (выбросить ошибку, если нет)
            throw new Error('Отсутствуют обязательные аргументы');
        }

        if(this.alarmCollection.find(sound => sound.time === formattedTime)) {    // проверка времени на повтор
            console.warn('Уже присутствует звоок на это же время'); 
        }
        
        const sound = {        // добавляем в массив объект (новый звонок в коллекцию)
            callback: func,
            time: formattedTime,
            canCall: true
        }
        this.alarmCollection.push(sound);
    }

    removeClock(time) {
        this.alarmCollection = this.alarmCollection.filter(sound => sound.time !== time);    //удаляет звонок по свойству time
    }

    getCurrentFormattedTime() {
        const currentDate = new Date().toLocaleTimeString("ru-Ru", {
            hour: "2-digit",
            minute: "2-digit",
          });
        return currentDate;
    }

    start() {
        if(this.intervalId) {
            return;
        }   // завершаем, если есть значение id

        this.intervalId = setInterval(() => {
            let currentTime = this.getCurrentFormattedTime();
            this.alarmCollection.forEach(sound => {
                if(sound.time === currentTime && sound.canCall) {
                    sound.canCall = false;
                    sound.callback();
                }
            })
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
        this.alarmCollection = [];
        this.stop();
    }

}
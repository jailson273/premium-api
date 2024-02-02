export class Timer {
    static sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}

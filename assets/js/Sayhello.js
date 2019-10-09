export default class Sayhello {
      constructor(name) {
            this.name = name;
            this.wave();
      }

      wave() {
            console.log(this.name);
      }
}
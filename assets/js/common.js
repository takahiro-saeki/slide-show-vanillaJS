import style from '../css/style.css';

class Test {
  constructor(options) {
    this.options = Object.assign({
      elem: '#app',
      time: 1000,
      animate: 'normal'
    }, options)
    this.elem = this.options['elem'];
    this.time = this.options['time'];
    this.animate = this.options['animate'];
    const count = this.count;
    this.autoChange();
    this.moveRight();
    this.moveLeft();
  }

  autoChange() {
    const box = document.querySelectorAll('.responsive-img');
    const interval = this.time;
    const length = box.length;
    this.count = 0;
    box[0].classList.add('show');
    let int = setInterval(() => this.slide(box, interval, length), interval);
  }

  slide(box, interval, length) {
    let animateClass = 'show';
    box[this.count].classList.remove(animateClass);
    this.count++;
    if(this.count >= length) {
      this.count = 0;
    }
    box[this.count].classList.add(animateClass)
  }

  moveRight() {
    const box = document.querySelectorAll('.responsive-img');
    const right = document.querySelector('.right')
    right.addEventListener('click', e => {
      box[this.count].classList.remove('show')
      this.count++;
      if(this.count >= 4) {
        this.count = 0;
      }
      box[this.count].classList.add('show')
      console.log(this.count)
    })
  }

  moveLeft() {
    const box = document.querySelectorAll('.responsive-img');
    const left = document.querySelector('.left')
    left.addEventListener('click', e => {
      box[this.count].classList.remove('show');
      this.count--;
      if(this.count < 0) {
        this.count = 3;
      }
      box[this.count].classList.add('show')
      console.log(this.count)
    })
  }
}

new Test({time: 3000, animate: 'animate'});

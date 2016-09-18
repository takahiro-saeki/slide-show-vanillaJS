import style from '../css/style.css';

class Test {
  constructor(options) {
    this.options = Object.assign({
      elem: '#app',
      time: 1000
    }, options)
    this.elem = this.options['elem'];
    this.time = this.options['time'];
    this.autoChange();
  }

  autoChange() {
    const box = document.querySelector(this.elem).children;
    const interval = this.time;
    const length = box.length;
    console.log(this.time)
    console.log(this.elem)
    let count = 0;
    box[0].classList.add('show');
    setTimeout(() => this.slide(box, interval, length, count), interval);
  }

  slide(box, interval, length, count) {
    box[count].classList.remove('show')
    count++;
    if(count >= length) {
      count = 0;
    }
    box[count].classList.add('show')
    setTimeout(() => this.slide(box, interval, length, count), interval);
  }
}

new Test({time: 3000});

/* 追加したい機能、リファクタ */
//細かくメソッドを分割
//戻るボタン、次に進むボタンの設置
//slideする際のアニメーションを3パターン程作り、オプションで指定出来るようにする

let html = document.querySelector("#html");
let style = document.querySelector("#style");
let string = `
/* 你好，我在学习饥人谷的前端课程
 * 快来和我一起学吧！
 * 先来画一个八卦图
 * 首先准备一个div
**/
#bagua {
  border: 1px solid green;
  width: 200px;
  height: 200px;
}
/* 然后把div变成一个圆
**/
#bagua {
  border-radius: 50%;
  box-shadow:0 0 3px rgba(0,0,0,0.5);
  border: none;
}
/* 八卦是阴阳形成的
 * 一黑一白
**/
#bagua {
  background: linear-gradient(90deg, rgba(255,255,255,1)
  0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,
  0,0,1) 100%);
}
/* 加两个魔丸 */
#bagua::before {
  width: 100px;
  height: 100px;
  top: 0;
  left: 50%;
  background: #000;
  transform: translateX(-50%);
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255,255,255,1) 0%,
  rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#bagua::after {
  width: 100px;
  height: 100px;
  bottom: 0;
  left: 50%;
  background:#fff;
  transform: translateX(-50%);
  border-radius: 50%;
  background: radial-gradient(circle, rgba(0,0,0,1) 0%,
  rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
}
`;
let string2 = "";
let n = 0;

let step = function() {
  setTimeout(() => {
    if (string[n] === "\n") {
      // 如果是回车，改为<br>
      string2 += "<br>";
    } else if (string[n] === " ") {
      string2 += "&nbsp;";
    } else {
      // 如果不是回车，直接拼接
      string2 += string[n];
    }
    html.innerHTML = string2;
    // style标签里面不能有HTML标签，可以使用substring，因为不会显示到页面上
    style.innerHTML = string.substring(0, n);
    // 自动向下滚动
    window.scrollTo(0, 99999);
    if (n < string.length - 1) {
      n += 1;
      step();
    }
  }, 50);
};

step();

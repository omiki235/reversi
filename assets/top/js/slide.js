/* 1. アドレスバー・ツールバーを除いた100vhの高さを取得 */
function setHeight() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
}
setHeight();
window.addEventListener("resize", setHeight);

/* 2. スライダーの設定 */
const verticalSlider = new Swiper(".vertical-slider", {
  direction: "vertical", // スライダーの向きを縦にする
  slidesPerView: 1, // 一度に1枚のスライドを表示
  speed: 600, // 600msでスライドを切り替える
  mousewheel: true, // マウスホイールやスクロールを有効にする
  pagination: {
    el: ".vertical-slider__pagination", // ページネーション要素のクラスを指定
    type: "bullets", // ページネーションの形を指定
    clickable: true, // ページネーションをクリック可能にする
  },
});

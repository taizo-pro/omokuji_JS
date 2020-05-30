    //DOM操作でJSでHTMLの操作を可能にする
    const start = document.getElementById("start");
    const result = document.getElementById("result");
  
    const omikuji = ["大吉","中吉","吉","凶","大凶",]
  
    num = 0
  
    //スタート押したら開始されるメソッド
    start.addEventListener("click",function() {
  
        //ランダムに選ぶ
      const num = Math.floor(Math.random() * omikuji.length);
  
      //配列を表示する
      result.textContent = omikuji[num];
  
      //特定の値にアラートを出す
        if(result.textContent === "大吉"){
          alert("おめでとう！")
        }else if(result.textContent === "大凶"){
          alert("残念でした！")
        }
    })
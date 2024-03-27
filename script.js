
// タイプ・わざ・とくせいの配列
const types = ["ほのお", "みず", "くさ", "でんき", "こおり", "かくとう", "どく", "じめん", "ひこう", "エスパー", "むし", "いわ", "ゴースト", "ドラゴン", "あく", "はがね", "フェアリー"];
const moves = ["たいあたり", "はっぱカッター", "みずでっぽう", "かみなり", "こおりのつぶて", "かえんほうしゃ", "どくばり", "じしん", "つばさでうつ", "サイコキネシス", "むしのさざめき", "いわくだき", "シャドーボール", "りゅうのいかり", "あくのはどう", "てっぺき", "ムーンフォース"];
const abilities = ["もうか", "げきりゅう", "しんりょく", "せいでんき", "ゆきがくれ", "こんじょう", "どくのトゲ", "すながくれ", "はとむね", "サイコメイカー", "むしのしらせ", "がんじょう", "プレッシャー", "プレッシャー", "きんちょうかん", "フェアリースキン"];

var statsChart; // チャート変数をグローバルスコープで宣言

// ランダム生成
document.getElementById('generate-random-btn').addEventListener('click', function() {
    const pokemonDataContainer = document.getElementById('pokemon-data');
    const infoContainer = document.getElementById('pokemon-info');
    const statsContainer = document.getElementById('pokemon-stats');
  let htmlContent = '';

  // タイプをランダムに1つか2つ選択
  const numberOfTypes = Math.floor(Math.random() * 3); // 0, 1, 2 のいずれかをランダムに選択
  let selectedTypes = [];
  for (let i = 0; i < (numberOfTypes === 0 ? 1 : numberOfTypes); i++) {
      const randomType = types[Math.floor(Math.random() * types.length)];
      if (!selectedTypes.includes(randomType)) {
          selectedTypes.push(randomType);
      } else {
          i--;
      }
  }

  // 技をランダムに4つ選択
  let selectedMoves = [];
  while (selectedMoves.length < 4) {
      const randomMove = moves[Math.floor(Math.random() * moves.length)];
      if (!selectedMoves.includes(randomMove)) {
          selectedMoves.push(randomMove);
      }
  }

  // 特性をランダムに選択
  const randomAbility = abilities[Math.floor(Math.random() * abilities.length)];

  // 種族値の生成と合計
  let totalStats = 0;
  let stats = {HP: 0, こうげき: 0, ぼうぎょ: 0, とくこう: 0, とくぼう: 0, すばやさ: 0};

  for (let stat in stats) {
      stats[stat] = Math.floor(Math.random() * 150) + 1;
      totalStats += stats[stat];
  }

  // レーダーチャートのデータ設定
    const data = {
        labels: Object.keys(stats),
        datasets: [{
            label: '種族値',
            data: Object.values(stats),
            fill: true,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgb(255, 99, 132)',
            pointBackgroundColor: 'rgb(255, 99, 132)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(255, 99, 132)'
        }]
    };

    // レーダーチャートのオプション設定
    const config = {
        type: 'radar',
        data: data,
        options: {
            elements: {
                line: {
                    borderWidth: 3
                }
            }
        },
    };

    // 既存のチャートインスタンスが存在する場合は破棄
    if (statsChart) {
        statsChart.destroy();
    }

  // HTMLコンテンツの生成
  htmlContent += `<p>タイプ: ${selectedTypes.join(' / ')}</p>`;
  htmlContent += `<p>わざ:</p><ul>`;
  selectedMoves.forEach(move => {
      htmlContent += `<li>${move}</li>`;
  });
  htmlContent += `</ul>`;
  htmlContent += `<p>とくせい: ${randomAbility}</p>`;
  htmlContent += `<p>種族値:</p><ul>`;
  for (let stat in stats) {
      htmlContent += `<li>${stat}: ${stats[stat]}</li>`;
  }
  htmlContent += `</ul>`;
  htmlContent += `<p>種族値の合計: ${totalStats}</p>`;

  // 生成されたHTMLコンテンツをpokemon-info要素にセット
  infoContainer.innerHTML = htmlContent;

  // pokemon-data要素を表示
  pokemonDataContainer.classList.remove('hidden');

  // 新しいチャートを作成
  statsChart = new Chart(document.getElementById('statsChart'), config);
});


// カスタム生成
document.getElementById('generate-custom-btn').addEventListener('click', function() {
    const dataContainer = document.getElementById('pokemon-data');
    let htmlContent = '<p>test</p>';

    dataContainer.innerHTML = htmlContent;

  });
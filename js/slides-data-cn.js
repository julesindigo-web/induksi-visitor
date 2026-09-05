/* ============================================================
   SLIDES DATA — VISITOR EDITION (CN 简体中文)
   26 页，与 slides-data.js 一一对应，仅访客陪同参观
   ============================================================ */

const SLIDES_DATA_CN = [
  {
    type: 'cover',
    mod: '访客',
    title: '欢迎 — 访客',
    render() {
      return `
        <div class="visitor-ribbon">仅限访客</div>
        <div class="mining-scene" aria-hidden="true">
          <svg viewBox="0 0 1400 400" preserveAspectRatio="xMidYMax slice">
            <defs>
              <linearGradient id="sky-cn" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="#0a1428"/>
                <stop offset="100%" stop-color="#070d1a" stop-opacity="0"/>
              </linearGradient>
              <linearGradient id="ground-cn" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="#1a2a44"/>
                <stop offset="100%" stop-color="#070d1a"/>
              </linearGradient>
            </defs>
            <rect x="0" y="0" width="1400" height="400" fill="url(#sky-cn)"/>
            <path d="M0 280 L200 160 L380 240 L520 180 L700 280 L880 200 L1040 260 L1200 180 L1400 280 L1400 400 L0 400 Z" fill="url(#ground-cn)"/>
            <path d="M0 320 L180 240 L340 290 L500 250 L680 320 L840 270 L1020 320 L1200 250 L1400 320 L1400 400 L0 400 Z" fill="#0a1428" opacity="0.6"/>
          </svg>
        </div>
        <div class="inner">
          <div class="dual-logos">
            <div class="logo-card">
              <img src="assets/logo-auxin.png" alt="PT Auxin Development Indonesia 标志" loading="lazy"/>
              <small>PT Auxin Development Indonesia</small>
            </div>
            <div class="logo-card">
              <img src="assets/logo-sifang.png" alt="印尼四方矿业标志" loading="lazy"/>
              <small>印尼四方矿业</small>
            </div>
          </div>
          <div class="co">PT Auxin Development Indonesia × 印尼四方矿业</div>
          <h1 style="margin-top:10px">访客<em>入场</em><br/>镍露天矿安全培训</h1>
          <div class="hazard" style="margin-left:auto;margin-right:auto;"></div>
          <p class="lead" style="margin:14px auto 0; text-align:center; max-width:720px">
            欢迎，<b>访客朋友</b>。您已进入高风险生产矿区。
            入场前须完成本简明培训——<b>全程陪同</b>，严禁作业与操作设备。
          </p>
          <div class="badges">
            <span class="badge gold">★ 仅限访客</span>
            <span class="badge teal">须全程陪同</span>
            <span class="badge" style="background:var(--red-soft); border-color:var(--red-line); color:var(--red)">7天有效</span>
            <span class="badge blue">${State.get('user.name') ? `👋 ${State.get('user.name')}` : '矿区访客'}</span>
          </div>
          <div class="panelbox warn" style="margin-top:18px; text-align:left; max-width:760px; margin-left:auto; margin-right:auto">
            <h3><i></i>访客与员工的区别</h3>
            <ul style="font-size:12.5px">
              <li><b>访客=陪同参观</b>——不得作业、无公司驾照不得在运输路开车、禁入禁区。</li>
              <li><b>员工=50页+12个月证书</b>——访客=<b>26页简明+7天访客证</b>。</li>
              <li>全程听从<b>接待/陪同</b>安排，不得离队。</li>
            </ul>
          </div>
          <div class="hint">点击<b>下一页</b>或按键盘方向键开始 ▸ 约15分钟</div>
        </div>
      `;
    },
    afterRender() { Effects.celebrate(); },
  },
  {
    type: 'agenda',
    mod: '访客',
    title: '访客议程',
    render() {
      return `
        <div class="inner stagger">
          <div class="kicker">访客 — 简明议程</div>
          <h2>访客培训<em>议程</em>（26页）</h2>
          <p class="lead">仅保留访客须知，无操作技术内容，不可跳过。</p>
          <div class="cards">
            <article class="card b"><div class="ico">${Icons.get('building', { class: 'ico-svg' })}</div><h3>01 · 概况与基本制度</h3><p>镍露天矿概况、零伤害理念与访客制度。</p></article>
            <article class="card t"><div class="ico">${Icons.get('scroll', { class: 'ico-svg' })}</div><h3>02 · 区域与权限</h3><p>绿黄红三区、禁区与陪同义务。</p></article>
            <article class="card g"><div class="ico">${Icons.get('helmet', { class: 'ico-svg' })}</div><h3>03 · 防护与健康</h3><p>访客5件防护、中暑、粉尘噪声防护。</p></article>
            <article class="card r"><div class="ico">${Icons.get('mountain', { class: 'ico-svg' })}</div><h3>04 · 现场危险概述</h3><p>步行与乘车、设备盲区、红土滑坡——只须识别远离。</p></article>
            <article class="card"><div class="ico">${Icons.get('siren', { class: 'ico-svg' })}</div><h3>05 · 应急与疏散</h3><p>报警、集合点，访客职责：跟陪同，不逞能。</p></article>
            <article class="card t"><div class="ico">${Icons.get('bed', { class: 'ico-svg' })}</div><h3>06 · 品行与环保</h3><p>禁赌博胁迫、垃圾分类、举报保护，做受尊敬的客人。</p></article>
            <article class="card g"><div class="ico">${Icons.get('clipboard', { class: 'ico-svg' })}</div><h3>07 · 访客事故案例</h3><p>3起真实访客事故——30秒教训可救命。</p></article>
            <article class="card"><div class="ico">${Icons.get('check', { class: 'ico-svg' })}</div><h3>08 · 考核与访客证</h3><p>课前测、结业考80分及格、签名、7天访客证。</p></article>
          </div>
          <div class="footnote">⏱ 访客培训≠员工培训。操作工/司机/新员工须另学50页完整版。</div>
        </div>
      `;
    },
  },
  {
    type: 'cards',
    mod: '访客',
    title: '访客守则',
    render() {
      return `
        <div class="inner">
          <div class="kicker">访客 — 行为规范</div>
          <h2>访客<em>行为规范</em></h2>
          <p class="lead">做客他乡须守规——平安回家是共同目标。</p>
          <div class="cards stagger">
            <article class="card b"><div class="ico">${Icons.get('shield', { class: 'ico-svg' })}</div><h3>须陪同</h3><p><b>绝不脱离</b>接待/陪同。无陪同=<b>停止</b>并联系HSE，禁独自参观。</p></article>
            <article class="card g"><div class="ico">${Icons.get('check', { class: 'ico-svg' })}</div><h3>准时专注</h3><p><b>准时、专注。</b>听 briefing，不迟到，不擅自离队。</p></article>
            <article class="card"><div class="ico">${Icons.get('mute', { class: 'ico-svg' })}</div><h3>静音行走不用手机</h3><p>手机<b>静音</b>。<b>行走/过运输路时禁用手机</b>。</p></article>
            <article class="card t"><div class="ico">${Icons.get('eye', { class: 'ico-svg' })}</div><h3>拍照须批准</h3><p><b>拍照/录像/无人机须HSE书面许可</b>，关键区高度敏感。</p></article>
            <article class="card r"><div class="ico">${Icons.get('hand', { class: 'ico-svg' })}</div><h3>主动参与</h3><p>不懂就问。<b>有疑问先停，问陪同</b>——不擅自行动。</p></article>
            <article class="card"><div class="ico">${Icons.get('mic', { class: 'ico-svg' })}</div><h3>疏散通道</h3><p>记住<b>本教室集合点</b>。报警时跟陪同走，不带行李。</p></article>
          </div>
          <div class="panelbox warn" style="margin-top:16px">
            <h3><i></i>访客黄金法则</h3>
            <p style="color:var(--muted); font-size:13px; margin:0"><b>“不懂就不往前走。”</b>好访客敢问、敢停。</p>
          </div>
        </div>
      `;
    },
  },
  {
    type: 'two',
    mod: '访客',
    title: '目的与范围',
    render() {
      return `
        <div class="inner">
          <div class="kicker">访客 — 为何培训？</div>
          <h2>目的与<em>访客界限</em></h2>
          <div class="two">
            <div class="panelbox">
              <h3><i></i>培训目的</h3>
              <ul>
                <li><b>保护您</b>免受红土滑坡、设备盲区、运输路、中暑等隐性危险。</li>
                <li><b>讲清界限：</b>哪里可去、哪里须陪同、哪里禁入。</li>
                <li><b>统一应急：</b>报警、集合点，职责是跟陪同而非救援。</li>
                <li><b>满足法规：</b>无培训=<b>禁入</b>。</li>
              </ul>
            </div>
            <div class="panelbox warn">
              <h3><i></i>对象与有效期</h3>
              <ul>
                <li><b>对象：</b>公务、供应商、审核、家属、媒体、学生等一切访客。</li>
                <li><b>不含：</b>新员工/承包商/操作工/司机→另学<b>50页员工版</b>。</li>
                <li><b>访客证：7天，须陪同</b>（非12个月），超期重训。</li>
                <li><b>无培训/无陪同=禁入。</b>访客证须佩戴可见。</li>
              </ul>
            </div>
          </div>
          <div class="footnote">访客培训<b>不代替</b>班前会与作业许可。您只可陪同参观，不得作业。</div>
        </div>
      `;
    },
  },
  {
    type: 'cards',
    mod: '访客',
    title: 'K3与标志',
    render() {
      return `
        <div class="inner">
          <div class="kicker">访客 — 安全速览</div>
          <h2>什么是<em>安全健康（K3）</em>？</h2>
          <div class="two">
            <div class="panelbox ok">
              <h3><i></i>一句话讲清</h3>
              <p style="color:var(--muted); font-size:13.5px; line-height:1.7"><b style="color:var(--text)">K3=保护您</b>免受伤害、疾病、死亡与财产损失，同时保持生产。<b>产量不值得用命换。</b></p>
              <h3 style="margin-top:16px"><i></i>访客为何要懂？</h3>
              <p style="color:var(--muted); font-size:13.5px; line-height:1.7">因为<b>矿山风险与办公室完全不同</b>。湿红土滑坡、百吨矿车、雨后湿滑在写字楼见不到。</p>
            </div>
            <div class="panelbox">
              <h3><i></i>安全标志须认识</h3>
              <ul>
                <li><b>绿齿轮：</b>身心健康工作</li>
                <li><b>白十字：</b>无事故无职业病</li>
                <li><b>11齿：</b>11章<b>1970年第1号法</b>（安全基本法）</li>
              </ul>
              <p style="margin-top:10px; font-size:11px; color:var(--muted)">在安全帽、标志牌与HSE制服上见到即为必须遵守。</p>
            </div>
          </div>
          <div class="cards stagger" style="margin-top:18px">
            <article class="card b"><div class="ico">${Icons.get('shield', { class: 'ico-svg' })}</div><h3>安全=效益</h3><p>零伤害=生产顺畅，守规访客助矿区安全与声誉。</p></article>
            <article class="card t"><div class="ico">${Icons.get('hand', { class: 'ico-svg' })}</div><h3>访客权利</h3><p>有权提问、要防护、要陪同，<b>感觉不安全可拒绝进入</b>。</p></article>
            <article class="card g"><div class="ico">${Icons.get('cert', { class: 'ico-svg' })}</div><h3>访客义务</h3><p>戴防护、跟陪同、报隐患，不跨越警戒——无例外。</p></article>
          </div>
        </div>
      `;
    },
  },
  {
    type: 'stats',
    mod: '访客',
    title: '为何重要',
    render() {
      return `
        <div class="inner">
          <div class="kicker">访客 — 现场事实</div>
          <h2>为何<em>访客培训</em>重要？</h2>
          <p class="lead">不是走形式——忽视 briefing 的访客真出过事。</p>
          <div class="stats">
            <div class="stat danger"><div class="num" data-target="88">0</div><div class="lbl">% 事故源于不安全行为</div></div>
            <div class="stat warn"><div class="num" data-target="3" data-suffix=" 秒">0</div><div class="lbl">运输路安全反应时间</div></div>
            <div class="stat ok"><div class="num" data-target="7">0</div><div class="lbl">天 访客证有效期</div></div>
            <div class="stat"><div class="num" data-target="100" data-suffix="%">0</div><div class="lbl">须陪同——无陪同即停</div></div>
          </div>
          <div class="bigquote" style="margin-top:32px;">
            “访客职责很简单：<b>跟陪同、戴防护、不离队。</b>三条可救命。”
            <small>— Auxin × 四方 HSE — 访客安全</small>
          </div>
        </div>
      `;
    },
    afterRender() { Effects.animateCounters(); },
  },
  {
    type: 'pretest',
    mod: '考核',
    title: '课前测试',
    render() { return '<div id="quizContainerPretest"></div>'; },
    afterRender() { Quiz.renderPretest(); },
  },
  {
    type: 'cards',
    mod: '访客',
    title: '矿区概况',
    render() {
      return `
        <div class="inner">
          <div class="kicker">访客 — 认识矿区</div>
          <h2><em>Auxin–四方</em>镍露天矿概况</h2>
          <p class="lead">您参观的是生产中的<b>红土镍露天矿</b>——不是博物馆，土质与设备决定您的风险。</p>
          <div class="cards stagger">
            <article class="card b"><div class="ico">${Icons.get('pickup', { class: 'ico-svg' })}</div><h3>工艺与土质</h3><p><b>露天红土</b>（褐铁矿与腐岩）。湿红土<b>超滑易滑坡</b>，别当城市柏油路。</p></article>
            <article class="card"><div class="ico">${Icons.get('compass', { class: 'ico-svg' })}</div><h3>您将远观（须陪同）</h3><ul><li>采坑、台阶、边坡、排土场</li><li>运输路——巨型矿车通道</li><li>堆场/破碎（噪声粉尘）</li><li>车间、油库、码头——<b>无特别许可禁入</b></li></ul></article>
            <article class="card t"><div class="ico">${Icons.get('refresh', { class: 'ico-svg' })}</div><h3>作业时间</h3><p>矿区<b>24小时倒班</b>。请按HSE通知时间到访，夜间能见度低对访客更危险。</p></article>
            <article class="card g"><div class="ico">${Icons.get('shield', { class: 'ico-svg' })}</div><h3>愿景：零伤害</h3><p><b>人人每天平安回家。</b>包括您——别成数字。</p></article>
          </div>
          <div class="panelbox warn" style="margin-top:16px">
            <h3><i></i>访客须知</h3>
            <p style="margin:0; color:var(--muted); font-size:12.5px">您<b>不会</b>被带到采掘工作面或 active 排土场。若陪同提出计划外区域，<b>拒绝并报HSE</b>。</p>
          </div>
        </div>
      `;
    },
  },
  {
    type: 'two',
    mod: '访客',
    title: '政策速览',
    render() {
      return `
        <div class="inner">
          <div class="kicker">访客 — 政策速览</div>
          <h2><em>安全环保</em>政策 — 访客4条</h2>
          <div class="two">
            <div class="panelbox">
              <h3><i></i>公司承诺（8条缩为4条）</h3>
              <ul>
                <li><b>良好采矿规范：</b>安全高效——访客不干预生产。</li>
                <li><b>合规与保护：</b>人人含访客有权处于安全环境。</li>
                <li><b>5R与卫生：</b>整理整顿清扫清洁素养——访客保持卫生。</li>
                <li><b>参与：</b>员工协商+访客须听 briefing。</li>
              </ul>
              <p style="margin-top:10px; font-size:11px; color:var(--muted)">文件 STD-SO-SMI-001（2025年10月第0版）访客摘要，非法律全文。</p>
            </div>
            <div class="panelbox warn">
              <h3><i></i>对客人的期望</h3>
              <ul>
                <li><b>诚信：</b>如实告知健康、来访目的与能力边界。</li>
                <li><b>尊重：</b>礼貌包容，尊重员工与社区。</li>
                <li><b>守纪：</b>守时、戴防护、听陪同不争辩。</li>
                <li><b>用心：</b>2小时参观也报隐患险兆。</li>
              </ul>
            </div>
          </div>
          <div class="footnote">8条全文见员工版，访客记住4条+<b>零伤害</b>即可。</div>
        </div>
      `;
    },
  },
  {
    type: 'checks',
    mod: '访客',
    title: '访客10条（须背）',
    render() {
      return `
        <div class="inner">
          <div class="kicker">访客 — 10条禁令义务</div>
          <h2>访客<em>10条</em> — 违者吊销证件</h2>
          <p class="lead" style="color:var(--amber)">专为访客制定——因您不熟矿区，部分比员工更严。</p>
          <ul class="checks cols">
            <li><b>1. 100%陪同：</b>绝不独行，走散原地停并联系陪同/HSE。</li>
            <li><b>2. 访客证可见</b>，离场交回。</li>
            <li><b>3. 防护齐全</b>（帽、镜、靴、背心），摘下即离场。</li>
            <li><b>4. 无公司驾照禁在运输路开车</b>；乘车系带、不碰手机。</li>
            <li><b>5. 禁烟/电子烟</b>，仅指定吸烟区；<b>油库危化品区零明火零手机</b>。</li>
            <li><b>6. 拍照录像无人机须HSE书面许可</b>——禁发关键区。</li>
            <li><b>7. 不触摸</b>设备、电柜、阀门、转动机器及车间任何物品。</li>
            <li><b>8. 服从标志围栏：</b>黄红带=未经批准禁过。</li>
            <li><b>9. 到访健康：</b>发烧头晕服嗜睡药/饮酒请申报，可推迟。</li>
            <li><b>10. 报隐患险兆</b>给陪同——再小也要报，报告者值得尊敬。</li>
          </ul>
          <div class="footnote">⚠ 严重违规（无陪同进坑、摘防护、跨围栏）=<b>驱离并取消参观</b>。</div>
        </div>
      `;
    },
  },
  {
    type: 'cards',
    mod: '访客',
    title: '通行分区',
    render() {
      return `
        <div class="inner">
          <div class="kicker">访客 — 通行分区</div>
          <h2>访客<em>通行分区</em> — 绿 • 黄 • 红</h2>
          <p class="lead">非所有区域可去，记住三色——陪同会讲今日路线。</p>
          <div class="cards stagger">
            <article class="card g" style="border-color:var(--green-line)"><div class="ico">${Icons.get('check', { class: 'ico-svg', stroke: 'var(--green)' })}</div><h3 style="color:var(--green)">绿色 — 可去（须防护）</h3><ul><li>办公、会议、食堂、医务室、集合点</li><li>HSE指定安全观景点</li><li>标志人行道</li></ul></article>
            <article class="card" style="border-color:var(--amber-line)"><div class="ico">${Icons.get('warn', { class: 'ico-svg', stroke: 'var(--amber)' })}</div><h3 style="color:var(--amber)">黄色 — 须陪同</h3><ul><li>运输路（乘车系带不用手机）</li><li>堆场观景点、码头（须救生衣）</li><li>选厂外围——远离转动部位</li></ul></article>
            <article class="card r" style="border-color:var(--red-line)"><div class="ico">${Icons.get('stop', { class: 'ico-svg', stroke: 'var(--red)' })}</div><h3 style="color:var(--red)">红色 — 禁入</h3><ul><li>工作面、active排土场、集水坑、坡顶边缘</li><li>维修地沟、配电、油库危化品库（无特别许可）</li><li>尾矿库、通廊、受限空间、高处</li></ul></article>
          </div>
          <div class="panelbox" style="margin-top:16px">
            <h3><i></i>如何确认分区？</h3>
            <ul>
              <li>迈步前问陪同：<b>“这里是什么区？”</b></li>
              <li>看标志围栏彩带——<b>不得挪动任何设施</b>。</li>
              <li>1:40矿图与码头图在现场 briefing 发放（看公告栏，不用背）。</li>
            </ul>
          </div>
          <div class="footnote">首日须访客培训+陪同路线 briefing，勿要求计划外“加游”。</div>
        </div>
      `;
    },
  },
  {
    type: 'two',
    mod: '访客',
    title: '入场条件',
    render() {
      return `
        <div class="inner">
          <div class="kicker">访客 — 门岗检查</div>
          <h2><em>入场条件</em> — 访客门岗</h2>
          <div class="two">
            <div class="panelbox">
              <h3><i></i>访客清单（须全勾）</h3>
              <ul>
                <li>✅ <b>访客培训通过</b>+访客证有效（7天）</li>
                <li>✅ <b>访客证</b>佩戴可见</li>
                <li>✅ <b>防护齐全</b>：帽、镜、靴、背心</li>
                <li>✅ <b>健康 fit</b>——无发烧，未服嗜睡药/饮酒</li>
                <li>✅ <b>陪同在场</b>且路线已 briefing</li>
              </ul>
            </div>
            <div class="panelbox warn">
              <h3><i></i>自带车辆</h3>
              <ul>
                <li>访客轻车须<b>验收合格+有效贴纸</b></li>
                <li><b>访客司机须有效公司驾照</b>+全员系带</li>
                <li>车内备：<b>6kg灭火器、急救包、2个路锥、轮挡</b></li>
                <li><b>高杆旗：</b>轻车4米，矿车1米（如进设备区）</li>
                <li>无公司驾照=<b>不开车</b>——用矿区司机。</li>
              </ul>
            </div>
          </div>
          <div class="panelbox danger" style="margin-top:16px">
            <h3><i></i>不达标=禁入</h3>
            <p style="margin:0; color:var(--muted); font-size:12.5px">门岗拒无证无陪同访客——不是为难，是保护您，请勿在门口讨价还价。</p>
          </div>
        </div>
      `;
    },
  },
  {
    type: 'cards',
    mod: '访客',
    title: '标志与报警',
    render() {
      return `
        <div class="inner">
          <div class="kicker">访客 — 标志与警报</div>
          <h2>标志与<em>报警</em> — 访客须知</h2>
          <div class="cards stagger">
            <article class="card r" style="border-color:var(--red-line)"><div class="ico">${Icons.get('stop', { class: 'ico-svg', stroke: 'var(--red)' })}</div><h3 style="color:var(--red)">红色=禁止</h3><p>停止、危险、灭火器/消火栓。<b>红色围栏禁过</b>。</p></article>
            <article class="card" style="border-color:var(--amber-line)"><div class="ico">${Icons.get('warn', { class: 'ico-svg', stroke: 'var(--amber)' })}</div><h3 style="color:var(--amber)">黄色=小心</h3><p>湿滑、滑坡、重型设备，听陪同指令。</p></article>
            <article class="card b" style="border-color:var(--blue-line)"><div class="ico">${Icons.get('info', { class: 'ico-svg', stroke: 'var(--blue)' })}</div><h3 style="color:var(--blue)">蓝色=指令</h3><p>须戴帽、须穿背心、须报到，访客在观景点最易忘戴帽。</p></article>
            <article class="card g" style="border-color:var(--green-line)"><div class="ico">${Icons.get('check', { class: 'ico-svg', stroke: 'var(--green)' })}</div><h3 style="color:var(--green)">绿色=安全</h3><p>疏散道、集合点、急救，记住您站立处的标识。</p></article>
          </div>
          <div class="panelbox warn" style="margin-top:16px">
            <h3><i></i>警报声——记住节奏（下页可试听）</h3>
            <ul>
              <li><b>3遍长声：</b>紧急——跟陪同去集合点，不拿行李。</li>
              <li><b>短促断续：</b>注意——原地听广播/对讲。</li>
              <li><b>1遍长声：</b>解除——等陪同指令，不独行。</li>
            </ul>
          </div>
          <div class="footnote">访客<b>不用</b>记对讲频道——陪同负责联络，您的任务：<b>听跟</b>。</div>
        </div>
      `;
    },
  },
  {
    type: 'cards',
    mod: '访客',
    title: '访客防护（最低）',
    render() {
      return `
        <div class="inner">
          <div class="kicker">访客 — 防护装备</div>
          <h2>访客<em>必备防护</em> — 5+1</h2>
          <p class="lead">非员工10余件，访客仅须5件——但<b>缺一不可</b>。</p>
          <div class="cards stagger">
            <article class="card"><div class="ico">${Icons.get('helmet', { class: 'ico-svg' })}</div><h3>安全帽</h3><p>国标/ANSI，有风系带，<b>查裂纹有效期</b>，没带可在HSE借。</p></article>
            <article class="card b"><div class="ico">${Icons.get('glass', { class: 'ico-svg' })}</div><h3>安全眼镜</h3><p>带侧挡，观景点也须戴——红土尘可飞很远。</p></article>
            <article class="card t"><div class="ico">${Icons.get('boot', { class: 'ico-svg' })}</div><h3>安全靴</h3><p>钢头防滑。<b>凉鞋布鞋=门岗拒入</b>。</p></article>
            <article class="card g"><div class="ico">${Icons.get('vest', { class: 'ico-svg' })}</div><h3>高可见背心</h3><p>昼夜反光让设备司机看见，拍照也不摘。</p></article>
            <article class="card"><div class="ico">${Icons.get('earp', { class: 'ico-svg' })}</div><h3>听力防护（按需）</h3><p>选厂破碎≥85分贝陪同会发<b>耳塞/耳罩</b>，出噪声区前不摘。</p></article>
            <article class="card" style="border-color:var(--blue-line)"><div class="ico">${Icons.get('ship', { class: 'ico-svg' })}</div><h3>+救生衣（码头）</h3><p>去码头/水上须<b>穿好救生衣</b>，不拎手上。</p></article>
          </div>
          <div class="panelbox warn" style="margin-top:16px">
            <h3><i></i>访客防护规则</h3>
            <ul>
              <li>破损/沾危化品=报陪同<b>更换</b>——不凑合。</li>
              <li>勿拿员工专用（安全带、呼吸器、防化服）——您用不上也未经培训。</li>
              <li>防护非装饰——<b>不戴=警告并请出矿区</b>。</li>
            </ul>
          </div>
        </div>
      `;
    },
  },
  {
    type: 'two',
    mod: '访客',
    title: '访客健康',
    render() {
      return `
        <div class="inner">
          <div class="kicker">访客 — 参观期健康</div>
          <h2><em>访客健康</em> — 中暑粉尘疲劳</h2>
          <div class="two">
            <div class="panelbox">
              <h3><i></i>来前——适合到访</h3>
              <ul>
                <li>睡好，<b>勿熬夜</b>后来访。</li>
                <li><b>申报</b>生病发烧服嗜睡药——HSE可推迟无处罚。</li>
                <li><b>零酒精违禁药</b>——抽查含访客。</li>
                <li>自带常用药并告知陪同。</li>
              </ul>
              <h3 style="margin-top:14px"><i></i>参观中</h3>
              <ul>
                <li><b>热带中暑：</b>多喝白水，少咖啡，头晕去阴凉。</li>
                <li><b>红土尘：</b>不摘眼镜，尘大捂口鼻（有口罩则戴）。</li>
                <li><b>噪声：</b>选厂戴耳塞——勿为听手机摘下。</li>
              </ul>
            </div>
            <div class="panelbox danger">
              <h3><i></i>认清中暑——访客急症</h3>
              <ul>
                <li>表现：<b>皮肤干热、意识模糊、无汗、恶心</b>——非普通口渴 fatigue。</li>
                <li>处置：<b>报陪同→阴凉→喝水→医务室</b>，勿“再看一会儿”。</li>
                <li>穿<b>浅色轻薄棉衣</b>，勿厚化纤。</li>
                <li><b>互保：</b>陪同与访客见脸色差互提醒。</li>
              </ul>
              <h3 style="margin-top:12px"><i></i>镍痒</h3>
              <ul>
                <li>镍尘可致皮炎，勿抓，冲洗，参观后换衣。</li>
              </ul>
            </div>
          </div>
          <div class="footnote">矿区医务室对访客开放，有不适——<b>早报更安全</b>。</div>
        </div>
      `;
    },
  },
  {
    type: 'checks',
    mod: '访客',
    title: '交通——访客视角',
    render() {
      return `
        <div class="inner">
          <div class="kicker">访客 — 交通意识</div>
          <h2>交通与<em>运输路</em> — 访客为行人/乘客</h2>
          <p class="lead">您<b>不开车</b>，职责：显眼、不进盲区、懂优先。</p>
          <ul class="checks cols">
            <li><b>路权8级（记前3）：</b>救护→消防→重载设备→…→访客轻车<b>最后</b>，重型永远优先。</li>
            <li><b>乘轻车：</b>全员系带，不用手机，不吸烟，不坐货斗。</li>
            <li><b>步行：</b>只走标志人行道，过路<b>仅在陪同点</b>+与设备司机对视。</li>
            <li><b>设备盲区=死角：</b>矿车挖机驾驶室近处10-15米<b>看不见您</b>，绝不停留。</li>
            <li><b>联络：</b>您不拿对讲——<b>陪同呼叫</b>，陪同说“可过”前不过路。</li>
            <li><b>出车检查非您职责</b>——但看陪同查刹车灯喇叭再走。</li>
          </ul>
          <div class="panelbox danger" style="margin-top:16px">
            <h3><i></i>雨季——红土湿滑=访客头号危险</h3>
            <ul>
              <li>下雨红土如肥皂，访客车会突然打滑——<b>加大车距、大幅减速</b>。</li>
              <li>陪同说<b>停</b>（打滑/路坏）就服从，勿求“再走一段”。</li>
              <li>您有<b>访客停止权</b>：不安可要求停车——无处罚。</li>
            </ul>
          </div>
        </div>
      `;
    },
  },
  {
    type: 'cards',
    mod: '访客',
    title: '典型危险认知',
    render() {
      return `
        <div class="inner">
          <div class="kicker">访客 — 识别危险（远离）</div>
          <h2>镍露天矿<em>典型危险</em> — 访客篇</h2>
          <p class="lead">不用背操作规程——<b>认出、远离、报陪同</b>即可。</p>
          <div class="cards stagger">
            <article class="card r"><div class="ico">${Icons.get('mountain', { class: 'ico-svg' })}</div><h3>滑坡与流泥</h3><p><b>征兆：</b>坡顶裂缝、渗水、轰鸣。湿红土如流泥可吞设备。<b>访客：远离上报，不近距离拍照。</b></p></article>
            <article class="card"><div class="ico">${Icons.get('truck', { class: 'ico-svg' })}</div><h3>重型设备——隔离区</h3><p>禁入回转半径。<b>等设备完全停稳</b>并经司机示意，且陪同允许才靠近。</p></article>
            <article class="card b"><div class="ico">${Icons.get('factory', { class: 'ico-svg' })}</div><h3>选厂/机械区</h3><p>转动部位夹卷，护罩禁拆。跟紧陪同路线，<b>不触摸任何设备</b>。</p></article>
            <article class="card t"><div class="ico">${Icons.get('fire', { class: 'ico-svg' })}</div><h3>设备火灾/油库</h3><p>认车载灭火器，闻浓油味/见泄漏即报，不动火不用手机。</p></article>
            <article class="card"><div class="ico">${Icons.get('drop', { class: 'ico-svg' })}</div><h3>码头与水域（如去码头）</h3><p>须救生衣，防缆绳回弹，A类镍矿有液化风险——无护栏不近边。</p></article>
            <article class="card g"><div class="ico">${Icons.get('tools', { class: 'ico-svg' })}</div><h3>您不须掌握（员工内容）</h3><ul><li>上锁挂牌7步、配电、脚手架、受限空间测气、动火、吊装、基坑支护——<b>访客禁做</b>。</li></ul></article>
          </div>
          <div class="footnote">访客原则：<b>安全距离看，不摸，无陪同不进。</b>陪同犹豫=答案<b>不行</b>。</div>
        </div>
      `;
    },
  },
  {
    type: 'two',
    mod: '访客',
    title: '应急——访客职责',
    render() {
      return `
        <div class="inner">
          <div class="kicker">访客 — 应急</div>
          <h2><em>应急</em> — 您该怎么做？</h2>
          <div class="two">
            <div class="panelbox danger">
              <h3><i></i>发现/听到险情</h3>
              <ul>
                <li><b>勿慌——连喊“EMERGENCY”3遍</b>并立即报陪同。</li>
                <li><b>勿自行救援</b>（别成第二个伤员）。</li>
                <li><b>陪同负责对讲：</b>7要素（姓名、类型、地点、伤员、损失、支援、确认），您听跟。</li>
                <li>小火且您会用灭火器+陪同同意可试灭；变大=<b>撤离</b>。</li>
              </ul>
            </div>
            <div class="panelbox">
              <h3><i></i>疏散——跟陪同去集合点</h3>
              <ul>
                <li><b>跟陪同</b>走绿色标志疏散道。</li>
                <li><b>不拿行李，不返回</b>取包/手机。</li>
                <li><b>集合点待命</b>至<b>队长/应急队说“安全”</b>，点名，发现缺人即报。</li>
                <li>访客场景：火灾、滑坡流泥、地震、落水（码头）。</li>
              </ul>
            </div>
          </div>
          <div class="panelbox warn" style="margin-top:16px">
            <h3><i></i>地震——访客速记</h3>
            <ul>
              <li>室内：<b>快走不跑</b>撤出，来不及则躲结实桌下。</li>
              <li>室外：远离边坡建筑，去集合点，防余震与滑坡。</li>
            </ul>
          </div>
          <div class="footnote">记住：<b>访客应急任务=跟陪同保命，而非保矿。</b>勿逞能。</div>
        </div>
      `;
    },
  },
  {
    type: 'sireneDemo',
    mod: '访客',
    title: '警报试听',
    render() {
      return `
        <div class="inner">
          <div class="kicker">访客 — 警报</div>
          <h2>矿区<em>警报试听</em> — 访客须记住</h2>
          <p class="lead">点击试听警报节奏（语音）。真报警时没时间问——直接跟陪同走。</p>
          <div class="siren-demo">
            <button class="siren-btn danger" data-sirene="darurat"><span>🚨 紧急 — 3遍长声</span><span class="icon" aria-hidden="true">🔊</span></button>
            <button class="siren-btn warn" data-sirene="siaga"><span>⚠️ 注意 — 短促断续</span><span class="icon" aria-hidden="true">🔊</span></button>
            <button class="siren-btn ok" data-sirene="allclear"><span>✅ 解除 — 1遍长声</span><span class="icon" aria-hidden="true">🔊</span></button>
            <button class="siren-btn warn" data-sirene="blasting" aria-label="爆破警报试听"><span>💥 爆破 — 爆破节奏</span><span class="icon" aria-hidden="true">🔊</span></button>
          </div>
          <div class="footnote" style="margin-top:14px">访客：<b>3遍长声=直接跟陪同去集合点</b>。勿问“演习还是真的”——一律当真的。</div>
        </div>
      `;
    },
    afterRender() { Audio.bindSirene(); },
  },
  {
    type: 'two',
    mod: '访客',
    title: '急救与报告',
    render() {
      return `
        <div class="inner">
          <div class="kicker">访客 — 急救与报告</div>
          <h2><em>急救</em>与报告 — 访客</h2>
          <div class="two">
            <div class="panelbox">
              <h3><i></i>访客急救</h3>
              <ul>
                <li>问陪同记住<b>医务室、急救包、洗眼淋浴</b>位置（不靠记忆）。</li>
                <li><b>勿搬动重伤员</b>——保自身、叫陪同/应急队、保护现场。</li>
                <li>化学品粉尘入眼：洗眼器冲≥15分钟。</li>
                <li><b>一切受伤含擦伤须报</b>陪同→医务室。</li>
              </ul>
            </div>
            <div class="panelbox warn">
              <h3><i></i>报告文化——访客也有责</h3>
              <ul>
                <li>报陪同：<b>隐患、破损围栏、险兆、泄漏、可疑人员</b>。</li>
                <li><b>公正文化：</b>报告受保护不追责，被罚的是故意瞒报。</li>
                <li>流程：<b>报告→记录→整改→学习</b>，访客报告曾避免大事故。</li>
              </ul>
            </div>
          </div>
          <div class="panelbox" style="margin-top:16px">
            <h3><i></i>应急电话——现在就问陪同</h3>
            <p style="margin:0; color:var(--muted); font-size:12.5px">出作业区后存手机：<b>应急队、医务室、安保、HSE</b>。作业区<b>行走不用手机</b>——直接喊陪同。</p>
          </div>
        </div>
      `;
    },
  },
  {
    type: 'two',
    mod: '访客',
    title: '品行与安保',
    render() {
      return `
        <div class="inner">
          <div class="kicker">访客 — 品行</div>
          <h2>安保、<em>社区</em>与访客品行</h2>
          <div class="two">
            <div class="panelbox danger">
              <h3><i></i>矿区安保</h3>
              <ul>
                <li><b>特警/安保：</b>尊重检查指令——他们在保护您。</li>
                <li><b>严禁：</b>赌博、胁迫、带酒毒、盗矿/油/资产——<b>直接驱离并追究法律</b>。</li>
                <li><b>证件：</b>不外借，发现无证人员报陪同/安保。</li>
                <li>社交媒体：<b>关键区/内部事项无HSE许可禁发</b>。</li>
              </ul>
            </div>
            <div class="panelbox">
              <h3><i></i>社区环保——访客</h3>
              <ul>
                <li>尊重当地民俗与圣地——<b>无许可禁入圣地</b>。</li>
                <li><b>垃圾：</b>分<b>塑料与厨余</b>（看现场海报），油污垃圾不落地不入沟。</li>
                <li><b>5R：</b>整理整顿清扫清洁素养——访客保持整洁。</li>
                <li><b>举报受保护：</b>违规报人事/HSE——身份保密。</li>
              </ul>
            </div>
          </div>
          <div class="footnote">做让人想念的客人，而非不再邀请的客人，您的形象=贵司声誉。</div>
        </div>
      `;
    },
  },
  {
    type: 'scenarios',
    mod: '访客',
    title: '访客案例',
    render() {
      const cases = [
        { tag: '险兆 — 访客', title: '访客无陪同呼叫横穿运输路', story: '一名审核访客为近距离拍采坑，未经陪同对讲呼叫横穿运输路。重载矿车急刹，物料洒落，与访客不足1米。无人伤——但参观叫停，访客单位被通报。', takeaway: '访客<b>陪同说“可过”前禁过路</b>，勿以为设备司机看得见您——盲区极大。' },
        { tag: '访客事故', title: '访客为拍照摘背心，司机看不见', story: '堆场观景点访客为“好看”摘下背心拍照，装载机倒车时没看见。访客轻撞手臂骨折。调查：摘防护=违反访客证。', takeaway: '<b>访客防护非拍照道具。</b>摘背心=看不见=致命，上接驳车前全程穿戴。' },
        { tag: '访客中暑', title: '访客35℃坚持参观不补水', story: 'VIP访客拒绝阴凉休息与喝水，坚持35℃参观堆场，晕倒，皮肤干热意识模糊——中暑，送医住院1天，参观取消。', takeaway: '<b>听陪同防暑。</b>多喝水多阴凉，勿“再看一会儿”，中暑不看职务。' },
      ];
      return `
        <div class="inner">
          <div class="kicker">访客 — 真实教训</div>
          <h2>访客<em>真实事故</em>教训</h2>
          <p class="lead">3起访客事故——非员工，试想：“若我是他？”</p>
          <div class="scenarios stagger">
            ${cases.map(c => `
              <div class="scenario">
                <span class="scen-tag" style="background:var(--amber-soft); color:var(--amber); border:1px solid var(--amber-line)">${c.tag}</span>
                <h4>${c.title}</h4>
                <p>${c.story}</p>
                <div class="takeaway"><b style="color:var(--teal)">访客教训：</b> ${c.takeaway}</div>
              </div>`).join('')}
          </div>
          <div class="panelbox ok" style="margin-top:18px">
            <h3><i></i>继续前请自问</h3>
            <p style="margin:0; color:var(--muted); font-size:13px">陪同说“此处不安全，请等待”，您答？→<b>“好的，我等。”</b>而非“就一会儿”。</p>
          </div>
        </div>
      `;
    },
  },
  {
    type: 'posttest',
    mod: '考核',
    title: '结业考试与访客证',
    render() { return '<div id="quizContainerPosttest"></div>'; },
    afterRender() { Quiz.renderPosttest(); },
  },
  {
    type: 'signature',
    mod: '考核',
    title: '访客承诺签名',
    render() {
      const u = State.get('user') || {};
      return `
        <div class="inner">
          <div class="kicker">考核 — 访客</div>
          <h2>访客<em>承诺签名</em></h2>
          <div class="bigquote">
            "作为访客，我承诺：<b>跟陪同、戴防护、守标志、不进禁区。</b>本人知晓访客证仅限陪同参观，7天有效。"
            <small>— Auxin × 四方访客誓言</small>
          </div>
          <ul class="checks cols" style="margin-top:22px">
            <li>本人将<b>全程陪同</b>不离队。</li>
            <li>本人<b>不操作设备/不在运输路开车</b>（无许可与公司驾照）。</li>
            <li>本人将<b>遵守访客防护与标志</b>并报隐患。</li>
            <li>本人知晓<b>访客证≠员工证</b>，7天后重训。</li>
          </ul>
          <div class="two" style="margin-top:26px">
            <div class="panelbox">
              <h3><i></i>访客身份</h3>
              <div style="display:grid; gap:10px">
                <input id="sig-name" aria-label="访客姓名" placeholder="访客姓名" value="${u.name || ''}" style="padding:10px 12px; border-radius:10px; border:1px solid var(--line-2); background:var(--surface); color:var(--text); font-family:inherit; font-size:13px"/>
                <input id="sig-nik" aria-label="身份证件号" placeholder="身份证/证件号" value="${u.nik || ''}" style="padding:10px 12px; border-radius:10px; border:1px solid var(--line-2); background:var(--surface); color:var(--text); font-family:inherit; font-size:13px"/>
                <input id="sig-pos" aria-label="所属单位" placeholder="所属单位/公司" value="${u.position || ''}" style="padding:10px 12px; border-radius:10px; border:1px solid var(--line-2); background:var(--surface); color:var(--text); font-family:inherit; font-size:13px"/>
                <input id="sig-dept" aria-label="来访事由" placeholder="来访事由" value="${u.department || ''}" style="padding:10px 12px; border-radius:10px; border:1px solid var(--line-2); background:var(--surface); color:var(--text); font-family:inherit; font-size:13px"/>
                <input id="sig-host" aria-label="接待/陪同" placeholder="接待/陪同姓名" value="${u.host || ''}" style="padding:10px 12px; border-radius:10px; border:1px solid var(--amber-line); background:var(--amber-soft); color:var(--text); font-family:inherit; font-size:13px"/>
                <input id="sig-date" aria-label="到访日期" type="date" value="${u.visitDate || u.date || new Date().toISOString().slice(0,10)}" style="padding:10px 12px; border-radius:10px; border:1px solid var(--line-2); background:var(--surface); color:var(--text); font-family:inherit; font-size:13px"/>
              </div>
            </div>
            <div class="panelbox warn">
              <h3><i></i>访客电子签名</h3>
              <div class="sig-wrap">
                <canvas id="sigCanvas" class="sig-canvas"></canvas>
                <div class="sig-meta"><span id="sigDate">— / — / —</span><span>访客签名</span></div>
              </div>
              <div class="sig-actions">
                <button class="navbtn" id="sigClear">清除</button>
                <button class="navbtn primary" id="sigSave" style="flex:1">保存签名</button>
              </div>
              <p style="margin-top:10px; font-size:11px; color:var(--muted); line-height:1.5">签名即同意访客证条款，违规愿被请出矿区。</p>
            </div>
          </div>
          <div style="text-align:center; margin-top:34px;">
            <p class="lead" style="text-align:center; margin:0 auto;"><b style="color:var(--text)">感谢您做关心安全的客人。</b><br/>祝参观愉快，平安回家。🙏</p>
          </div>
        </div>
      `;
    },
    afterRender() { Signature.init(); },
  },
  {
    type: 'cert',
    mod: '考核',
    title: '访客证',
    render() { return '<div id="certContainer"></div>'; },
    afterRender() { Certificate.render(); },
  },
  {
    type: 'closing',
    mod: '结束',
    title: '感谢 — 访客',
    render() {
      return `
        <div class="inner" style="text-align:center; padding-top:30px">
          <div class="dual-logos" style="max-width:640px">
            <div class="logo-card">
              <img src="assets/logo-auxin.png" alt="PT Auxin Development Indonesia 标志" loading="lazy"/>
              <small>PT Auxin Development Indonesia</small>
            </div>
            <div class="logo-card">
              <img src="assets/logo-sifang.png" alt="印尼四方矿业标志" loading="lazy"/>
              <small>印尼四方矿业</small>
            </div>
          </div>
          <h1 style="margin-top:14px">感谢<em>您</em> — 访客</h1>
          <div class="hazard" style="margin-left:auto;margin-right:auto;"></div>
          <p class="lead" style="margin:14px auto 0; text-align:center; max-width:680px;">
            您已完成<b>访客培训</b>，记住3条：<b style="color:var(--text)">跟陪同</b>、<b style="color:var(--text)">戴防护</b>、<b style="color:var(--text)">不离队</b>。
          </p>
          <div class="badges">
            <span class="badge gold">7天访客证</span>
            <span class="badge teal">须陪同</span>
            <span class="badge blue">零伤害</span>
            <span class="badge">非员工</span>
          </div>
          <div class="panelbox" style="margin-top:24px; text-align:left; max-width:640px; margin-left:auto; margin-right:auto">
            <h3><i></i>离场前——访客清单</h3>
            <ul>
              <li>✅ 截图/打印<b>访客证</b>门岗出示</li>
              <li>✅ 找<b>接待/陪同</b>——不独行去作业区</li>
              <li>✅ 离场交回访客证与借用防护</li>
              <li>✅ 7天后再访？<b>须重训</b></li>
            </ul>
          </div>
          <div class="bigquote" style="margin-top:34px; text-align:left;">
            “最好的客人不是最重要的，而是最守安全的。”
            <small>— Auxin × 四方 HSE — 访客安全</small>
          </div>
        </div>
      `;
    },
    afterRender() { Effects.celebrate(); },
  },
];

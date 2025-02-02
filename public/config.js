// 配置
window.Config = {

  // 显示标题
  SiteName: '站点监测',

  // UptimeRobot Api Keys
  // 支持 Monitor-Specific 和 Read-Only
  ApiKeys: [
    'm792450059-0190f1c1c3e3d7ac51a7bcfa',
    'm792450175-92dcca4272fefc18adb195a7',
    'm792450208-0e67d44d96d99cdffe314568',
    'm792450296-e100716418a5b4a3951885e9',
  ],

    // 日志天数
  // 虽然免费版说仅保存60天日志，但测试好像API可以获取90天的
  // 不过时间不要设置太长，容易卡，接口请求也容易失败
  CountDays: 60,

  // 是否显示检测站点的链接
  ShowLink: true,

  // 导航栏菜单
  Navi: [
    
  ],
};

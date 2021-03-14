// pages/home/home.js
import { request, requestMock } from './../../utils/index'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    homeCate: [{
      "name": "疯抢排行",
      "width": "",
      "height": "",
      "choose": {
        "obj": {
          "title": "",
          "px": "1",
          "pxType": "1",
          "blackId": "0"
        },
        "choose_1": "0",
        "choose_2": "3"
      },
      "address": "https://img.alicdn.com/imgextra/i3/2053469401/O1CN01ra4ZvS2JJi4dQgAAZ_!!2053469401.gif",
      "chooseTitle": "",
      "chooseSortBy": "1",
      "chooseBlackListId": "0",
      "style": "",
      "styleId": "",
      "jumpUrl": "?r=activity/sc#/fengqianglist"
    }, {
      "name": "9.9包邮",
      "width": "",
      "height": "",
      "choose": {
        "obj": {
          "title": "",
          "px": "1",
          "pxType": "1",
          "blackId": "0"
        },
        "choose_1": "0",
        "choose_2": "4"
      },
      "address": "https://img.alicdn.com/imgextra/i2/2053469401/O1CN01vuk7s12JJi4dQhq7N_!!2053469401.gif",
      "chooseTitle": "",
      "chooseSortBy": "1",
      "chooseBlackListId": "0",
      "style": "",
      "styleId": "",
      "jumpUrl": "?r=activity/sc#/ninePackageMail"
    }, {
      "name": "品牌特卖",
      "width": "",
      "height": "",
      "choose": {
        "obj": {
          "title": "",
          "px": "1",
          "pxType": "1",
          "blackId": "0"
        },
        "choose_1": "0",
        "choose_2": "20"
      },
      "address": "https://img.alicdn.com/imgextra/i4/2053469401/O1CN016cqn3z2JJi4VTlXlP_!!2053469401.png",
      "chooseTitle": "",
      "chooseSortBy": "1",
      "chooseBlackListId": "0",
      "style": "",
      "styleId": "",
      "jumpUrl": "?r=index/brand"
    }, {
      "name": "每日半价",
      "width": "",
      "height": "",
      "choose": {
        "obj": {
          "title": "",
          "px": "1",
          "pxType": "1",
          "blackId": "0"
        },
        "choose_1": "0",
        "choose_2": "5"
      },
      "address": "https://img.alicdn.com/imgextra/i1/2053469401/O1CN01sJwBd12JJi4XH8Btf_!!2053469401.png",
      "chooseTitle": "",
      "chooseSortBy": "1",
      "chooseBlackListId": "0",
      "style": "",
      "styleId": "",
      "jumpUrl": "?r=every/e"
    }, {
      "name": "折上折",
      "width": "",
      "height": "",
      "choose": {
        "obj": {
          "title": "",
          "px": "1",
          "pxType": "1",
          "blackId": "0"
        },
        "choose_1": "0",
        "choose_2": "9"
      },
      "address": "https://img.alicdn.com/imgextra/i1/2053469401/O1CN01j4geG52JJi4dwqfFG_!!2053469401.gif",
      "chooseTitle": "",
      "chooseSortBy": "1",
      "chooseBlackListId": "0",
      "style": "",
      "styleId": "",
      "jumpUrl": "?r=activity/sc#/double/discount"
    }, {
      "name": "今日秒杀",
      "width": "",
      "height": "",
      "choose": {
        "obj": {
          "title": "",
          "px": "1",
          "pxType": "1",
          "blackId": "0"
        },
        "choose_1": "5",
        "choose_2": "https://mo.m.taobao.com/optimus/flms-toc?pid=#pid#&id=20200410154626"
      },
      "address": "https://img.alicdn.com/imgextra/i1/2053469401/O1CN01X2Qzix2JJi4Tbkh8L_!!2053469401.png",
      "chooseTitle": "",
      "chooseSortBy": "1",
      "chooseBlackListId": "0",
      "style": "",
      "styleId": "",
      "jumpUrl": "https://mo.m.taobao.com/optimus/flms-toc?pid=mm_115133272_39310627_147296368&id=20200410154626"
    }, {
      "name": "饿了么",
      "width": "",
      "height": "",
      "choose": {
        "obj": {
          "title": "",
          "px": "1",
          "pxType": "1",
          "blackId": "0"
        },
        "choose_1": "5",
        "choose_2": "#pid20150318019998877pid#&id=20200424134851"
      },
      "address": "https://img.alicdn.com/imgextra/i4/2053469401/O1CN01ZOaePm2JJi4aX10nb_!!2053469401.gif",
      "chooseTitle": "",
      "chooseSortBy": "1",
      "chooseBlackListId": "0",
      "style": "",
      "styleId": "",
      "jumpUrl": "https://s.click.ele.me/t?union_lens=lensId%3AMAPI%401613036991%400b14f9e2_9a48_177907f330e_0862%4001%3BeventPageId%3A20150318019998877&&e=-s02ancxPZsMYP3qjiLWDA0eCIkgcRRPId9alI7MDUyYIaasWnR7r7WpIBV1L652SUYtjfVyI1vsDH7KHo6gKrlnrqszd0Ljszl1Ib7pMlVuNb6nOrLCNyKnkG15jqyD28Cu6EzUxkwRBhi5Eh3r7BmCWgwM79SzX72kuieN6Wcry5IehBqOt2UZJzwgdeOlP00U171znajFbDlvb5j4SeeW3ulffkObWXGUIC63AnvGgAD0MV9zdYDfyYRaFscwnI27ZjnjJR2kj5tp9EbarAIcq6c2Hh7l2saIx2gQFITSuZMc5q3cEaiTctBZIPZPpeesUdv2INeDyUg1URQ3S47MkF1agzswDiFF8k724Oq5479LRP8PORQmSkYjaIuWpwmSyP5kxznti2s9MBhp32apfhCQImMR6jWCz1WpYksR55RzL0U9VQVD7T4q6vW0VDZienICXmxziUqxGkrWUi8DQ5sJgAUYgTyWgNmz&"
    }, {
      "name": "辣妈专区",
      "width": "",
      "height": "",
      "choose": {
        "obj": {
          "title": "",
          "px": "1",
          "pxType": "1",
          "blackId": "0"
        },
        "choose_1": "0",
        "choose_2": "30"
      },
      "address": "https://img.alicdn.com/imgextra/i2/2053469401/O1CN01VrWlJb2JJi4UsAlgP_!!2053469401.png",
      "chooseTitle": "",
      "chooseSortBy": "1",
      "chooseBlackListId": "0",
      "style": "",
      "styleId": "",
      "jumpUrl": "?r=activity/sc#/productSpa?id=1&cms_client=wap"
    }, {
      "name": "大额神券",
      "width": "",
      "height": "",
      "choose": {
        "obj": {
          "title": "",
          "px": "1",
          "pxType": "1",
          "blackId": "0"
        },
        "choose_1": "0",
        "choose_2": "31"
      },
      "address": "https://img.alicdn.com/imgextra/i1/2053469401/O1CN01NbCe8C2JJi4dPCjA2_!!2053469401.png",
      "chooseTitle": "",
      "chooseSortBy": "1",
      "chooseBlackListId": "0",
      "style": "",
      "styleId": "",
      "jumpUrl": "?r=activity/sc#/productSpa?id=2&cms_client=wap"
    }, {
      "name": "限时爆品",
      "width": "",
      "height": "",
      "choose": {
        "obj": {
          "title": "",
          "px": "1",
          "pxType": "1",
          "blackId": "0"
        },
        "choose_1": "5",
        "choose_2": "https://mo.m.taobao.com/union/juxianshiqiang2b_2C?pid=#pid#&id=20200304174618"
      },
      "address": "https://img.alicdn.com/imgextra/i1/2053469401/O1CN01XKXE952JJi4XHB8uW_!!2053469401.png",
      "chooseTitle": "",
      "chooseSortBy": "1",
      "chooseBlackListId": "0",
      "style": "",
      "styleId": "",
      "jumpUrl": "https://mo.m.taobao.com/union/juxianshiqiang2b_2C?pid=mm_115133272_39310627_147296368&id=20200304174618"
    }],
    noticeList: [
      {
        id: 1,
        flag: '吃喝玩乐',
        text: '拼手速抢外卖大红包！瓜果蔬菜购买足不出户'
      },
      {
        id: 2,
        flag: '年度盘点',
        text: '爆款汇集！春节特别有礼，第二件0元啦!'
      },
      {
        id: 3,
        flag: '年度榜单',
        text: '防疫口罩低至9.9元，各类居家爆款低至1元起'
      }
    ],
    brandSale: [
      {
        id: 1,
        message: '润本3.3折特卖'
      },
      {
        id: 2,
        message: '南极人1.8折特卖'
      },
      {
        id: 3,
        message: '达利园5折特卖'
      },
      {
        id: 4,
        message: '禾博士2.5折特卖'
      },
      {
        id: 5,
        message: '芙清2.5折特卖'
      },
      {
        id: 6,
        message: '植护5折特卖'
      },
    ],
    brandList: [
      {
        id: 1,
        img: 'https://img.alicdn.com/bao/uploaded/i1/2208170228854/O1CN01MGjxsq2FHBN8vuGdb_!!2208170228854.jpg_80x80.jpg',
        title: '小鹿蓝蓝',
        description: '宝宝必备低至9.9元',
        sales: '已售10.2万件',
        detail: [
          {
            address: 'https://img.alicdn.com/imgextra/i2/2672045966/O1CN015KDMlm1twTXQ7DlON_!!2672045966.jpg_310x310.jpg_.webp',
            ticket: '15元',
            price: '11.9',
            oldPrice: '26.9'
          },
          {
            address: 'https://img.alicdn.com/imgextra/i2/2672045966/O1CN015KDMlm1twTXQ7DlON_!!2672045966.jpg_310x310.jpg_.webp',
            ticket: '10元',
            price: '27.8',
            oldPrice: '37.8'
          },
          {
            address: 'https://img.alicdn.com/i2/2208170228854/O1CN010p9rq82FHBOdDBT7d_!!0-item_pic.jpg_310x310.jpg_.webp',
            ticket: '15元',
            price: '9.9',
            oldPrice: '24.9'
          },
        ]
      },
      {
        id: 2,
        img: 'https://img.alicdn.com/bao/uploaded///img.taobaocdn.com/tps/TB1zun1CmzqK1RjSZPcXXbTepXa',
        title: '悦诗风吟',
        description: '眉笔2件6折',
        sales: '已售1.6万件',
        detail: [
          {
            address: 'https://img.alicdn.com/imgextra/i2/3697925558/O1CN01dq5ElC1qvbvitT48E_!!3697925558-2-lubanu-s.png_310x310.jpg_.webp',
            ticket: '60元',
            price: '139',
            oldPrice: '199'
          },
          {
            address: 'https://img.alicdn.com/imgextra/i2/3697925558/O1CN01c5Gph61qvbvSgo6i2_!!3697925558.jpg_310x310.jpg_.webp',
            ticket: '10元',
            price: '90',
            oldPrice: '100'
          },
          {
            address: 'https://img.alicdn.com/imgextra/i4/3697925558/O1CN01h9Zhs21qvbpTMUSmr_!!3697925558.jpg_310x310.jpg_.webp',
            ticket: '90元',
            price: '59',
            oldPrice: '149'
          },
        ]
      },
      {
        id: 3,
        img: 'http://img.alicdn.com/bao/uploaded/TB1ECAtIVXXXXX4XFXXSutbFXXX.jpg',
        title: '薇诺娜',
        description: '爆款单品第2件0元',
        sales: '已售1.4万件',
        detail: [
          {
            address: 'https://img.alicdn.com/imgextra/i1/3853910272/O1CN0124aWRp1DscMu0kH0Q_!!3853910272.jpg_310x310.jpg_.webp',
            ticket: '20元',
            price: '59',
            oldPrice: '79'
          },
          {
            address: 'https://img.alicdn.com/imgextra/i2/833548361/O1CN01E8VJJv2BdO313OXij_!!833548361.jpg_310x310.jpg_.webp',
            ticket: '35元',
            price: '64',
            oldPrice: '99'
          },
          {
            address: 'https://img.alicdn.com/imgextra/i2/43574553/O1CN01LgKdTW1jVJwlAP7tD_!!43574553.jpg_310x310.jpg_.webp',
            ticket: '145元',
            price: '123',
            oldPrice: '268'
          },
        ]
      },
    ],
    weGetList: [
      {
      "id": 32033896,
      "isDelete": false,
      "isOnline": true,
      "couponNum": 4084,
      "couponTime": "2021-02-18 23:59:59",
      "pic": "//img.alicdn.com/imgextra/i1/407445128/O1CN01ibpTtU1nkfgDbSXJa_!!407445128.jpg",
      "salesNum": 13317,
      "couponOver": 95916,
      "originPrice": 39.90,
      "couponPrice": 20.00,
      "price": 19.90,
      "status": true,
      "showLabel": "",
      "showLabelDown": "",
      "mold": 3,
      "dtitle": "海底捞自煮自热火锅、拌饭、零食组合",
      "userImg": "https://wwc.alicdn.com/avatar/getAvatar.do?userIdStrV2=QhwsmzIcFK7ixA*mny_JNgTT&type=taobao",
      "userPhone": "158******54",
      "percent": "50"
    }, {
      "id": 32036456,
      "isDelete": false,
      "isOnline": true,
      "couponNum": 40000,
      "couponTime": "2021-02-13 23:59:59",
      "pic": "https://img.alicdn.com/imgextra/i4/3229758420/O1CN015BNwxA2C4PUWPf1vm_!!3229758420.jpg",
      "salesNum": 15596,
      "couponOver": 60000,
      "originPrice": 248.00,
      "couponPrice": 125.00,
      "price": 123.00,
      "status": true,
      "showLabel": "",
      "showLabelDown": "",
      "mold": 3,
      "dtitle": "【爱奇艺旗舰店】黄金vip会员12个月",
      "userImg": "https://wwc.alicdn.com/avatar/getAvatar.do?userIdStrV2=JcHy1H-aRYp8OSpHhlpZBWTT&type=taobao",
      "userPhone": "154******71",
      "percent": "30"
    }, {
      "id": 32032320,
      "isDelete": false,
      "isOnline": true,
      "couponNum": 76233,
      "couponTime": "2021-02-22 23:59:59",
      "pic": "https://img.alicdn.com/imgextra/i4/376460581/O1CN01SyoxOv1GA8lorMOZs_!!376460581.jpg",
      "salesNum": 13820,
      "couponOver": 23767,
      "originPrice": 99.90,
      "couponPrice": 40.00,
      "price": 59.90,
      "status": true,
      "showLabel": "",
      "showLabelDown": "",
      "mold": 3,
      "dtitle": "联合利华旗舰店力士香氛沐浴露1900g",
      "userImg": "https://wwc.alicdn.com/avatar/getAvatar.do?userIdStrV2=huHw8wzAtfMX8wA_MXrnoWTT&type=taobao",
      "userPhone": "192******44",
      "percent": "50"
    }, {
      "id": 31973188,
      "isDelete": false,
      "isOnline": true,
      "couponNum": 79395,
      "couponTime": "2021-02-20 23:59:59",
      "pic": "https://img.alicdn.com/imgextra/i4/2209128730860/O1CN01pYGc7i1IDvErfJ2l2_!!2209128730860.jpg",
      "salesNum": 17697,
      "couponOver": 20605,
      "originPrice": 22.90,
      "couponPrice": 10.00,
      "price": 12.90,
      "status": true,
      "showLabel": "",
      "showLabelDown": "",
      "mold": 3,
      "dtitle": "【第二件9.9元】台湾火山石纯肉烤肠",
      "userImg": "https://wwc.alicdn.com/avatar/getAvatar.do?userIdStrV2=huHw8wzAtfMX8wA_MXrnoWTT&type=taobao",
      "userPhone": "135******44",
      "percent": "50"
    }, {
      "id": 32039093,
      "isDelete": false,
      "isOnline": true,
      "couponNum": 9948858,
      "couponTime": "2021-02-19 23:59:59",
      "pic": "https://img.alicdn.com/imgextra/i2/850188132/O1CN01W8ImMQ29wVSPVy7hV_!!850188132.jpg",
      "salesNum": 16950,
      "couponOver": 51142,
      "originPrice": 89.00,
      "couponPrice": 20.00,
      "price": 69.00,
      "status": true,
      "showLabel": "",
      "showLabelDown": "",
      "mold": 3,
      "dtitle": "【卡姿兰官方旗舰店】甜吻唇釉",
      "userImg": "https://wwc.alicdn.com/avatar/getAvatar.do?userIdStrV2=huHw8wzAtfMX8wA_MXrnoWTT&type=taobao",
      "userPhone": "156******42",
      "percent": "80"
    }, {
      "id": 31971907,
      "isDelete": false,
      "isOnline": true,
      "couponNum": 54911,
      "couponTime": "2021-02-19 23:59:59",
      "pic": "https://img.alicdn.com/imgextra/i4/2189078313/O1CN0144HWZh2BHP9MbmaU2_!!2189078313.jpg",
      "salesNum": 6820,
      "couponOver": 45089,
      "originPrice": 7.80,
      "couponPrice": 2.00,
      "price": 5.80,
      "status": true,
      "showLabel": "",
      "showLabelDown": "",
      "mold": 3,
      "dtitle": "【5.8抢】围脖仿兔毛冬季防寒保暖围巾",
      "userImg": "https://wwc.alicdn.com/avatar/getAvatar.do?userIdStrV2=tmo_Djan69c_5s9NHLPaoWTT&type=taobao",
      "userPhone": "142******73",
      "percent": "70"
    }, {
      "id": 32028303,
      "isDelete": false,
      "isOnline": true,
      "couponNum": 71295,
      "couponTime": "2021-02-15 23:59:59",
      "pic": "https://img.alicdn.com/imgextra/i1/2050536474/O1CN01pnWh5R1xh8miFOl9x_!!2050536474.jpg",
      "salesNum": 47684,
      "couponOver": 28705,
      "originPrice": 129.00,
      "couponPrice": 30.00,
      "price": 99.00,
      "status": true,
      "showLabel": "",
      "showLabelDown": "",
      "mold": 3,
      "dtitle": "【逐本】柔胶焕颜磨砂膏50ml",
      "userImg": "https://wwc.alicdn.com/avatar/getAvatar.do?userIdStrV2=V6A0RzvlA1i0*G51vpDHXgTT&type=taobao",
      "userPhone": "154******11",
      "percent": "50"
    }, {
      "id": 31994298,
      "isDelete": false,
      "isOnline": true,
      "couponNum": 58000,
      "couponTime": "2021-02-18 23:59:59",
      "pic": "https://img.alicdn.com/imgextra/i2/2009733046/O1CN01bCQS5U1YN712fteze_!!2009733046.jpg",
      "salesNum": 51777,
      "couponOver": 42000,
      "originPrice": 13.90,
      "couponPrice": 5.00,
      "price": 8.90,
      "status": true,
      "showLabel": "",
      "showLabelDown": "",
      "mold": 3,
      "dtitle": "奥义男女健身垫加厚加宽加长瑜伽垫二件套",
      "userImg": "https://wwc.alicdn.com/avatar/getAvatar.do?userIdStrV2=tRgbmdP-5hXQcs2HWMxJGWTT&type=taobao",
      "userPhone": "155******11",
      "percent": "10"
    }, {
      "id": 32012082,
      "isDelete": false,
      "isOnline": true,
      "couponNum": 69000,
      "couponTime": "2021-02-19 23:59:59",
      "pic": "https://img.alicdn.com/imgextra/i4/2936108604/O1CN01NocPIR2DQgKVixqsO_!!2936108604.jpg",
      "salesNum": 151697,
      "couponOver": 31000,
      "originPrice": 69.90,
      "couponPrice": 40.00,
      "price": 29.90,
      "status": true,
      "showLabel": "",
      "showLabelDown": "",
      "mold": 3,
      "dtitle": "【百人验货】礼云阁正宗西藏特产风干牛肉干",
      "userImg": "https://wwc.alicdn.com/avatar/getAvatar.do?userIdStrV2=I5F4Jum6uLzIMsjsQVDyHWTT&type=taobao",
      "userPhone": "181******74",
      "percent": "50"
    }, {
      "id": 32042685,
      "isDelete": false,
      "isOnline": true,
      "couponNum": 20785,
      "couponTime": "2021-02-24 23:59:59",
      "pic": "https://img.alicdn.com/imgextra/i3/1588913126/O1CN01POiBfd1Yxkksiig9N_!!1588913126.jpg",
      "salesNum": 33331,
      "couponOver": 29215,
      "originPrice": 39.20,
      "couponPrice": 3.00,
      "price": 36.20,
      "status": true,
      "showLabel": "",
      "showLabelDown": "",
      "mold": 3,
      "dtitle": "【12盒装】旺仔巧克力罐装整箱牛奶",
      "userImg": "https://wwc.alicdn.com/avatar/getAvatar.do?userIdStrV2=ptwEVibAGsLml6QKMVyXeWTT&type=taobao",
      "userPhone": "147******74",
      "percent": "40"
    }, {
      "id": 32029846,
      "isDelete": false,
      "isOnline": true,
      "couponNum": 79930,
      "couponTime": "2021-02-18 23:59:59",
      "pic": "//img.alicdn.com/imgextra/i1/154491046/O1CN019sBn7C1Jb6uFPw7Yy_!!154491046-0-lubanu-s.jpg",
      "salesNum": 10074,
      "couponOver": 20070,
      "originPrice": 139.80,
      "couponPrice": 80.00,
      "price": 59.80,
      "status": true,
      "showLabel": "",
      "showLabelDown": "",
      "mold": 3,
      "dtitle": "拍2件 六只兔子无痕光面少女内衣2套",
      "userImg": "https://wwc.alicdn.com/avatar/getAvatar.do?userIdStrV2=wlELyn2sxSc_jAm04eQhZgTT&type=taobao",
      "userPhone": "197******3",
      "percent": "60"
    }, {
      "id": 32022750,
      "isDelete": false,
      "isOnline": true,
      "couponNum": 77954,
      "couponTime": "2021-02-20 23:59:59",
      "pic": "https://img.alicdn.com/imgextra/i1/1133051236/O1CN01icPKBT1L089bDf6Wu_!!1133051236.jpg",
      "salesNum": 34167,
      "couponOver": 22046,
      "originPrice": 89.90,
      "couponPrice": 70.00,
      "price": 19.90,
      "status": true,
      "showLabel": "",
      "showLabelDown": "",
      "mold": 3,
      "dtitle": "【修正】西洋参切片正品含片泡水花旗参片",
      "userImg": "https://wwc.alicdn.com/avatar/getAvatar.do?userIdStrV2=Qrzh71*ED0NOhRF2LIWWCWTT&type=taobao",
      "userPhone": "1587*****10",
      "percent": "50"
    }],
    goodsList: [
      {
      "createTime": "2021-02-13 11:24:02",
      "goodsId": "621109330015",
      "huodongType": 1,
      "hzQuanOver": 0,
      "id": 32048354,
      "pic": "//img.alicdn.com/imgextra/i4/2208292824332/O1CN01R9wrkE1hs6O0gk9Oo_!!2208292824332.jpg",
      "quanId": "10414ff034204df9837ac6db8f143627",
      "quanJine": 3.0,
      "salesNum": 29,
      "startTime": "2021-02-13 00:00:00",
      "title": "新疆红枣和田特级大枣2500g特大脆枣干一级骏枣特大和田大枣包邮L",
      "tmall": 1,
      "video": 0,
      "xiaoliang": 128197,
      "yongjin": 20.0,
      "yuanjia": 10.9,
      "fashionTag": "官方旗舰店",
      "jiage": 7.9,
      "basePriceText": "",
      "basePrice": "",
      "baseSaleNumText": "",
      "thirtySellNun": 65018,
      "promotion": "",
      "labelOne": "爆款",
      "labelTwo": "旗舰店",
      "comments": "",
      "beforeTitleLables": [{
        "img": "https://img.alicdn.com/imgextra/i1/2053469401/O1CN01o1MI292JJhz37UySP_!!2053469401.png",
        "width": 48,
        "height": 26
      }],
      "beforePriceLabelType": 0,
      "underPriceLabels": [{
        "type": "primary",
        "val": "旗舰店"
      }, {
        "type": "normal",
        "val": "爆款"
      }],
      "renqi": 39.6892,
      "_id": "32048354",
      "category_id": "50013099",
      "dtitle": "鸡蛋那么大！古力巴戈新疆六星红枣500g",
      "lowest": 0,
      "quanMLink": "",
      "quan_num": 100000,
      "quan_time": "2021-02-15 23:59:59",
      "is_delete": 0,
      "is_online": 1,
      "market_group": []
    }, {
      "createTime": "2021-02-13 13:01:03",
      "goodsId": "625360826993",
      "huodongType": 1,
      "hzQuanOver": 0,
      "id": 32048387,
      "pic": "//img.alicdn.com/imgextra/i4/2222850086/O1CN01leWtTP1CVQghq4Ric_!!2222850086-0-lubanu-s.jpg",
      "quanId": "aff0d83fa6fd43bbb1c9f6673ad35f5c",
      "quanJine": 30.0,
      "salesNum": 100,
      "startTime": "2021-02-10 00:00:00",
      "title": "四件套被套床上用品床单宿舍单人学生被子三件套ins风被罩被单4件",
      "tmall": 1,
      "video": 0,
      "xiaoliang": 60363,
      "yongjin": 25.0,
      "yuanjia": 69.0,
      "fashionTag": "官方旗舰店",
      "jiage": 39.0,
      "marketId": "70",
      "basePriceText": "",
      "basePrice": "",
      "baseSaleNumText": "",
      "thirtySellNun": 60602,
      "promotion": "",
      "labelOne": "爆款",
      "labelTwo": "旗舰店",
      "comments": "",
      "beforeTitleLables": [{
        "img": "https://img.alicdn.com/imgextra/i1/2053469401/O1CN01o1MI292JJhz37UySP_!!2053469401.png",
        "width": 48,
        "height": 26
      }],
      "beforePriceLabelType": 0,
      "underPriceLabels": [{
        "type": "primary",
        "val": "旗舰店"
      }, {
        "type": "normal",
        "val": "爆款"
      }],
      "renqi": 39.5983,
      "_id": "32048387",
      "category_id": "50008779",
      "dtitle": "觉先生【全尺寸】北欧风简约双拼四件套",
      "lowest": 0,
      "quanMLink": "",
      "quan_num": 76000,
      "quan_time": "2021-02-16 23:59:59",
      "is_delete": 0,
      "is_online": 1,
      "market_group": [70]
    }, {
      "createTime": "2021-02-13 10:59:26",
      "goodsId": "42755591315",
      "huodongType": 1,
      "hzQuanOver": 0,
      "id": 32048324,
      "pic": "https://img.alicdn.com/imgextra/i4/805604856/O1CN01IQ4fgs1lk5tYWe1mt_!!805604856.jpg",
      "quanId": "1d4bfad171d045cbb1534f47866cc66a",
      "quanJine": 100.0,
      "salesNum": 464,
      "startTime": "2021-02-13 00:00:00",
      "title": "【券后5折99元】腾讯视频VIP会员12个月一年卡好莱坞视屏vip会员",
      "tmall": 1,
      "video": 0,
      "xiaoliang": 124042,
      "yongjin": 15.0,
      "yuanjia": 218.8,
      "fashionTag": "爆款",
      "jiage": 118.8,
      "basePriceText": "",
      "basePrice": "",
      "baseSaleNumText": "",
      "thirtySellNun": 115170,
      "promotion": "",
      "labelOne": "爆款",
      "comments": "",
      "beforeTitleLables": [{
        "img": "https://img.alicdn.com/imgextra/i1/2053469401/O1CN01o1MI292JJhz37UySP_!!2053469401.png",
        "width": 48,
        "height": 26
      }],
      "beforePriceLabelType": 0,
      "underPriceLabels": [{
        "type": "normal",
        "val": "爆款"
      }],
      "renqi": 38.6848,
      "_id": "32048324",
      "category_id": "201159608",
      "dtitle": "【优惠】腾讯VIP会员12个月年卡",
      "lowest": 0,
      "quanMLink": "0",
      "quan_num": 1000000,
      "quan_time": "2021-02-17 23:59:59",
      "is_delete": 0,
      "is_online": 1,
      "market_group": []
    }, {
      "createTime": "2021-02-13 12:03:26",
      "goodsId": "41416705409",
      "huodongType": 1,
      "hzQuanOver": 0,
      "id": 32048375,
      "pic": "https://img.alicdn.com/imgextra/i4/843421904/O1CN01qEsDnA1Pw4h3rHVYX_!!843421904.jpg",
      "quanId": "548fb003e4df4b488fc43f865cb880d8",
      "quanJine": 3.0,
      "salesNum": 107,
      "startTime": "2021-02-13 00:00:00",
      "title": "英菲克PM1无线便携鼠标可充电式蓝牙双模5.0静音无声男女生无限办公游戏适用于苹果mac笔记本电脑台式USB通用",
      "tmall": 1,
      "video": 0,
      "xiaoliang": 140954,
      "yongjin": 20.0,
      "yuanjia": 22.9,
      "fashionTag": "官方旗舰店",
      "jiage": 19.9,
      "marketId": "70",
      "basePriceText": "",
      "basePrice": "",
      "baseSaleNumText": "",
      "thirtySellNun": 166934,
      "promotion": "",
      "labelOne": "爆款",
      "labelTwo": "旗舰店",
      "comments": "",
      "beforeTitleLables": [{
        "img": "https://img.alicdn.com/imgextra/i1/2053469401/O1CN01o1MI292JJhz37UySP_!!2053469401.png",
        "width": 48,
        "height": 26
      }],
      "beforePriceLabelType": 0,
      "underPriceLabels": [{
        "type": "primary",
        "val": "旗舰店"
      }, {
        "type": "normal",
        "val": "爆款"
      }],
      "renqi": 38.5252,
      "_id": "32048375",
      "category_id": "50012320",
      "dtitle": "【大牌特惠】英菲克可充电静音无线鼠标",
      "lowest": 0,
      "quanMLink": "0",
      "quan_num": 20000,
      "quan_time": "2021-02-14 23:59:59",
      "is_delete": 0,
      "is_online": 1,
      "market_group": [70]
    }, {
      "createTime": "2021-02-13 09:03:03",
      "goodsId": "582867029859",
      "huodongType": 2,
      "hzQuanOver": 0,
      "id": 32048256,
      "pic": "https://img.alicdn.com/imgextra/i3/2100167541/O1CN01FyQGeg25ZpFgaBtfk_!!2100167541.jpg",
      "quanId": "02416008128b4e798afc06b6f217d796",
      "quanJine": 3.0,
      "salesNum": 183,
      "startTime": "2021-02-09 00:00:00",
      "title": "四川乐山钵钵鸡调料商用配方冷串串盆火锅麻辣烫底料包冷锅串串香",
      "tmall": 1,
      "video": 0,
      "xiaoliang": 118185,
      "yongjin": 30.0,
      "yuanjia": 14.6,
      "fashionTag": "淘抢购",
      "jiage": 11.6,
      "marketId": "70",
      "basePriceText": "",
      "basePrice": "",
      "baseSaleNumText": "",
      "thirtySellNun": 116754,
      "promotion": "",
      "labelOne": "爆款",
      "comments": "",
      "beforeTitleLables": [{
        "img": "https://img.alicdn.com/imgextra/i1/2053469401/O1CN01o1MI292JJhz37UySP_!!2053469401.png",
        "width": 48,
        "height": 26
      }],
      "beforePriceLabelType": 2,
      "underPriceLabels": [{
        "type": "normal",
        "val": "爆款"
      }],
      "renqi": 38.3519,
      "_id": "32048256",
      "category_id": "50009822",
      "dtitle": "春节正常发货！钵钵鸡冒菜麻辣烫火锅底料",
      "lowest": 0,
      "quanMLink": "",
      "quan_num": 91000,
      "quan_time": "2021-02-19 23:59:59",
      "is_delete": 0,
      "is_online": 1,
      "market_group": [70]
    }, {
      "createTime": "2021-02-13 13:53:05",
      "goodsId": "619573206716",
      "huodongType": 1,
      "hzQuanOver": 0,
      "id": 32048395,
      "pic": "https://img.alicdn.com/bao/uploaded/O1CN01UuGLg32940HK67SjH_!!2-item_pic.png",
      "quanId": "0c49993c977a494c8f22c0ddf31aa1d7",
      "quanJine": 5.0,
      "salesNum": 192,
      "startTime": "2021-02-13 00:00:00",
      "title": "甘源牌-烤肉味虾条豆果100g 坚果炒货蚕豆膨化休闲童年怀旧小零食",
      "tmall": 1,
      "video": 0,
      "xiaoliang": 416005,
      "yongjin": 25.0,
      "yuanjia": 24.9,
      "fashionTag": "官方旗舰店,新品",
      "jiage": 19.9,
      "marketId": "70",
      "basePriceText": "",
      "basePrice": "",
      "baseSaleNumText": "",
      "thirtySellNun": 0,
      "promotion": "",
      "labelOne": "新品",
      "labelTwo": "旗舰店",
      "comments": "",
      "beforeTitleLables": [{
        "img": "https://img.alicdn.com/imgextra/i1/2053469401/O1CN01o1MI292JJhz37UySP_!!2053469401.png",
        "width": 48,
        "height": 26
      }],
      "beforePriceLabelType": 0,
      "underPriceLabels": [{
        "type": "primary",
        "val": "旗舰店"
      }, {
        "type": "normal",
        "val": "新品"
      }],
      "renqi": 37.6627,
      "_id": "32048395",
      "category_id": "50016429",
      "dtitle": "【拍5件】甘源虾条豆果5大包",
      "lowest": 0,
      "quanMLink": "",
      "quan_num": 99980,
      "quan_time": "2021-02-18 23:59:59",
      "is_delete": 0,
      "is_online": 1,
      "market_group": [70]
    }, {
      "createTime": "2021-02-13 10:46:13",
      "goodsId": "633656397444",
      "huodongType": 1,
      "hzQuanOver": 0,
      "id": 32048302,
      "pic": "https://img.alicdn.com/imgextra/i4/2928278102/O1CN01AQ3qsO29ilZGHn5WT_!!0-item_pic.jpg",
      "quanId": "3b80b61710334dccb691d6b95898ef91",
      "quanJine": 3.0,
      "salesNum": 223,
      "startTime": "2021-02-13 00:00:00",
      "title": "仁和一次性医用口罩医疗三层防护成人医生医科外用防风防寒大人",
      "tmall": 1,
      "video": 0,
      "xiaoliang": 185203,
      "yongjin": 30.02,
      "yuanjia": 8.9,
      "fashionTag": "官方旗舰店,爆款",
      "jiage": 5.9,
      "marketId": "70",
      "basePriceText": "",
      "basePrice": "",
      "baseSaleNumText": "",
      "thirtySellNun": 126162,
      "promotion": "",
      "labelOne": "爆款",
      "comments": "",
      "beforeTitleLables": [{
        "img": "https://img.alicdn.com/imgextra/i1/2053469401/O1CN01o1MI292JJhz37UySP_!!2053469401.png",
        "width": 48,
        "height": 26
      }],
      "beforePriceLabelType": 0,
      "underPriceLabels": [{
        "type": "normal",
        "val": "爆款"
      }],
      "renqi": 37.14,
      "_id": "32048302",
      "category_id": "122354006",
      "dtitle": "【阿里大药房】仁和医用3层口罩10个",
      "lowest": 0,
      "quanMLink": "0",
      "quan_num": 92000,
      "quan_time": "2021-02-24 23:59:59",
      "is_delete": 0,
      "is_online": 1,
      "market_group": [70]
    }, {
      "createTime": "2021-02-13 08:55:03",
      "goodsId": "631243883605",
      "huodongType": 2,
      "hzQuanOver": 0,
      "id": 32048252,
      "pic": "https://img.alicdn.com/imgextra/i1/1824836051/O1CN01RJrjCL1uZPEA2sgPg_!!1824836051.jpg",
      "quanId": "11fe66ae2d1349e99e13c0a956708f32",
      "quanJine": 20.0,
      "salesNum": 36,
      "startTime": "2021-02-09 00:00:00",
      "title": "香飘飘奶茶盗墓笔记联名款红豆奶茶12杯下午茶冲泡饮整箱杯装奶茶",
      "tmall": 1,
      "video": 0,
      "xiaoliang": 44145,
      "yongjin": 20.0,
      "yuanjia": 67.5,
      "fashionTag": "官方旗舰店,淘抢购",
      "jiage": 47.5,
      "marketId": "70",
      "basePriceText": "",
      "basePrice": "",
      "baseSaleNumText": "",
      "thirtySellNun": 36868,
      "promotion": "",
      "labelOne": "爆款",
      "labelTwo": "旗舰店",
      "comments": "",
      "beforeTitleLables": [{
        "img": "https://img.alicdn.com/imgextra/i1/2053469401/O1CN01o1MI292JJhz37UySP_!!2053469401.png",
        "width": 48,
        "height": 26
      }],
      "beforePriceLabelType": 2,
      "underPriceLabels": [{
        "type": "primary",
        "val": "旗舰店"
      }, {
        "type": "normal",
        "val": "爆款"
      }],
      "renqi": 36.6481,
      "_id": "32048252",
      "category_id": "50016424",
      "dtitle": "15杯！正常发货香飘飘红豆奶茶联名礼盒装",
      "lowest": 0,
      "quanMLink": "",
      "quan_num": 92000,
      "quan_time": "2021-02-19 23:59:59",
      "is_delete": 0,
      "is_online": 1,
      "market_group": [70]
    }, {
      "createTime": "2021-02-13 09:47:03",
      "goodsId": "633356459149",
      "huodongType": 1,
      "hzQuanOver": 0,
      "id": 32048263,
      "pic": "//img.alicdn.com/imgextra/i3/2940753275/O1CN01otE0JJ1a3zkmEuPql_!!2940753275.jpg",
      "quanId": "867777d6f8f1486b917ee912056fbbe6",
      "quanJine": 15.0,
      "salesNum": 39,
      "startTime": "2021-02-13 00:00:00",
      "title": "德佑婴儿拉拉裤超薄透气彩虹pp裤纸尿裤smlxlxxlXXXL新生儿尿不湿",
      "tmall": 1,
      "video": 0,
      "xiaoliang": 25690,
      "yongjin": 15.0,
      "yuanjia": 79.0,
      "fashionTag": "官方旗舰店",
      "jiage": 64.0,
      "marketId": "70",
      "basePriceText": "",
      "basePrice": "",
      "baseSaleNumText": "",
      "thirtySellNun": 6712,
      "promotion": "",
      "labelTwo": "旗舰店",
      "comments": "",
      "beforeTitleLables": [{
        "img": "https://img.alicdn.com/imgextra/i1/2053469401/O1CN01o1MI292JJhz37UySP_!!2053469401.png",
        "width": 48,
        "height": 26
      }],
      "beforePriceLabelType": 0,
      "underPriceLabels": [{
        "type": "primary",
        "val": "旗舰店"
      }],
      "renqi": 36.4913,
      "_id": "32048263",
      "category_id": "201217101",
      "dtitle": "德佑婴儿XXL码拉拉裤XL  超薄透气",
      "lowest": 0,
      "quanMLink": "",
      "quan_num": 50000,
      "quan_time": "2021-02-17 23:59:59",
      "is_delete": 0,
      "is_online": 1,
      "market_group": [70]
    }, {
      "createTime": "2021-02-13 00:02:02",
      "goodsId": "564677404266",
      "huodongType": 1,
      "hzQuanOver": 0,
      "id": 32048207,
      "pic": "https://img.alicdn.com/imgextra/i3/48694285/O1CN01nM0m4j1hWZmaQiQz8_!!48694285.jpg",
      "quanId": "78776214f4a149c08b37aba116a09d43",
      "quanJine": 20.0,
      "salesNum": 19,
      "startTime": "2021-02-13 00:00:00",
      "title": "【大希地】牛排套餐团购黑椒菲力家庭儿童牛扒10片新鲜牛肉家用20",
      "tmall": 1,
      "video": 0,
      "xiaoliang": 30541,
      "yongjin": 15.0,
      "yuanjia": 89.0,
      "fashionTag": "官方旗舰店",
      "jiage": 69.0,
      "marketId": "70",
      "basePriceText": "",
      "basePrice": "",
      "baseSaleNumText": "",
      "thirtySellNun": 23146,
      "promotion": "",
      "labelOne": "爆款",
      "labelTwo": "旗舰店",
      "comments": "",
      "beforeTitleLables": [{
        "img": "https://img.alicdn.com/imgextra/i1/2053469401/O1CN01o1MI292JJhz37UySP_!!2053469401.png",
        "width": 48,
        "height": 26
      }],
      "beforePriceLabelType": 0,
      "underPriceLabels": [{
        "type": "primary",
        "val": "旗舰店"
      }, {
        "type": "normal",
        "val": "爆款"
      }],
      "renqi": 35.8264,
      "_id": "32048207",
      "category_id": "50050678",
      "dtitle": "央视推荐【大希地】新鲜黑椒牛排10片",
      "lowest": 0,
      "quanMLink": "0",
      "quan_num": 99998,
      "quan_time": "2021-02-15 23:59:59",
      "is_delete": 0,
      "is_online": 1,
      "market_group": [70]
    }],
    showGoTop: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  onPageScroll(res){
    if(res.scrollTop >= 900){
      this.setData({
        showGoTop: true
      })
    }else{
      this.setData({
        showGoTop: false
      })
    }
  },


  // 封装方法
  // getHomeCate(){
  //   request({
  //     url: '/category/product/model-detail-by-model-id-new',
  //     data: {
  //       entityId: 4,
  //       modelId: 27386,
  //       proModelId: 2,
  //       source: 3,
  //       version: 'v1',
  //       tuserId: 771131,
  //       isWechat: 0
  //     }
  //   }).then(res => {
  //     console.log(res.data.data.config.data);
  //     this.setData({
  //       homeCate: res.data.data.config.data
  //     });
  //   })
  // },
  // getWeList(){
  //   requestMock({
  //     url: '/weget'
  //   }).then(res => {
  //     console.log(res.data.list);
  //     this.setData({
  //       weGetList: res.data.list
  //     })
  //   })
  // }
})
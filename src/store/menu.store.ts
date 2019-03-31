import { observable, action } from 'mobx';

class MenuStore {
    @observable menuList = [
        {
            icon: 'iconfenzucopy',
            text: '社群',
            subMenuList: [
                {
                    text: '团长管理'
                },
                {
                    text: '团长审核'
                },
                {
                    text: '区域管理'
                },
                {
                    text: '小区管理'
                },
            ]
        },
        {
            icon: 'iconshangpin-',
            text: '商品',
            subMenuList: [
                {
                    text: '商品分类'
                },
                {
                    text: '商品列表'
                }
            ]
        },
        {
            icon: 'iconhuodong',
            text: '活动',
            subMenuList: [
                {
                    text: '活动列表'
                }
            ]
        },
        {
            icon: 'iconorder_icon',
            text: '订单',
            subMenuList: [
                {
                    text: '订单管理'
                },
                {
                    text: '发货管理'
                }
            ]
        },
        {
            icon: 'iconhuiyuan',
            text: '会员',
            subMenuList: [
                {
                    text: '会员管理'
                },
                {
                    text: '会员等级'
                }
            ]
        },
        {
            icon: 'iconjinpaigongyings',
            text: '供应商',
            subMenuList: [
                {
                    text: '供应商管理'
                },
                {
                    text: '采购商管理'
                }
            ]
        },
        {
            icon: 'iconyingxiao',
            text: '营销'
        },
        {
            icon: 'icontongji',
            text: '统计',
            subMenuList: [
                {
                    text: '团长佣金明细'
                },
                {
                    text: '团长佣金发放列表'
                },
                {
                    text: '订单统计'
                },
                {
                    text: '访问分析'
                },
                {
                    text: '用户画像'
                }
            ]
        },
        {
            icon: 'iconshezhi-tianchong',
            text: '设置',
            subMenuList: [
                {
                    text: '角色管理'
                },
                {
                    text: '账号管理'
                }
            ]
        },
    ]

    @action
    updateOverview() {
        // this.options = {};
    }
}

export default new MenuStore();

import React,{Component} from 'react';
import FastMenuStyle from '../style/FastMenu.scss';
import classNames from 'classnames';


export default class FastMenu extends Component {
    constructor(props){
        super(props);
        this.state = {
            show: false
        }
        
    }
    componentDidMount(){
        //  声明变量指向子菜单：
        var sub = document.getElementById('sub');

        // 指向一级菜单
        var top = document.getElementsByClassName('JS_navCtn')[0];
        top.addEventListener('mouseenter', function(e){
            // 此时把二级菜单显示显示, 删除none;
            this.setState({show:false});            
        }.bind(this));
        top.addEventListener('mouseleave', function(e){
           // 此时把二级菜单显示隐藏, 添加none;
             this.setState({show:true});
        }.bind(this))
    }
    render() {
        const subMenuClass = classNames({
             none: this.state.show
        });
        return (
            <div className="fs_col1">
                <div className="J_cate" >
                    <ul className="JS_navCtn">
                        <li className="cate_menu_item" data-index = 'a'>
                            {/*   a 标签是行内元素  */}
                            <a href="_blank" className="cate_menu_lk">
                                家用电器
                            </a>
                        </li>
                        <li className="cate_menu_item" data-index = 'b'>
                            <a href="_blank" className="cate_menu_lk">
                                手机
                            </a>
                            <span className='cate_meu_line'>/</span>
                             <a href="_blank" className="cate_menu_lk">
                                运营商
                            </a>
                            <span className='cate_meu_line'>/</span>
                             <a href="_blank" className="cate_menu_lk">
                                数码
                            </a> 
                        </li>
                        <li className="cate_menu_item" data-index = 'c'>
                            <a href="_blank" className="cate_menu_lk">
                                电脑
                            </a>
                            <span className='cate_meu_line'>/</span>
                             <a href="_blank" className="cate_menu_lk">
                                办公
                            </a>
                        </li>
                        <li className="cate_menu_item" data-index = 'd'>
                            <a href="_blank" className="cate_menu_lk">
                                家居
                            </a>
                            <span className='cate_meu_line'>/</span>
                             <a href="_blank" className="cate_menu_lk">
                                家具
                            </a>
                            <span className='cate_meu_line'>/</span>
                            <a href="_blank" className="cate_menu_lk">
                                家装
                            </a>
                            <span className='cate_meu_line'>/</span>
                             <a href="_blank" className="cate_menu_lk">
                                厨具
                            </a>
                        </li>
                        <li className="cate_menu_item" data-index = 'e'>
                             <a href="_blank" className="cate_menu_lk">
                                男装
                            </a>
                            <span className='cate_meu_line'>/</span>
                             <a href="_blank" className="cate_menu_lk">
                                女装
                            </a>
                            <span className='cate_meu_line'>/</span>
                            <a href="_blank" className="cate_menu_lk">
                                童装
                            </a>
                            <span className='cate_meu_line'>/</span>
                             <a href="_blank" className="cate_menu_lk">
                                内衣
                            </a>
                        </li>
                        <li className="cate_menu_item" data-index = 'f'>
                             <a href="_blank" className="cate_menu_lk">
                                美妆个护
                            </a>
                            <span className='cate_meu_line'>/</span>
                             <a href="_blank" className="cate_menu_lk">
                                宠物
                            </a>
                        </li>
                        <li className="cate_menu_item" data-index = 'g'>
                            <a href="_blank" className="cate_menu_lk">
                                女鞋
                            </a>
                            <span className='cate_meu_line'>/</span>
                             <a href="_blank" className="cate_menu_lk">
                                箱包
                            </a>
                            <span className='cate_meu_line'>/</span>
                            <a href="_blank" className="cate_menu_lk">
                                钟表
                            </a>
                            <span className='cate_meu_line'>/</span>
                             <a href="_blank" className="cate_menu_lk">
                                珠宝
                            </a>
                        </li>
                        <li className="cate_menu_item" data-index = 'h'>
                             <a href="_blank" className="cate_menu_lk">
                                男鞋
                            </a>
                            <span className='cate_meu_line'>/</span>
                            <a href="_blank" className="cate_menu_lk">
                                运动
                            </a>
                            <span className='cate_meu_line'>/</span>
                             <a href="_blank" className="cate_menu_lk">
                                户外
                            </a>
                        </li>
                        <li className="cate_menu_item" data-index = 'i'>
                            <a href="_blank" className="cate_menu_lk">
                                汽车
                            </a>
                            <span className='cate_meu_line'>/</span>
                             <a href="_blank" className="cate_menu_lk">
                                汽车用品
                            </a>
                        </li>
                        <li className="cate_menu_item" data-index = 'j'>
                            <a href="_blank" className="cate_menu_lk">
                                母婴
                            </a>
                            <span className='cate_meu_line'>/</span>
                             <a href="_blank" className="cate_menu_lk">
                                玩具乐器
                            </a>
                        </li>
                        <li className="cate_menu_item" data-index = 'k'>
                            <a href="_blank" className="cate_menu_lk">
                                食品
                            </a>
                            <span className='cate_meu_line'>/</span>
                             <a href="_blank" className="cate_menu_lk">
                                酒类
                            </a>
                              <span className='cate_meu_line'>/</span>
                            <a href="_blank" className="cate_menu_lk">
                                生鲜
                            </a>
                            <span className='cate_meu_line'>/</span>
                             <a href="_blank" className="cate_menu_lk">
                                特产
                            </a>
                        </li>
                        <li className="cate_menu_item" data-index = 'l'>
                            <a href="_blank" className="cate_menu_lk">
                                礼品鲜花
                            </a>
                            <span className='cate_meu_line'>/</span>
                             <a href="_blank" className="cate_menu_lk">
                                农资绿植
                            </a>
                        </li>
                        <li className="cate_menu_item" data-index = 'm'>
                            <a href="_blank" className="cate_menu_lk">
                                医药保健
                            </a>
                            <span className='cate_meu_line'>/</span>
                             <a href="_blank" className="cate_menu_lk">
                                计生情趣
                            </a>
                        </li>
                        <li className="cate_menu_item" data-index = 'n'>
                            <a href="_blank" className="cate_menu_lk">
                                图书
                            </a>
                            <span className='cate_meu_line'>/</span>
                             <a href="_blank" className="cate_menu_lk">
                                音像
                            </a>
                            <a href="_blank" className="cate_menu_lk">
                                电子书
                            </a>
                        </li>
                        <li className="cate_menu_item" data-index = 'o'>
                            <a href="_blank" className="cate_menu_lk">
                                机票
                            </a>
                            <span className='cate_meu_line'>/</span>
                             <a href="_blank" className="cate_menu_lk">
                                酒店
                            </a>
                              <span className='cate_meu_line'>/</span>
                            <a href="_blank" className="cate_menu_lk">
                                旅游
                            </a>
                            <span className='cate_meu_line'>/</span>
                             <a href="_blank" className="cate_menu_lk">
                                生活
                            </a>
                        </li>
                        <li className="cate_menu_item" data-index = 'p'>
                            <a href="_blank" className="cate_menu_lk">
                                理财
                            </a>
                            <span className='cate_meu_line'>/</span>
                             <a href="_blank" className="cate_menu_lk">
                                众筹
                            </a>
                              <span className='cate_meu_line'>/</span>
                            <a href="_blank" className="cate_menu_lk">
                                白条
                            </a>
                            <span className='cate_meu_line'>/</span>
                             <a href="_blank" className="cate_menu_lk">
                                保险
                            </a>
                        </li>
                    </ul>
                </div>
                {/*  二级菜单， 默认是隐藏的  */}
                <div id='sub' className={subMenuClass}>
                    <div id='a' className='sub_content'>
                        <dl className='top'>
                             <dd>
                                 <a href='#'>家电馆<i>&gt;</i></a>
                                 <a href='#'>乡镇专卖店<i>&gt;</i></a>
                                 <a href='#'>家电服务<i>&gt;</i></a>
                                 <a href='#'>家电企业购<i>&gt;</i></a>
                                 <a href='#'>家电企业购<i>&gt;</i></a>
                             </dd>
                         </dl>
                        {/*  dl 和  dt , dd
                        
                        <dl>、<dt>、<dd>这三个html标记是一个组合，它们很很像<ul><li>这个标签组合，
                            但<dl>、<dt>、<dd>通常是用来描述一些术语定义，
                            比如附录里的词汇表，或用来显示key-value这样成对的键和值
                            dl 是外边的包围边， 然后dt 的key , dd 是value;

                            键值对

                         */}
                         <dl>
                             <dt>
                                 <a href='#'>电视<i>&gt;</i></a>
                             </dt>
                             <dd>
                                 <a href='#'>曲面电视</a>
                                 <a href='#'>超薄电视</a>
                                 <a href='#'>55英寸电视</a>
                             </dd>
                         </dl>
                    </div>
                </div>
            </div>
        );
    }
}
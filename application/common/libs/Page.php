<?php
namespace app\common\libs;
/**
 * 通用分页类
 * @version   1.0.0
 * @license   zhi6.com
 * @copyright zhi6.com
 * @Author    zhangzj
 * @DateTime  2018-08-03
 */
class Page {

    public $firstRow;           // 起始行数
    public $listRows;           // 列表每页显示行数
    public $parameter;          // 分页跳转时要带的参数
    public $totalRows;          // 总行数
    public $totalPages;         // 分页总页面数
    public $rollPage   = 11;    // 分页栏每页显示的页数
    public $lastSuffix = true;  // 最后一页是否显示总页数
    private $p         = 'p';   // 分页参数名
    private $url       = '';    // 当前链接URL
    private $nowPage   = 1;
    // 分页显示定制
    private $config    = array(
        'header'       => '<span class="rows">共 %TOTAL_ROW% 条记录</span>',
        'prev'         => '<<',
        'next'         => '>>',
        'first'        => '1...',
        'last'         => '...%TOTAL_PAGE%',
        'theme'        => '%FIRST% %UP_PAGE% %LINK_PAGE% %DOWN_PAGE% %END%',
    );

    /**
     * 架构函数
     * @param array $totalRows  总的记录数
     * @param array $listRows  每页显示记录数
     * @param array $parameter  分页跳转的参数
     */
    public function __construct($totalRows, $listRows = 20, $parameter = array()) {
        config('var_page') && $this->p = config('var_page'); //设置分页参数名称
        /* 基础设置 */
        $this->totalRows = $totalRows; //设置总记录数
        $this->listRows  = $listRows;  //设置每页显示行数
        $this->parameter = empty($parameter) ? $_GET : $parameter;
        $this->nowPage   = empty($this->parameter[$this->p]) ? 1 : intval($this->parameter[$this->p]);
        $this->nowPage   = $this->nowPage > 0 ? $this->nowPage : 1;
        $this->firstRow  = $this->listRows * ($this->nowPage - 1);
    }

    /**
     * 定制分页链接设置
     * @param string $name  设置名称
     * @param string $value 设置值
     */
    public function setConfig($name, $value) {
        if (isset($this->config[$name])) {
            $this->config[$name] = $value;
        }
    }

    /**
     * 生成链接URL
     * @param  integer $page 页码
     * @return string
     */
    private function url($page) {
        return str_replace(urlencode('[PAGE]'), $page, $this->url);
    }

    /**
     * 组装分页链接
     * @return string
     */
    public function show() {
        if (0 == $this->totalRows)
            return '';
        $request = \think\Request::instance();
        /* 生成URL */
        $this->parameter[$this->p] = '[PAGE]';
        $this->url                 = url($request->action(), $this->parameter);
        /* 计算分页信息 */
        $this->totalPages = ceil($this->totalRows / $this->listRows); //总页数
        if (!empty($this->totalPages) && $this->nowPage > $this->totalPages) {
            $this->nowPage = $this->totalPages;
        }

        /* 计算分页临时变量 */
        $now_cool_page      = $this->rollPage / 2;
        $now_cool_page_ceil = ceil($now_cool_page);
        $this->lastSuffix && $this->config['last'] = $this->totalPages;

        //上一页
        $up_row    = $this->nowPage - 1;
        $up_page   = $up_row > 0 ? '<li class="page-item page-prev"><a class="page-link" href="' . $this->url($up_row) . '">' . $this->config['prev'] . '</a></li>' : '';

        //下一页
        $down_row  = $this->nowPage + 1;
        $down_page = ($down_row <= $this->totalPages) ? '<li class="page-item page-next"><a class="page-link" href="' . $this->url($down_row) . '">' . $this->config['next'] . '</a></li>' : '';

        //第一页
        $the_first = '';
        if ($this->totalPages > $this->rollPage && ($this->nowPage - $now_cool_page) >= 1) {
            $the_first = '<li class="page-item"><a class="page-link" href="' . $this->url(1) . '">' . $this->config['first'] . '</a></li>';
        }

        //最后一页
        $the_end   = '';
        if ($this->totalPages > $this->rollPage && ($this->nowPage + $now_cool_page) < $this->totalPages) {
            $the_end   = '<li class="page-item"><a class="page-link" href="' . $this->url($this->totalPages) . '">' . $this->config['last'] . '</a></li>';
        }

        //数字连接
        $link_page = "";
        for ($i = 1; $i <= $this->rollPage; $i++) {
            if (($this->nowPage - $now_cool_page) <= 0) {
                $page = $i;
            } elseif (($this->nowPage + $now_cool_page - 1) >= $this->totalPages) {
                $page = $this->totalPages - $this->rollPage + $i;
            } else {
                $page = $this->nowPage - $now_cool_page_ceil + $i;
            }
            if ($page > 0 && $page != $this->nowPage) {

                if ($page <= $this->totalPages) {
                    $link_page .= '<li class="page-item"><a class="page-link" href="' . $this->url($page) . '">' . $page . '</a></li>';
                } else {
                    break;
                }
            } else {
                if ($page > 0 && $this->totalPages != 1) {
                    $link_page .= '<li class="page-item active"><a href="javascript:;" class="page-link">' . $page . '</a></li>';
                }
            }
        }

        //替换分页内容
        $page_str = str_replace(
                array('%HEADER%', '%NOW_PAGE%', '%UP_PAGE%', '%DOWN_PAGE%', '%FIRST%', '%LINK_PAGE%', '%END%', '%TOTAL_ROW%', '%LIST_ROW%', '%TOTAL_PAGE%'), array($this->config['header'], $this->nowPage, $up_page, $down_page, $the_first, $link_page, $the_end, $this->totalRows, $this->listRows, $this->totalPages), $this->config['theme']);
        return "{$page_str}</ul>"; //注意这里的 </ul> 前闭合标签在 header标签后面
    }

}

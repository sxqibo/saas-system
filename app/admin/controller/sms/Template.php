<?php

namespace app\admin\controller\sms;

use app\common\controller\Backend;

/**
 * 短信模板管理
 *
 */
class Template extends Backend
{
    /**
     * Template模型对象
     * @var \app\admin\model\sms\Template
     */
    protected object $model;

    protected array|string $quickSearchField = ['title', 'code'];

    protected array|string $defaultSortField = 'id,desc';

    protected array|string $preExcludeFields = ['createtime', 'updatetime'];

    public function initialize(): void
    {
        parent::initialize();
        $this->model = new \app\admin\model\sms\Template;
    }

    public function add(): void
    {
        $this->request->filter('trim,htmlspecialchars');
        parent::add();
    }

    public function edit($id = null): void
    {
        $this->request->filter('trim,htmlspecialchars');
        parent::edit($id);
    }

    /**
     * 查看
     */
    public function index(): void
    {
        // 如果是select则转发到select方法,若select未重写,其实还是继续执行index
        if ($this->request->param('select')) {
            $this->select();
        }

        list($where, $alias, $limit, $order) = $this->queryBuilder();
        $res = $this->model
            ->alias($alias)
            ->where($where)
            ->order($order)
            ->paginate($limit);

        $this->success('', [
            'list'   => $res->items(),
            'total'  => $res->total(),
            'remark' => get_route_remark(),
        ]);
    }
}

## ƽ��12����Ԫ�������
![dd](./img/bootstrap_grid_1.jpg)

�������йص����԰���
1.container
2.row
3.col-md-1

## ����ԭ��
1.������(.row)���������������.container���У��Ա�Ϊ�丳����ʵĶ��뷽ʽ���ھ�(padding)���磺
```
<div class="container">
<div class="row"></div>
</div>
```
2.����(.row)�п��������(.column)����`����֮��`���ܳ���ƽ�ֵ�������������12���磺
```
<div class="container">
<div class="row">
  <div class="col-md-4"></div>
  <div class="col-md-8"></div>
```
3.��������Ӧ����������������column��֮�ڣ�����ֻ���У�column���ſ�����Ϊ������(.row)��ֱ����Ԫ��
4.ͨ�������ھࣨpadding���Ӷ�����������֮��ļ�ࡣ
Ȼ��ͨ��Ϊ��һ�к����һ�����ø�ֵ����ࣨmargin���������ھ�(padding)��Ӱ��

**����������������12��������**
���ƶ�����һ���У������ö���Ϊ12������������򲻵��Ľ����----�������������С�

`guyroutledge`�����Ľ̳��о��ᵽ������ϵͳ��ʵ�֡���Ҫ�����ø�����λ�Ϳ�Ȱٷֱ�ʵ�ֵġ�


### ��ƫ��
![sss](./img/bootstrap_grid_column_offset.jpg)

**��ص�class**
`col-md-offset-4`

**ʵ��ԭ��**
��Ҫ��ͨ������margin-left���ðٷֱ����ﵽ���Ч���ġ�


### ������
��ʵ���Ǹı��е�����
![dd](./img/bootstrap_grid_sort.jpg)

**��ص�class**
`col-md-push-8` �� `col-md-pull-4`

**ʵ�ֵ�ԭ��**
ͨ������left��right�������ﵽЧ����

### �е�Ƕ��
��ʵ������ĳ�����������У����зֳɺü���
![ss](./img/bootstrap_grid_nest.jpg)

**��ص�class**
��

**���ʵ��**
ֱ������Ҫ��Ƕ�ĵط��������Ϳ�����





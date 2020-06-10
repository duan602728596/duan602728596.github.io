import React, { Fragment, useState } from 'react';
import { Button, Table, Tag, Typography } from 'antd';
import style from './demo.sass';
import Queue from './Queue';

const { Title, Paragraph } = Typography;
const queue = new Queue();

/* 代码演示 */
function Demo(props) {
  // 定义任务，0：未执行 1：执行中 2：执行完毕
  const [tasks, setTasks] = useState([
    { id: '1', endTime: 3, status: 0 },
    { id: '2', endTime: 9, status: 0 },
    { id: '3', endTime: 12, status: 0 },
    { id: '4', endTime: 5, status: 0 },
    { id: '5', endTime: 7, status: 0 },
    { id: '6', endTime: 1, status: 0 }
  ]);
  const [completedList, setCompletedList] = useState([]);  // 任务执行完毕的ID
  const [status, setStatus] = useState(undefined);         // 状态，false：未执行 true：执行中
  const [displayReset, setDisplayReset] = useState(false); // 显示重置按钮

  // 任务函数
  function taskFunc(task) {
    task.status = 1;

    setTasks((prevState) => [...prevState]);

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        task.status = 2;
        setTasks((prevState) => [...prevState]);

        // 获取任务完成的结果
        let newCompletedList = [];

        setCompletedList((prevState) => {
          newCompletedList = [...prevState, task.id];

          return newCompletedList;
        });

        // 当任务全部完成时，允许点击重置按钮
        if (newCompletedList.length === 6) {
          setStatus(undefined);
        }

        resolve();
      }, task.endTime * 1000);
    });
  }

  // 重置任务
  function handleResetClick(event) {
    setTasks(tasks.map((o) => {
      o.status = 0;

      return o;
    }));

    setDisplayReset(false);
    setCompletedList([]);
  }

  // 开始任务
  function handleStartClick(event) {
    setStatus(true);
    setDisplayReset(true);

    const list = tasks.map((item, index) => [taskFunc, undefined, item]);

    queue.addList(list);
    queue.run();
  }

  // 渲染运行结果
  function completedResultRender() {
    if (completedList.length === 0) {
      return <Tag>无</Tag>;
    }

    return completedList.map((o, i) => <Tag key={ o } color={ i % 2 === 0 ? 'magenta' : 'purple' }>任务{ o }</Tag>);
  }

  const columns = [
    {
      title: '任务ID',
      dataIndex: 'id',
      width: '33%'
    },
    {
      title: '执行时间（s）',
      dataIndex: 'endTime',
      width: '33%'
    },
    {
      title: '执行状态',
      dataIndex: 'status',
      width: '33%',
      render(value, record, index) {
        switch (value) {
          case 0:
            return <Tag>未执行</Tag>;

          case 1:
            return <Tag color="#f50">执行中</Tag>;

          case 2:
            return <Tag color="#87d068">执行完毕</Tag>;
        }
      }
    }
  ];

  return (
    <Fragment>
      <Title level={ 2 }>代码演示</Title>
      <Paragraph>共有6个任务，每个任务过一定时间后完成。任务执行完成后执行下一个任务，最多有3个任务在执行。</Paragraph>
      <div className={ style.tools }>
        {
          displayReset
            ? <Button type="primary" danger={ true } disabled={ status } onClick={ handleResetClick }>重置任务</Button>
            : <Button type="primary" onClick={ handleStartClick }>开始任务</Button>
        }
      </div>
      <Table size="middle"
        bordered={ true }
        columns={ columns }
        dataSource={ tasks }
        rowKey="id"
        pagination={ false }
      />
      <p className={ style.result }>
        <b>已完成任务：</b>
        { completedResultRender() }
      </p>
    </Fragment>
  );
}

export default Demo;
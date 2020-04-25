<template>
  <!-- 代码演示 -->
  <article class="articleParagraph">
    <h2 class="articleTitle2">代码演示</h2>
    <p>共有6个任务，每个任务过一定时间后完成。任务执行完成后执行下一个任务，最多有3个任务在执行。</p>
    <div class="mb-3 text-right">
      <button class="btn btn-danger"
        type="button"
        v-if="displayReset"
        :disabled="status"
        @click="handleResetClick"
      >
        重置任务
      </button>
      <button class="btn btn-primary" v-else @click="handleStartClick">开始任务</button>
    </div>
    <!-- 列表 -->
    <table class="table table-bordered">
      <thead class="thead-dark">
        <tr>
          <th>任务ID</th>
          <th>执行时间（s）</th>
          <th>执行状态</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="task in tasks" :key="task.id">
          <td>任务{{ task.id }}</td>
          <td>{{ task.endTime }}</td>
          <template>
            <td class="text-secondary" v-if="task.status === 0">未执行</td>
            <td class="text-warning" v-else-if="task.status === 1">执行中</td>
            <td class="text-success" v-else>已完成</td>
          </template>
        </tr>
      </tbody>
    </table>
    <!-- 输出结果 -->
    <div>
      <b>已完成任务：</b>
      <span>{{ result() }}</span>
    </div>
  </article>
</template>

<script>
  import { defineComponent, ref } from '@vue/composition-api';
  import Queue from './Queue';

  const queue = new Queue();

  export default defineComponent({
    name: 'Demo',
    setup() {
      // 定义任务，0：未执行 1：执行中 2：执行完毕
      const tasks = ref([
        { id: '1', endTime: 3, status: 0 },
        { id: '2', endTime: 9, status: 0 },
        { id: '3', endTime: 12, status: 0 },
        { id: '4', endTime: 5, status: 0 },
        { id: '5', endTime: 7, status: 0 },
        { id: '6', endTime: 1, status: 0 }
      ]);
      const completedList = ref([]);   // 任务执行完毕的ID
      const status = ref(false);       // 状态，false：未执行 true：执行中
      const displayReset = ref(false); // 显示重置按钮

      // 任务
      function taskFunc(task) {
        task.status = 1;

        return new Promise((resolve, reject) => {
          setTimeout(() => {
            task.status = 2;
            completedList.value.push(task.id);

            if (completedList.value.length === 6) {
              status.value = false;
            }

            resolve();
          }, task.endTime * 1000);
        });
      }

      // 输出运行结果
      function result() {
        if (completedList.value.length === 0) return '无';

        return completedList.value.map((o) => `任务${ o }`).join('，');
      }

      // 重置任务
      function handleResetClick() {
        tasks.value.forEach(function(value, index) {
          value.status = 0;
        });

        status.value = false;
        displayReset.value = false;
        completedList.value = [];
      }

      // 开始任务
      function handleStartClick() {
        status.value = true;
        displayReset.value = true;

        const list = tasks.value.map((item, index) => {
          return [taskFunc, undefined, item];
        });

        queue.addList(list);
        queue.run();
      }

      return { tasks, completedList, status, displayReset, result, handleStartClick, handleResetClick };
    }
  });
</script>

<style src="../../../components/Article/article.scss" lang="scss" scoped />
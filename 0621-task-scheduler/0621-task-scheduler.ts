function leastInterval(tasks: string[], n: number): number {
  const taskMap = new Map;
  const idleMap = {};

  tasks.forEach((task) => {
    taskMap.set(task, (taskMap.get(task) ?? 0) + 1);
  });

  let time = 0;
  let completed = 0;

  while (true) {
    if (completed === tasks.length) {
      return time;
    }

    const list = Array.from(taskMap.entries()).sort((a, b) => b[1] - a[1]);

    for (let i = 0; i < list.length; i++) {
      const task = list[i][0];
      const canProcess = (idleMap[task] === undefined || idleMap[task] < time) && taskMap.get(task) > 0;

      if (canProcess) {
        idleMap[task] = time + n;
        taskMap.set(task, taskMap.get(task) - 1);
        completed++;

        break;
      }
    }

    time++;
  }
};
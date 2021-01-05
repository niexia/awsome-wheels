async poll({ id, duration = 0, maxPollingTime = 0 }) {
  let pollingTime = 0;
  const delay = duration => new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
  const callback = (data = {}) => {
    console.log(data)
  };
  while (pollingTime <= maxPollingTime) {
    // eslint-disable-next-line
    await delay(duration);
    pollingTime++;
    try {
      // eslint-disable-next-line
      const { data = {} } = await this.getData({ id });
      callback(data);
    } catch (error) {
      // console.log(error);
    }
  }
  return;
},

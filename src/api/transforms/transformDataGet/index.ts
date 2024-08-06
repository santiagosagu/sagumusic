/* eslint-disable @typescript-eslint/no-explicit-any */

const dataTransform = (data: any, keyResults: string) => {
  return {
    metaData: data.info,
    results: data[keyResults],
  };
};

export default dataTransform;

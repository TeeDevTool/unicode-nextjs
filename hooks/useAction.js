import { useState, useEffect } from "react";
import { useRouter } from "next/router";

// database
import fakeData from "data/menus";

import { increment } from "config/static";

const useAction = () => {
  const history = useRouter();
  const [data, setData] = useState(
    fakeData.map((row) => ({
      ...row,
      added: false,
      value: 1,
      valueAdd: 0,
      handleClear: (index) =>
        setData((getData) =>
          getData.map((row, dataIndex) => {
            if (index === dataIndex) {
              return { ...row, added: false, valueAdd: 0 };
            }
            return row;
          })
        ),
      handleAdd: (index, value) =>
        setData((getData) =>
          getData.map((row, dataIndex) => {
            if (index === dataIndex) {
              return { ...row, added: true, valueAdd: value };
            }
            return row;
          })
        ),
      handleCounter: (index, type) =>
        setData((getData) =>
          getData.map((row, dataIndex) => {
            if (index === dataIndex) {
              return { ...row, value: stepper(type, row.value) };
            }
            return row;
          })
        ),
    }))
  );

  const goToPath = (path) => history.push(path);

  const isIncrement = (type) => type === increment;

  const stepper = (type, value) => (isIncrement(type) ? value + 1 : value - 1);

  const total = data.reduce((initValue, obj) => {
    if (obj.added) {
      return initValue + obj.valueAdd;
    }

    return initValue;
  }, 0);

  const totalPrice = data
    .reduce((initValue, obj) => {
      if (obj.added) {
        return initValue + obj.price * obj.valueAdd;
      }

      return initValue;
    }, 0)
    .toFixed(2);

  const showButton = total > 0;

  return [data, total, totalPrice, showButton, goToPath];
};

export default useAction;

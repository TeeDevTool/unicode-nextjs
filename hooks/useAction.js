import { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";

import { Context } from "context";

const useAction = () => {
  const history = useRouter();
  const { state } = useContext(Context);
  const { data } = state;

  const goToPath = (path) => history.push(path);

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

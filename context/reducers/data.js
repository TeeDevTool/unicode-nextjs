import { increment } from "config/static";
import { handleAdd, handleClear, handleCounter } from "config/action";

export const data = (state, action) => {
  switch (action.type) {
    case handleCounter:
      const { index: indexCounter, type } = action.payload;
      return {
        ...state,
        data: state.data.map((row, dataIndex) => {
          if (indexCounter === dataIndex) {
            return { ...row, value: stepper(type, row.value) };
          }
          return row;
        }),
      };

    case handleAdd:
      const { index: indexAdd, value: valueAdd } = action.payload;
      return {
        ...state,
        data: state.data.map((row, dataIndex) => {
          if (indexAdd === dataIndex) {
            return { ...row, added: true, valueAdd };
          }
          return row;
        }),
      };

    case handleClear:
      const { index: indexClear } = action.payload;
      return {
        ...state,
        data: state.data.map((row, dataIndex) => {
          if (indexClear === dataIndex) {
            return { ...row, added: false, valueAdd: 0 };
          }
          return row;
        }),
      };

    default:
      return state;
  }
};

const isIncrement = (type) => type === increment;

const stepper = (type, value) => (isIncrement(type) ? value + 1 : value - 1);

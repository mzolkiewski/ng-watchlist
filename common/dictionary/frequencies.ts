interface IFrequencyAmountAndUnit {
  amount: number;
  unit: string;
}

interface IFrequency {
    _id: string;
    label: string;
    amountAndUnit: IFrequencyAmountAndUnit;
}

const frequencies: IFrequency[] = [
    {
        _id: 'INSTANTLY',
        label: 'All at once',
        amountAndUnit: {
            amount: 0,
            unit: 'days',
        },
    },
    {
        _id: 'WEEKLY',
        label: 'Weekly',
        amountAndUnit: {
            amount: 1,
            unit: 'week',
        },
    },
    {
        _id: 'MONTHLY',
        label: 'Monthly',
        amountAndUnit: {
            amount: 1,
            unit: 'month',
        },
    },
];

const getFrequency = (frequencyId: string) => frequencies.find((frequency) => frequency._id === frequencyId);

const getAmountAndUnit = (frequencyId: string) => {
  return getFrequency(frequencyId).amountAndUnit;
};

export {
  IFrequency,
  IFrequencyAmountAndUnit,
  frequencies,
  getFrequency,
  getAmountAndUnit,
};
